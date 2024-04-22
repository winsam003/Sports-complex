package com.example.demo.domain;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ParkAppDTO {
	private int parkAppNum;
	private String Id;
	private Date parkAppDate;
	private Date parkUseDate;
	private String parkAppCancel;
	private String payment;
	private int parkPrice;
	private String parkState;
	private String spacecode;
	private String carNum;
	
	
	
}
