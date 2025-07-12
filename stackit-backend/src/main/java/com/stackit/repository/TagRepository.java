package com.stackit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stackit.model.Tag;

public interface TagRepository extends JpaRepository<Tag, Long> {
    Tag findByName(String name);
}