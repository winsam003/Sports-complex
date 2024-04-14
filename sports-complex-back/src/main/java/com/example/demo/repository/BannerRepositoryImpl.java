package com.example.demo.repository;

import java.util.List;   

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import com.example.demo.entity.Banner;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Repository 
public class BannerRepositoryImpl implements BannerRepository {
	
	private final EntityManager em;
	
	BannerRepositoryImpl(EntityManager em){
		this.em = em;
	}
	
	@Override
	public List<Banner> BannerList() {
		return em.createQuery("select b from Banner b ", Banner.class).getResultList();
		
//		return em.createQuery("SELECT b.bannerNum, b.eventcode, e.eventname, b.bannerImage "
//				+ "FROM Banner b "
//				+ "INNER JOIN Event e "
//				+ "ON b.eventNum = e.eventcode "
//				+ "order by bannerNum", Banner.class) 
//				.getResultList();
		
	}
	
	@Override
	public int BannerDelete(Integer bannernum) {
		
		log.info("EventDelete Repository 성공");
		String jpql = "DELETE FROM Banner where bannernum = :bannernum";
		
		return em.createNativeQuery(jpql, Banner.class)
				 .setParameter("bannernum", bannernum)
				 .executeUpdate();
	}
	
	@Override
	public int BannerInsert(Banner entity) {
		
		log.info("BannerInsert Repository 성공");
		String jpql = "INSERT INTO Banner (bannernum, eventcode, bannerimage) "
					+ "VALUES (:bannernum, :eventcode, :bannerimage)";
		
		Query query = em.createNativeQuery(jpql);
		
		query.setParameter("bannernum", entity.getBannernum());
		query.setParameter("eventcode", entity.getEvent());
		query.setParameter("bannerimage", entity.getBannerimage());
		
		return query.executeUpdate();
	}
	
	
	
}
