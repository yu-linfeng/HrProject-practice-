package com.hr.service.impl;

import java.util.List;

import com.hr.bean.Party;
import com.hr.dao.PartyDao;
import com.hr.service.PartyService;

public class PartyServiceImpl implements PartyService {
	private PartyDao partyDao;
	public PartyDao getPartyDao() {
		return partyDao;
	}
	public void setPartyDao(PartyDao partyDao) {
		this.partyDao = partyDao;
	}
	@Override
	public List<Party> findAll() {
		List<Party> party = partyDao.findAllParty();
		return party;
	}

}
