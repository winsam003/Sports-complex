package com.example.demo.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

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
import org.springframework.web.multipart.MultipartFile;
import java.text.ParseException;

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
	NoticeBoardServiceImpl service;
	
	// noticeList 공지사항 게시글 list
	@GetMapping(value="/noticeList", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> noticeList(){
		log.info("Contoller noticeList 접촉 성공");
		
		List<Notice> result = service.NBoardList();
		
		if(result != null && result.size() > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(result);
		}else {
			return ResponseEntity.status(HttpStatus.OK).body(null);			
		}
	} // noticeList 공지사항 게시글 list
	
	
	
	// noticeDel 공지사항 게시글 삭제
	@PostMapping(value="/noticeDel")
	public ResponseEntity<?> noticeDel(@RequestBody Integer[] delBoard){
		log.info("Contoller noticeDel 접촉 성공");
		
		if(service.noticeDel(delBoard) > 0) {
			return ResponseEntity.status(HttpStatus.OK).body("게시글 삭제가 완료되었습니다.");
		}else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);			
		}
	} // noticeDel 공지사항 게시글 삭제
	
	
	
	private Date parseDate(String dateString) {
	    try {
	        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
	        return dateFormat.parse(dateString);
	    } catch (ParseException e) {
	        // 날짜 형식이 잘못된 경우 처리
	        log.error("Failed to parse date: " + dateString, e);
	        return null; // 또는 적절한 오류 처리
	    }
	}
	
	
	
	// notic1eSubmit 공지사항 등록
	@PostMapping(value="/noticeSubmit")
	public ResponseEntity<?> noticeSubmit( @RequestParam("file") MultipartFile file,
	                                       @RequestParam("stfid") String stfid,
	                                       @RequestParam("quest") String quest,
	                                       @RequestParam("nottitle") String nottitle,
	                                       @RequestParam("notdetail") String notdetail,
	                                       @RequestParam("notdate") String notdate,
	                                       @RequestParam("notcount") Integer notcount,
										   @RequestParam("nottype") String nottype){
	    
		log.info("Contoller notic1eSubmit 접촉 성공");
		
		Notice entity = new Notice();
		
		entity.setNottitle(nottitle);
		entity.setQuest(quest);
		entity.setNotdate(parseDate(notdate));
		entity.setNotuploadfile(file.getOriginalFilename());
		entity.setNotdetail(notdetail);
		entity.setNottype(nottype);
		entity.setStfid(stfid);
		entity.setNotcount(notcount);
		
		
//		String realPath = servletContext.getRealPath("/");
		
//		log.info(realPath);
		
		
		
		if(service.noticeSubmit(entity)>0) {
			return ResponseEntity.status(HttpStatus.OK).body("공지사항 등록에 성공하였습니다.");						
		}else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);			
		}
	 }// notic1eSubmit 공지사항 등록
}
