package com.codegym.apiangularproduct.service.user;

import com.codegym.apiangularproduct.model.Product;
import com.codegym.apiangularproduct.model.User;
import com.codegym.apiangularproduct.service.IGeneralService;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface IUserService extends IGeneralService<User>, UserDetailsService {
    User findByUsername(String username);
}
