package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Notice;

public interface NoticeBoardService {

	public List<Notice> NBoardList();
	
	public int noticeDel(Integer[] delBoard);
}