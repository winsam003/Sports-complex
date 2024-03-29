package com.example.demo.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class StaffDTO {
	private String stfid;
	private String stfpassword;
	private String stfdmp;
	private String stflevel;
	private String stfname;
	private Integer stfpnum;
	private String stfcode;
}
