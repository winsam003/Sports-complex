package com.example.demo.repository;

import java.util.List;   

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Event;

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
		
		// delete는 
		return em.createNativeQuery(jpql, Event.class)
				 .setParameter("eventcode", eventcode)
				 .executeUpdate();
	}
	
	@Override
	public Event EventDetail(Integer eventcode) {
		log.info("EventDetail Repository 성공");
		String jpql = "select e from Event e where eventcode = :eventcode";
		
		log.info("eventcode : "+ eventcode);
		
		try {			
			return em.createQuery(jpql, Event.class)
					.setParameter("eventcode", eventcode)
					.getSingleResult();
		} catch (Exception e) {
			return null;
		}
		
	}
	
	@Override
	public int EventInsert(Event dto) {
		log.info("EventInsert Repository 성공");
		String jpql = "INSERT INTO Event (eventname, eventdetail, eventfacility, eventtime, eventfor, eventtype, eventuploadfile, stfid, eventdate)"
					+ "VALUES (:eventname, :eventdetail, :eventfacility, :eventtime, :eventfor, :eventtype, :eventuploadfile, :stfid, :eventdate)";
		
		Query query = em.createNativeQuery(jpql);

		query.setParameter("eventname", dto.getEventname());
		query.setParameter("eventdetail", dto.getEventdetail());
		query.setParameter("eventfacility", dto.getEventfacility());
		query.setParameter("eventtime", dto.getEventtime());
		query.setParameter("eventfor", dto.getEventfor());
		query.setParameter("eventtype", dto.getEventtype());
		query.setParameter("eventuploadfile", dto.getEventuploadfile());
		query.setParameter("stfid", dto.getStfid());
		query.setParameter("eventdate", dto.getEventdate());
		
		return query.executeUpdate();
	}
	
	
	
}
