package com.example.demo.service;

import com.example.demo.domain.ClassAppDTO;

public interface ClassAppService {
	// 수강 신청
	int classAppInsert(ClassAppDTO dto);

	// 중복 확인
	boolean isDuplicateClassApp(ClassAppDTO dto);

	// clnum에 해당하는 데이터의 갯수 조회
	int getClassCount(int clnum);

	// clnum에 해당하는 수강 정원
	int getClassAppCount(int clnum);

	// cltype 업데이트
	void updateClassType(int clnum, String cltype);

	// classes의 cltype 가져오기
	String getClassType(int clnum);

	// 요청이 들어온 clnum 데이터 중 classappstate가 대기인 갯수
	int getWaitingCount(int clnum);

	// clnum에 해당하는 대기 정원
	int getClassWaitingCount(int clnum);

	// 수강 신청 삭제
	void classAppDelete(Integer classappnum);
}
