//package com.example.demo.repository;
//
//import java.util.List;
//
//import javax.persistence.EntityManager;
//
//import org.springframework.stereotype.Repository;
//
//import com.example.demo.entity.Space;
//
//import lombok.RequiredArgsConstructor;
//import lombok.extern.log4j.Log4j2;
//
//@Log4j2
//@Repository 
//public class SpaceRepositoryImpl implements SpaceRepository {
//	
////	private final JPAQueryFactory jpaQueryFactory;
//	private final EntityManager em;
//	
//	SpaceRepositoryImpl(EntityManager em){
//		this.em = em;
//	}
//	
//	@Override
//	public List<Space> SpaceList() {
//		log.info("RepositoryTEST");
//		return em.createQuery("select s from space s", Space.class)
//				 .getResultList();
//	}
////	@Override
////	public List<Space> SpaceList() {
////		log.info("RepositoryTEST");
////		return em.createQuery("select s from space s WHERE SUBSTRING(spaceCode, 3, 2) NOT LIKE 'PA' ", Space.class)
////				.getResultList();
////	}
//
////	@Override
////	public Space parkList(String spaceCode) {
////		
////		return em.createQuery("select s from space s WHERE spaceCode = :ii ", Space.class)
////				.setParameter("ii", spaceCode) 
////				.getSingleResult();
////	}
//	
//	
//	
//	
//
//}
