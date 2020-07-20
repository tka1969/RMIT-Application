package ee.rmit.application.controllers;

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

import ee.rmit.application.repositories.jpa.entity.ApplicationEntity;
import ee.rmit.application.services.ApplicationService;

@RestController
@RequestMapping("/api/v1/application")
public class ApplicationController {
	@Autowired
	ApplicationService applicationService;

	@GetMapping(value = "/list")
	public List<ApplicationEntity> getApplicationList() {
		return applicationService.list();
	}

	@GetMapping(value = "/get/{app_code:.+}")
	public ResponseEntity<ApplicationEntity> getApplication(@PathVariable("app_code") String appCode) {
		return ResponseEntity.ok(applicationService.get(appCode).orElse(null));
	}

	@PostMapping(value = "/update")
	public ResponseEntity<ApplicationEntity> updateApplication(@RequestBody ApplicationEntity application) {
		return ResponseEntity.ok(applicationService.update(application));
	}

	@PostMapping(value = "/add")
	public ResponseEntity<ApplicationEntity> addApplication(@RequestBody ApplicationEntity application) {
		return ResponseEntity.ok(applicationService.add(application));
	}

	@DeleteMapping(value = "/delete/{app_code:.+}")
	public void deleteConference(@PathVariable("app_code") String Id) {
		applicationService.delete(Id);
	}
}
