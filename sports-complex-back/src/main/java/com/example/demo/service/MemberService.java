package com.example.demo.service;

import java.util.List;

import com.example.demo.domain.MemberDTO;
import com.example.demo.entity.Member;

public interface MemberService {
	List<Member> MemberListAll();
	
	int MemberJoin(MemberDTO dto);
}
