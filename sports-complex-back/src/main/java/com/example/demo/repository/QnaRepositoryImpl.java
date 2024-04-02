package com.example.demo.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.demo.domain.QnaDTO;
import com.example.demo.entity.Member;
import com.example.demo.entity.Qna;
import com.example.demo.entity.Staff;

@Transactional
@Repository
public class QnaRepositoryImpl implements QnaRepository {
	private final EntityManager em;

	public QnaRepositoryImpl(EntityManager em) {
		this.em = em;
	}

//	문의 게시글 조회
	@Override
	public List<Qna> qnalist() {
		return em.createQuery("select q from Qna q order by qanum desc", Qna.class).getResultList();
	}

//	문의 게시글 상세 페이지
	@Override
	public Qna qnadetail(int qanum) {
		try {
			return em.createQuery("select q from Qna q where q.qanum = :qanum", Qna.class).setParameter("qanum", qanum)
					.getSingleResult();
		} catch (NoResultException e) {
			return null;
		}
	}

//	문의 게시글 등록
	@Override
	public int qnainsert(QnaDTO dto) {
		Member member = dto.getMember();
		Staff staff = dto.getStaff();

		return em.createNativeQuery(
				"insert into Qna (qatitle, qacontent, qatype, qadate, qaopen, qapassword, qacount, qafile, qaanswer, id, stfid) "
						+ "values (:qatitle, :qacontent, :qatype, :qadate, :qaopen, :qapassword, :qacount, :qafile, :qaanswer, :id, :stfid)")
				.setParameter("qatitle", dto.getQatitle()).setParameter("qacontent", dto.getQacontent())
				.setParameter("qatype", dto.getQatype()).setParameter("qadate", dto.getQadate())
				.setParameter("qaopen", dto.getQaopen()).setParameter("qapassword", dto.getQapassword())
				.setParameter("qacount", dto.getQacount()).setParameter("qafile", dto.getQafile())
				.setParameter("qaanswer", dto.getQaanswer()).setParameter("id", member != null ? member.getId() : null)
				.setParameter("stfId", staff != null ? staff.getStfid() : null).executeUpdate();
	}

//	문의 게시글 답변 등록
	public int qnareplyinsert(QnaDTO dto) {
		return 1;
	}

//	문의 게시글 삭제
	@Override
	public void qnadelete(Integer qanum) {
		em.createQuery("delete from Qna q where q.qanum = :qanum").setParameter("qanum", qanum).executeUpdate();
	}

}
