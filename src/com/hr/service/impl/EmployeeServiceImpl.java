package com.hr.service.impl;

import java.util.List;

import com.hr.bean.Employee;
import com.hr.dao.EmployeeDao;
import com.hr.service.EmployeeService;

public class EmployeeServiceImpl implements EmployeeService {
	private EmployeeDao employeeDao;
	public EmployeeDao getEmployeeDao() {
		return employeeDao;
	}

	public void setEmployeeDao(EmployeeDao employeeDao) {
		this.employeeDao = employeeDao;
	}

	@Override
	public void save(Employee employee) {
		// TODO Auto-generated method stub
		this.employeeDao.saveEmployee(employee);
	}

	@Override
	public void delete(Employee employee) {
		// TODO Auto-generated method stub
		this.employeeDao.removeEmployee(employee);
	}

	@Override
	public void update(Employee employee) {
		// TODO Auto-generated method stub
		this.employeeDao.updateEmployee(employee);
	}

	@Override
	public List<Employee> find(String employeeNo, Object value) {
		// TODO Auto-generated method stub
		List<Employee> employee = employeeDao.findStaffByNo(employeeNo, value);
		return employee;
	}

}
