package com.hr.action;

import java.util.List;

import com.hr.bean.Party;
import com.hr.service.PartyService;
import com.opensymphony.xwork2.ActionSupport;

public class PartyAction extends ActionSupport {
	private PartyService partyService;
	private List<Party> partyList;
	public PartyService getPartyService() {
		return partyService;
	}
	public void setPartyService(PartyService partyService) {
		this.partyService = partyService;
	}
	public List<Party> getPartyList() {
		return partyList;
	}
	public void setPartyList(List<Party> partyList) {
		this.partyList = partyList;
	}
	//获取政治面貌列表
	public String findPartyList() throws Exception{
		partyList = partyService.findAll();
		return SUCCESS;
	}
}
