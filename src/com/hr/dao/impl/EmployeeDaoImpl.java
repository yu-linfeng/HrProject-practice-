package com.hr.dao.impl;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.hr.bean.Employee;
import com.hr.dao.EmployeeDao;

public class EmployeeDaoImpl extends HibernateDaoSupport implements EmployeeDao {

	@Override
	public void saveEmployee(Employee employee) {		//新增员工
		// TODO Auto-generated method stub
		this.getHibernateTemplate().save(employee);
	}

	@Override
	public void removeEmployee(Employee employee) {		//删除员工
		// TODO Auto-generated method stub
		this.getHibernateTemplate().delete(employee);
	}

	@Override
	public void updateEmployee(Employee employee) {		//修改员工
		// TODO Auto-generated method stub
		this.getHibernateTemplate().update(employee);
	}

	@Override
	public List<Employee> findStaffByNo(String employeeNo, Object value) {
		// TODO Auto-generated method stub
		String queryString = "from Employee employee where employee." + employeeNo + "= ?";
		return (List<Employee>)this.getHibernateTemplate().find(queryString, value);
	}
}
