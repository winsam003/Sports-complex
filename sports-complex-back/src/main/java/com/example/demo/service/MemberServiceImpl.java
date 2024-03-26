package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Member;
import com.example.demo.repository.MemberRepository;
import com.example.demo.repository.MemberRepositoryImpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@RequiredArgsConstructor
@Service
public class MemberServiceImpl implements MemberService{
	
	private final MemberRepositoryImpl repository;
	
	@Override
		public List<Member> MemberListAll() {
			// TODO Auto-generated method stub
		log.info("service테스트");
			return repository.MemberListAll();
		}
}
