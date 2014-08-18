package com.hr.bean;

public class Title {
	private Integer id;
	private String titleName;
	private String qualification;
	private String duty;
	private String workTarget;
	
	public Title(){}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitleName() {
		return titleName;
	}
	public void setTitleName(String titleName) {
		this.titleName = titleName;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public String getDuty() {
		return duty;
	}
	public void setDuty(String duty) {
		this.duty = duty;
	}
	public String getWorkTarget() {
		return workTarget;
	}
	public void setWorkTarget(String workTarget) {
		this.workTarget = workTarget;
	}
}
