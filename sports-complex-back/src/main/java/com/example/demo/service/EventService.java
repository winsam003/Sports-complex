package com.example.demo.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.example.demo.entity.Event;

public interface EventService {
	
	List<Event> EventList();
	
	int EventDelete(int eventcode);
	
	Event EventDetail(Integer eventCode, String stfid);
	
	int EventInsert(Event Entity);
	
	int EventUpdate(Event Entity);
	
//	void EventCount(Event Entity); 
	
}
