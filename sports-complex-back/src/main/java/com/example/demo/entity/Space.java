package com.example.demo.entity;

import javax.persistence.Entity;  
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor; 

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "Space")
public class Space {
	public String spaceCode;
	public String spaceName;
	public boolean spacePos;
	public int spacePrice;
	public int parkSpace;
	public int parking;
	
}