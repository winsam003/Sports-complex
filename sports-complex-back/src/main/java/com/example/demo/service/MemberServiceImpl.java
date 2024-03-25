package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Member;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@RequiredArgsConstructor
@Service
public class MemberServiceImpl implements MemberService{
	
	private final Repository repository;
	
	@Override
		public List<Member> MemberListAll() {
			// TODO Auto-generated method stub
			return MemberListAll();
		}
}
