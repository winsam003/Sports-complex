package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Notice;
import com.example.demo.service.NoticeBoardServiceImpl;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@Log4j2
@AllArgsConstructor
@RequestMapping("/notice")
public class NoticeBoardContoller {
	NoticeBoardServiceImpl NoService;
	
	
	@GetMapping(value="/noticeList", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> noticeList(){
		
		log.info("Contoller 접촉 성공");
		
		List<Notice> result = NoService.NBoardList();
		
		if(result != null && result.size() > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(result);
		}else {
			return ResponseEntity.status(HttpStatus.OK).body(null);			
		}
	}
}
