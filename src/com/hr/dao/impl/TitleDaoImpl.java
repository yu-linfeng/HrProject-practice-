package com.hr.dao.impl;

import java.util.List;

import org.hibernate.*;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.hr.bean.Title;
import com.hr.dao.TitleDao;

public class TitleDaoImpl extends HibernateDaoSupport implements TitleDao {

	@Override
	public void saveTitle(Title title) {
		// TODO Auto-generated method stub
		this.getHibernateTemplate().save(title);		//实现新增用户方法
	}

	@Override
	public void removeTitle(Title title) {
		// TODO Auto-generated method stub
		this.getHibernateTemplate().delete(title);
	}

	@Override
	public void updateTitle(Title title) {
		// TODO Auto-generated method stub
		this.getHibernateTemplate().update(title);
	}

	@Override
	public List<Title> findTitleByName(String titleName, Object value) {
		// TODO Auto-generated method stub
//		Title title = (Title)this.getHibernateTemplate().get(entityClass, id)
		String queryString = "from Title title where title." + titleName + "= ?";
//		Title title = (Title)this.getHibernateTemplate().find(queryString, value);
		return (List<Title>)this.getHibernateTemplate().find(queryString, value);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Title> findAllTitle() {
		// TODO Auto-generated method stub
		String hql = "from Title title order by title.titleName desc";
		return (List<Title>)this.getHibernateTemplate().find(hql);
	}

	@Override
	public List<String> findTitleName() {		//单独提取出职称List在员工入职管理中会用到
//		Session session = HibernateSessionFactory.currentSession();
		String hql = "select titleName from Title title";
//		Query query = HibernateSessionFactory.currentSession().createQuery(hql);
		List<String> titleNameList = this.getHibernateTemplate().find(hql);
		return titleNameList;
	}

}
