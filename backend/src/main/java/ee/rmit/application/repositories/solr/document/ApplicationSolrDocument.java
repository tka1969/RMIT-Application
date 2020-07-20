package ee.rmit.application.repositories.solr.document;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import org.apache.solr.client.solrj.beans.Field;
import org.springframework.data.annotation.Id;
import org.springframework.data.solr.core.mapping.Indexed;
import org.springframework.data.solr.core.mapping.SolrDocument;

import ee.rmit.application.enums.AppServiceSubType;
import ee.rmit.application.enums.AppServiceType;
import ee.rmit.application.enums.ApplicationAppType;

@SolrDocument(collection="Application")
public class ApplicationSolrDocument {
	
	@Field("app_code")
	@Id
	@Indexed(name = "app_code", type = "string")
	private String appCode;

	@Field("name")
	@Indexed(name = "name", type = "string")
	private String name;
	
	@Field("description")
	@Indexed(name = "description", type = "string")
	private String description;	
	
	@Field("app_group")
	@Indexed(name = "app_group", type = "string")
	private String appGroup;
	
	@Field("app_type")
	@Indexed(name = "app_type", type = "string")
	@Enumerated(EnumType.STRING)
	private ApplicationAppType appType;

	
	@Field("service_code")
	@Indexed(name = "service_code", type = "string")
	private String serviceCode;

	@Field("service_type")
	@Indexed(name = "service_type", type = "string")
	@Enumerated(EnumType.STRING)
	private AppServiceType serviceType;

	@Field("service_sub_type")
	@Indexed(name = "service_sub_type", type = "string")
	@Enumerated(EnumType.STRING)
	private AppServiceSubType serviceSubType;
		
	
	public String getAppCode() {
		return appCode;
	}

	public void setAppCode(String appCode) {
		this.appCode = appCode;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAppGroup() {
		return appGroup;
	}

	public void setAppGroup(String appGroup) {
		this.appGroup = appGroup;
	}

	public ApplicationAppType getAppType() {
		return appType;
	}

	public void setAppType(ApplicationAppType appType) {
		this.appType = appType;
	}	

	public String getServiceCode() {
		return serviceCode;
	}

	public void setServiceCode(String serviceCode) {
		this.serviceCode = serviceCode;
	}

	public AppServiceType getServiceType() {
		return serviceType;
	}

	public void setServiceType(AppServiceType serviceType) {
		this.serviceType = serviceType;
	}

	public AppServiceSubType getServiceSubType() {
		return serviceSubType;
	}

	public void setServiceSubType(AppServiceSubType serviceSubType) {
		this.serviceSubType = serviceSubType;
	}
}
