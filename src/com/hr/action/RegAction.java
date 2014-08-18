package com.hr.action;

import java.util.List;

import com.hr.bean.Reg;
import com.hr.service.RegService;
import com.opensymphony.xwork2.ActionSupport;

public class RegAction extends ActionSupport {
	private RegService regService;
	private List<Reg> regList;
	public RegService getRegService() {
		return regService;
	}
	public void setRegService(RegService regService) {
		this.regService = regService;
	}
	public List<Reg> getRegList() {
		return regList;
	}
	public void setRegList(List<Reg> regList) {
		this.regList = regList;
	}
	//获取户口类型列表
	public String findRegList() throws Exception{
		regList = regService.findAll();
		return SUCCESS;
	}
}
