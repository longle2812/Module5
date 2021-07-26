package com.codegym.apiangularproduct.repository;

import com.codegym.apiangularproduct.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface IUserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
