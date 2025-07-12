package com.stackit.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stackit.model.Answer;


public interface AnswerRepository extends JpaRepository<Answer, Long> {
    List<Answer> findByQuestionId(Long questionId);
    List<Answer> findByUserId(Long userId);
}
