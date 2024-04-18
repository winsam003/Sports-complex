package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.domain.ClassAppDTO;
import com.example.demo.repository.ClassAppRepository;
import com.example.demo.repository.ClassesRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ClassAppServiceImpl implements ClassAppService {
	private final ClassAppRepository repository;
	private final ClassesRepository classesRepository;

//	수강 신청
	@Override
	public int classAppInsert(ClassAppDTO dto) {
		return repository.classAppInsert(dto);
	}

//	중복 확인
	@Override
	public boolean isDuplicateClassApp(ClassAppDTO dto) {
		// 중복이면 true를 반환
		return repository.isDuplicate(dto);
	}

	// clnum에 해당하는 데이터의 갯수 조회
	@Override
	public int getClassCount(int clnum) {
		return repository.getClassCount(clnum);
	}

	// clnum에 해당하는 수강 신청 데이터의 갯수 조회
	@Override
	public int getClassAppCount(int clnum) {
		return repository.getClassAppCount(clnum);
	}

	// cltype 업데이트
	@Override
	public void updateClassType(int clnum, String cltype) {
		repository.updateClassType(clnum, cltype);
	}

	// classes의 cltype 가져오기
	@Override
	public String getClassType(int clnum) {
		return classesRepository.getClassType(clnum);
	}

	// clnum에 해당하는 대기인 classappstate의 갯수 조회
	@Override
	public int getWaitingCount(int clnum) {
		return repository.getWaitingCount(clnum);
	}

	// clnum에 해당하는 대기인 classappstate의 갯수와 일치하는 clwating의 갯수 조회
	@Override
	public int getClassWaitingCount(int clnum) {
		return repository.getClassWaitingCount(clnum);
	}

	// 수강 신청 삭제
	@Override
	public void classAppDelete(Integer classappnum) {
		repository.classAppDelete(classappnum);
	}

}
