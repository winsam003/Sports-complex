package com.example.demo.controller;

import java.util.List;

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

		System.out.println("컨트롤러 dto " + dto);
		// 중복 확인
//		if (service.isDuplicateClassApp(dto)) {
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("이미 신청한 강좌입니다.");
//		}

		// cltype이 대기 신청인 경우엔 classappstate를 대기로 추가
		String classType = service.getClassType(dto.getClnum());
		if ("대기 신청".equals(classType)) {
			dto.setClassappstate("대기");
		}

		if (service.classAppInsert(dto) > 0) {
			handleClassType(dto.getClnum());
			return ResponseEntity.status(HttpStatus.OK).body("수강 신청에 성공하셨습니다.");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("수강 신청에 실패하였습니다.");
		}
	}

	// cltype 변경
	private void handleClassType(int clnum) {
		// clnum에 해당하는 데이터의 갯수 확인
		int clCount = service.getClassCount(clnum);
		int classAppCount = service.getClassAppCount(clnum);
		int waitingCount = service.getWaitingCount(clnum);

		// cltype이 신청 가능인 경우
		if (clCount == classAppCount) {
			service.updateClassType(clnum, "대기 신청");
		}
		// cltype이 대기 신청인 경우
		// 대기인 classappstate의 갯수와 clwating 갯수 비교
		else if (waitingCount == service.getClassWaitingCount(clnum)) {
			service.updateClassType(clnum, "대기 마감");
		}
	}

	// 신청 건수, 대기 건수 업데이트
//	@GetMapping("/classAppStatusCounts")
//	public ResponseEntity<?> classAppStatusCounts(@RequestParam("clnum") Integer clnum) {
//		try {
//			// 해당 강의(clnum)에 대한 신청 완료된 수와 대기 중인 수를 가져옵니다.
//			int completedCount = service.getCompletedCount(clnum);
//			int waitingCount = service.getWaitingCount(clnum);
//
//			// 가져온 카운트 정보를 JSON 형식으로 응답합니다.
//			return ResponseEntity.ok().body(Map.of("completed", completedCount, "waiting", waitingCount));
//		} catch (Exception e) {
//			// 예외가 발생한 경우 에러 응답을 반환합니다.
//			log.error("Failed to retrieve classApp status counts: {}", e.getMessage());
//			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//					.body("Failed to retrieve classApp status counts");
//		}
//	}

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
