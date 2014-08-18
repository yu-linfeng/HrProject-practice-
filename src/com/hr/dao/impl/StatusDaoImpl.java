package com.hr.dao.impl;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.hr.bean.Status;
import com.hr.dao.StatusDao;

public class StatusDaoImpl extends HibernateDaoSupport implements StatusDao {

	@Override
	public List<Status> findAllStatus() {
		String hql = "from Status status order by status.statusId desc";
		return (List<Status>)this.getHibernateTemplate().find(hql);
	}

}
