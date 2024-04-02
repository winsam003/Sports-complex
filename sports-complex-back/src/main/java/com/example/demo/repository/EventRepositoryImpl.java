package com.example.demo.repository;

import java.util.List;   

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Event;
import com.example.demo.entity.Space;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Repository 
public class EventRepositoryImpl implements EventRepository {
	
	private final EntityManager em;
	
	EventRepositoryImpl(EntityManager em){
		this.em = em;
	}
	
	@Override
	public List<Event> EventList() {
		log.info("EventList Repository 성공");
		return em.createQuery("select e from Event e order by eventcode desc", Event.class).getResultList();
		
	}
	
	@Override
	public int EventDelete(int eventcode) {
		log.info("EventDelete Repository 성공");
		String jpql = "DELETE FROM Event where eventcode = :eventcode";
		
		return em.createNativeQuery(jpql, Event.class)
				 .setParameter("eventcode", eventcode)
				 .executeUpdate();
		
	}
	
	
	
}
