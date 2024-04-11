package com.example.demo.domain;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ClassesDTO {
	private Integer clnum;
	private String classcode;
	private String clname;
	private Timestamp clrequest;
	private Timestamp clrequestend;
	private Timestamp clstart;
	private Timestamp clend;
	private String clfor;
	private Integer clcount;
	private Integer clwating;
	private Integer clprice;
	private String cltype;
}
