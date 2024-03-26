package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Space;

public interface SpaceRepository extends JpaRepository<Space, String>{
	
	
//	public List<Space> SpaceList();
	
//	public Space parkList(String spaceCode);
	
}
