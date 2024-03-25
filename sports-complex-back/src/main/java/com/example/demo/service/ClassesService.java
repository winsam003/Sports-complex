package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Classes;

public interface ClassesService {
	// SelectList
	List<Classes> selectList();

	// insert
	Classes save(Classes entity);

	// delete
	void deleteById(String classCode);

}
