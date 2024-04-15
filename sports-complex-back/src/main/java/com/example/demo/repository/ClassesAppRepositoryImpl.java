package com.example.demo.repository;

import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

@Transactional
@Repository
public class ClassesAppRepositoryImpl implements ClassesAppRepository {
//	SELECT COUNT(*)
//	FROM classApp
//	WHERE clNum = '원하는_clNum';
//	
//	UPDATE Classes
//	SET clType = '변경할_값'
//	WHERE clNum = '원하는_clNum';
}
