package com.thasmiya.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Company {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long cid;
	
	private long ccode;
	
	private String cname;
	private double turnover;
	private String ceo;
	private String bod;
	private String name;
	private String sector;
	private String brief;
	
	public Company() {}
	

	public long getCid() {
		return cid;
	}
	public void setCid(long cid) {
		this.cid = cid;
	}
	public long getCcode() {
		return ccode;
	}
	public void setCcode(long ccode) {
		this.ccode = ccode;
	}
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}
	public double getTurnover() {
		return turnover;
	}
	public void setTurnover(double turnover) {
		this.turnover = turnover;
	}
	public String getCeo() {
		return ceo;
	}
	public void setCeo(String ceo) {
		this.ceo = ceo;
	}
	public String getBod() {
		return bod;
	}
	public void setBod(String bod) {
		this.bod = bod;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSector() {
		return sector;
	}
	public void setSector(String sector) {
		this.sector = sector;
	}
	public String getBrief() {
		return brief;
	}
	public void setBrief(String brief) {
		this.brief = brief;
	}
	
	
	@Override
	public String toString() {
		return "CompanyEntity [cid=" + cid + ", ccode=" + ccode + ", cname=" + cname + ", turnover=" + turnover + ", ceo="
				+ ceo + ", bod=" + bod + ", name=" + name + ", sector=" + sector + ", brief=" + brief + "]";
	}
	
	

}
