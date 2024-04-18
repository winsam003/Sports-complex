package com.example.demo.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;

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
	private int parkAppNum;
	@JoinColumn(name = "id")
	private String Id;
	
	private Date parkAppDate;
	private Date parkUseDate;
	private String parkAppCancel;
	private String payment;
	private int parkPrice;
	
	
	private String spacecode;
	private String carNum;
	
	
	
}
