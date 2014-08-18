var staffInfoComp;
var showStaffInfoManager = function(id){
	staffInfoComp = centerPanel.getComponent(id);
	if (!staffInfoComp){
		staffInfoComp = Ext.create('Ext.form.Panel', {
		id:'staffInfoComp',
		frame : true,
		closable:true,		//是否可关闭
		title : '员工信息维护',
		autoWidth : true,
		defaultType : 'textfield',
		items : [{xtype:'label', text:'请输入员工工号:'},
					{xtype:'textfield',name:'findStaffInfo'},
			    	{xtype:'button',text:'查询修改',width:100,
						handler:function(){
							var e = new Employee({
								employNo:this.up('form').getForm().getFieldValues().findStaffInfo
	      					});
							Ext.Ajax.request({
			      	 			url:'json/staffInfoAction',
				      	 		params:{
				      				jsonFind:Ext.JSON.encode(e.data)
				      			},
								success:function(resp, opts){
									if (resp.responseText == '[]'){
				      					Ext.Msg.alert('提示', '无该员工信息!')
				      					Ext.getCmp('staffInfoComp').getForm().reset();;
				      				}
									var json = resp.responseText;		//从后台取到的是一个JSON数组
									var ejson = json.substring(1, json.length-1);		//只取其中有用的JSON字符串，即去掉方括号
									var qejson = Ext.JSON.decode(ejson);	//将JSON字符串转换为JSON对象
//									var json = Ext.JSON.decode(resp.responseText);
//									Ext.Msg.alert(',',json.substring(1, json.length-1));
//									var e = new Employee({employName:'余林丰'});
//									Ext.Msg.alert('提示', '添加成功!');
									var e = new Employee(qejson);
//									var e = new Employee({"employBirthday":"2014年06月05日","employDept":"人资部","employEdu":"博士","employHealth":"健康","employId":2,"employIdCard":"500232319564","employName":"余林丰","employNation":"珞巴族","employNo":"123456789","employParty":"群众","employPlace":"重庆","employPosi":"董事长","employSex":"男","employStatus":"转正","employType":"城镇户口","employtTitle":"硬件工程师"});
									Ext.getCmp('staffInfoComp').getForm().loadRecord(e);
								},
								failure:function(resp, opts){
									Ext.Msg.alert('提示', '无该员工信息!');
								}
			      	 		});
					}},{
			xtype : 'fieldset',
			title : '员工信息修改（*为必填）',
			defaultType : 'textfield',
			defaults:{
				labelWidth : 200
			},
			items:[{
				fieldLabel:'id',
				id:'employId',
				name:'employId',
				hidden:true,
				hideLabel:true
			},{
				fieldLabel : '工号',
				id:'employNo',
				name : 'employNo',
			},{
				fieldLabel : '姓名(*2-30个字符)',
				id:'employName',
				name : 'employName',
			},{
				fieldLabel : '性别(*)',
				id:'employSex',
				name : 'employSex',
			},{
				fieldLabel : '出生日期(*)',
				id:'employBirthday',
				name : 'employBirthday',
			},{
				fieldLabel : '身份证号(*)',
				id:'employIdCard',
				name : 'employIdCard',
			},{
				fieldLabel : '籍贯',
				id:'employPlace',
				name : 'employPlace',
			},{
				fieldLabel : '最高学历',
				id:'employEdu',
				name : 'employEdu',
			},{
				fieldLabel : '民族',
				id:'employNation',
				name : 'employNation',
			},{
				fieldLabel : '政治面貌',
				id:'employParty',
				name : 'employParty',
			},{
				fieldLabel : '健康状况',
				id:'employHealth',
				name : 'employHealth',
			},{
				fieldLabel : '户口类型',
				id:'employType',
				name : 'employType',
			},{
				fieldLabel : '部门',
				id:'employDept',
				name : 'employDept',
				hidden:true,
				hideLabel:true
			},{
				fieldLabel : '职称',
				id:'employtTitle',
				name : 'employtTitle',
				hidden:true,
				hideLabel:true
			},{
				fieldLabel : '岗位',
				id:'employPosi',
				name : 'employPosi',
				hidden:true,
				hideLabel:true
			},{
				fieldLabel : '工作状态',
				id:'employStatus',
				name : 'employStatus',
				hidden:true,
				hideLabel:true
			}]
		}],
		buttons : [ {
			text : '保存修改',
			handler:function(){
				var employee = new Employee({
					employId:this.up('form').getForm().getFieldValues().employId,
					employNo:this.up('form').getForm().getFieldValues().employNo,
					employName:this.up('form').getForm().getFieldValues().employName,
					employBirthday:this.up('form').getForm().getFieldValues().employBirthday,
					employIdCard:this.up('form').getForm().getFieldValues().employIdCard,
					employPlace:this.up('form').getForm().getFieldValues().employPlace,
					employEdu:this.up('form').getForm().getFieldValues().employEdu,
					employNation:this.up('form').getForm().getFieldValues().employNation,
					employParty:this.up('form').getForm().getFieldValues().employParty,
					employHealth:this.up('form').getForm().getFieldValues().employHealth,
					employType:this.up('form').getForm().getFieldValues().employType,
					employDept:this.up('form').getForm().getFieldValues().employDept,
					employtTitle:this.up('form').getForm().getFieldValues().employtTitle,
					employPosi:this.up('form').getForm().getFieldValues().employPosi,
					employStatus:this.up('form').getForm().getFieldValues().employStatus,
					employSex:this.up('form').getForm().getFieldValues().employSex
				});
				Ext.Ajax.request({
					url:'json/editEmployAction',
					params:{
  						jsonEdit:Ext.JSON.encode(employee.data)
  					},
  					success:function(resp, opts){
  						var success = Ext.decode(resp.responseText);
  						if (success){
  							Ext.Msg.alert('提示', '修改成功!');
  							staffInfoComp.getForm().reset();
  						}
  					},
  					failure:function(resp, opts){
  						Ext.Msg.alert('提示', '删除失败!请联系管理员!');
  					} 					
				});
			}
		}, {
			text : '取消',
			handler:function(){
				Ext.Msg.confirm('提示', '确定取消吗？', function(btn){
					if (btn == 'yes'){
						staffInfoComp.getForm().reset();
					}
				});
			}
		} ]
		});
		centerPanel.add(staffInfoComp);
	}
		centerPanel.setActiveTab(staffInfoComp);
};