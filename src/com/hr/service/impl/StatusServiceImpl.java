package com.hr.service.impl;

import java.util.List;

import com.hr.bean.Status;
import com.hr.dao.StatusDao;
import com.hr.service.StatusService;

public class StatusServiceImpl implements StatusService {
	private StatusDao statusDao;
	public StatusDao getStatusDao() {
		return statusDao;
	}
	public void setStatusDao(StatusDao statusDao) {
		this.statusDao = statusDao;
	}
	@Override
	public List<Status> findAdll() {
		List<Status> statusList = statusDao.findAllStatus();
		return statusList;
	}

}
