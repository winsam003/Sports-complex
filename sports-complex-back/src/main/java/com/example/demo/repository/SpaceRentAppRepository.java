package com.example.demo.repository;

import java.util.List;

import com.example.demo.domain.SpaceRentAppDTO;
import com.example.demo.entity.SpaceRentApp;

public interface SpaceRentAppRepository {

	public List<SpaceRentApp> SpaceRentAppList(String searchDate);
	
	public int speaceRentApplication(SpaceRentAppDTO dto);
	
	public void runDailyTasks();
	
	public List<SpaceRentApp> SpaceRentAppAll();
	
	public List<SpaceRentApp> AppUserCheck();
	
}
