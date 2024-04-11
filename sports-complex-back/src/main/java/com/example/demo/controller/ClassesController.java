package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Classes;
import com.example.demo.service.ClassesService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping("/classes")
public class ClassesController {
	ClassesService service;

//	List
	@GetMapping("/classesList")
	public List<Classes> classesList() {
		return service.classesList();
	}

//	Delete
	@GetMapping("/classesDelete")
	public String classesDelete(@RequestParam("clnum") List<Integer> clnumList) {
		try {
			for (Integer clnum : clnumList) {
				System.out.println(clnum);
				service.classesDelete(clnum);
				System.out.println(" 삭제 성공 => " + clnum);
			}
		} catch (Exception e) {
			System.out.println(" QnA Delete Excpetion => " + e.toString());
		}
		return "redirect:classes";
	}
}
