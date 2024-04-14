package com.example.demo.repository;

import java.util.List;

import com.example.demo.entity.Banner;   

public interface BannerRepository{
	
	public List<Banner> BannerList();
	
	public int BannerDelete(Integer bannernum);
	
	public int BannerInsert(Banner entity);
	
}
