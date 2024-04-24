package com.example.demo.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.ClassApp;

public interface NewRepository extends JpaRepository<ClassApp, Integer> {
	Page<ClassApp> findAllByOrderByclassappnumAtDesc(Pageable pagealbe);
}
