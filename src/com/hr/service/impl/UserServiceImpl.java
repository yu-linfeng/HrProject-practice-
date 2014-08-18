package com.hr.service.impl;

import java.util.List;

import com.hr.bean.User;
import com.hr.dao.UserDao;
import com.hr.service.UserService;

//UserService接口实现类
public class UserServiceImpl implements UserService  {
	private UserDao userDao;
	
	public UserDao getUserDao() {
		return userDao;
	}
	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	@Override
	public List<User> findAll() {		//实现查询所有用户
		// TODO Auto-generated method stub
		return this.userDao.finAllUsers();
	}
	
	@Override
	public void save(User user) {		//实现添加用户
		// TODO Auto-generated method stub
		this.userDao.saveUser(user);
	}

	@Override
	public void delete(User user) {		//实现删除用户
		// TODO Auto-generated method stub
		this.userDao.removeUser(user);
	}

	@Override
	public User findByName(String name) {		//实现根据用户名查找用户
		// TODO Auto-generated method stub
		return this.userDao.findUserByName(name);
	}

	@Override
	public void update(User user) {		//实现 修改用户
		// TODO Auto-generated method stub
		this.userDao.updateUser(user);
	}

	@Override
	public boolean check(String name, String pwd) {		//实现登录验证
		// TODO Auto-generated method stub
		if (this.userDao.loginCheck(name, pwd)){
			return true;
		}else{
			return false;
		}
	}
}
