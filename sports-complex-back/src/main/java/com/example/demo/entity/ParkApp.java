package com.example.demo.entity;

import java.util.Date; 

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name="parkapp")
public class ParkApp {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int parkAppNum;
	
	@JoinColumn(name = "id")
	private Member Id;
	
//	@Temporal(TemporalType.TIMESTAMP)
	private Date parkAppDate;
	// 신청한 날짜
	
	private Date parkUseDate;
	private String parkAppCancel;
	private String payment;
	private int parkPrice;
	private String parkState;
	
	@JoinColumn(name = "spacecode")
	private Space spacecode;
	private String carNum;
	
	
	
}
