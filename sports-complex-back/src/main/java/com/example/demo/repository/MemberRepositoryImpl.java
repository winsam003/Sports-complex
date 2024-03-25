package com.example.demo.repository;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Member;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Repository
@Log4j2
public class MemberRepositoryImpl implements MemberRepository{
	
	private final EntityManager em;
	
	MemberRepositoryImpl(EntityManager em) {
		this.em = em;
	}
	
	
	public List<Member> MemberListAll() {
		log.info("Repository테스트");
		return em.createQuery("select m from Member m", Member.class).getResultList();
	}

}
