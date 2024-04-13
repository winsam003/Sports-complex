package com.example.demo.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.demo.domain.ClassesDTO;
import com.example.demo.entity.Classes;

@Transactional
@Repository
public class ClassesRepositoryImpl implements ClassesRepository {

	private final EntityManager em;

	public ClassesRepositoryImpl(EntityManager em) {
		this.em = em;
	}

	// 강의 목록
	@Override
	public List<Classes> classesList() {
		return em.createQuery("select c from Classes c order by clnum desc", Classes.class).getResultList();
	}

	// 강의 등록
	@Override
	public int classesInsert(ClassesDTO dto) {
		return em.createNativeQuery(
				"insert into classes (classcode, clname, clrequest, clrequestend, clstart, clend, clfor, clcount, clwating, clprice)"
						+ "value (:classcode, :clname, :clrequest, :clrequestend, :clstart, :clend, :clfor, :clcount, :clwating, :clprice)")
				.setParameter("classcode", dto.getClasscode()).setParameter("clname", dto.getClname())
				.setParameter("cltime", dto.getClrequest()).setParameter("clendtime", dto.getClrequestend())
				.setParameter("clstart", dto.getClstart()).setParameter("clend", dto.getClend())
				.setParameter("clfor", dto.getClfor()).setParameter("clcount", dto.getClcount())
				.setParameter("clwating", dto.getClwating()).setParameter("clprice", dto.getClprice()).executeUpdate();
	}

	// 강의 삭제
	@Override
	public void classesDelete(Integer clnum) {
		em.createQuery("delete from Classes c where c.clnum = :clnum").setParameter("clnum", clnum).executeUpdate();
	}
}
