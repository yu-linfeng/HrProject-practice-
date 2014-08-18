package com.hr.action;

import java.util.List;


import com.hr.bean.EduLevel;
import com.hr.service.EduLevelService;
import com.opensymphony.xwork2.ActionSupport;

public class EduAction extends ActionSupport {
	private EduLevelService eduLevelService;
	private List<EduLevel> eduList;
	
	public List<EduLevel> getEduList() {
		return eduList;
	}
	public void setEduList(List<EduLevel> eduList) {
		this.eduList = eduList;
	}
	public EduLevelService getEduLevelService() {
		return eduLevelService;
	}
	public void setEduLevelService(EduLevelService eduLevelService) {
		this.eduLevelService = eduLevelService;
	}
	//返回学历列表
	public String findEduList() throws Exception{
		eduList = eduLevelService.findAll();
		return SUCCESS;
	}
}
