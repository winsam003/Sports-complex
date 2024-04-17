package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.SpaceRentAppDTO;
import com.example.demo.entity.SpaceRentApp;
import com.example.demo.service.SpaceRentAppServiceImpl;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping("/spaceRentApp")
@EnableScheduling
public class SpaceRentAppController {
	SpaceRentAppServiceImpl service;
	
	@PostMapping(value="/spaceRentAppAll", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> SpaceRentAppAll(){
		log.info("SpaceRentAppAll Contoller 접촉 성공");
		
		List<SpaceRentApp> result = service.SpaceRentAppAll();
		
		if(result != null && result.size() > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(result);
		}else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);
		}
	}
	
	// 리스트
	@PostMapping(value="/spaceRentApplist", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> SpaceRentAppList(@RequestBody SpaceRentAppDTO dto) {
		log.info("SpaceRentAppList Contoller 접촉 성공");
		
		String searchDate = dto.getSprDate();
		List<SpaceRentApp> result = service.SpaceRentAppList(searchDate);
		
		if(result != null && result.size() > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(result);
		}else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("출력할 이용시설이 없습니다.");			
		}
	} // 리스트
	 
	
	
	// 대관신청
	@PostMapping(value="/spaceRentApplication")
	public ResponseEntity<?> spaceRentApplication(@RequestBody SpaceRentAppDTO dto){
		log.info("spaceRentApplication Contoller 접촉 성공");
		
		if(service.speaceRentApplication(dto) > 0) {
			return ResponseEntity.status(HttpStatus.OK).body("대관 신청에 성공하였습니다.");
		}else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(null);			
		}
	} // 대관신청
	
	@Scheduled(cron = "0 0 10 * * *")
	public void runDailyTasks() {
		log.info("runDailyTasks Contoller 매일 10시 자동 insert 성공");
		
		service.runDailyTasks();
	}
}
