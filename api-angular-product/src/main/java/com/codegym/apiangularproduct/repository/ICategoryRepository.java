package com.codegym.apiangularproduct.repository;

import com.codegym.apiangularproduct.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoryRepository extends JpaRepository<Category, Long> {
}
