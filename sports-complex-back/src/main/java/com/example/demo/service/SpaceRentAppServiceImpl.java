package com.example.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.domain.SpaceRentAppDTO;
import com.example.demo.entity.SpaceRentApp;
import com.example.demo.repository.SpaceRentAppRepositoryImpl;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@RequiredArgsConstructor
@Log4j2
@Transactional
public class SpaceRentAppServiceImpl implements SpaceRentAppService{
	private final SpaceRentAppRepositoryImpl repository;
	
	@Override
	public List<SpaceRentApp> SpaceRentAppList(String searchDate) {
		log.info("SpaceRentAppList Service 접촉 성공");
		return repository.SpaceRentAppList(searchDate);
	}
	
	@Override
	public int speaceRentApplication(SpaceRentAppDTO dto) {
		return repository.speaceRentApplication(dto);
	}
	
	@Override
	public void runDailyTasks() {
		repository.runDailyTasks();
	}
}
