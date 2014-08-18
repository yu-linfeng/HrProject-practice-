package com.hr.action;

import java.util.HashMap;
import java.util.Map;

import com.hr.bean.User;
import com.hr.service.UserService;
import com.opensymphony.xwork2.ActionSupport;

public class LoginAction extends ActionSupport {
	private String userName; 	//接受request传来的用户名name
	private String userPwd;		//接受request传来的密码pwd
	private User users;		
	private UserService loginService;
	private Map flag;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserPwd() {
		return userPwd;
	}

	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}

	public User getUsers() {
		return users;
	}

	public void setUsers(User users) {
		this.users = users;
	}

	public UserService getLoginService() {
		return loginService;
	}

	public void setLoginService(UserService loginService) {
		this.loginService = loginService;
	}

	public Map getFlag() {
		return flag;
	}

	public void setFlag(Map flag) {
		this.flag = flag;
	}

	@Override
	public String execute() throws Exception {
//		if (this.loginService.check(userName, userPwd)){
//			return SUCCESS;
//		}else{
//			return "input";
//		}
		flag = new HashMap<String, Object>();
		if (this.loginService.check(userName, userPwd)){
			flag.put("success", true);
			return SUCCESS;
		}else{
			flag.put("failure", true);
			return SUCCESS;
		}
		
	}
	
}
