package com.example.demo.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.demo.domain.StaffDTO;
import com.example.demo.entity.Staff;

@Transactional
@Repository
public class StaffRepositoryImpl implements StaffRepository {
	private final EntityManager em;

	public StaffRepositoryImpl(EntityManager em) {
		this.em = em;
	}

//	전직원 조회
	@Override
	public List<Staff> stafflist() {
		return em.createQuery("select s from Staff s order by s.stfdmp, s.stflevel desc", Staff.class).getResultList();
	}

//	직원 등록
	@Override
	public int staffinsert(StaffDTO dto) {
		return em
				.createQuery("insert into Staff (stfid, stfpassword, stfdmp, stflevel, stfname, stfpnum, stfcode) "
						+ "values (:stfid, :stfpassword, :stfdmp, :stflevel, :stfname, :stfpnum, :stfcode)")
				.setParameter("stfid", dto.getStfid()).setParameter("stfpassword", dto.getStfpassword())
				.setParameter("stfdmp", dto.getStfdmp()).setParameter("stflevel", dto.getStflevel())
				.setParameter("stfname", dto.getStfname()).setParameter("stfpnum", dto.getStfpnum())
				.setParameter("stfcode", dto.getStfcode()).executeUpdate();
	}

//	직원 삭제
	@Override
	public void staffdelete(String stfid) {
		em.createQuery("delete from Staff s where s.stfid = :stfid").setParameter("stfid", stfid).executeUpdate();
	}

}
