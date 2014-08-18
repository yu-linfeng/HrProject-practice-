package com.hr.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONObject;

import com.hr.bean.Title;
import com.hr.service.TitleService;
import com.opensymphony.xwork2.ActionSupport;

public class TitleAction extends ActionSupport {
	private List<Title> title;		//从数据库得到的List列表
	private TitleService titleService;
	private Title titleSingle;		//前台传回传的新添加的职称
	private JSONObject jsonObject;
	private String json, jsonDelete, jsonEdit, jsonFind;
	private Map dataMap_addTitle, dataMap_deleteTitle, dataMap_editTitle;
	


	public Map getDataMap_addTitle() {
		return dataMap_addTitle;
	}
	public void setDataMap_addTitle(Map dataMap_addTitle) {
		this.dataMap_addTitle = dataMap_addTitle;
	}
	public Map getDataMap_deleteTitle() {
		return dataMap_deleteTitle;
	}
	public void setDataMap_deleteTitle(Map dataMap_deleteTitle) {
		this.dataMap_deleteTitle = dataMap_deleteTitle;
	}
	public String getJson() {
		return json;
	}
	public void setJson(String json) {
		this.json = json;
	}
	public String getJsonDelete() {
		return jsonDelete;
	}
	public void setJsonDelete(String jsonDelete) {
		this.jsonDelete = jsonDelete;
	}
	public String getJsonEdit() {
		return jsonEdit;
	}
	public void setJsonEdit(String jsonEdit) {
		this.jsonEdit = jsonEdit;
	}
	public Title getTitleSingle() {
		return titleSingle;
	}
	public String getJsonFind() {
		return jsonFind;
	}
	public void setJsonFind(String jsonFind) {
		this.jsonFind = jsonFind;
	}
	public void setTitleSingle(Title titleSingle) {
		this.titleSingle = titleSingle;
	}
	public JSONObject getJsonObject() {
		return jsonObject;
	}
	public void setJsonObject(JSONObject jsonObject) {
		this.jsonObject = jsonObject;
	}
	public List<Title> getTitle() {
		return title;
	}
	public void setTitle(List<Title> title) {
		this.title = title;
	}
	public TitleService getTitleService() {
		return titleService;
	}
	public void setTitleService(TitleService titleService) {
		this.titleService = titleService;
	}
	public Map getDataMap_editTitle() {
		return dataMap_editTitle;
	}
	public void setDataMap_editTitle(Map dataMap_editTitle) {
		this.dataMap_editTitle = dataMap_editTitle;
	}
	//获取职称信息
	public String allTitleJson() throws Exception{
		title = titleService.findAll();
		return SUCCESS;			//将json字符串传递给前台进行解析
	}
	//添加职称信息
	public String addTitle() throws Exception{
		// 在此处理从前台传回来得JSON
		jsonObject = JSONObject.fromObject(json);
		titleSingle = new Title();
		//获取并解析JSON
		titleSingle.setTitleName(jsonObject.getString("titleName"));
		titleSingle.setQualification(jsonObject.getString("qualification"));
		titleSingle.setDuty(jsonObject.getString("duty"));
		titleSingle.setWorkTarget(jsonObject.getString("workTarget"));
		titleService.save(titleSingle);		//调用服务层保存数据
		
		dataMap_addTitle = new HashMap<String, Object>();
		dataMap_addTitle.put("success", true); 	//向前台返回保存成功信息
		return SUCCESS;
	}
	//删除职称信息
	public String deleteTitle() throws Exception{
		// 在此处理从前台传回来得JSON
		jsonObject = JSONObject.fromObject(jsonDelete);
		titleSingle = new Title();
		//获取并解析JSON
		titleSingle.setId(jsonObject.getInt("id"));
		titleSingle.setTitleName(jsonObject.getString("titleName"));
		titleSingle.setQualification(jsonObject.getString("qualification"));
		titleSingle.setDuty(jsonObject.getString("duty"));
		titleSingle.setWorkTarget(jsonObject.getString("workTarget"));
		titleService.delete(titleSingle);	//调用服务层保存数据
		
		dataMap_deleteTitle = new HashMap<String, Object>();
		dataMap_deleteTitle.put("success", true); 	//向前台返回保存成功信息
		return SUCCESS;
	}
	//修改职称信息
	public String editTitle() throws Exception{
		// 在此处理从前台传回来得JSON
		jsonObject = JSONObject.fromObject(jsonEdit);
		titleSingle = new Title();
		//获取并解析JSON
		titleSingle.setId(jsonObject.getInt("id"));
		titleSingle.setTitleName(jsonObject.getString("titleName"));
		titleSingle.setQualification(jsonObject.getString("qualification"));
		titleSingle.setDuty(jsonObject.getString("duty"));
		titleSingle.setWorkTarget(jsonObject.getString("workTarget"));
		titleService.update(titleSingle);	//调用服务层修改数据
		//返回成功
		dataMap_editTitle = new HashMap<String, Object>();
		dataMap_editTitle.put("success", true);
		return SUCCESS;
	}
	//查询职称信息
	public String findByTitleName() throws Exception{
		//得到职称名称
		jsonObject = JSONObject.fromObject(jsonFind);
		String value = jsonObject.getString("titleName");		
		title = titleService.findByName("titleName", value);
		return SUCCESS;
	}
	//获得职称名称列表，在员工入职管理中会调用
	public String titleNameList() throws Exception{
		List<String> titleNameList = titleService.findTitleNameList();
		return SUCCESS;
	}
}
