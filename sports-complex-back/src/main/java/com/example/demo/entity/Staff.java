package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Staff")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Staff {
//	PK
	@Id
	private String stfid;
//	길이, not null
	@Column(length = 100, nullable = false)
	private String stfpassword;
	@Column(length = 20, nullable = false)
	private String stfdmp;
	@Column(length = 10, nullable = false)
	private String stflevel;
	@Column(nullable = false)
	private Integer stfpnum;
	@Column(length = 10, nullable = false)
	private String stfname;
	@Column(length = 20, nullable = false)
	private String stfcode;
}
