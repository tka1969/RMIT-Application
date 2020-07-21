package ee.rmit.application.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ee.rmit.application.repositories.solr.ApplicationSolrRepository;
import ee.rmit.application.repositories.solr.document.ApplicationSolrDocument;

@Service
public class SolrService {

	@Autowired
	ApplicationSolrRepository applicationSolrRepository;
	
  //otsida rakenduse nime järgi ning vastusena saan selle rakenduse kõik teenused koos lisaväljade infoga.
  public List<ApplicationSolrDocument> findServicesByApplicationName(String searchTerm) {
  	List<ApplicationSolrDocument> applications = applicationSolrRepository.findByNameAndServiceCodeIsNull(searchTerm);
  	Set<String> codes = applications.stream().map(item -> item.getAppCode()).collect(Collectors.toSet());
  	return codes.isEmpty() ? new ArrayList<>() : applicationSolrRepository.findByAppCodeInAndServiceCodeIsNotNull(new ArrayList<>(codes));
  }
  
  //otsida teenuse nime järgi ning vastusena saan rakenduse koos tema lisaväljade infoga.  
  public List<ApplicationSolrDocument> findApplicationsByServiceName(String searchTerm) {
  	List<ApplicationSolrDocument> services = applicationSolrRepository.findByNameAndServiceCodeIsNotNull(searchTerm);
  	Set<String> codes = services.stream().map(item -> item.getAppCode()).collect(Collectors.toSet());
  	return codes.isEmpty() ? new ArrayList<>() : applicationSolrRepository.findByAppCodeInAndServiceCodeIsNull(new ArrayList<>(codes));
  }
}
