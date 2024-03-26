package com.example.demo.domain;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class MemberDTO {
	private String id;
	private String membercode;
	private String name;
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
