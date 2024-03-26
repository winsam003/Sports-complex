package com.example.demo.controller;

import java.util.List;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Space;
import com.example.demo.service.SpaceService;
import com.example.demo.service.SpaceServiceImpl;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RequestMapping(value="/space")
@RestController
public class SpaceController {
	
	SpaceServiceImpl service;
	
	@GetMapping("/spacelist")
	public List<Space> sList() {
		log.info(service.SpaceList());
		return service.SpaceList();
//		model.addAttribute("rentSpace", service.SpaceList());
	}
	
//	@GetMapping("/parklist")
//	public void pList(Model model, Space spaceCode) {
//		model.addAttribute("parkSpace", service.parkList(spaceCode));
//	}
	
}
