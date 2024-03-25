package com.example.demo.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Entity
@Table(name="member")
public class Member {
	@Id
	private String id;
	private String name;
	@Column
	private String password;
	private String birth;
	private String phoneNum;
	private String homeNum;
	private String address;
	private String address1;
	private String address2;
	private String email;
	private boolean snsAgr;
	private boolean emailAgr;
	private String carNum;
	private Date parkUse;
	
}
