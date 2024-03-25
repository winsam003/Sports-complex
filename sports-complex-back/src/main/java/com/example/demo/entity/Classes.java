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
@Table(name = "Classes")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Classes {
//	PK
	@Id
//	Auto_Increment
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String classCode;
//	강좌명 길이, not null
	@Column(length = 10, nullable = false)
	private String clName;
	private String clTime;
	private String clEndTime;
	private String clStartDate;
	private String clEndDate;
//	강좌대상
	@Column(length = 10, nullable = false)
	private String clFor;
	private Integer clCount;
	private Integer clWating;
	private Integer clPrice;
//	신청현황
	@Column(length = 10, nullable = false)
	private String Type;
}