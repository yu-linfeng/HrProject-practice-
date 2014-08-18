package com.hr.service.impl;

import java.util.List;

import com.hr.bean.Reg;
import com.hr.dao.RegDao;
import com.hr.service.RegService;

public class RegServiceImpl implements RegService {
	private RegDao regDao;
	
	public RegDao getRegDao() {
		return regDao;
	}

	public void setRegDao(RegDao regDao) {
		this.regDao = regDao;
	}

	@Override
	public List<Reg> findAll() {
		List<Reg> regList = regDao.findAllReg();
		return regList;
	}

}
