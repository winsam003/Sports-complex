package com.example.demo.service;

import java.util.List; 

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.repository.ParkAppRepositoryImpl;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@RequiredArgsConstructor
@Log4j2
@Transactional
public class ParkAppServiceImpl implements ParkAppService{
	private final ParkAppRepositoryImpl repository;
	
}
