<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>宏达人力资源管理系统</title>
	<link rel="stylesheet" type="text/css" href="ExtJs4/resources/css/ext-all.css" />
	<script type="text/javascript" src="ExtJs4/ext-all-debug.js"></script>
	<script type="text/javascript" src="ExtJs4/ext-lang-zh_CN.js"></script>
	<script type="text/javascript" src="Js/model.js"></script>
	<script type="text/javascript" src="Js/home.js"></script>
	<script type="text/javascript" src="Js/treeListener.js"></script>
	<script type="text/javascript" src="Js/treeNodes.js"></script>
	<script type="text/javascript" src="Js/TitlePosition_titleManager.js"></script>
	<script type="text/javascript" src="Js/TitlePosition_positionManager.js"></script>
	<script type="text/javascript" src="Js/StaffManagement_staffEntryManager.js"></script>
	<script type="text/javascript" src="Js/StaffManagement_staffInfoManager.js"></script>
	<script type="text/javascript" src="Js/StaffManagement_staffJobInfoManager.js"></script>
	<script type="text/javascript" src="Js/InquiryStatistics_allFind.js"></script>
	<script type="text/javascript" src="Js/InquiryStatistics_summarizingStatistics.js"></script>
	<script type="text/javascript" src="Js/Department_generalAffairsDepartment.js"></script>
	<script type="text/javascript" src="Js/Department_HR.js"></script>
	<script type="text/javascript" src="Js/Department_businessDepartment.js"></script>
	<script type="text/javascript" src="Js/Department_financialDepartment.js"></script>
	<script type="text/javascript" src="Js/Department_networkDapartment.js"></script>
  </head>
 
</html>
