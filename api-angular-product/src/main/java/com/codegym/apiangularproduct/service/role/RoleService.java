package com.codegym.apiangularproduct.service.role;

import com.codegym.apiangularproduct.model.Role;
import com.codegym.apiangularproduct.model.User;
import com.codegym.apiangularproduct.model.UserPrincipal;
import com.codegym.apiangularproduct.repository.IRoleRepository;
import com.codegym.apiangularproduct.repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService implements IRoleService {
    @Autowired
    private IRoleRepository roleRepository;

    @Override
    public Iterable<Role> findAll() {
        return roleRepository.findAll();
    }

    @Override
    public Optional<Role> findById(Long id) {
        return roleRepository.findById(id);
    }



    @Override
    public Role save(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public void remove(Long id) {
        roleRepository.deleteById(id);
    }
}
