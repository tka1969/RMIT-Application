package ee.rmit.application.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ee.rmit.application.repositories.jpa.ApplicationEntityRepository;
import ee.rmit.application.repositories.jpa.entity.ApplicationEntity;
import ee.rmit.application.repositories.solr.ApplicationSolrRepository;
import ee.rmit.application.repositories.solr.document.ApplicationSolrDocument;

@Service
public class ApplicationService {

	@Autowired
	ApplicationEntityRepository applicationEntityRepository;

	@Autowired
	ApplicationSolrRepository applicationSolrRepository;
	
	public Optional<ApplicationEntity> get(String id) {
		return applicationEntityRepository.findById(id);
	}

	public List<ApplicationEntity> list() {
		List<ApplicationEntity> list = applicationEntityRepository.findAll(); 
		return list.isEmpty() ? new ArrayList<>() : list;
	}

	public ApplicationEntity add(ApplicationEntity application) {
		application = applicationEntityRepository.save(application);
		applicationSolrRepository.save(solrDocumentFromEntity(application));
		return application;
	}

	public ApplicationEntity update(ApplicationEntity application) {
		application = applicationEntityRepository.save(application);
		applicationSolrRepository.save(solrDocumentFromEntity(application));
		return application;
	}

	public void delete(String id) {
		applicationEntityRepository.deleteById(id);
		applicationSolrRepository.deleteById(id);
	}
 
  public ApplicationSolrDocument solrDocumentFromEntity(ApplicationEntity application) {
  	ApplicationSolrDocument document = new ApplicationSolrDocument();
  	
  	document.setAppCode(application.getAppCode());
  	document.setName(application.getName());
  	document.setDescription(application.getDescription());	
  	document.setAppGroup(application.getAppGroup());
  	document.setAppType(application.getAppType());
  	
  	return document;
  }
}
