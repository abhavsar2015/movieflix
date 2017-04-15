package com.apurv.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table
public class Writer implements Serializable {
	@Id
	@GenericGenerator(name="customUUID", strategy="uuid2")
	@GeneratedValue(generator="customUUID")
	private String wriId;
    
    private String writer;
    public Writer() {}

	  public Writer(String name) {
	    this.writer = name;
	  }
	public String getWriId() {
		return wriId;
	}
	public void setWriId(String wriId) {
		this.wriId = wriId;
	}
	
	public String getWriter() {
		return writer;
	}
	public void setWriter(String writer) {
		this.writer = writer;
	}
	
}
