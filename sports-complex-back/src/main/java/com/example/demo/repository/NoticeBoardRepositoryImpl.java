package com.example.demo.repository;

import java.util.List;
import java.util.Arrays; 

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Notice;

import lombok.extern.log4j.Log4j2;


@Repository
@Log4j2
public class NoticeBoardRepositoryImpl implements NoticeBoardRepository {
	
	
	private final EntityManager em;
	
	NoticeBoardRepositoryImpl(EntityManager em) {
		this.em = em;
	}
	
	@Override
	public List<Notice> NBoardList() {
		log.info("NBoardList Repository 접촉 성공");
		
		return em.createQuery("SELECT n FROM Notice n WHERE n.nottype = 'A'", Notice.class).getResultList();
	}
}
