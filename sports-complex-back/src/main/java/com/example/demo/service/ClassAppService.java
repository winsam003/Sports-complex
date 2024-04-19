package com.example.demo.service;

import com.example.demo.domain.ClassAppDTO;

public interface ClassAppService {
	// 수강 신청
	int classAppInsert(ClassAppDTO dto);

	// 중복 확인
	boolean isDuplicateClassApp(ClassAppDTO dto);

	// 신청 완료 건수
	int getCompletedCount(int clnum);

	// 수강 정원
	int getClassesClCount(int clnum);

	// 대기 건수
	int getWaitingCount(int clnum);

	// 대기 정원
	int getClassesClWaiting(int clnum);

	// classes의 cltype 가져오기
	String getClassType(int clnum);

	// cltype 업데이트
	void updateClassType(int clnum, String cltype);

	// 수강 신청 삭제
	void classAppDelete(Integer classappnum);
}
