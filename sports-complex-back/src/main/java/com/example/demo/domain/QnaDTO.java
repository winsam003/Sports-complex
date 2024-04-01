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
	private long qanum;
	private String qatitle;
	private String qacontent;
	private String qatype;
	private Date qadate;
	private boolean qaopen;
	private Integer qapassword;
	private Integer qacount;
	private String qafile;
	private boolean qaanswer;

	private Member member;
	private Staff staff;
}
