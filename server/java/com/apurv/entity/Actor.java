package com.apurv.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table
public class Actor implements Serializable {
	@Id
	@GenericGenerator(name="customUUID", strategy="uuid2")
	@GeneratedValue(generator="customUUID")
	private String actId;
    
    private String actors;
    public Actor() {}

    public Actor(String name) {
      this.actors = name;
    }
	public String getActId() {
		return actId;
	}
	public void setActId(String actId) {
		this.actId = actId;
	}
	
	public String getActor() {
		return actors;
	}
	public void setActor(String actor) {
		this.actors = actor;
	}
    
    
}
