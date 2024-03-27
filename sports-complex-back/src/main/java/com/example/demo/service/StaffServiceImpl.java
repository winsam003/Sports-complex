package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Staff;
import com.example.demo.repository.StaffRepositoryImpl;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StaffServiceImpl implements StaffService {

	private final StaffRepositoryImpl repository;

//	전직원 조회
	@Override
	public List<Staff> StaffList() {
		return repository.stafflist();
	}

//	직원 삭제
	@Override
	public void staffdelete(String stfid) {
		repository.staffdelete(stfid);
	}

}
