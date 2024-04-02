package com.example.demo.repository;

import java.util.List;  

import com.example.demo.entity.Event;

public interface EventRepository{
	public List<Event> EventList();
	
	public int EventDelete(int eventcode);
}
