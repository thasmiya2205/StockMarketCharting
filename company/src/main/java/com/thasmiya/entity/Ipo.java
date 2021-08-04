package com.thasmiya.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Ipo {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	private String cname;
	
	private  float ppshare;
	private int totalshares;
	private String opentime;
	private String remarks;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCname() {
		return cname;
	}
	public void setCname(String cname) {
		this.cname = cname;
	}
	public float getPpshare() {
		return ppshare;
	}
	public void setPpshare(float ppshare) {
		this.ppshare = ppshare;
	}
	public int getTotalshares() {
		return totalshares;
	}
	public void setTotalshares(int totalshares) {
		this.totalshares = totalshares;
	}
	public String getOpentime() {
		return opentime;
	}
	public void setOpentime(String opentime) {
		this.opentime = opentime;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	@Override
	public String toString() {
		return "IPOEntity [id=" + id + ", cname=" + cname + ", ppshare=" + ppshare + ", totalshares=" + totalshares
				+ ", opentime=" + opentime + ", remarks=" + remarks + "]";
	}
	
	
	

}
