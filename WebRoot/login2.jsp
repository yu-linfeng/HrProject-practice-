<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s"  uri="/struts-tags"%>


<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
<title>宏达人力资源管理系统</title>
<script type="text/javascript" src="Js/jquery-1.11.1.js"></script>
<script type="text/javascript" src="Js/demo.js"></script>
<script type="text/javascript" src="Js/jquery.ui.dialog.js"></script>
<link rel="stylesheet" href="Js/new.css" type="text/css"/>
</head>
<body style="background:url('Img/bg.png'); background-size:cover">
<div id="div5" style="position:absolute">
</div>
<div id="div4" style="position:absolute">
<p class="pclass4">宏达人力资源管理系统2.0</p>
</div>
<div id="div3" style="position:absolute">
    <p id="p1" class="pclass">
    用户名或密码错误!
    </p>
    <p id="p2" class="pclass2">
    登录成功！
    </p>
    </div>
<div id="div1" style="position:absolute">
    <s:form name="login" action="login" id="form1" metho="post">
        <table id="tb" width="155" height="50" class="tbClass">
            <tr>

                <td id="td1">
                    <label><input type="text" id="user" autoFocus = "true" placeholder="请输入用户名" name="userName"  class = "input"/></label>
                </td>
            </tr>
            <tr>

                <td id="td2">
                    <label><input type="password" id="pwd" name="userPwd" placeholder="请输入密码" class = "input"/></label>
                </td>
            </tr>
            </table>

    </s:form>

 </div>

<div id="div2" style="position:absolute" >

        <input type="submit" id="but" class="loginButton"/>

</div>

</body>
</html>
