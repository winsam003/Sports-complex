package com.example.demo.repository;

import com.example.demo.domain.ClassAppDTO;

public interface ClassAppRepository {
	// 수강 신청
	int classAppInsert(ClassAppDTO dto);

	// 중복 확인
	boolean isDuplicate(ClassAppDTO dto);

	// 신청 완료 건수
	int getCompletedCount(int clnum);

	// 대기 건수
	int getWaitingCount(int clnum);

	// cltype 업데이트
	void updateClassType(int clnum, String cltype);

	// 수강 신청 삭제
	void classAppDelete(Integer classappnum);
}
