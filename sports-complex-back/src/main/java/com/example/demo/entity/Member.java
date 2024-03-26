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
	private String membercode;
	private String name;
	@Column
	private String password;
	private String birth;
	private String phonenum;
	private String homenum;
	private String address;
	private String address1;
	private String address2;
	private String email;
	private boolean snsagr;
	private boolean emailagr;
	private String carnum;
	private Date parkuse;
	
}
