package com.apurv.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table
public class Language implements Serializable {
	@Id
	@GenericGenerator(name="customUUID", strategy="uuid2")
	@GeneratedValue(generator="customUUID")
	private String langId;
	public Language() {}

	  public Language(String name) {
	    this.language = name;
	  }
	private String language;
	public String getLangId() {
		return langId;
	}
	public void setLangId(String langId) {
		this.langId = langId;
	}
	
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	
}
