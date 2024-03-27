package com.example.demo.controller;

import java.io.Console; 
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.spaceDTO;
import com.example.demo.entity.Space;
import com.example.demo.service.SpaceServiceImpl;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RequestMapping("/space")
@RestController
public class SpaceController {
	
	SpaceServiceImpl service;
	
	// 리스트
	@GetMapping(value="/spacelist", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> sList() {
		List<Space> result = service.SpaceList();
//		log.info(result);
		if(result != null && result.size() > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(result);
		}else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("출력할 이용시설이 없습니다.");			
		}
	}
	
	// 삭제
	// 1번 여러개의 삭제가 안됨
	// 2번 post방식을 쓰기싫다면 delete 방식을 공부해서 시도해보는것도 좋을듯
	@PostMapping(value="/spacedelete", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> sDelete(@RequestBody spaceDTO spacecode) {
		log.info("deleteTEST");		
		log.info(spacecode);		
		
		
		int result = service.SpaceDelete(spacecode);
		
		if(result > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(result);
		}else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("삭제할 이용시설이 없습니다.");			
		}
	
	}
	
	
	
}
