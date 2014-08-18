package com.hr.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONObject;

import com.hr.bean.Employee;
import com.hr.service.EmployeeService;
import com.opensymphony.xwork2.ActionSupport;

public class EmployeeAction extends ActionSupport {
	private EmployeeService employeeService;
	private List<Employee> employee; // 根据员工号所查询的员工信息（其实只有一个）
	private JSONObject jsonObject;
	private Employee employeeSingle; // 前台传回传的新添加的职称
	private Map dataMap_addStaff, dataMap_deleteStaff, dataMap_editStaff;
	private String jsonEmployee, jsonDelete, jsonEdit, jsonFind;

	public List<Employee> getEmployee() {
		return employee;
	}

	public void setEmployee(List<Employee> employee) {
		this.employee = employee;
	}

	public EmployeeService getEmployeeService() {
		return employeeService;
	}

	public void setEmployeeService(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}

	public JSONObject getJsonObject() {
		return jsonObject;
	}

	public void setJsonObject(JSONObject jsonObject) {
		this.jsonObject = jsonObject;
	}

	public Employee getEmployeeSingle() {
		return employeeSingle;
	}

	public void setEmployeeSingle(Employee employeeSingle) {
		this.employeeSingle = employeeSingle;
	}

	public Map getDataMap_addStaff() {
		return dataMap_addStaff;
	}

	public void setDataMap_addStaff(Map dataMap_addStaff) {
		this.dataMap_addStaff = dataMap_addStaff;
	}

	public Map getDataMap_deleteStaff() {
		return dataMap_deleteStaff;
	}

	public void setDataMap_deleteStaff(Map dataMap_deleteStaff) {
		this.dataMap_deleteStaff = dataMap_deleteStaff;
	}

	public Map getDataMap_editStaff() {
		return dataMap_editStaff;
	}

	public void setDataMap_editStaff(Map dataMap_editStaff) {
		this.dataMap_editStaff = dataMap_editStaff;
	}

	public String getJsonEmployee() {
		return jsonEmployee;
	}

	public void setJsonEmployee(String jsonEmployee) {
		this.jsonEmployee = jsonEmployee;
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

	// 新增员工
	public String addStaff() throws Exception {
		// 接受JSON字符串
		jsonObject = JSONObject.fromObject(jsonEmployee);
		employeeSingle = new Employee();
		// 获取解析并保存
		employeeSingle.setEmployDept(jsonObject.getString("employDept"));
		employeeSingle.setEmploytTitle(jsonObject.getString("employtTitle"));
		employeeSingle.setEmployPosi(jsonObject.getString("employPosi"));
		employeeSingle.setEmployName(jsonObject.getString("employName"));
		employeeSingle.setEmployNo(jsonObject.getString("employNo"));
		employeeSingle.setEmploySex(jsonObject.getString("employSex"));
		employeeSingle.setEmployDept(jsonObject.getString("employDept"));
		employeeSingle.setEmployIdCard(jsonObject.getString("employIdCard"));
		employeeSingle
				.setEmployBirthday(jsonObject.getString("employBirthday"));
		employeeSingle.setEmployPlace(jsonObject.getString("employPlace"));
		employeeSingle.setEmployEdu(jsonObject.getString("employEdu"));
		employeeSingle.setEmployNation(jsonObject.getString("employNation"));
		employeeSingle.setEmployParty(jsonObject.getString("employParty"));
		employeeSingle.setEmployHealth(jsonObject.getString("employHealth"));
		employeeSingle.setEmployType(jsonObject.getString("employType"));
		employeeSingle.setEmployStatus(jsonObject.getString("employStatus"));

		employeeService.save(employeeSingle); // 保存新增的员工信息

		dataMap_addStaff = new HashMap<String, Object>();
		dataMap_addStaff.put("success", true); // 向前台返回保存成功信息
		return SUCCESS;
	}
	//查询员工信息
	public String findStaff() throws Exception{
			jsonObject = JSONObject.fromObject(jsonFind);
			String value = jsonObject.getString("employNo");		
			employee = employeeService.find("employNo", value);
			
			return SUCCESS;
	}
	//修改员工基本信息
	public String editEmploy() throws Exception{
		// 在此处理从前台传回来得JSON
		jsonObject = JSONObject.fromObject(jsonEdit);
		employeeSingle = new Employee();
		//获取并解析JSON
		employeeSingle.setEmployId(jsonObject.getInt("employId"));
		employeeSingle.setEmployNo(jsonObject.getString("employNo"));
		employeeSingle.setEmployName(jsonObject.getString("employName"));
		employeeSingle.setEmployBirthday(jsonObject.getString("employBirthday"));
		employeeSingle.setEmployIdCard(jsonObject.getString("employIdCard"));
		employeeSingle.setEmployPlace(jsonObject.getString("employPlace"));
		employeeSingle.setEmployEdu(jsonObject.getString("employEdu"));
		employeeSingle.setEmployNation(jsonObject.getString("employNation"));
		employeeSingle.setEmployParty(jsonObject.getString("employParty"));
		employeeSingle.setEmployHealth(jsonObject.getString("employHealth"));
		employeeSingle.setEmployType(jsonObject.getString("employType"));
		employeeSingle.setEmployPosi(jsonObject.getString("employPosi"));
		employeeSingle.setEmploytTitle(jsonObject.getString("employtTitle"));
		employeeSingle.setEmployDept(jsonObject.getString("employDept"));
		employeeSingle.setEmployStatus(jsonObject.getString("employStatus"));
		employeeSingle.setEmploySex(jsonObject.getString("employSex"));
		employeeService.update(employeeSingle);
		
		dataMap_editStaff = new HashMap<String, Object>();
		dataMap_editStaff.put("success", true);
		return SUCCESS;
	}
}
