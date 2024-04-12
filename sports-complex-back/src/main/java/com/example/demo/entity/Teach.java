package com.example.demo.entity;

import java.sql.Timestamp;
import java.util.Date;

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

@Table(name = "teach")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Teach {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer teachnum;
	@Column(length = 10, nullable = false)
	private String teachcode;
	@Column(length = 10, nullable = false)
	private String teachname;
	@Column
	private Date teachbirth;
	@Column(length = 15)
	private String teachphone;
	@Column(length = 100, nullable = false)
	private String teachadress;
	@Column(length = 100, nullable = false)
	private String teachadress1;
	@Column(length = 100)
	private String teachadress2;
	@Column(length = 50)
	private String teachlicense;
	@Column(length = 30, nullable = false)
	private String teachaccount;
	@Column(nullable = false)
	private Timestamp teachrdate;
}
