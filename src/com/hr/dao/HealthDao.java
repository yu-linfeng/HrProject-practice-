package com.hr.dao;

import java.util.List;

import com.hr.bean.Health;

public interface HealthDao {
	public List<Health> findAllHealth();
}
