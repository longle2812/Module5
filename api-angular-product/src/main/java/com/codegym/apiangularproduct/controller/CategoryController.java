package com.codegym.apiangularproduct.controller;

import com.codegym.apiangularproduct.model.Category;
import com.codegym.apiangularproduct.service.category.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/categories")
public class CategoryController {
    @Autowired
    private ICategoryService categoryService;

    @GetMapping
    public ResponseEntity<Iterable<Category>> getCatogoryList() {
        return new ResponseEntity<>(categoryService.findAll(), HttpStatus.OK);
    }

}
