package com.example.demo.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Staff;

@Transactional
@Repository
public class StaffRepositoryImpl implements StaffRepository {
	private final EntityManager em;

	public StaffRepositoryImpl(EntityManager em) {
		this.em = em;
	}

	@Override
	public List<Staff> stafflist() {
		return em.createQuery("select s from Staff s order by s.stflevel desc", Staff.class).getResultList();
	}

}
