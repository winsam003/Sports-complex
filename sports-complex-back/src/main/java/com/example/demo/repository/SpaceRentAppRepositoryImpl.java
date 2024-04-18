package com.example.demo.repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
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
	
	
	// 대관 신청 시 해당 날짜의 신청가능 여부 조회 
	@Override
	public List<SpaceRentApp> SpaceRentAppList(String searchDate) {
		log.info("SpaceRentAppList Repository 접촉 성공");
		
		return em.createQuery("SELECT a from SpaceRentApp a LEFT JOIN a.spacecode b where a.sprdate = :searchDate", SpaceRentApp.class)
				.setParameter("searchDate", searchDate)
		        .getResultList();
	} // 대관 신청 시 해당 날짜의 신청가능 여부 조회 
	
	
	
	// 대관 신청
	@Override
	public int speaceRentApplication(SpaceRentAppDTO dto) {
		log.info("speaceRentApplication Repository 접촉 성공");
		
		// ** 신청한 시간 불러오기
		LocalDateTime currentDate = LocalDateTime .now();															// 현재시간
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");				
		String formattedDateTime = currentDate.format(formatter);
		// ** 신청한 시간 불러오기
		
		
		
		Member member = em.find(Member.class, dto.getId());
		
		return em.createQuery("UPDATE SpaceRentApp a SET a.appdate = :appdate ,a.appphonenum = :appphonenum, a.numofpeople = :numofpeople, a.id = :id, a.sprstate='확정' WHERE sprnum = :sprnum")
				.setParameter("appphonenum", dto.getAppPhoneNum())
				.setParameter("numofpeople", dto.getNumOfPeople())
				.setParameter("appdate", formattedDateTime)
				.setParameter("id", member)
				.setParameter("sprnum", dto.getSprnum())
				.executeUpdate();
	} // 대관 신청
	
	
	// 매일 10시 금일 기준 3일 이후 신청데이터 자동 입력
	@Override
	public void runDailyTasks() {
		log.info("runDailyTasks Repository 매일 10시 자동 insert 성공");
		
        // 현재 날짜 가져오기
        LocalDate currentDate = LocalDate.now().plusDays(3);
        
        // 원하는 형식의 포맷터 설정
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        
        // 현재 날짜를 원하는 형식으로 변환하여 출력
        String formattedDate = currentDate.format(formatter);
		
		em.createNativeQuery("INSERT INTO spaceRentApp (spaceCode, spRDate, spRState, payment) VALUES " +
						"('FABK1C','"+formattedDate+" 06:00:00', '접수중', 0), "+
						"('FABK2C','"+formattedDate+" 06:00:00', '접수중', 0), "+
						"('FAFT1C','"+formattedDate+" 06:00:00', '접수중', 0), "+
						"('FAFT2C','"+formattedDate+" 06:00:00', '접수중', 0), "+
						"('FATE1C','"+formattedDate+" 06:00:00', '접수중', 0), "+
						"('FATE2C','"+formattedDate+" 06:00:00', '접수중', 0), "+
						"('FABK1C','"+formattedDate+" 09:00:00', '접수중', 0), "+
						"('FABK2C','"+formattedDate+" 09:00:00', '접수중', 0), "+
						"('FAFT1C','"+formattedDate+" 09:00:00', '접수중', 0), "+
						"('FAFT2C','"+formattedDate+" 09:00:00', '접수중', 0), "+
						"('FATE1C','"+formattedDate+" 09:00:00', '접수중', 0), "+
						"('FATE2C','"+formattedDate+" 09:00:00', '접수중', 0), "+
						"('FABK1C','"+formattedDate+" 12:00:00', '접수중', 0), "+
						"('FABK2C','"+formattedDate+" 12:00:00', '접수중', 0), "+
						"('FAFT1C','"+formattedDate+" 12:00:00', '접수중', 0), "+
						"('FAFT2C','"+formattedDate+" 12:00:00', '접수중', 0), "+
						"('FATE1C','"+formattedDate+" 12:00:00', '접수중', 0), "+
						"('FATE2C','"+formattedDate+" 12:00:00', '접수중', 0), "+
						"('FABK1C','"+formattedDate+" 15:00:00', '접수중', 0), "+
						"('FABK2C','"+formattedDate+" 15:00:00', '접수중', 0), "+
						"('FAFT1C','"+formattedDate+" 15:00:00', '접수중', 0), "+
						"('FAFT2C','"+formattedDate+" 15:00:00', '접수중', 0), "+
						"('FATE1C','"+formattedDate+" 15:00:00', '접수중', 0), "+
						"('FATE2C','"+formattedDate+" 15:00:00', '접수중', 0), "+
						"('FABK1C','"+formattedDate+" 18:00:00', '접수중', 0), "+
						"('FABK2C','"+formattedDate+" 18:00:00', '접수중', 0), "+
						"('FAFT1C','"+formattedDate+" 18:00:00', '접수중', 0), "+
						"('FAFT2C','"+formattedDate+" 18:00:00', '접수중', 0), "+
						"('FATE1C','"+formattedDate+" 18:00:00', '접수중', 0), "+
						"('FATE2C','"+formattedDate+" 18:00:00', '접수중', 0) "
						).executeUpdate(); 
		
		
		em.createNativeQuery("UPDATE SpaceRentApp SET sprstate = '접수만료' WHERE DATE(sprdate) = CURDATE()").executeUpdate();
	} // 매일 10시 금일 기준 3일 이후 신청데이터 자동 입력
	
	
	// 대관신청 전체 List
	@Override
	public List<SpaceRentApp> SpaceRentAppAll() {
		log.info("SpaceRentAppAll Repository 접촉 성공");
		
		return em.createQuery("SELECT a from SpaceRentApp a LEFT JOIN a.spacecode b LEFT JOIN a.id c ORDER BY a.sprdate DESC", SpaceRentApp.class)
		        .getResultList();
	} // 대관신청 전체 List
	
	
	// 이미 대관 신청한 유저 체크
	@Override
	public List<SpaceRentApp> AppUserCheck() {
		log.info("AppUserCheck Repository 접촉 성공");
		
		// 현재 날짜 가져오기
        LocalDate currentDate1 = LocalDate.now().plusDays(1);
        LocalDate currentDate2 = LocalDate.now().plusDays(2);
        LocalDate currentDate3 = LocalDate.now().plusDays(3);
        
        // 원하는 형식의 포맷터 설정
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        
        // 현재 날짜를 원하는 형식으로 변환하여 출력
        String formattedDate1 = currentDate1.format(formatter);
        String formattedDate2 = currentDate2.format(formatter);
        String formattedDate3 = currentDate3.format(formatter);
		
		return em.createQuery("SELECT s FROM SpaceRentApp s WHERE s.sprdate LIKE '%"+formattedDate1+"%' "
															+ "or s.sprdate LIKE '%"+formattedDate2+"%' "
															+ "or s.sprdate LIKE '%"+formattedDate3+"%'", SpaceRentApp.class)
				.getResultList();


	} // 이미 대관 신청한 유저 체크
	
	
}
