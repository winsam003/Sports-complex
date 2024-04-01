package com.example.demo.domain;

import java.util.Date;

import com.example.demo.entity.Member;
import com.example.demo.entity.Staff;

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
	private String qafile;
	private String qaanswer;

//	join을 위해
	private Member member;
	private Staff staff;
}
