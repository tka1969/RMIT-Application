package ee.rmit.application.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ee.rmit.application.repositories.jpa.entity.AppServiceEntity;
import ee.rmit.application.services.AppServiceService;

@RestController
@RequestMapping("/api/v1/appservice")
public class AppServiceController {
	@Autowired
	AppServiceService appServiceService;

	@GetMapping(value = "/list")
	public List<AppServiceEntity> getAppServiceList() {
		List<AppServiceEntity> list = appServiceService.list(); 
		return list.isEmpty() ? new ArrayList<>() : list;
	}

	@GetMapping(value = "/list_by_parent/{application:.+}")
	public List<AppServiceEntity> getAppServiceListByParent(@PathVariable("application") String application) {
		return appServiceService.listByApplication(application);
	}
	
	@GetMapping(value = "/get/{id:.+}")
	public ResponseEntity<AppServiceEntity> getAppService(@PathVariable("id") String Id) {
		return ResponseEntity.ok(appServiceService.get(Id).orElse(null));
	}

	@PostMapping(value = "/update")
	public ResponseEntity<AppServiceEntity> updateAppService(@RequestBody AppServiceEntity appService) {
		return ResponseEntity.ok(appServiceService.update(appService));
	}

	@PostMapping(value = "/add")
	public ResponseEntity<AppServiceEntity> addAppService(@RequestBody AppServiceEntity appService) {
		return ResponseEntity.ok(appServiceService.add(appService));
	}

	@DeleteMapping(value = "/delete/{id:.+}")
	public void deleteAppService(@PathVariable("id") String Id) {
		appServiceService.delete(Id);
	}
}
