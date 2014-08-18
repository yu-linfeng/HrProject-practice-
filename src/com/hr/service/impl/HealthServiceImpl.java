package com.hr.service.impl;

import java.util.List;

import com.hr.bean.Health;
import com.hr.dao.HealthDao;
import com.hr.service.HealthService;

public class HealthServiceImpl implements HealthService {
	private HealthDao healthDao;

	public HealthDao getHealthDao() {
		return healthDao;
	}

	public void setHealthDao(HealthDao healthDao) {
		this.healthDao = healthDao;
	}

	@Override
	public List<Health> findAll() {
		List<Health> healthList = healthDao.findAllHealth();
		return healthList;
	}

}
