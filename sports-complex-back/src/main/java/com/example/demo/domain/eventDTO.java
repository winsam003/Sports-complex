package com.example.demo.domain; 

import java.sql.Date;
import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class eventDTO {
	public int eventcode;
	public String eventname;
	public String eventdetail;
	public String eventfacility;
	public String eventtime;
	public String eventfor;
	public String eventtype;
	public int eventcount;
	public String eventuploadfile; 
	public String stfid;
	public Date eventdate;
	
	
}
