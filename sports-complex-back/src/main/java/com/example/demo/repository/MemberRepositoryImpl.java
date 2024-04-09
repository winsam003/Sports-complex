package com.example.demo.repository;

import java.util.Arrays;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Member;

import lombok.extern.log4j.Log4j2;

@Repository
@Log4j2
public class MemberRepositoryImpl implements MemberRepository {

	private final EntityManager em;

	MemberRepositoryImpl(EntityManager em) {
		this.em = em;
	}

	public List<Member> MemberListAll() {
		log.info("MemberListAll Repository 접촉 성공");
		return em.createQuery("select m from Member m", Member.class).getResultList();
	}

	@Override
	public int MemberJoin(Member dto) {
		log.info("MemberJoin Repository 접촉 성공");

		// INSERT 쿼리 작성
		String jpql = "INSERT INTO Member (id, membercode, name, password, birth, phonenum, homenum, address, address1, address2, email, snsagr, emailagr, carnum, parkuse) "
				+ "VALUES (:id, :membercode, :name, :password, :birth, :phonenum, :homenum, :address, :address1, :address2, :email, :snsagr, :emailagr, :carnum, :parkuse)";

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

	@Override
	public int MemberDelete(String[] deleteId) {
		// TODO Auto-generated method stub
		log.info("MemberDelete Repository 접촉 성공");

		String query = "delete from Member where id IN (:ids)";

		int deleteCount = em.createQuery(query).setParameter("ids", Arrays.asList(deleteId)).executeUpdate();

		return deleteCount;
	}

	@Override
	public Member MemberOne(String id) {
		// TODO Auto-generated method stub
		log.info("MemberOne Repository 접촉 성공");
		System.out.println(id);
		return em.createQuery("select m from Member m where id=:id", Member.class).setParameter("id", id)
				.getSingleResult();
	}

	@Override
	public int mUpdate(Member entity) {
		log.info("mUpdate Repository 접촉 성공");

		// INSERT 쿼리 작성
		String jpql = "UPDATE Member SET membercode = :membercode, name = :name, birth = :birth, phonenum = :phonenum, homenum = :homenum, address = :address, address1 = :address1, address2 = :address2, email = :email, snsagr = :snsagr, emailagr = :emailagr, carnum = :carnum WHERE id = :id";

		// 쿼리 객체 생성
		Query query = em.createNativeQuery(jpql);

		// 파라미터 설정
		query.setParameter("id", entity.getId());
		query.setParameter("membercode", entity.getMembercode());
		query.setParameter("name", entity.getName());
		query.setParameter("birth", entity.getBirth());
		query.setParameter("phonenum", entity.getPhonenum());
		query.setParameter("homenum", entity.getHomenum());
		query.setParameter("address", entity.getAddress());
		query.setParameter("address1", entity.getAddress1());
		query.setParameter("address2", entity.getAddress2());
		query.setParameter("email", entity.getEmail());
		query.setParameter("snsagr", entity.isSnsagr());
		query.setParameter("emailagr", entity.isEmailagr());
		query.setParameter("carnum", entity.getCarnum());

		// 쿼리 실행 및 결과 반환
		return query.executeUpdate();
	}

	@Override
	public int mPWChange(Member entity) {
		log.info("mPWChange Repository 접촉 성공");

		Query query = em.createQuery("UPDATE Member SET password = :password WHERE id = :id");
		query.setParameter("password", entity.getPassword());
		query.setParameter("id", entity.getId());

		return query.executeUpdate();
	}

	@Override
	public Member mfindID(Member entity) {
		log.info("mfindID Repository 접촉 성공");
		log.info(entity.getName());
		log.info(entity.getPhonenum());

		return em.createQuery("SELECT m FROM Member m WHERE m.name = :name AND m.phonenum = :phonenum", Member.class)
				.setParameter("name", entity.getName()).setParameter("phonenum", entity.getPhonenum())
				.getSingleResult();
	}

	
	@EntityGraph(attributePaths = {"roleList"}) 
	@Override
	public Member getWithRoles(String id) {
	    log.info("getWithRoles Repository 접촉 성공");
	    log.info("Member ID: {}", id);

	    return em.createQuery("SELECT m FROM Member m LEFT JOIN FETCH m.roleList WHERE m.id = :id", Member.class)
	             .setParameter("id", id)
	             .getSingleResult();
	}
}
