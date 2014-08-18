package com.hr.action;

import java.util.List;

import com.hr.bean.Status;
import com.hr.service.StatusService;
import com.opensymphony.xwork2.ActionSupport;

public class StatusAction extends ActionSupport {
	private StatusService statusService;
	private List<Status> statusList;
	public StatusService getStatusService() {
		return statusService;
	}
	public void setStatusService(StatusService statusService) {
		this.statusService = statusService;
	}
	public List<Status> getStatusList() {
		return statusList;
	}
	public void setStatusList(List<Status> statusList) {
		this.statusList = statusList;
	}
	//获取所有状态列表
	public String findStatusList() throws Exception{
		statusList = statusService.findAdll();
		return SUCCESS;
	}
}
