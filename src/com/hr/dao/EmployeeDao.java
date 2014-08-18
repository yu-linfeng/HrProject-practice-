package com.hr.dao;

import java.util.List;

import com.hr.bean.Employee;

public interface EmployeeDao {
	public void saveEmployee(Employee employee); // 保存新增员工

	public void removeEmployee(Employee employee); // 删除员工

	public void updateEmployee(Employee employee); // 修改员工信息

	public List<Employee> findStaffByNo(String employeeNo, Object value); // 根据员工工号查找员工信息
}
