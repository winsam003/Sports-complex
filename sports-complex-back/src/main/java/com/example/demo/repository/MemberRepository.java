package com.example.demo.repository;

import java.util.List; 

import com.example.demo.domain.MemberDTO;
import com.example.demo.entity.Member;

public interface MemberRepository {
	
	public List<Member> MemberListAll();
	
	public int MemberJoin(MemberDTO dto);
	
	public int MemberDelete(String[] deleteId);

}
