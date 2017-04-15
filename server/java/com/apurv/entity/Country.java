package com.apurv.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table
public class Country implements Serializable {
	@Id
	@GenericGenerator(name="customUUID", strategy="uuid2")
	@GeneratedValue(generator="customUUID")
private String countId;

private String country;
public Country() {}

public Country(String name) {
  this.country = name;
}
public String getCountId() {
	return countId;
}
public void setCountId(String countId) {
	this.countId = countId;
}

public String getCountry() {
	return country;
}
public void setCountry(String country) {
	this.country = country;
}

}
