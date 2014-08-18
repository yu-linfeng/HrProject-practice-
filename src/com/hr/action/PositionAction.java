package com.hr.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONObject;

import com.hr.bean.Position;
import com.hr.service.PositionService;
import com.opensymphony.xwork2.ActionSupport;

public class PositionAction extends ActionSupport {
	private List<Position> allPosition;		//得到所有岗位
	private PositionService positionService;
	private Position singlePosition;
	private JSONObject jsonObject;
	private String jsonAll,  jsonDelete, jsonEdit, jsonFind;
	private Map dataMap_addPosition, dataMap_deletePosition, dataMap_editPosition;
	public List<Position> getAllPosition() {
		return allPosition;
	}
	public void setAllPosition(List<Position> allPosition) {
		this.allPosition = allPosition;
	}
	public PositionService getPositionService() {
		return positionService;
	}
	public void setPositionService(PositionService positionService) {
		this.positionService = positionService;
	}
	public Position getSinglePosition() {
		return singlePosition;
	}
	public void setSinglePosition(Position singlePosition) {
		this.singlePosition = singlePosition;
	}
	public String getJsonAll() {
		return jsonAll;
	}
	public void setJsonAll(String jsonAll) {
		this.jsonAll = jsonAll;
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
	public String getJsonFind() {
		return jsonFind;
	}
	public void setJsonFind(String jsonFind) {
		this.jsonFind = jsonFind;
	}
	public JSONObject getJsonObject() {
		return jsonObject;
	}
	public void setJsonObject(JSONObject jsonObject) {
		this.jsonObject = jsonObject;
	}
	public Map getDataMap_addPosition() {
		return dataMap_addPosition;
	}
	public void setDataMap_addPosition(Map dataMap_addPosition) {
		this.dataMap_addPosition = dataMap_addPosition;
	}
	public Map getDataMap_deletePosition() {
		return dataMap_deletePosition;
	}
	public void setDataMap_deletePosition(Map dataMap_deletePosition) {
		this.dataMap_deletePosition = dataMap_deletePosition;
	}
	public Map getDataMap_editPosition() {
		return dataMap_editPosition;
	}
	public void setDataMap_editPosition(Map dataMap_editPosition) {
		this.dataMap_editPosition = dataMap_editPosition;
	}
	//所有岗位信息
	public String allPosition() throws Exception{
		allPosition = positionService.findAll();		//从服务层得到所有岗位信息
		return SUCCESS;
	}
	//添加岗位信息
	public String addPosition() throws Exception{
		//在此获得从前台获得岗位信息的JSON字符串
		jsonObject = JSONObject.fromObject(jsonAll);
		singlePosition = new Position();
		//将获取的JSON添加到Position对象字段中
		singlePosition.setPositionName(jsonObject.getString("positionName"));
		singlePosition.setHigherPosition(jsonObject.getString("higherPosition"));
		singlePosition.setPositionDuty(jsonObject.getString("positionDuty"));
		singlePosition.setPositionQualification(jsonObject.getString("positionQualification"));
		singlePosition.setPositionPower(jsonObject.getString("positionPower"));
		singlePosition.setPositionContent(jsonObject.getString("positionContent"));
		positionService.save(singlePosition);
		//返回成功信息
		dataMap_addPosition = new HashMap<String, Object>();
		dataMap_addPosition.put("success", true);
		return SUCCESS;
	}
	//删除岗位
	public String deletePosition() throws Exception{
		//在此获得从前台传来的JSON
		jsonObject = JSONObject.fromObject(jsonDelete);
		singlePosition = new Position();
		//将获取的JSON添加到Position对象字段中
		singlePosition.setPositionId(jsonObject.getInt("positionId"));
		singlePosition.setPositionName(jsonObject.getString("positionName"));
		singlePosition.setHigherPosition(jsonObject.getString("higherPosition"));
		singlePosition.setPositionDuty(jsonObject.getString("positionDuty"));
		singlePosition.setPositionQualification(jsonObject.getString("positionQualification"));
		singlePosition.setPositionPower(jsonObject.getString("positionPower"));
		singlePosition.setPositionContent(jsonObject.getString("positionContent"));
		positionService.delete(singlePosition);
		//返回成功信息
		dataMap_deletePosition = new HashMap<String, Object>();
		dataMap_deletePosition.put("success", true);
		return SUCCESS;
	}
	//修改岗位
	public String editPosition() throws Exception{
		//在此获得从前台传来的JSON
		jsonObject = JSONObject.fromObject(jsonEdit);
		singlePosition = new Position();
		//将获取的JSON添加到Position对象字段中
		singlePosition.setPositionId(jsonObject.getInt("positionId"));
		singlePosition.setPositionName(jsonObject.getString("positionName"));
		singlePosition.setHigherPosition(jsonObject.getString("higherPosition"));
		singlePosition.setPositionDuty(jsonObject.getString("positionDuty"));
		singlePosition.setPositionQualification(jsonObject.getString("positionQualification"));
		singlePosition.setPositionPower(jsonObject.getString("positionPower"));
		singlePosition.setPositionContent(jsonObject.getString("positionContent"));
		positionService.update(singlePosition);
		//返回成功信息
		dataMap_editPosition = new HashMap<String, Object>();
		dataMap_editPosition.put("success", true);
		return SUCCESS;
	}
	//根据岗位名称查询岗位
	public String findPostionByName() throws Exception{
		//得到岗位名称
		jsonObject = JSONObject.fromObject(jsonFind);
		String value = jsonObject.getString("positionName");
		//根据岗位名称查询岗位信息
		allPosition = positionService.findByName("positionName", value);
		return SUCCESS;
	}
	//返回岗位名称列表
	public String positionNameList() throws Exception{
		List<String> positionNameList = positionService.positionNameList();
		return SUCCESS;
	}
}
