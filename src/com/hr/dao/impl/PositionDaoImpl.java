package com.hr.dao.impl;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.hr.bean.Position;
import com.hr.bean.Title;
import com.hr.dao.PositionDao;

public class PositionDaoImpl extends HibernateDaoSupport implements PositionDao {

	@Override
	public void savePosition(Position position) {		//新增岗位
		// TODO Auto-generated method stub		
		this.getHibernateTemplate().save(position);
	}

	@Override
	public void removePosition(Position position) {		//删除岗位
		// TODO Auto-generated method stub
		this.getHibernateTemplate().delete(position);
	}

	@Override
	public void updatePosition(Position position) {		//修改岗位
		// TODO Auto-generated method stub
		this.getHibernateTemplate().update(position);
	}

	@Override
	public List<Position> findPositionByName(String positionName, Object value) {		//查询岗位
		// TODO Auto-generated method stub
		String queryString = "from Position position where position." + positionName + "= ?";
//		Title title = (Title)this.getHibernateTemplate().find(queryString, value);
		return (List<Position>)this.getHibernateTemplate().find(queryString, value);
	}

	@Override
	public List<Position> findAllPosition() {	//查找所有岗位信息
		// TODO Auto-generated method stub
		String hql = "from Position position order by position.positionName desc";
		return (List<Position>)this.getHibernateTemplate().find(hql);
	}

	@Override
	public List<String> findPositionName() {		//返回所有岗位名称，在员工入职管理中会用到
		String queryPositon = "select positionName from Position position";
		List<String> positionNameList = (List<String>)this.getHibernateTemplate().find(queryPositon);
		return positionNameList;
	}

}
