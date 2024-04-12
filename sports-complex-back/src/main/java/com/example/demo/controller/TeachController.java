package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Teach;
import com.example.demo.service.TeachService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping("/teach")
public class TeachController {
	TeachService service;

//	List
	@GetMapping("/teachList")
	public List<Teach> teachList() {
		return service.teachList();
	}

//	Delete
	@GetMapping("/teachDelete")
	public String teachDelete(@RequestParam("teachnum") List<Integer> teachnumList) {
		try {
			for (Integer teachnum : teachnumList) {
				System.out.println(teachnum);
				service.teachDelete(teachnum);
				System.out.println(" 삭제 성공 => " + teachnum);
			}
		} catch (Exception e) {
			System.out.println(" teach Delete Excpetion => " + e.toString());
		}
		return "redirect:teach";
	}
}
