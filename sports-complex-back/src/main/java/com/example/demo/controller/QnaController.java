package com.example.demo.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.domain.QnaDTO;
import com.example.demo.entity.Qna;
import com.example.demo.service.QnaService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping(value = "/qna")
public class QnaController {
	QnaService service;
	PasswordEncoder passwordEncoder;

//	문의게시글 목록 조회
	@GetMapping("/qnaList")
	public List<Qna> qnaList() {
		return service.qnalist();
	}

//	문의게시글 상세 페이지
	@GetMapping("/qnadetail/{qanum}")
	public Qna qnaDetail(@PathVariable("qanum") Integer qanum) {
		return service.qnadetail(qanum);
	}

//	문의게시글 등록
	@PostMapping("/qnaInsert")
	public ResponseEntity<?> qnaInsert(@RequestParam("qafile") MultipartFile file, @RequestBody QnaDTO dto) {
		log.info("Contoller qnainset 접촉 성공");
		try {
			// 배포 전 물리적 저장 위치
			String realPath = "C:\\TP\\Sports-complex\\sports-complex-back\\src\\main\\webapp\\images\\Qna";

			// 개발중
			if (realPath.contains(".TP."))
				realPath = "C:\\TP\\Sports-complex\\sports-complex-back\\src\\main\\webapp\\images\\Qna";
			// 배포중
			else
				realPath = "C:\\TP\\Sports-complex\\sports-complex-back\\src\\main\\webapp\\images\\Qna";

			// 폴더가 없으면 생성
			File file1 = new File(realPath);
			if (!file1.exists())
				file1.mkdir();
			
		     // 저장할 파일명 생성 (중복 방지를 위해 UUID 활용)
	        String filename = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
	        String filePath = realPath + "\\" + filename;

	        // 파일 저장
	        File saveFile = new File(filePath);
	        file.transferTo(saveFile);

	        // 파일명을 DTO에 설정
	        dto.setQafile(filename);
	        
			// 데이터베이스에 등록
			if (service.qnainsert(dto) > 0) {
				return ResponseEntity.status(HttpStatus.OK).body("문의게시글 등록에 성공하셨습니다.");
			} else {
				return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("문의게시글 등록에 실패하였습니다.");
			}
		} catch (IOException e) {
			log.error("문의게시글 등록 중 오류 발생: {}", e.getMessage());
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("문의게시글 등록 중 오류가 발생했습니다.");
		}
	}

//	문의게시글 답변 등록
	@PostMapping("/qnaReplyInsert")
	public ResponseEntity<?> qnaReplyInsert(@RequestBody QnaDTO dto) {
		if (service.qnareplyinsert(dto) > 0) {
			return ResponseEntity.status(HttpStatus.OK).body("문의게시글 답변 등록에 성공하셨습니다.");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("문의게시글 답변 등록에 실패하였습니다.");
		}
	}

//	문의게시글 삭제
	@GetMapping("/qnaDelete")
	public String staffDelete(@RequestParam("qanum") List<Integer> qanumList) {
		try {
			for (Integer qanum : qanumList) {
				System.out.println(qanum);
				service.qnadelete(qanum);
				System.out.println(" 삭제 성공 => " + qanum);
			}
		} catch (Exception e) {
			System.out.println(" QnA Delete Excpetion => " + e.toString());
		}
		return "redirect:qna";
	}

}
