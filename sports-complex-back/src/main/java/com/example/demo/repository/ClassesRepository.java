package com.example.demo.repository;

import java.util.List;

import com.example.demo.domain.ClassesDTO;
import com.example.demo.entity.Classes;

public interface ClassesRepository {
	// 강의 목록
	List<Classes> classesList();

	// 강의 등록
	int classesInsert(ClassesDTO dto);

	// 강의 삭제
	void classesDelete(Integer clnum);

}
