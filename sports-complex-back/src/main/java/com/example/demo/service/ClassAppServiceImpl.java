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

	// 신청 완료 건수
	@Override
	public int getCompletedCount(int clnum) {
		return repository.getCompletedCount(clnum);
	}

	// 수강 정원
	@Override
	public int getClassesClCount(int clnum) {
		return classesRepository.getClassesClCount(clnum);
	}

	// 대기 건수
	@Override
	public int getWaitingCount(int clnum) {
		return repository.getWaitingCount(clnum);
	}

	// 대기 정원
	@Override
	public int getClassesClWaiting(int clnum) {
		return classesRepository.getClassesClWaiting(clnum);
	}

	// classes의 cltype 가져오기
	@Override
	public String getClassType(int clnum) {
		return classesRepository.getClassType(clnum);
	}

	// cltype 업데이트
	@Override
	public void updateClassType(int clnum, String cltype) {
		repository.updateClassType(clnum, cltype);
	}

	// 수강 신청 삭제
	@Override
	public void classAppDelete(Integer classappnum) {
		repository.classAppDelete(classappnum);
	}

}
