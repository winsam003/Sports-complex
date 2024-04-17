package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "ClassesApp")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class ClassesApp {
	@Id
	private Integer srnum;

}
