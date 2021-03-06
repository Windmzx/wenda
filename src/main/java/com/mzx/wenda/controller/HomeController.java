package com.mzx.wenda.controller;

import com.mzx.wenda.model.*;
import com.mzx.wenda.service.CommentService;
import com.mzx.wenda.service.FollowService;
import com.mzx.wenda.service.QuestionService;
import com.mzx.wenda.service.UserService;
import com.mzx.wenda.util.JedisAdapter;
import com.mzx.wenda.util.SystemLog;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.util.HtmlUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by mzx on 4/30/2017.
 */
@Slf4j
@Controller
public class HomeController {

    private String hotkey = "hoturl";

    @Autowired
    FollowService followService;
    @Autowired
    QuestionService questionService;

    @Autowired
    UserService userService;

    @Autowired
    CommentService commentService;
    @Autowired
    HostHolder hostHolder;

    @Autowired
    JedisAdapter jedisAdapter;

    @SystemLog(envent = "req")
    @RequestMapping(path = {"/", "/index"}, method = {RequestMethod.GET})
    public String index(Model model) {
        model.addAttribute("vos", getQuestions(0, 0, 10));
        model.addAttribute("hotvos", getHotQuestions(0));
        return "index";
    }

    @RequestMapping(path = {"/user/{userId}"}, method = {RequestMethod.GET})
    public String userIndex(Model model, @PathVariable("userId") int userId) {
        model.addAttribute("vos", getQuestions(userId, 0, 10));
        return "index";
    }


    private List<ViewObject> getQuestions(int userId, int offset, int limit) {
        List<Question> list = questionService.getLastQuestion(userId, offset, limit);
        List<ViewObject> vos = new ArrayList<>();
        int uid = 0;
        if (hostHolder != null && hostHolder.getUser() != null)
            uid = hostHolder.getUser().getId();


        for (Question question : list) {
            ViewObject viewObject = new ViewObject();

            long followerCount = followService.getFollowerCount(EntityType.ENTITY_QUESTION, question.getId());
            boolean isFoller = followService.isFollower(uid, EntityType.ENTITY_QUESTION, question.getId());
            int commentCount = commentService.getCommentCount(question.getId(), EntityType.ENTITY_QUESTION);
            User user = userService.getUserById(question.getUserId());
            String content = question.getContent();
            question.setTitle(HtmlUtils.htmlEscape(question.getTitle()));
            question.setContent(content.substring(0, content.length() > 100 ? 100 : content.length()));
            viewObject.set("user", user);
            viewObject.set("followerCount", followerCount);
            viewObject.set("question", question);
            viewObject.set("isFollower", isFoller);
            viewObject.set("commentCount", commentCount);
            vos.add(viewObject);
        }

        return vos;
    }

    private List<ViewObject> getHotQuestions(int userId) {
        List<ViewObject> vos = new ArrayList<>();
        List<Integer> hoturlid = new ArrayList<>();
        String hotUrls = jedisAdapter.get(hotkey);
        try {
//            hotUrls = "/question/1699#-#/question/1700#-#";
            String[] urls = hotUrls.split("#-#");

            for (String url : urls) {
                if (url.contains("/question")) {
                    hoturlid.add(Integer.parseInt(url.split("/")[2]));
                }
            }

            List<Question> hotquestions = new ArrayList<>();
            for (Integer integer : hoturlid) {
                hotquestions.add(questionService.getQuestion(integer));
            }
            for (Question question : hotquestions) {
                ViewObject viewObject = new ViewObject();

                long followerCount = followService.getFollowerCount(EntityType.ENTITY_QUESTION, question.getId());
                boolean isFoller = followService.isFollower(userId, EntityType.ENTITY_QUESTION, question.getId());
                int commentCount = commentService.getCommentCount(question.getId(), EntityType.ENTITY_QUESTION);
                User user = userService.getUserById(question.getUserId());
                String content = question.getContent();
                question.setTitle(HtmlUtils.htmlEscape(question.getTitle()));
                question.setContent(content.substring(0, content.length() > 100 ? 100 : content.length()));
                viewObject.set("user", user);
                viewObject.set("followerCount", followerCount);
                viewObject.set("question", question);
                viewObject.set("isFollower", isFoller);
                viewObject.set("commentCount", commentCount);
                vos.add(viewObject);
            }
        } catch (Exception e) {
            log.info("hot que get error");
        }
        return vos;
    }
}
