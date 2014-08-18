package com.hr.service.impl;

import java.util.List;

import com.hr.bean.EduLevel;
import com.hr.dao.EduLevelDao;
import com.hr.service.EduLevelService;

public class EduLevelServiceImpl implements EduLevelService {
	private EduLevelDao eduLevelDao;
	public EduLevelDao getEduLevelDao() {
		return eduLevelDao;
	}
	public void setEduLevelDao(EduLevelDao eduLevelDao) {
		this.eduLevelDao = eduLevelDao;
	}
	@Override
	public List<EduLevel> findAll() {
		List<EduLevel> allEdu = eduLevelDao.findAllEduLevel();
		return allEdu;
	}

}
