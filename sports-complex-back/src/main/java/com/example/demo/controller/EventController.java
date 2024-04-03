package com.example.demo.controller;

import java.util.List;

import javax.print.attribute.standard.Media;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Event;
import com.example.demo.service.EventServiceImpl;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RequestMapping("/event")
@RestController
public class EventController {
	EventServiceImpl service;
	
	// 이벤트 리스트
	@GetMapping(value = "/eventlist", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> eList() {
		List<Event> result = service.EventList();
		
		if(result != null && result.size() > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(result);
		}else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("출력할 이벤트가 없습니다. controller ");
		}
	}
	
	// 이벤트 삭제
	@PostMapping(value = "/eventdelete", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> eDelete(@RequestBody List<Integer> eventCodes ) {
		log.info("deleteTEST");	
		log.info(eventCodes);
		
		int deleteCount = 0;
		for( Integer eventCode : eventCodes) {
			int result = service.EventDelete(eventCode);
			if(result > 0) {
				deleteCount++;
			}
		}		
		if(deleteCount > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(deleteCount + "개 이벤트 항목 삭제");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("삭제할 이벤트 게시물이 없습니다.");
		}		
	}
	
	
	
	
}
