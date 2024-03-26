package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Classes;
import com.example.demo.repository.ClassesRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ClassesServiceImpl implements ClassesService {
	private final ClassesRepository repository;

//	 SelectList
	@Override
	public List<Classes> selectList() {
		return repository.findAll();
	}

//	 insert
	@Override
	public Classes save(Classes entity) {
		return repository.save(entity);
	}

//	 delete
	@Override
	public void deleteById(String classCode) {
		repository.deleteById(classCode);
	}

}
