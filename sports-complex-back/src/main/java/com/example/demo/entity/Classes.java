package com.example.demo.entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "classes")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Classes {
//	PK
	@Id
//	Auto_Increment
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer clnum;
	@Column(length = 10, nullable = false)
	private String classcode;
	@Column(length = 20, nullable = false)
	private String clname;
	@Column
	private Timestamp clrequest;
	@Column
	private Timestamp clrequestend;
	@Column
	private Timestamp clstart;
	@Column
	private Timestamp clend;
//	강좌대상
	@Column(length = 10, nullable = false)
	private String clfor;
	@Column(nullable = false)
	private Integer clcount;
	@Column(nullable = false)
	private Integer clwating;
	@Column(nullable = false)
	private Integer clprice;
//	신청현황
	@Column(length = 10)
	private String cltype;
}