package com.example.demo.repository;

import com.example.demo.domain.ClassAppDTO;

public interface ClassAppRepository {
	// 수강 신청
	int classAppInsert(ClassAppDTO dto);

	// 중복 확인
	boolean isDuplicate(ClassAppDTO dto);

	// clnum에 해당하는 데이터의 갯수
	int getClassCount(int clnum);

	// clnum에 해당하는 수강 정원
	int getClassAppCount(int clnum);

	// cltype 업데이트
	void updateClassType(int clnum, String cltype);

	// 요청된 clnum과 동일한 값을 가진 classApp의 대기 수
	int getWaitingCount(int clnum);

	// 요청된 clnum의 강의의 대기 정원
	int getClassWaitingCount(int clnum);

	// 수강 신청 삭제
	void classAppDelete(Integer classappnum);
}
