package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.domain.ClassesDTO;
import com.example.demo.entity.Classes;
import com.example.demo.repository.ClassesRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ClassesServiceImpl implements ClassesService {
	private final ClassesRepository repository;

	// 강의 목록
	@Override
	public List<Classes> classesList() {
		return repository.classesList();
	}

	// 강의 등록
	@Override
	public int classesInsert(ClassesDTO dto) {
		return repository.classesInsert(dto);
	}

	// 강의 삭제
	@Override
	public void classesDelete(Integer clnum) {
		repository.classesDelete(clnum);
	}

}
