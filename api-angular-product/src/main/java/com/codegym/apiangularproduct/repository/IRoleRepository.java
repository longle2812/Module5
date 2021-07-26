package com.codegym.apiangularproduct.repository;

import com.codegym.apiangularproduct.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRoleRepository extends JpaRepository<Role, Long> {

}
