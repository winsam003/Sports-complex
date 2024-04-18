package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.ClassAppDTO;
import com.example.demo.service.ClassAppService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping("/classApp")
public class ClassAppController {
	ClassAppService service;

	// 수강 신청
	@PostMapping("/classAppInsert")
	public ResponseEntity<?> classAppInsert(@RequestBody ClassAppDTO dto) {
		String message = "";

		// 중복 확인
//		if (service.isDuplicateClassApp(dto)) {
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("이미 신청한 강좌입니다.");
//		}

		// cltype이 대기 신청인 경우엔 classappstate를 대기로 추가
		String classType = service.getClassType(dto.getClnum());
		if ("수강 신청".equals(classType)) {
			dto.setClassappstate("신청 완료");
		} else if ("대기 신청".equals(classType)) {
			dto.setClassappstate("대기");
		}

		if (service.classAppInsert(dto) > 0) {
			handleClassType(dto.getClnum());

			if ("수강 신청".equals(classType)) {
				message = "수강 신청에 성공하였습니다.";
			} else if ("대기 신청".equals(classType)) {
				message = "대기 신청에 성공하였습니다.";
			}
			return ResponseEntity.status(HttpStatus.OK).body(message);
		} else {
			if ("수강 신청".equals(classType)) {
				message = "수강 신청에 실패하였습니다.";
			} else if ("대기 신청".equals(classType)) {
				message = "대기 신청에 실패하였습니다.";
			}
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(message);
		}
	}

	// cltype 변경
	private void handleClassType(int clnum) {
		// 해당 강의(clnum) 신청 건수
		int completedCount = service.getCompletedCount(clnum);
		// 수강 정원
		int classesClCount = service.getClassesClCount(clnum);
		// 해당 강의(clnum) 대기 건수
		int waitingCount = service.getWaitingCount(clnum);
		// 대기 정원
		int classesClWaiting = service.getClassesClWaiting(clnum);

		log.info("신청 건수" + completedCount);
		log.info("수강 정원" + classesClCount);
		log.info("대기 건수" + waitingCount);
		log.info("대기 정원" + classesClWaiting);

		// cltype이 신청 가능인 경우
		if (completedCount == classesClCount) {
			service.updateClassType(clnum, "대기 신청");
		}
		// cltype이 대기 신청인 경우
		if (waitingCount == classesClWaiting) {
			service.updateClassType(clnum, "대기 마감");
		}
	}

	// 신청 건수, 대기 건수 업데이트
	@PostMapping("/classAppStatusCounts")
	public ResponseEntity<?> classAppStatusCounts(@RequestBody List<Integer> clnumList) {
		Map<String, Object> countMap = new HashMap<>();
		try {
			for (Integer clnum : clnumList) {

				// 해당 강의(clnum) 신청 건수
				int completedCount = service.getCompletedCount(clnum);
				// 해당 강의(clnum) 대기 건수
				int waitingCount = service.getWaitingCount(clnum);

				countMap.put("completed", completedCount);
				countMap.put("waiting", waitingCount);
			}
			// 가져온 카운트 정보를 JSON 형식으로 응답합니다.
			return ResponseEntity.ok().body(countMap);
		} catch (Exception e) {
			// 예외가 발생한 경우 에러 응답을 반환합니다.
			log.error("Failed to retrieve classApp status counts: {}", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body("Failed to retrieve classApp status counts");
		}
	}

	// 수강 신청 삭제
	@GetMapping("/classAppDelete")
	public String classAppDelete(@RequestParam("classappnum") List<Integer> classappnumList) {
		try {
			for (Integer classappnum : classappnumList) {
				System.out.println(classappnum);
				service.classAppDelete(classappnum);
				System.out.println(" 삭제 성공 => " + classappnum);
			}
		} catch (Exception e) {
			System.out.println(" classes Delete Excpetion => " + e.toString());
		}
		return "redirect:classApp";
	}
}
