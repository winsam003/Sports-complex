package com.example.demo.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.domain.spaceDTO;
import com.example.demo.entity.Space;
//import com.example.demo.repository.SpaceRepositoryImpl;
import com.example.demo.repository.SpaceRepositoryImpl;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
@Transactional
public class SpaceServiceImpl implements SpaceService{
	private final SpaceRepositoryImpl repository;
	
	@Override
	public List<Space> SpaceList() {
		return repository.SpaceList();
	}

	@Override
	public int SpaceDelete(String spaceCode) {
		
		return repository.SpaceDelete(spaceCode);
	}
	
	

	
	
	
}





