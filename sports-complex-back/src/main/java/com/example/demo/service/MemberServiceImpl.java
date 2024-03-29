package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.domain.MemberDTO;
import com.example.demo.entity.Member;
import com.example.demo.repository.MemberRepositoryImpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@RequiredArgsConstructor
@Service
@Transactional
public class MemberServiceImpl implements MemberService{
	
	private final MemberRepositoryImpl repository;
	
	@Override
		public List<Member> MemberListAll() {
			// TODO Auto-generated method stub
			return repository.MemberListAll();
		}
	
	
	public int MemberJoin(MemberDTO dto) {
		// TODO Auto-generated method stub
		return repository.MemberJoin(dto);
		
	}
	
	@Override
	public int MemberDelete(String[] deleteId) {
		// TODO Auto-generated method stub
		return repository.MemberDelete(deleteId);
	}
}
