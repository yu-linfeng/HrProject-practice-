package com.hr.service;

import java.util.List;

import com.hr.bean.Employee;

public interface EmployeeService {
	public void save(Employee employee); // 新增员工

	public void delete(Employee employee); // 删除员工

	public void update(Employee employee); // 修改员工

	public List<Employee> find(String employeeNo, Object value); // 查询员工
}
