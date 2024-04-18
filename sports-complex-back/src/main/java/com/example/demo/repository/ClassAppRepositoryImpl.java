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
		System.out.println("레퍼지토리 dto 검사 : " + dto);
		return em
				.createNativeQuery(
						"insert into classApp (classappdate, id, clnum)" + "value (:classappdate, :id, :clnum)")
				.setParameter("classappdate", dto.getClassappdate()).setParameter("id", dto.getId())
				.setParameter("clnum", dto.getClnum()).executeUpdate();
	}

	// 중복 확인
	@Override
	public boolean isDuplicate(ClassAppDTO dto) {
		System.out.println("레퍼지토이 dto : " + dto);
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

	// clnum에 해당하는 데이터의 갯수 조회
	@Override
	public int getClassCount(int clnum) {
		return ((Number) em.createQuery("SELECT COUNT(c) FROM Classes c WHERE c.clnum = :clnum")
				.setParameter("clnum", clnum).getSingleResult()).intValue();
	}

	// clnum에 해당하는 수강 정원
	@Override
	public int getClassAppCount(int clnum) {
		return ((Number) em.createQuery("SELECT COUNT(ca) FROM ClassApp ca WHERE ca.classes.clnum = :clnum")
				.setParameter("clnum", clnum).getSingleResult()).intValue();
	}

	// cltype 업데이트
	@Override
	public void updateClassType(int clnum, String cltype) {
		em.createQuery("UPDATE Classes c SET c.cltype = :cltype WHERE c.clnum = :clnum").setParameter("cltype", cltype)
				.setParameter("clnum", clnum).executeUpdate();
	}

	// 요청된 clnum과 동일한 값을 가진 classApp의 대기 수
	@Override
	public int getWaitingCount(int clnum) {
		Long count = em.createQuery(
				"SELECT COUNT(ca) FROM ClassApp ca WHERE ca.classes.clnum = :clnum AND ca.classappstate = '대기'",
				Long.class).setParameter("clnum", clnum).getSingleResult();
		return count.intValue();
	}

	// 요청된 clnum의 강의의 대기 정원
	@Override
	public int getClassWaitingCount(int clnum) {
		Integer waitingCount = em.createQuery("SELECT c.clwating FROM Classes c WHERE c.clnum = :clnum", Integer.class)
				.setParameter("clnum", clnum).getSingleResult();
		return waitingCount != null ? waitingCount : 0;
	}

	// 수강 신청 삭제
	@Override
	public void classAppDelete(Integer classappnum) {
		em.createQuery("delete from ClassApp ca where ca.classappnum = :classappnum")
				.setParameter("classappnum", classappnum).executeUpdate();
	}
}
