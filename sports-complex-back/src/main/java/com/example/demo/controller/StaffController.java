package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.StaffDTO;
import com.example.demo.entity.Staff;
import com.example.demo.service.StaffService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping(value = "/staff")
public class StaffController {
	StaffService service;
	PasswordEncoder passwordEncoder;

	@GetMapping("/staffList")
	public List<Staff> stafflist() {
		return service.StaffList();
	}

	@PostMapping("/staffInsert")
	public ResponseEntity<?> staffinsert(@RequestBody StaffDTO dto) {
		dto.setStfpassword(passwordEncoder.encode(dto.getStfpassword()));
		if (service.staffinsert(dto) > 0) {
			return ResponseEntity.status(HttpStatus.OK).body("직원 등록에 성공하셨습니다.");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("직원 등록에 실패하였습니다.");
		}
	}

	@GetMapping("/staffDelete")
	public String staffDelete(@RequestParam("stfid") List<String> stfidList) {
		try {
			for (String stfid : stfidList) {
				System.out.println(stfid);
				service.staffdelete(stfid);
				System.out.println(" 삭제 성공 => " + stfid);
			}
		} catch (Exception e) {
			System.out.println(" Delete Excpetion => " + e.toString());
		}
		return "redirect:staff";
	}

}
