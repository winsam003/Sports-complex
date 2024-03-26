package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Space;
import com.example.demo.repository.SpaceRepository;
//import com.example.demo.repository.SpaceRepositoryImpl;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@RequiredArgsConstructor
@Service
public class SpaceServiceImpl implements SpaceService{
	private final SpaceRepository repository;
//	private final SpaceRepositoryImpl emrepository;
	
	@Override
	public List<Space> SpaceList() {
		log.info("ServiceTEST");
		return repository.findAll();
	}

//	@Override
//	public Space parkList(String spaceCode) {
//		
//		return emrepository.parkList(spaceCode);
//	}
	
	
	
	
}





