package com.example.demo.repository;

import java.util.List; 

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.example.demo.domain.MemberDTO;
import com.example.demo.entity.Member;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Repository
@Log4j2
public class MemberRepositoryImpl implements MemberRepository{
	
	private final EntityManager em;
	
	MemberRepositoryImpl(EntityManager em) {
		this.em = em;
	}
	
	
	public List<Member> MemberListAll() {
		log.info("MemberListAll Repository 성공");
		return em.createQuery("select m from Member m", Member.class).getResultList();
	}

	
	@Override
	public int MemberJoin(MemberDTO dto) {
	    log.info("MemberJoin Repository 성공");
	    log.info(dto);

	    // INSERT 쿼리 작성
	    String jpql = "INSERT INTO Member (id, membercode, name, password, birth, phonenum, homenum, address, address1, address2, email, snsagr, emailagr, carnum, parkuse) " +
	                  "VALUES (:id, :membercode, :name, :password, :birth, :phonenum, :homenum, :address, :address1, :address2, :email, :snsagr, :emailagr, :carnum, :parkuse)";

	    // 쿼리 객체 생성
	    Query query = em.createNativeQuery(jpql);
	    
	    // 파라미터 설정
	    query.setParameter("id", dto.getId());
	    query.setParameter("membercode", dto.getMembercode());
	    query.setParameter("name", dto.getName());
	    query.setParameter("password", dto.getPassword());
	    query.setParameter("birth", dto.getBirth());
	    query.setParameter("phonenum", dto.getPhonenum());
	    query.setParameter("homenum", dto.getHomenum());
	    query.setParameter("address", dto.getAddress());
	    query.setParameter("address1", dto.getAddress1());
	    query.setParameter("address2", dto.getAddress2());
	    query.setParameter("email", dto.getEmail());
	    query.setParameter("snsagr", dto.isSnsagr());
	    query.setParameter("emailagr", dto.isEmailagr());
	    query.setParameter("carnum", dto.getCarnum());
	    query.setParameter("parkuse", dto.getParkuse());
	    
	    // 쿼리 실행 및 결과 반환
	    return query.executeUpdate();
	}
}
