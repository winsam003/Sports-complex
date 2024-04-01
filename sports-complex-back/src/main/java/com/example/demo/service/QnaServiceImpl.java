package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.domain.QnaDTO;
import com.example.demo.entity.Qna;
import com.example.demo.repository.QnaRepositoryImpl;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QnaServiceImpl implements QnaService {

	private final QnaRepositoryImpl repository;

//	문의 게시글 조회
	@Override
	public List<Qna> qnalist() {
		return repository.qnalist();
	}

//	문의 게시글 등록
	@Override
	public int qnainsert(QnaDTO dto) {
		return repository.qnainsert(dto);
	}

//	문의 게시글 삭제
	@Override
	public void qnadelete(String qanum) {
		repository.qnadelete(qanum);
	}

}
