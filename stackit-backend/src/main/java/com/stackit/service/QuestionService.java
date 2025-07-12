package com.stackit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackit.model.Question;
import com.stackit.repository.QuestionRepository;

@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;

    public Question postQuestion(Question q) {
        return questionRepository.save(q);
    }

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    public Question getById(Long id) {
        return questionRepository.findById(id).orElse(null);
    }

    public List<Question> getByUserId(Long userId) {
        return questionRepository.findByUserId(userId);
    }
}