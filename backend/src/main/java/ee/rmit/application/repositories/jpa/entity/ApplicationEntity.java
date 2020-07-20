package ee.rmit.application.repositories.jpa.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Table;

import ee.rmit.application.enums.ApplicationAppType;


@Entity
@Table(name = "APPLICATION")
public class ApplicationEntity {

	@Id
	@Column(name = "app_code", unique = true, nullable = false)
	private String appCode;

	@Column(name = "name")
	private String name;
	
	@Column(name="description")
	private String description;	

	@Column(name="app_group")
	private String appGroup;
	
	@Enumerated(EnumType.STRING)
	@Column(name="app_type")
	private ApplicationAppType appType;
	

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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((appCode == null) ? 0 : appCode.hashCode());
		result = prime * result + ((appGroup == null) ? 0 : appGroup.hashCode());
		result = prime * result + ((appType == null) ? 0 : appType.hashCode());
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
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
		ApplicationEntity other = (ApplicationEntity) obj;
		if (appCode == null) {
			if (other.appCode != null)
				return false;
		} else if (!appCode.equals(other.appCode))
			return false;
		if (appGroup == null) {
			if (other.appGroup != null)
				return false;
		} else if (!appGroup.equals(other.appGroup))
			return false;
		if (appType != other.appType)
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
		return true;
	}
}
