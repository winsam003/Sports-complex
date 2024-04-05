package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Event;

public interface EventService {
	
	List<Event> EventList();
	
	int EventDelete(int eventcode);
	
	Event EventDetail(Integer eventCode);
	
	int EventInsert(Event dto);
	
}
