package com.hr.dao;

import java.util.List;

import com.hr.bean.Title;

public interface TitleDao {
	/*定义操作职称信息管理Title的DAO接口*/
	public void saveTitle(Title title);		//保存新增职称信息
	public void removeTitle(Title title);		//删除职称信息
	public void updateTitle(Title title);		//修改职称信息
	public List<Title> findTitleByName(String titleName, Object value);		//根据职称名查找职称信息
	public List<Title> findAllTitle();		//查询所有职称信息，用于返回显示到GridPanel中
	public List<String> findTitleName();		//在员工入职管理中需要用到职称下拉框
}
