package com.example.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//** WebMvcConfigurer
//=> 스프링의 자동설정에 원하는 설정을 추가 설정할수있는 메서드들을 제공하는 인터페이스. 
//=> 스프링부트 컨트롤러 매핑메서드에서는 "/" 무시됨 -> addViewControllers 메서드로 해결  

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("redirect:/home");
	} //addViewControllers

	private final long MAX_AGE_SECS = 3600; // 단위:초


	@Override
	public void addCorsMappings(CorsRegistry registry) {
		// 모든 경로에 대해
		registry.addMapping("/**")
						// Origin이 http:localhost:3000에 대해
						.allowedOrigins("http://localhost:3000")
						// GET, POST, PUT, PATCH, DELETE, OPTIONS 메서드를 허용한다.
						.allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
						.allowedHeaders("*")
						.allowCredentials(true)
						.maxAge(MAX_AGE_SECS);
	}
} //class
