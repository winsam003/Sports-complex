package com.example.demo.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.domain.ClassesDTO;
import com.example.demo.entity.Classes;
import com.example.demo.repository.ClassesRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@EnableScheduling // 스케쥴러 사용
public class ClassesServiceImpl implements ClassesService {
	private final ClassesRepository repository;

	// 강의 목록
	@Override
	public List<Classes> classesList() {
		return repository.classesList();
	}

	// 강의 등록
	@Override
	public int classesInsert(ClassesDTO dto) {
		return repository.classesInsert(dto);
	}

	// 강의 삭제
	@Override
	public void classesDelete(Integer clnum) {
		repository.classesDelete(clnum);
	}

	@Override
	@Scheduled(cron = "0 58 18 * * *") // 아침 9시에 실행되도록 변경
	@Transactional
	public void updateClassesStatusMorning() {
		System.out.println("updateClassesStatusMorning 메서드 호출됨");
		LocalDate today = LocalDate.now(); // 현재 날짜 정보만 포함하는 객체 생성
		LocalDate startOfDay = today; // 오늘 날짜의 시작 부분

		System.out.println("오늘 날짜: " + today);
		System.out.println("시작 시간: " + startOfDay);

		List<Classes> classesToUpdate = repository.findByCltypeAndClrequest("접수 마감", startOfDay);

		System.out.println("updateClassesStatusMorning - classesToUpdate 크기: " + classesToUpdate.size());
		for (Classes c : classesToUpdate) {
			LocalDate classDate = c.getClrequest(); // LocalDateTime을 LocalDate로 변환
			System.out.println("클래스 날짜: " + classDate);

			if (classDate.isEqual(today)) { // 현재 날짜와 클래스의 날짜가 같다면
				c.setCltype("신청 가능");
				repository.updateClassesType(c.getClnum(), "신청 가능");
				System.out.println("updateClassesStatusMorning - 엔티티 업데이트: " + c);
			}
		}
	}
}
