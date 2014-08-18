package com.hr.action;

import java.util.List;

import com.hr.bean.Health;
import com.hr.service.HealthService;
import com.opensymphony.xwork2.ActionSupport;

public class HealthAction extends ActionSupport {
	private HealthService healthService;
	private List<Health> healthList;
	public HealthService getHealthService() {
		return healthService;
	}
	public void setHealthService(HealthService healthService) {
		this.healthService = healthService;
	}
	public List<Health> getHealthList() {
		return healthList;
	}
	public void setHealthList(List<Health> healthList) {
		this.healthList = healthList;
	}
	//获取健康状况列表
	public String findHealthList() throws Exception{
		healthList = healthService.findAll();
		return SUCCESS;
	}
}
