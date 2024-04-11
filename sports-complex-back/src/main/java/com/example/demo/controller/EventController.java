package com.example.demo.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entity.Event;
import com.example.demo.service.EventServiceImpl;

import io.github.classgraph.Resource;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RequestMapping("/event")
@RestController
public class EventController {
	EventServiceImpl service;
	
	// 이벤트 리스트
	@GetMapping(value = "/eventlist", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> eList() {
		List<Event> result = service.EventList();
		
		if(result != null && result.size() > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(result);
		}else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("출력할 이벤트가 없습니다. controller ");
		}
	} //eList
	
	// 이벤트 삭제
	@PostMapping(value = "/eventdelete", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> eDelete(@RequestBody List<Integer> eventCodes ) {
		log.info(eventCodes);
		
		int deleteCount = 0;
		for( Integer eventCode : eventCodes) {
			int result = service.EventDelete(eventCode);
			if(result > 0) {
				deleteCount++;
			}
		}		
		if(deleteCount > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(deleteCount + "개 이벤트 항목 삭제");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("삭제할 이벤트 게시물이 없습니다.");
		}		
	} //eDelete
	
	// 이벤트 디테일
	@GetMapping(value = "/eventdetail", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> eDetail(@RequestParam Integer eventcode){

//		Integer eventCode = requestBody.get("eventCode");
		Event result = service.EventDetail(eventcode);
		
		if(result != null) {
			log.info("eventcount : "+ result.getEventcount());
			result.setEventcount(result.getEventcount() + 1);
			// 자 기억해. 여기에 업데이트. 해야됨. 그래야 count 없데이트 됨. 
			return ResponseEntity.status(HttpStatus.OK).body(result);
		} else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("디테일이 없습니다.");
		}
		
	} // eDetail
	
	// 이벤트 등록
	@PostMapping(value = "/eventinsert")
	public ResponseEntity<?> eInsert (@RequestParam("eventname") String eventname, 
									  @RequestParam("eventdetail") String eventdetail, 
									  @RequestParam("eventfacility") String eventfacility, 
									  @RequestParam("eventtime") String eventtime, 
									  @RequestParam("eventfor") String eventfor, 
									  @RequestParam("eventtype") String eventtype, 
									  @RequestParam(value = "eventfilef", required = false) MultipartFile eventfilef, 
									  @RequestParam("stfid") String stfid)  throws IOException {
		
		
		Event entity = new Event();
		
		entity.setEventname(eventname);
		entity.setEventdetail(eventdetail);
		entity.setEventfacility(eventfacility);
		entity.setEventtime(eventtime);
		entity.setEventfor(eventfor);
		entity.setEventtype(eventtype);
		entity.setEventfilef(eventfilef);
		entity.setStfid(stfid);
		
		// 파일이 있을 경우.
		if (eventfilef != null && !eventfilef.isEmpty()) {
			
			entity.setEventuploadfile(eventfilef.getOriginalFilename());
			
			String realPath = "C:\\jgj\\TeamSSJ\\Sports-complex\\sports-complex-back\\src\\main\\webapp\\images\\eventBoard\\";
			
			// 솔직히 무슨 기준으로 배포 전, 후 를 나눠야할지 모르겠음 일단 같은 폴더로 지정했음
			if(realPath.contains(".TeamSSJ."))
				realPath = "C:\\jgj\\TeamSSJ\\Sports-complex\\sports-complex-back\\src\\main\\webapp\\images\\eventBoard\\";
			else 
				realPath = "C:\\jgj\\TeamSSJ\\Sports-complex\\sports-complex-back\\src\\main\\webapp\\images\\eventBoard\\";
			
			// 1.1. 해당 위치에 폴더가 존재하지 않다면 만들기
			File file1 = new File(realPath);
			if(!file1.exists()) {
				file1.mkdir();
			}
			
			// 1.2. 저장 할 파일 데이터가 존재한다면 저장 경로에 파일 이름을 붙여주고 파일 복사 (저장)
			MultipartFile uploadfilef = entity.getEventfilef();
			if(uploadfilef != null && !uploadfilef.isEmpty()) {
				String f2 = realPath + uploadfilef.getOriginalFilename();
				File f1 = new File(f2);
				uploadfilef.transferTo(f1);
			}
		}
		
		log.info(entity);
		
		if(service.EventInsert(entity) > 0) {
			return ResponseEntity.status(HttpStatus.OK).body("이벤트 등록 완료. 목록으로 이동");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body("이벤트 등록 실패");
		}
			
	} // eInsert
	
	@GetMapping(value = "/eventimages")
	public ResponseEntity<?> getImagePath(@RequestParam String img, HttpServletRequest request) throws Exception {
		
		String realPath = "C:\\jgj\\TeamSSJ\\Sports-complex\\sports-complex-back\\src\\main\\webapp\\images\\eventBoard\\";
		
		FileSystemResource resource = new FileSystemResource(realPath + "\\" + img);
		
		return new ResponseEntity<>(resource, HttpStatus.OK);
	}
	
	
}





