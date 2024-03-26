package com.example.demo.domain;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class MemberDTO {
	private String ID;
	private String name;
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
