package com.example.demo.service;

import java.util.List;

import com.example.demo.domain.StaffDTO;
import com.example.demo.entity.Staff;

public interface StaffService {
//	전직원 조회
	List<Staff> StaffList();

//	직원 등록
	int staffinsert(StaffDTO dto);

//	직원 삭제
	void staffdelete(String stfid);
}
