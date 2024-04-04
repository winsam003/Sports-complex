package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	
	// noticeList 공지사항 게시글 list
	@GetMapping(value="/noticeList", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> noticeList(){
		log.info("Contoller noticeList 접촉 성공");
		
		List<Notice> result = NoService.NBoardList();
		
		if(result != null && result.size() > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(result);
		}else {
			return ResponseEntity.status(HttpStatus.OK).body(null);			
		}
	} // noticeList 공지사항 게시글 list
	
	
	
	// noticeDel 공지사항 게시글 삭제
	@PostMapping(value="/noticeDel", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> noticeDel(@RequestBody Integer[] delBoard){
		log.info("Contoller noticeDel 접촉 성공");
		log.info("controller delBoard[0]="+delBoard[0]);
		
		
		if(NoService.noticeDel(delBoard) > 0) {
			return ResponseEntity.status(HttpStatus.OK).body("게시글 삭제가 완료되었습니다.");
		}else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);			
		}
	} // noticeDel 공지사항 게시글 삭제
}
