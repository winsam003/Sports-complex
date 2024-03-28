package com.example.demo.controller;

import java.util.List;


import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.MemberDTO;
import com.example.demo.entity.Member;

import com.example.demo.service.MemberServiceImpl;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;


@RestController
@RequestMapping("/member")
@Log4j2
@AllArgsConstructor
public class MemberContoller {
	MemberServiceImpl service;
	PasswordEncoder passwordEncoder;
	
	
	// ** Member List
	@GetMapping(value="/memberList", produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> mList() {
		List<Member> result = service.MemberListAll();
		if(result != null && result.size() >0) {
			return ResponseEntity.status(HttpStatus.OK).body(result);
		}else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("출력 할 회원정보가 없습니다.");			
		}
	} // mList
	
	
	
	@PostMapping(value="/mjoin", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> mJoin(@RequestBody MemberDTO dto){
		
		dto.setPassword(passwordEncoder.encode(dto.getPassword()));
		
		if(service.MemberJoin(dto) > 0) {
			return ResponseEntity.status(HttpStatus.OK).body("회원가입에 성공하였습니다. 로그인 창으로 이동합니다.");
		}else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("회원가입에 실패하였습니다.");			
		}
		
		
	} // mJoin
	
	@PostMapping(value="mdelete", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> mdelete(@RequestBody String[] deleteId){
		
		if(service.MemberDelete(deleteId)>0) {
			return ResponseEntity.status(HttpStatus.OK).body("해당 유저를 삭제하였습니다.");
		}else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("삭제에 실패하였습니다.");			
		}		
	}
	
}
