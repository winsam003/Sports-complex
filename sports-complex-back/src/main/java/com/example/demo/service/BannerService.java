package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Banner; 

public interface BannerService {

	 List<Banner> BannerList();
	 
	 int BannerDelete(Integer bannernum);
	 
	 int BannerInsert(Banner entity);
	
}
