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
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.ParkAppDTO;
import com.example.demo.entity.Member;
import com.example.demo.entity.ParkApp;
import com.example.demo.service.ParkAppServiceImpl;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping("/parkapp")
public class ParkAppController {
	ParkAppServiceImpl service;
	
	// 관리자가 보는 리스트
	@GetMapping(value = "/parkapplist", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> parkappList() {
		List<ParkApp> parkappList = service.parkappList();
		
		if(parkappList != null && parkappList.size() > 0) {
			log.info(parkappList);
			return ResponseEntity.status(HttpStatus.OK).body(parkappList);
		}else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("주차 신청이 없습니다.");			
		}
	}
	
	@PostMapping(value = "/myparkapp")
	public ResponseEntity<?> myParkApp(@RequestBody ParkAppDTO dto) {
		String id = dto.getId();
		log.info("내 주차 신청 : id : " + id);
		
		ParkApp result = service.myParkApp(id);
		if(result != null) {
			log.info("result : " + result);
			return ResponseEntity.status(HttpStatus.OK).body(result);
		}else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("내 주차 신청 불러오기 실패. 없음. ");
		}		
	}
	
	
	// 주차 신청. 
	@PostMapping(value = "/parkapplication")		
	public ResponseEntity<?> parkapplication(@RequestBody ParkAppDTO dto ){
		log.info("Controller eventinsert");
		
		log.info("dto : " + dto);
		String spacecode = dto.getSpacecode();
				
		if(service.parkApplication(dto) > 0) {
			// 주차 신청 완료. 
			service.spaceParking(spacecode);
			return ResponseEntity.status(HttpStatus.OK).body("주차 신청 완료 하고 파킹 자리도 하나 플러스함.");

		} else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("주차 신청 실패. ");
		}
		
		
	}
									 
	
	
	
}
