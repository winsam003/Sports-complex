package com.example.demo.repository;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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
		log.info("runDailyTasks Repository 매일 10시 자동 insert 성공");
		
        // 현재 날짜 가져오기
        LocalDate currentDate = LocalDate.now().plusDays(3);
        
        // 원하는 형식의 포맷터 설정
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        
        // 현재 날짜를 원하는 형식으로 변환하여 출력
        String formattedDate = currentDate.format(formatter);
		
		em.createQuery("INSERT INTO spaceRentApp (spaceCode, spRDate, spRState, payment) VALUES " +
						"('FABK1C',"+formattedDate+"' 06:00:00', '10000', 0), "+
						"('FABK2C',"+formattedDate+"' 06:00:00', '10000', 0), "+
						"('FAFT1C',"+formattedDate+"' 06:00:00', '10000', 0), "+
						"('FAFT2C',"+formattedDate+"' 06:00:00', '10000', 0), "+
						"('FATE1C',"+formattedDate+"' 06:00:00', '10000', 0), "+
						"('FATE2C',"+formattedDate+"' 06:00:00', '10000', 0), "+
						"('FABK1C',"+formattedDate+"' 06:00:00', '10000', 0), "+
						"('FABK2C',"+formattedDate+"' 06:00:00', '10000', 0), "+
						"('FAFT1C',"+formattedDate+"' 06:00:00', '10000', 0), "+
						"('FAFT2C',"+formattedDate+"' 06:00:00', '10000', 0), "+
						"('FABK1C',"+formattedDate+"' 09:00:00', '10000', 0), "+
						"('FABK2C',"+formattedDate+"' 09:00:00', '10000', 0), "+
						"('FAFT1C',"+formattedDate+"' 09:00:00', '10000', 0), "+
						"('FAFT2C',"+formattedDate+"' 09:00:00', '10000', 0), "+
						"('FATE1C',"+formattedDate+"' 09:00:00', '10000', 0), "+
						"('FATE2C',"+formattedDate+"' 09:00:00', '10000', 0), "+
						"('FABK1C',"+formattedDate+"' 09:00:00', '10000', 0), "+
						"('FABK2C',"+formattedDate+"' 09:00:00', '10000', 0), "+
						"('FAFT1C',"+formattedDate+"' 09:00:00', '10000', 0), "+
						"('FAFT2C',"+formattedDate+"' 09:00:00', '10000', 0), "+
						"('FABK1C',"+formattedDate+"' 12:00:00', '10000', 0), "+
						"('FABK2C',"+formattedDate+"' 12:00:00', '10000', 0), "+
						"('FAFT1C',"+formattedDate+"' 12:00:00', '10000', 0), "+
						"('FAFT2C',"+formattedDate+"' 12:00:00', '10000', 0), "+
						"('FATE1C',"+formattedDate+"' 12:00:00', '10000', 0), "+
						"('FATE2C',"+formattedDate+"' 12:00:00', '10000', 0), "+
						"('FABK1C',"+formattedDate+"' 12:00:00', '10000', 0), "+
						"('FABK2C',"+formattedDate+"' 12:00:00', '10000', 0), "+
						"('FAFT1C',"+formattedDate+"' 12:00:00', '10000', 0), "+
						"('FAFT2C',"+formattedDate+"' 12:00:00', '10000', 0), "+
						"('FABK1C',"+formattedDate+"' 15:00:00', '10000', 0), "+
						"('FABK2C',"+formattedDate+"' 15:00:00', '10000', 0), "+
						"('FAFT1C',"+formattedDate+"' 15:00:00', '10000', 0), "+
						"('FAFT2C',"+formattedDate+"' 15:00:00', '10000', 0), "+
						"('FATE1C',"+formattedDate+"' 15:00:00', '10000', 0), "+
						"('FATE2C',"+formattedDate+"' 15:00:00', '10000', 0), "+
						"('FABK1C',"+formattedDate+"' 15:00:00', '10000', 0), "+
						"('FABK2C',"+formattedDate+"' 15:00:00', '10000', 0), "+
						"('FAFT1C',"+formattedDate+"' 15:00:00', '10000', 0), "+
						"('FAFT2C',"+formattedDate+"' 15:00:00', '10000', 0), "+
						"('FABK1C',"+formattedDate+"' 18:00:00', '10000', 0), "+
						"('FABK2C',"+formattedDate+"' 18:00:00', '10000', 0), "+
						"('FAFT1C',"+formattedDate+"' 18:00:00', '10000', 0), "+
						"('FAFT2C',"+formattedDate+"' 18:00:00', '10000', 0), "+
						"('FATE1C',"+formattedDate+"' 18:00:00', '10000', 0), "+
						"('FATE2C',"+formattedDate+"' 18:00:00', '10000', 0), "+
						"('FABK1C',"+formattedDate+"' 18:00:00', '10000', 0), "+
						"('FABK2C',"+formattedDate+"' 18:00:00', '10000', 0), "+
						"('FAFT1C',"+formattedDate+"' 18:00:00', '10000', 0), "+
						"('FAFT2C',"+formattedDate+"' 18:00:00', '10000', 0), ");
	}
}
