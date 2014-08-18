function treePanel_Listener(node, event){
		var id = event.data.id;
		if (event.data.leaf){
			if (id == 'generalAffairsDepartment'){		//点击总务部节点
				showGeneralAffairsDepartment(id);
			}else if (id == 'HR'){						//人资部
				showHR(id);
			}else if (id=='financialDepartment'){			//财务部
				showFinancialDepartment(id);
			}else if (id == 'businessDepartment'){		//业务部
				showBusinessDepartment(id);
			}else if (id == 'networkDepartment'){		//网络部
				showNetworkDepartment(id);
			}else if (id == 'nameManager'){		//点击职称管理节点
				showTitleManager(id);			//调用职称管理titleManager.js
			}else if (id == 'positionManager'){			//点击岗位管理
				showPositionManager(id);		//调用岗位管理positionManager.js
			}else if(id == 'staffEntryManager'){			//点击员工入职管理
				showStaffEntryManager(id);		
			}else if (id == 'staffInfoManager'){		//点击员工信息维护节点
				showStaffInfoManager(id);
			}else if (id == 'staffJobInfoManager'){			//点击员工任职信息节点
				showJobInfoManager(id);
			}else if(id == 'allFind'){		//点击综合查询节点
				showAllFind(id);
			}else if (id == 'summarizingStatistics'){			//点击汇总统计节点
				showSummarizingStatistics(id);
			}
		}
	};
	