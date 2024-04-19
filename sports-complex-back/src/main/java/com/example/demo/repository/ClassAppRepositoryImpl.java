package com.example.demo.repository;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.demo.domain.ClassAppDTO;

@Transactional
@Repository
public class ClassAppRepositoryImpl implements ClassAppRepository {
	private final EntityManager em;

	public ClassAppRepositoryImpl(EntityManager em) {
		this.em = em;
	}

	// 수강 신청
	@Override
	public int classAppInsert(ClassAppDTO dto) {
		return em
				.createNativeQuery(
						"insert into classApp (id, clnum, classappstate) value (:id, :clnum, :classappstate)")
				.setParameter("id", dto.getId()).setParameter("clnum", dto.getClnum())
				.setParameter("classappstate", dto.getClassappstate()).executeUpdate();
	}

	// 중복 확인
	@Override
	public boolean isDuplicate(ClassAppDTO dto) {
		// dto에 대한 정보를 조회하고, 결과가 있으면 true 반환
		try {
			Long count = em
					.createQuery(
							"SELECT COUNT(ca) FROM ClassApp ca WHERE ca.member.id = :id AND ca.classes.clnum = :clnum",
							Long.class)
					.setParameter("id", dto.getId()).setParameter("clnum", dto.getClnum()).getSingleResult();

			return count > 0;
		} catch (NoResultException e) {
			return false;
		}
	}

	// 신청완료 건수
	@Override
	public int getCompletedCount(int clnum) {
		return ((Number) em.createQuery(
				"SELECT COUNT(ca) FROM ClassApp ca WHERE ca.classes.clnum = :clnum AND ca.classappstate = '신청 완료'")
				.setParameter("clnum", clnum).getSingleResult()).intValue();
	}

	// 대기건수
	@Override
	public int getWaitingCount(int clnum) {
		Long count = em.createQuery(
				"SELECT COUNT(ca) FROM ClassApp ca WHERE ca.classes.clnum = :clnum AND ca.classappstate = '대기'",
				Long.class).setParameter("clnum", clnum).getSingleResult();
		return count.intValue();
	}

	// cltype 업데이트
	@Override
	public void updateClassType(int clnum, String cltype) {
		em.createQuery("UPDATE Classes c SET c.cltype = :cltype WHERE c.clnum = :clnum").setParameter("cltype", cltype)
				.setParameter("clnum", clnum).executeUpdate();
	}

	// 수강 신청 삭제
	@Override
	public void classAppDelete(Integer classappnum) {
		em.createQuery("delete from ClassApp ca where ca.classappnum = :classappnum")
				.setParameter("classappnum", classappnum).executeUpdate();
	}
}
