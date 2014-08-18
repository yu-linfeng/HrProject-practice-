package com.hr.dao.impl;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.hr.bean.EduLevel;
import com.hr.dao.EduLevelDao;

public class EduLevelDaoImpl extends HibernateDaoSupport implements EduLevelDao {

	@Override
	public List<EduLevel> findAllEduLevel() {
		String hql = "from EduLevel eduLevel order by eduLevel.eduId desc";
		return (List<EduLevel>)this.getHibernateTemplate().find(hql);
	}
}
