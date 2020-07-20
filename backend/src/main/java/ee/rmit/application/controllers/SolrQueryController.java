package ee.rmit.application.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ee.rmit.application.enums.SolrQueryType;
import ee.rmit.application.models.SolrQueryResponse;
import ee.rmit.application.models.StatusResponse;
import ee.rmit.application.services.SolrService;

@RestController
@RequestMapping("/api/v1/solr")
public class SolrQueryController {

	@Autowired
	SolrService solrService;

	@GetMapping(value = "/{queryType}/{searchTerm:.+}")
  public SolrQueryResponse findApplicationsByServiceName(@PathVariable SolrQueryType queryType, @PathVariable String searchTerm) {
		switch (queryType) {
			case APPLICATION:
				return new SolrQueryResponse(StatusResponse.SUCCESS, solrService.findApplicationsByServiceName(searchTerm));
			case SERVICE:
				return new SolrQueryResponse(StatusResponse.SUCCESS, solrService.findServicesByApplicationName(searchTerm));
		}
		return new SolrQueryResponse(StatusResponse.SUCCESS);
  }
}
