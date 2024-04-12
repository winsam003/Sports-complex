package com.example.demo.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.demo.domain.TeachDTO;
import com.example.demo.entity.Teach;

@Transactional
@Repository
public class TeachRepositoryImpl implements TeachRepository {
	private final EntityManager em;

	public TeachRepositoryImpl(EntityManager em) {
		this.em = em;
	}

//	문의 게시글 조회
	@Override
	public List<Teach> teachList() {
		return em.createQuery("select t from Teach t order by teachnum desc", Teach.class).getResultList();
	}

//	문의 게시글 상세 페이지
	@Override
	public Teach teachDetail(Integer teachnum) {
		return null;
//		try {
//			return em.createQuery("select q from Qna q where q.qanum = :qanum", Teach.class)
//					.setParameter("qanum", qanum).getSingleResult();
//		} catch (NoResultException e) {
//			return null;
//		}
	}

//	강사 등록
	@Override
	public int teachInsert(TeachDTO dto) {
		return 0;
//		return em.createNativeQuery(
//				"insert into Qna (qatitle, qacontent, qatype, qadate, qaopen, qapassword, qacount, qafile, id) "
//						+ "values (:qatitle, :qacontent, :qatype, :qadate, :qaopen, :qapassword, :qacount, :qafile, :id)")
//				.setParameter("qatitle", dto.getQatitle()).setParameter("qacontent", dto.getQacontent())
//				.setParameter("qatype", dto.getQatype()).setParameter("qadate", dto.getQadate())
//				.setParameter("qaopen", dto.getQaopen()).setParameter("qapassword", dto.getQapassword())
//				.setParameter("qacount", dto.getQacount()).setParameter("qafile", dto.getQafile())
//				.setParameter("id", dto.getId()).executeUpdate();
	}

//	강사 업데이트
	public int teachUpdate(TeachDTO dto) {
		return 0;
//		return em.createNativeQuery(
//				"Update Qna set qareply = :qareply, qareplytime = :qareplytime, stfid = :stfid where qanum =:qanum")
//				.setParameter("qareply", dto.getQareply()).setParameter("qareplytime", dto.getQareplytime())
//				.setParameter("stfid", dto.getStfid()).setParameter("qanum", dto.getQanum()).executeUpdate();
	}

//	강사 삭제
	@Override
	public void teachDelete(Integer teachnum) {
		em.createQuery("delete from Teach t where t.teachnum = :teachnum").setParameter("teachnum", teachnum)
				.executeUpdate();
	}
}
