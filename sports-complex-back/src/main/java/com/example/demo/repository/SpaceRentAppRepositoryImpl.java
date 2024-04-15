package com.example.demo.repository;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.domain.SpaceRentAppDTO;
import com.example.demo.entity.Member;
import com.example.demo.entity.SpaceRentApp;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;


@Log4j2
@Repository
@AllArgsConstructor
public class SpaceRentAppRepositoryImpl implements SpaceRentAppRepository {
	private final EntityManager em;
	
	@Override
	public List<SpaceRentApp> SpaceRentAppList(String searchDate) {
		log.info("SpaceRentAppList Repository 접촉 성공");
		
		return em.createQuery("SELECT a from SpaceRentApp a LEFT JOIN a.spacecode b where a.sprdate = :searchDate", SpaceRentApp.class)
				.setParameter("searchDate", searchDate)
		        .getResultList();

		}
	
	@Override
	public int speaceRentApplication(SpaceRentAppDTO dto) {
		log.info("SpaceRentAppList Repository 접촉 성공");
		
		Member member = em.find(Member.class, dto.getId());
		
		return em.createQuery("UPDATE SpaceRentApp a SET a.appphonenum = :appphonenum, a.numofpeople = :numofpeople, a.id = :id WHERE sprnum = :sprnum")
				.setParameter("appphonenum", dto.getAppPhoneNum())
				.setParameter("numofpeople", dto.getNumOfPeople())
				.setParameter("id", member)
				.setParameter("sprnum", dto.getSprnum())
				.executeUpdate();
	}
	
	@Override
	public void runDailyTasks() {
		log.info("TEST");
	}
}
