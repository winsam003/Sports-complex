package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Staff;
import com.example.demo.service.StaffService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RestController
@ResponseBody
@RequestMapping(value = "/staff")
public class StaffController {
	StaffService service;

	@GetMapping("/staffList")
	public List<Staff> stafflist() {
		return service.StaffList();
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
