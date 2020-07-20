package ee.rmit.application.repositories.jpa.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Table;

import ee.rmit.application.enums.AppServiceSubType;
import ee.rmit.application.enums.AppServiceType;


@Entity
@Table(name = "APP_SERVICE")
public class AppServiceEntity {

	@Id
  @Column(name="service_code")
	private String serviceCode;

	@Column(name = "app_code", unique = true, nullable = false)
	private String appCode;

	@Column(name = "name")
	private String name;
	
	@Column(name="description")
	private String description;	
	
	@Enumerated(EnumType.STRING)
  @Column(name="type")
	private AppServiceType type;

	@Enumerated(EnumType.STRING)
  @Column(name="sub_type")
	private AppServiceSubType subType;
	

	public String getServiceCode() {
		return serviceCode;
	}

	public void setServiceCode(String serviceCode) {
		this.serviceCode = serviceCode;
	}

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
	
	public AppServiceType getType() {
		return type;
	}

	public void setType(AppServiceType type) {
		this.type = type;
	}

	public AppServiceSubType getSubType() {
		return subType;
	}

	public void setSubType(AppServiceSubType subType) {
		this.subType = subType;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((appCode == null) ? 0 : appCode.hashCode());
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((serviceCode == null) ? 0 : serviceCode.hashCode());
		result = prime * result + ((subType == null) ? 0 : subType.hashCode());
		result = prime * result + ((type == null) ? 0 : type.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AppServiceEntity other = (AppServiceEntity) obj;
		if (appCode == null) {
			if (other.appCode != null)
				return false;
		} else if (!appCode.equals(other.appCode))
			return false;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (serviceCode == null) {
			if (other.serviceCode != null)
				return false;
		} else if (!serviceCode.equals(other.serviceCode))
			return false;
		if (subType != other.subType)
			return false;
		if (type != other.type)
			return false;
		return true;
	}
}
