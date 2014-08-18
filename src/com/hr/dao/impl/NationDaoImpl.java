package com.hr.dao.impl;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.hr.bean.Nation;
import com.hr.dao.NationDao;

public class NationDaoImpl extends HibernateDaoSupport implements NationDao {

	@Override
	public List<Nation> findAllNation() {
		String hql = "from Nation nation order by nation.nationId desc";
		return (List<Nation>)this.getHibernateTemplate().find(hql);
	}
}
