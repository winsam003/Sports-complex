package com.example.demo.repository;

import java.util.Date;
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
	public int EventInsert(Event Entity) {
		log.info("EventInsert Repository 성공");	
		
		String jpql = "INSERT INTO Event (eventname, eventdetail, eventfacility, eventtime, eventfor, eventtype, eventuploadfile, stfid, eventdate, eventcount)"
					+ "VALUES (:eventname, :eventdetail, :eventfacility, :eventtime, :eventfor, :eventtype, :eventuploadfile, :stfid, :eventdate, 0)";
		
		Query query = em.createNativeQuery(jpql);

		query.setParameter("eventname", Entity.getEventname());
		query.setParameter("eventdetail", Entity.getEventdetail());
		query.setParameter("eventfacility", Entity.getEventfacility());
		query.setParameter("eventtime", Entity.getEventtime());
		query.setParameter("eventfor", Entity.getEventfor());
		query.setParameter("eventtype", Entity.getEventtype());
		query.setParameter("eventuploadfile", Entity.getEventuploadfile());
		query.setParameter("stfid", Entity.getStfid());
		query.setParameter("eventdate", new Date(System.currentTimeMillis()));
		
		return query.executeUpdate();
	}
	
	@Override
	public int EventUpdate(Event Entity) {
		
		log.info("EventUpdate Repository 성공");	
		
		String jpql = "UPDATE Event "
					+ "SET eventname = :eventname, "
					+ "	   eventdetail = :eventdetail, "
					+ "	   eventfacility = :eventfacility, "
					+ "	   eventtime = :eventtime, "
					+ "	   eventfor = :eventfor, "
					+ "	   eventtype = :eventtype, "
					+ "	   eventuploadfile = :eventuploadfile, "
					+ "	   stfid = concat(stfid, ', 수정: :stfid' "
					+ "WHERE eventcode = :eventcode ";
		
		Query query = em.createNativeQuery(jpql);

		query.setParameter("eventname", Entity.getEventname());
		query.setParameter("eventdetail", Entity.getEventdetail());
		query.setParameter("eventfacility", Entity.getEventfacility());
		query.setParameter("eventtime", Entity.getEventtime());
		query.setParameter("eventfor", Entity.getEventfor());
		query.setParameter("eventtype", Entity.getEventtype());
		query.setParameter("eventuploadfile", Entity.getEventuploadfile());
		query.setParameter("stfid", Entity.getStfid());
		
		query.setParameter("eventcode", Entity.getEventcode());
		
		return query.executeUpdate();
		
		
	}
	
	
	
}
