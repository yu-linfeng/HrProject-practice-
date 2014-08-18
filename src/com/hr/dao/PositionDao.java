package com.hr.dao;

import java.util.List;

import com.hr.bean.Position;
import com.hr.bean.Title;

public interface PositionDao {
	/*定义操作岗位信息管理Position的DAO接口*/
	public void savePosition(Position position);		//保存新增岗位信息
	public void removePosition(Position position);		//删除岗位信息
	public void updatePosition(Position position);		//修改岗位信息
	public List<Position> findPositionByName(String positionName, Object value);		//根据职称名查找岗位信息
	public List<Position> findAllPosition();		//查询所有岗位信息，用于返回显示到GridPanel中
	public List<String> findPositionName();	//查询所有岗位名称，在员工职称管理中会用到
}
