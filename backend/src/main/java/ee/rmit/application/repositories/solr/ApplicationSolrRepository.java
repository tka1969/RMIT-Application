package ee.rmit.application.repositories.solr;

import java.util.Collection;
import java.util.List;

//import org.springframework.data.solr.repository.Query;
import org.springframework.data.solr.repository.SolrCrudRepository;
import org.springframework.stereotype.Repository;

import ee.rmit.application.repositories.solr.document.ApplicationSolrDocument;

@Repository
public interface ApplicationSolrRepository extends SolrCrudRepository<ApplicationSolrDocument, String> {
	
  // Rakendused
  List<ApplicationSolrDocument> findByNameAndServiceCodeIsNull(String searchTerm);
  
  // Teenused
  List<ApplicationSolrDocument> findByNameAndServiceCodeIsNotNull(String searchTerm);

  
  List<ApplicationSolrDocument> findByAppCodeInAndServiceCodeIsNotNull(Collection<String> appCode);
  List<ApplicationSolrDocument> findByAppCodeInAndServiceCodeIsNull(Collection<String> serviceCode);
}
