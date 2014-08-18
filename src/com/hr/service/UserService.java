package com.hr.service;

import java.util.List;

import com.hr.bean.User;

//定义User服务层（包括登录验证的服务层）接口
public interface UserService {
	public List<User> findAll();		//查询所有用户
	public void save(User user);		//添加保存用户
	public void 	delete(User user);		//删除用户
	public User findByName(String name);		//根据用户名查找用户
	public void update(User user);		//修改用户
	public boolean check(String name, String pwd);	//登录验证
}
