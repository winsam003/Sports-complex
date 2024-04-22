package com.example.demo.repository;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Repository;

import com.example.demo.domain.ParkAppDTO;
import com.example.demo.entity.ParkApp;
import com.example.demo.entity.Space;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;


@Log4j2
@Repository
@AllArgsConstructor
public class ParkAppRepositoryImpl implements ParkAppRepository {
	private final EntityManager em;
	
//	public ParkAppRepositoryImpl(EntityManager em) {
//		this.em = em;
//	}
	
	// 주차 신청 내역 리스트
	@Override
	public List<ParkApp> parkappList() {
		log.info("parkappList Repository 성공");
		return em.createQuery("select p from parkapp p order by parkAppNum ", ParkApp.class)
				 .getResultList();
	}
	
	// 내 주차 신청 내역 보기 . 
	
	
	// 주차 신청 
	@Override
	public int parkApplication(ParkAppDTO dto) {
		log.info("parkApplication Repository 성공");
				
		String jpql = "INSERT INTO ParkApp ( id, parkUseDate, payment, parkprice, spacecode, carnum, parkstate) "
					+ "VALUES (:id, :parkUseDate, :payment, :parkprice, :spacecode, :carnum, 'Next') " ;
		
		Query query = em.createNativeQuery(jpql);
		
//		Date useMonth = new Date(System.currentTimeMillis());
		// 사용 년-달 만들기.
		Date currentDate = new Date();
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(currentDate);
		int year = calendar.get(Calendar.YEAR);
        int month = calendar.get(Calendar.MONTH);
		String useMonth = year + "-" + month;
		
		query.setParameter("id", dto.getId());
		query.setParameter("parkUseDate", useMonth);
		query.setParameter("payment", dto.getPayment());
		query.setParameter("parkprice", dto.getParkPrice());
		query.setParameter("spacecode", dto.getSpacecode());
		query.setParameter("carnum", dto.getCarNum());
		
		return query.executeUpdate();
		
	}
	
	// 주차자리 하나 더하기. 
	@Override
	public int spaceParking(String spacecode) {
		log.info("주차장 사용하는 자리 하나 더하기.");
		
		String jpql = "UPDATE Space SET parking =+ 1 where spacecode = :spacecode";
				
		return em.createNativeQuery(jpql, Space.class)
				 .setParameter("spacecode", spacecode)
				 .executeUpdate();
	}
	
	// 매월 1일 parkState 변하게 하기. ing는 end, next는 ing로 바꾸게 하기
	@Scheduled(cron = "0 0 0 1 * ?")
	@Transactional
	public void updateParkState() {
		
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());
		int dayofMonth = calendar.get(Calendar.DAY_OF_MONTH);
		// 매월 1일 
		if(dayofMonth == 1) {
			
			// parkState가 'Next'인 경우 'ing'으로 업데이트
			Query changeNext = em.createQuery("UPDATE ParkApp p SET p.parkState = 'ing' WHERE p.parkState = 'Next'");
			int nextUpdatedCount = changeNext.executeUpdate();
			
			// parkState가 'ing'인 경우 'end'로 업데이트
			Query changeIng = em.createQuery("UPDATE ParkApp p SET p.parkState = 'end' WHERE p.parkState = 'ing'");
			int ingUpdatedCount = changeIng.executeUpdate();
			
			// space 테이블의 parking자리를 0으로 만들기.
			Query spaceParking = em.createQuery("UPDATE Space s SET s.parking = 0 WHERE spacecode = 'FAPA%'");
	        int updatedCount = spaceParking.executeUpdate();
			
		}
	}
	
}
