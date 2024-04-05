package com.example.demo.domain;

import java.util.Date;

import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entity.Member;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class QnaDTO {
	private Integer qanum;
	private String qatitle;
	private String qacontent;
	private String qatype;
	private Date qadate;
	private Boolean qaopen;
	private String qapassword;
	private Integer qacount;
//	파일의 경로를 저장
	private MultipartFile qafile;
	private String qareply;
	private Date qareplytime;

//	join을 위해
	private Member id;
	private String stfid;
}
