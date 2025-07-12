package com.stackit.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stackit.model.Question;


public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findByUserId(Long userId);
}