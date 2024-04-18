package com.example.demo.repository;


import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;


@Log4j2
@Repository
@AllArgsConstructor
public class ParkAppRepositoryImpl implements ParkAppRepository {
	private final EntityManager em;
	
}
