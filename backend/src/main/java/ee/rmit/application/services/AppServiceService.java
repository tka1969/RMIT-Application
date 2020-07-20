package ee.rmit.application.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ee.rmit.application.repositories.jpa.AppServiceEntityRepository;
import ee.rmit.application.repositories.jpa.entity.AppServiceEntity;
import ee.rmit.application.repositories.solr.ApplicationSolrRepository;
import ee.rmit.application.repositories.solr.document.ApplicationSolrDocument;

@Service
public class AppServiceService {

	@Autowired
	AppServiceEntityRepository appServiceEntityRepository;

	@Autowired
	ApplicationSolrRepository applicationSolrRepository;
	
	public Optional<AppServiceEntity> get(String id) {
		return appServiceEntityRepository.findById(id);
	}

	public List<AppServiceEntity> list() {
		return appServiceEntityRepository.findAll();
	}

	public List<AppServiceEntity> listByApplication(String application) {
		return appServiceEntityRepository.findByAppCode(application);
	}
	
	public AppServiceEntity add(AppServiceEntity appService) {
		appService = appServiceEntityRepository.save(appService);
		applicationSolrRepository.save(solrDocumentFromEntity(appService));
		return appService;
	}

	public AppServiceEntity update(AppServiceEntity appService) {
		appService = appServiceEntityRepository.save(appService);
		applicationSolrRepository.save(solrDocumentFromEntity(appService));
		return appService;
	}

	public void delete(String id) {
		appServiceEntityRepository.deleteById(id);
		applicationSolrRepository.deleteById(id);
	}
	
  public ApplicationSolrDocument solrDocumentFromEntity(AppServiceEntity appService) {
  	ApplicationSolrDocument document = new ApplicationSolrDocument();
  	
  	document.setAppCode(appService.getAppCode());
  	document.setName(appService.getName());
  	document.setDescription(appService.getDescription());	
  	document.setServiceCode(appService.getServiceCode());
  	document.setServiceType(appService.getType());
  	document.setServiceSubType(appService.getSubType());
  	
  	return document;
  }
}
