package com.hr.service;

import java.util.List;

import com.hr.bean.Title;

/*定义Title服务层接口*/
public interface TitleService {
	public void save(Title title);		//新增职称
	public void delete(Title title);		//删除职称
	public void update(Title title);		//修改职称
	public List<Title> findByName(String titleName, Object value);		//查询职称
	public List<Title> findAll();		//查询所有职称		；之所以返回值是String字符串，是因为在此服务层须将Dao层返回来的List<Title>解析成json字符串返回给Action，Action再将json字符串返回给前台js解析，以此实现低耦合高内聚
	public List<String> findTitleNameList();		//取出所有的职称信息，在员工入职管理中会用到
}
