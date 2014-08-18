package com.hr.dao;

import java.util.List;

import com.hr.bean.User;
/*定义操作User用户的DAO接口（包括登录验证）*/
public interface UserDao {
	public void saveUser(User user);		//保存（增加）用户
	public void removeUser(User user);		//删除用户
	public User findUserByName(String name);		//根据用户名查找用户
	public List<User> finAllUsers();		//查询所有用户
	public void updateUser(User user);		//更新（修改）用户
	public boolean loginCheck(String name, String pwd);		//登录验证
}
