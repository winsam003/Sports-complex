package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import javax.print.attribute.standard.Media;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	} //eList
	
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
	} //eDelete
	
	// 이벤트 디테일
	@GetMapping(value = "/eventdetail", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> eDetail(@RequestParam Integer eventcode){

//		Integer eventCode = requestBody.get("eventCode");
		Event result = service.EventDetail(eventcode);
		
		if(result != null) {
			log.info("eventcount : "+ result.getEventcount());
			result.setEventcount(result.getEventcount() + 1);
			// 자 기억해. 여기에 업데이트. 해야됨. 그래야 count 없데이트 됨. 
			return ResponseEntity.status(HttpStatus.OK).body(result);
		} else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("디테일이 없습니다.");
		}
		
	} // eDetail
	
	// 이벤트 등록
	@PostMapping(value = "/eventinsert", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> eInsert(@RequestBody Event dto){
		
		if(service.EventInsert(dto) > 0) {
			return ResponseEntity.status(HttpStatus.OK).body("이벤트 등록 완료. 목록으로 이동");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("이벤트 등록 실패");
		}
		
	} // eInsert
	

	
	
}





