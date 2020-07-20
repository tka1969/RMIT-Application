package ee.rmit.application.models;

import java.util.List;

import ee.rmit.application.repositories.solr.document.ApplicationSolrDocument;

public class SolrQueryResponse {
	StatusResponse status;
	List<ApplicationSolrDocument> content;

	public SolrQueryResponse() {};
	
	public SolrQueryResponse(StatusResponse status) {
		this.status = status;
	};

	public SolrQueryResponse(StatusResponse status, List<ApplicationSolrDocument> content) {
		this.status = status;
		this.content = content;
	};
	
	public StatusResponse getStatus() {
		return status;
	}
	public void setStatus(StatusResponse status) {
		this.status = status;
	}
	public List<ApplicationSolrDocument> getContent() {
		return content;
	}
	public void setContent(List<ApplicationSolrDocument> content) {
		this.content = content;
	}
}
