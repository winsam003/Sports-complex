package com.example.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Notice;
import com.example.demo.repository.NoticeBoardRepositoryImpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RequiredArgsConstructor
@Log4j2
@Service
@Transactional
public class NoticeBoardServiceImpl implements NoticeBoardService {

	private final NoticeBoardRepositoryImpl repository;
	
	@Override
	public List<Notice> NBoardList() {
		log.info("Service 접촉 성공");
		
		return repository.NBoardList();
	}
}
