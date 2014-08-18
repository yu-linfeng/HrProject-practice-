package com.hr.dao.impl;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.hr.bean.Party;
import com.hr.dao.PartyDao;

public class PartyDaoImpl extends HibernateDaoSupport implements PartyDao {

	@Override
	public List<Party> findAllParty() {
		String hql = "from Party party order by party.partyId desc";
		
		return (List<Party>)this.getHibernateTemplate().find(hql);
	}
}
