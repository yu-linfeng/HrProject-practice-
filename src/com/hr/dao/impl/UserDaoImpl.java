package com.hr.dao.impl;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import com.hr.bean.User;
import com.hr.dao.UserDao;

//29行有错!!!
public class UserDaoImpl extends HibernateDaoSupport implements UserDao{
	
	@Override
	public void saveUser(User user) {		//实现用户添加
		// TODO Auto-generated method stub
		this.getHibernateTemplate().save(user);
	}

	@Override
	public void removeUser(User user) {		//实现用户删除
		// TODO Auto-generated method stub
		this.getHibernateTemplate().delete(user);
	}

	@Override
	public User findUserByName(String name) {		//实现根据用户姓名查找
		// TODO Auto-generated method stub
		User user = (User)this.getHibernateTemplate().get(User.class, name);	//此处有错！！
		
		return user;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<User> finAllUsers() {		//实现查询所有用户
		// TODO Auto-generated method stub
		String hql = "from User user order by user.name desc";
		return (List<User>)this.getHibernateTemplate().find(hql);
	}

	@Override
	public void updateUser(User user) {		//实现修改用户
		// TODO Auto-generated method stub
		this.getHibernateTemplate().update(user);
	}

	@Override
	public boolean loginCheck(String name, String pwd) {		//实现登录验证，根据用户输入的用户名和密码，在数据中进行查询。找到返回true
		String str[] = {name, pwd};
		List l = this.getHibernateTemplate().find("from User u where u.name=? and u.pwd=?", str);
		if (l.size() > 0){
		//	User user = (User)this.getHibernateTemplate().get(User.class, name);	//用户正确，则保存信息到user
			return true;
		}else{
			return false;
		}
	}
}
