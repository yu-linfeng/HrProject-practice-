package com.hr.dao.impl;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.hr.bean.Health;
import com.hr.dao.HealthDao;

public class HealthDaoImpl extends HibernateDaoSupport implements HealthDao {

	@Override
	public List<Health> findAllHealth() {
		String hql = "from Health health order by health.healthId desc";
		return (List<Health>)this.getHibernateTemplate().find(hql);
	}

}
