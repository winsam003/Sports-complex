package com.example.demo.entity;

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

@Entity
@Table(name = "classes")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Classes {
//	PK
	@Id
//	Auto_Increment
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String classcode;
//	강좌명 길이, not null
	@Column(length = 10, nullable = false)
	private String clname;
	@Column
	private String cltime;
	@Column
	private String clendtime;
	@Column
	private String clstartdate;
	@Column
	private String clenddate;
//	강좌대상
	@Column(length = 10, nullable = false)
	private String clfor;
	@Column
	private Integer clcount;
	@Column
	private Integer clwating;
	@Column
	private Integer clprice;
//	신청현황
	@Column(length = 10, nullable = false)
	private String cltype;
}