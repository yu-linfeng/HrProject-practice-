package com.hr.service.impl;

import java.util.List;

import com.hr.bean.Nation;
import com.hr.dao.NationDao;
import com.hr.service.NationService;

public class NationServiceImpl implements NationService {
	private NationDao nationDao;
	public NationDao getNationDao() {
		return nationDao;
	}
	public void setNationDao(NationDao nationDao) {
		this.nationDao = nationDao;
	}
	@Override
	public List<Nation> findAll() {
		List<Nation> nationList = nationDao.findAllNation();
		return nationList;
	}

}
