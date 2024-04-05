package com.example.demo.service;

import java.util.List;  

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Event;
import com.example.demo.repository.EventRepositoryImpl;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
@Transactional
public class EventServiceImpl implements EventService{
	private final EventRepositoryImpl repository;
	
	@Override
	public List<Event> EventList() {
		return repository.EventList();
	}
	
	@Override
	public int EventDelete(int eventcode) {
		return repository.EventDelete(eventcode);
	}
	
	@Override
	public Event EventDetail(Integer eventCode) {
		return repository.EventDetail(eventCode);
	}
	
	@Override
	public int EventInsert(Event Entity) {
		return repository.EventInsert(Entity);
	}
	
}





