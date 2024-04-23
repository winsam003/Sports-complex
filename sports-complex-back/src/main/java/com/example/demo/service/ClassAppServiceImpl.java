package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.domain.ClassAppDTO;
import com.example.demo.entity.ClassApp;
import com.example.demo.repository.ClassAppRepository;
import com.example.demo.repository.ClassesRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@RequiredArgsConstructor
@Log4j2
public class ClassAppServiceImpl implements ClassAppService {
	private final ClassAppRepository repository;
	private final ClassesRepository classesRepository;

	@Override
	public List<ClassApp> classAppList() {
		return repository.classAppList();
	}

	// 수강 신청
	@Override
	public int classAppInsert(ClassAppDTO dto) {
		return repository.classAppInsert(dto);
	}

	// 중복 확인
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

	// 수강 신청 취소
	@Override
	public void classAppCancel(Integer classappnum) {
		repository.classAppCancel(classappnum);
	}

	// 수강 신청 삭제
	@Override
	public void classAppDelete(Integer classappnum) {
		repository.classAppDelete(classappnum);
	}

	// 해당 수강 신청 정보
	@Override
	public ClassApp getClassAppByNum(int classappnum) {
		return repository.getClassAppByNum(classappnum);
	}

	// 대기 순번이 가장 빠른 경우 신청 완료로 변경
	@Override
	public void updateEarliestWaitingToCompleted(int clnum) {
		repository.updateEarliestWaitingToCompleted(clnum);
	}

	// 수강 신청 내역
	@Override
	public List<ClassApp> myClassAppHistory(String id) {
		return repository.myClassAppHistory(id);
	}

}
