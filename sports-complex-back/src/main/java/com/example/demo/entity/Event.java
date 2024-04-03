package com.example.demo.entity;

import java.sql.Date;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="Event")
public class Event {
	@Id
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
    @Column(nullable = false)
    public Date eventdate;
	
	
}