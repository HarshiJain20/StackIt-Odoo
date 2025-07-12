package com.stackit.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stackit.model.Vote;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    List<Vote> findByAnswerId(Long answerId);
}