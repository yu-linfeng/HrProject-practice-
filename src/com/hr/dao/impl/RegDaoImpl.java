package com.hr.dao.impl;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.hr.bean.Reg;
import com.hr.dao.RegDao;

public class RegDaoImpl extends HibernateDaoSupport implements RegDao {

	@Override
	public List<Reg> findAllReg() {
		String hql = "from Reg reg order by reg.regId desc";
		return (List<Reg>)this.getHibernateTemplate().find(hql);
	}
}
