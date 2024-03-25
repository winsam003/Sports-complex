package com.example.demo.controller;

import java.util.List;

import org.springframework.ui.Model;
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
		return service.selectList();
	}

//	Insert
//	@GetMapping("/classes/classesInsert")
//	public String classesInsert(Model model, Qna entity) {
//		// 요청 분석
//		String uri = "redirect:qnaList";
//
//		// Service
//		try {
//			log.info(" 신규 강좌 등록 성공 " + service.save(entity));
//			model.addAttribute("qna", service.selectList());
//		} catch (Exception e) {
//			log.info(" 신규 강좌 등록 실패 " + e.toString());
//			uri = "qna/qnaInsert";
//		}
//	}

//	Delete
	@GetMapping("/classes/classesDelete")
	public String classesDelete(@RequestParam("classCode") String classCode, Model model) {
		// 요청 분석
		String uri = "redirect:qnaList";

		// Service
		try {
			service.deleteById(classCode);
			log.info(" 강좌 삭제 성공 " + classCode);
			model.addAttribute("qna", service.selectList());
		} catch (Exception e) {
			log.info(" 강좌 삭제 실패 " + e.toString());
		}

		return uri;
	}
}
