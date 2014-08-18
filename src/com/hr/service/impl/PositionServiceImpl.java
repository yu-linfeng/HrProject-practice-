package com.hr.service.impl;

import java.util.List;

import com.hr.bean.Position;
import com.hr.dao.PositionDao;
import com.hr.service.PositionService;

public class PositionServiceImpl implements PositionService {
	private PositionDao positionDao;

	public PositionDao getPositionDao() {
		return positionDao;
	}

	public void setPositionDao(PositionDao positionDao) {
		this.positionDao = positionDao;
	}

	@Override
	public void save(Position position) {		//新增岗位
		// TODO Auto-generated method stub
		this.positionDao.savePosition(position);
	}

	@Override
	public void delete(Position position) {	//删除岗位
		// TODO Auto-generated method stub
		this.positionDao.removePosition(position);
	}

	@Override
	public void update(Position position) {		//修改岗位
		// TODO Auto-generated method stub
		this.positionDao.updatePosition(position);
	}

	@Override
	public List<Position> findByName(String positionName, Object value) {		//查询岗位
		List<Position> findByName =  this.positionDao.findPositionByName(positionName, value);
		return findByName;
	}

	@Override
	public List<Position> findAll() {	//查询所有岗位
		// TODO Auto-generated method stub
		List<Position> allPositionList = this.positionDao.findAllPosition();
		return allPositionList;
	}

	@Override
	public List<String> positionNameList() {		//取出所有岗位名称
		List<String> positionNameList = this.positionDao.findPositionName();
		return positionNameList;
	}

}
