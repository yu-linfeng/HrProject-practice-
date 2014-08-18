package com.hr.service;

import java.util.List;

import com.hr.bean.Position;

public interface PositionService {
	public void save(Position position);		//新增岗位
	public void delete(Position position);		//删除岗位
	public void update(Position position);		//修改岗位
	public List<Position> findByName(String positionName, Object value);		//查询职称
	public List<Position> findAll();		//查询所有岗位信息	
	public List<String> positionNameList();		//返回岗位名称列表，在员工中的岗位名称的下拉框会用到
}
