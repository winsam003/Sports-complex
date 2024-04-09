package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Notice;

public interface NoticeBoardService {

	public List<Notice> NBoardList();
	
	public int noticeDel(Integer[] delBoard);
	
	public int noticeSubmit(Notice entity);
	
	
	// 아래부터는 자주하는 질문 ****************************************************************
	
	public List<Notice> fnqList();
}
