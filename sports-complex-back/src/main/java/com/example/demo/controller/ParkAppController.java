package com.example.demo.controller;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.ParkAppDTO;
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
	public ResponseEntity<?> parkappList() {
		List<ParkApp> parkappList = service.parkappList();
		
		if(parkappList != null && parkappList.size() > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(parkappList);
		}else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("주차 신청이 없습니다.");			
		}
		
	}
	
	
	
	// 인서트 부터 만들기. 
	@PostMapping(value = "/parkapplication")
	public ResponseEntity<?> parkapplication(@RequestParam("ID") String id,
											 @RequestParam("parkPrice") int parkprice, 
											 @RequestParam("spacecode") String spacecode,
											 @RequestParam("carNum") String carnum,
											 @RequestParam("payment") String payment) {
		
		log.info("Controller eventinsert");
		
		ParkAppDTO dto = new ParkAppDTO();
		
		dto.setId(id);
		dto.setParkPrice(parkprice);
		dto.setSpacecode(spacecode);
		dto.setCarNum(carnum);
		dto.setPayment(payment);
		
		if(service.parkApplication(dto) > 0) {
			// 주차 신청 완료. 
			service.spaceParking(spacecode);
			return ResponseEntity.status(HttpStatus.OK).body("주차 신청 완료 하고 파킹 자리도 하나 플러스함.");

		} else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("주차 신청 실패. ");
		}
		
		
	}
									 
	
	
	
}
