package com.hr.action;

import java.util.List;

import com.hr.bean.Nation;
import com.hr.service.NationService;
import com.opensymphony.xwork2.ActionSupport;

public class NationAction extends ActionSupport {
	private NationService nationService;
	private List<Nation> nationList;
	
	public List<Nation> getNationList() {
		return nationList;
	}

	public void setNationList(List<Nation> nationList) {
		this.nationList = nationList;
	}

	public NationService getNationService() {
		return nationService;
	}

	public void setNationService(NationService nationService) {
		this.nationService = nationService;
	}
	
	//返回民族列表
	public String findNationList() throws Exception{
		nationList = nationService.findAll();
		return SUCCESS;
	}
}
