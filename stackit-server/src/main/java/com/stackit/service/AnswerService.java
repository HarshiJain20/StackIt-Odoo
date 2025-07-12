package com.stackit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackit.model.Answer;
import com.stackit.repository.AnswerRepository;

@Service
public class AnswerService {

    @Autowired
    private AnswerRepository answerRepository;

    public List<Answer> getAnswersByUserId(Long userId) {
        return answerRepository.findByUserId(userId);
    }

    public Answer save(Answer answer) {
        return answerRepository.save(answer);
    }

    public List<Answer> getAnswersByQuestionId(Long qid) {
        return answerRepository.findByQuestionId(qid);
    }

}
