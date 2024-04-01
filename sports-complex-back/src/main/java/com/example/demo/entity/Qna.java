package com.example.demo.entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "Qna")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Qna {
//	PK, AUTO Increment
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long qanum;
	@Column(length = 20, nullable = false)
	private String qatitle;
	@Column(nullable = false)
//	대용량 데이터
	@Lob
	private String qacontent;
	@Column(length = 10, nullable = false)
	private String qatype;
//	값이 입력되거나 업데이트시 자동으로 시간 입력
	@CreationTimestamp
	@Column(nullable = false)
	private Timestamp qadate;
	@Column(nullable = false)
	private boolean qaopen;
	@Column(nullable = false)
	private Integer qapassword;
	@Column(nullable = false)
	private Integer qacount;
	@Column(length = 100)
	private String qafile;
//	테이블에 존재하지 않는 값, SQL 구문 처리시 예외
	@Transient
	private MultipartFile qafilef;
	@Column
	private boolean qaanswer;

//	한명의 회원은 여러개의 게시글을 쓸 수 있다
	@ManyToOne
	@JoinColumn(name = "id")
	private Member id;

//	답글을 단 사람이 누구인지
	@ManyToOne
	@JoinColumn(name = "stfid")
	private Staff stfid;
}
