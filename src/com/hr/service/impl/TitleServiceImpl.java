package com.hr.service.impl;

import java.util.List;

import com.hr.bean.Title;
import com.hr.dao.TitleDao;
import com.hr.service.TitleService;

public class TitleServiceImpl implements TitleService {
	private TitleDao titleDao;
	
	public TitleDao getTitleDao() {
		return titleDao;
	}

	public void setTitleDao(TitleDao titleDao) {
		this.titleDao = titleDao;
	}

	@Override
	public void save(Title title) {			//实现新增职称
		// TODO Auto-generated method stub
		this.titleDao.saveTitle(title);
	}

	@Override
	public void delete(Title title) {
		// TODO Auto-generated method stub
		this.titleDao.removeTitle(title);		//实现删除职称信息
	}

	@Override
	public void update(Title title) {
		// TODO Auto-generated method stub
		this.titleDao.updateTitle(title);		//实现修改职称信息
	}

	@Override
	public List<Title> findByName(String titleName, Object value) {		//实现根据职称名查找职称信息
		// TODO Auto-generated method stub
		List<Title> findByName =  this.titleDao.findTitleByName(titleName, value);
		return findByName;
	}

	@Override
	public List<Title> findAll() {				//此处服务层须将把返回来的List通过for循环转换成json字符串，再返回给Action，Action再将字符串返回给js解析
		// TODO Auto-generated method stub
//		String str = "abc";
		List<Title> allTitleList = this.titleDao.findAllTitle();		//此处返回的是一个List<Title>需要将其转换成Json字符串
		//JSONArray allTitleJson = JSONArray.fromObject(allTitleList);
		return allTitleList;
	}

	@Override
	public List<String> findTitleNameList() {
		List<String> titleNameList = titleDao.findTitleName();
		return titleNameList;
	}
	
}
