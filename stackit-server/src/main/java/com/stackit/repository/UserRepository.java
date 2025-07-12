package com.stackit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stackit.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}