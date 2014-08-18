var generalAffairsDepartmentComp;
var showGeneralAffairsDepartment = function(id){
	generalAffairsDepartmentComp = centerPanel.getComponent(id);
	var checkBox = Ext.create('Ext.selection.CheckboxModel');   		//grid中添加付复选框按钮	
	if(!generalAffairsDepartmentComp){
		Ext.create('Ext.data.Store', {		//添加数据源
		 	    storeId:'simpsonsStore',
			    fields:['manNo', 'manName', 'manAdd', 'manPostalcode','manFax','manUpMan','manType','manPhone','manEmail'],
			    data:{'items':[
			        { 'manNo': '040100',  "manName":"总务部","manAdd":"成都信息工程学院", "manPostalcode":"610772",'manFax':'028-87141352','manUpMan':'业务部','manType':'生产','manPhone':'028-87151351','manEmail':'sc@hongda.com'}
			    ]},
			    proxy: {
		        type: 'memory',
		        reader: {
		            type: 'json',
		            root: 'items'
		        }
		    }
		});
		//显示
		generalAffairsDepartmentComp = Ext.create('Ext.grid.Panel', {		//new Ext.grid.GridPanel({
				id:'generalAffairsDepartmentGrid',
				title:'总务部',
				store:Ext.data.StoreManager.lookup('simpsonsStore'),
				loadMask:true,
				idsableSelection:true,
				selModel:checkBox,		//添加复选框
				closable:true,
				columnLines: true,		//是否能多行选中
				forceFit: true,		//列自动适应
				columns:[{		//列名
					xtype:'rownumberer',		//自动编号
					header:'序号',
					align:'center',
					},{			
						header:'部门编码',
						dataIndex:'manNo',
						align:'center',
					},{
						header:'部门名称',
						align:'center',
						dataIndex:'manName',
					},{
						header:'部门地址',
						dataIndex:'manAdd',
						align:'center',
					},{
						header:'邮政编码',
						dataIndex:'manPostalcode',
						align:'center',
					},{
						header:'传真号码',
						dataIndex:'manFax',
						align:'center'
					},{
						header:'上级部门',
						dataIndex:'manUpMan',
						align:'center'
					},{
						header:'部门类型',
						dataIndex:'manType',
						align:'center'
					},{
						header:'电话号码',
						dataIndex:'manPhone',
						align:'center'
					},{
						header:'电子邮件',
						dataIndex:'manEmail',
						align:'center'
					}],
				//顶部工具栏
				tbar:[{
					pressed:true,
					text:'创建子部门',
					handler:function(){		//添加新的职称信息handler监听
//						Ext.Msg.alert('提示','您单击了创建子部门');
						var win = Ext.create('Ext.window.Window', {			//弹出window框
							title:"创建子部门",
						    height: 380,
						    width: 430,
						    resizable:false,
						    layout: 'fit',
						    items:{
						    	xtype:'form',
							    height: 350,
							    width: 420,
							    labelAlign: "right",
							    buttonAlign:'center',
							    frame: true,
							    renderTo: Ext.getBody(),
							    defaults:{
					      			width:350,
					      	 		labelWidth: 60
					      		},
					    		items: [
					      	 		{xtype:'textfield',id:'manNo', name:'manNo', fieldLabel:'部门编码',allowBlank: false},
					         		{xtype:'textfield',id: "manName", name:'manName', fieldLabel: "部门名称",allowBlank: false},
					         		{xtype:'textfield',id: "manAdd", name:'manAdd', fieldLabel: "部门地址",allowBlank: false},
					         		{xtype: "textfield", id: "manPostalcode", name:'manPostalcode',fieldLabel: "邮政编码",allowBlank: false},
					         		{xtype: "textfield", id: "manFax", name:'manFax',fieldLabel: "传真号码",allowBlank: false},
					         		{xtype: "textfield", id: "manUpMan", name:'manUpMan',fieldLabel: "上级部门",allowBlank: false},
					         		{xtype: "textfield", id: "manType", name:'manType',fieldLabel: "部门类型",allowBlank: false},
					         		{xtype: "textfield", id: "manPhone", name:'manPhone',fieldLabel: "电话号码",allowBlank: false},
					         		{xtype: "textfield", id: "manEmail", name:'manEmail',fieldLabel: "电子邮件",allowBlank: false},
					      		],
					      		buttons:[{
					      			text:"提交",		//将新的职称信息提交后台
					      			handler:function(){
					      				if (this.up('form').getForm().isValid()){
					      					var title = new Title({
					      						titleName:this.up('form').getForm().getFieldValues().titleName,
					      						qualification:this.up('form').getForm().getFieldValues().qualification,
					      						duty:this.up('form').getForm().getFieldValues().duty,
					      						workTarget:this.up('form').getForm().getFieldValues().workTarget
					      					});
					      					this.up('form').getForm().submit({
					      						url:'json/addTitleAction',		//提交到后台action
					      						waitTitle:'请稍后',
					      						watiMsg:'正在提交信息······',
					      						params:{
					      							json:Ext.JSON.encode(title.data)
					      						},
					      						success:function(resp, opts){
					      							var success = opts.result.success;
					      							if (success){
					      								Ext.Msg.alert('提示','添加成功!');
					      								var titleManagerGrid = Ext.getCmp('titleManagerGrid');
					      								if (titleManagerGrid){
					      									var store = titleManagerGrid.getStore();
					      									store.load();
					      									win.close();
					      								}
					      							}else{
					      								Ext.Msg.alert('提示','提交失败!');
					      							}
					      						},
					      						failure:function(resp, opts){
					      							Ext.Msg.alert('提示','提交失败...!');
					      						}
					      					});
					      				}
					      			}
					      			},{
					      			text:"重置",
					      			handler: function() {
					      				this.up('form').getForm().reset();
					      			}
					      	   }]
							}
					});
						win.show();
					}
				},{
					xtype:'tbseparator'			//按钮之间添加分隔符
				},{
					pressed:true,text:'删除部门',
					handler:function(){
//						Ext.Msg.alert('Click', '您单击了删除按钮');
						var look = generalAffairsDepartmentComp.getSelectionModel().getSelection();		//获取复选框的选择
						if (look.length != 1){
							Ext.Msg.alert('提示','请选择一行进行删除！');
							return ;
						}else{
							Ext.Msg.confirm('提示','您确定要删除该部门信息吗？', function(btn){
								if (btn == 'yes'){
									var title = new Title({
										id:look[0].get('id'),
			      						titleName:look[0].get('titleName'),
			      						qualification:look[0].get('qualification'),
			      						duty:look[0].get('duty'),
			      						workTarget:look[0].get('workTarget')
			      					});
									Ext.Ajax.request({
										url:'json/deleteTitleAction',
			      						params:{
			      							jsonDelete:Ext.JSON.encode(title.data)
			      						},
			      						success:function(resp, opts){
//			      							var success = opts.result.success;
			      							var success=Ext.decode(resp.responseText);    
			      							if (success){
			      								Ext.Msg.alert('提示','删除成功!');
			      								var titleManagerGrid = Ext.getCmp('titleManagerGrid');
			      								if (titleManagerGrid){
			      									var store = titleManagerGrid.getStore();
			      									store.load();
//			      									win.close();
			      								}
			      							}else{
			      								Ext.Msg.alert('提示','删除失败!');
			      							}
			      						},
			      						failure:function(resp, opts){
			      							Ext.Msg.alert('提示','删除失败...!');
			      						}
									});
								}
							});
						}
					}
				},{
					xtype:'tbseparator'
				},{
					pressed:true,text:'修改部门信息',
					handler:function(){
//						Ext.Msg.alert('Click', '您单击了修改按钮');
						var look = generalAffairsDepartmentComp.getSelectionModel().getSelection();
						if (look.length != 1){
							Ext.Msg.alert('提示','请选择一行进行修改!');
						}else{
							var win = Ext.create('Ext.window.Window',{
								title:"修改部门信息",
							    height: 380,
							    width: 430,
							    layout: 'fit',
							    items:{
							    	xtype:'form',
									renderTo: Ext.getBody(),
								    height: 350,
								    width: 420,
								    labelAlign: "right",
								    buttonAlign:'center',
								    frame: true,
								    defaults:{
						      			width:350,
						      	 		labelWidth: 60
						      		},
						    		items: [			    		
					    		        {xtype:'textfield',id: "manName", name:'manName', fieldLabel: "部门名称",allowBlank: false},
										{xtype:'textfield',id: "manAdd", name:'manAdd', fieldLabel: "部门地址",allowBlank: false},
										{xtype: "textfield", id: "manPostalcode", name:'manPostalcode',fieldLabel: "邮政编码",allowBlank: false},
										{xtype: "textfield", id: "manFax", name:'manFax',fieldLabel: "传真号码",allowBlank: false},
										{xtype: "textfield", id: "manUpMan", name:'manUpMan',fieldLabel: "上级部门",allowBlank: false},
										{xtype: "textfield", id: "manType", name:'manType',fieldLabel: "部门类型",allowBlank: false},
										{xtype: "textfield", id: "manPhone", name:'manPhone',fieldLabel: "电话号码",allowBlank: false},
										{xtype: "textfield", id: "manEmail", name:'manEmail',fieldLabel: "电子邮件",allowBlank: false},
						      		],
						      		buttons:[{	
						      			text:'提交',
						      			handler:function(){
						      				var title = new Title({
						      					id:look[0].get('id'),
						      					manName:this.up('form').getForm().getFieldValues().manName,
					      						manAdd:this.up('form').getForm().getFieldValues().manAdd,
					      						manPostalcode:this.up('form').getForm().getFieldValues().manPostalcode,
					      						manFax:this.up('form').getForm().getFieldValues().manFax,
					      						manUpMan:this.up('form').getForm().getFieldValues().manUpMan,
					      						manType:this.up('form').getForm().getFieldValues().manType,
					      						manPhone:this.up('form').getForm().getFieldValues().manPhone,
					      						manEmail:this.up('form').getForm().getFieldValues().manEmail,
					      					});
						      				Ext.Ajax.request({
						      					url:'json/editTitleAction',
						      					params:{
						      						jsonEdit:Ext.JSON.encode(title.data)
						      					},
						      					success:function(resp, opts){
						      						var success = Ext.decode(resp.responseText);
						      						if (success){
						      							Ext.Msg.alert('提示', '修改成功!');
						      							var titleManagerGrid = Ext.getCmp('titleManagerGrid');
						      							if (titleManagerGrid){
						      								var store = titleManagerGrid.getStore();
						      								store.load();
						      							}else{
						      								Ext.Msg.alert('提示', '删除失败!');
						      							}
						      						}
						      					},
						      					failure:function(resp, opts){
						      						Ext.Msg.alert('提示', '删除失败!请联系管理员!');
						      					}
						      				});
						      			}
						      		},{
						      			text:"关闭",
						      			handler: function() {
						      			win.close();
						      			}
						      	   }]
								}
							}).show();
							Ext.getCmp('manName').setValue(look[0].get('manName'));
							Ext.getCmp('manAdd').setValue(look[0].get('manAdd'));
							Ext.getCmp('manPostalcode').setValue(look[0].get('manPostalcode'));
							Ext.getCmp('manFax').setValue(look[0].get('manFax'));
							Ext.getCmp('manUpMan').setValue(look[0].get('manUpMan'));	
							Ext.getCmp('manType').setValue(look[0].get('manType'));	
							Ext.getCmp('manPhone').setValue(look[0].get('manPhone'));	
							Ext.getCmp('manEmail').setValue(look[0].get('manEmail'));	
						}
					}
				},{
					xtype:'tbseparator'
				},{
					pressed:true,text:'查看部门信息',
					handler:function(){
//								Ext.Msg.alert('Click', '您单击了查看按钮');

						var look = generalAffairsDepartmentComp.getSelectionModel().getSelection();		//获取复选框的选择
						if (look.length != 1){		//选择的行数不等于1，只能一行一行的进行职称查看
							Ext.Msg.alert('提示','请选择一行进行查看！');
							return ;
						}else{
							//若选择了一行则通过look显示职称信息
							var win = Ext.create('Ext.window.Window', {
								title:"查看部门信息",
							    height: 380,
							    width: 430,
							    layout: 'fit',
							    items:{
									renderTo: Ext.getBody(),
								    height: 350,
								    width: 420,
								    labelAlign: "right",
								    buttonAlign:'center',
								    frame: true,
								    defaults:{
						      			width:350,
						      	 		labelWidth: 60
						      		},
						    		items: [			    		
										{xtype:'textfield',id: "manName", name:'manName', fieldLabel: "部门名称",allowBlank: false},
										{xtype:'textfield',id: "manAdd", name:'manAdd', fieldLabel: "部门地址",allowBlank: false},
										{xtype: "textfield", id: "manPostalcode", name:'manPostalcode',fieldLabel: "邮政编码",allowBlank: false},
										{xtype: "textfield", id: "manFax", name:'manFax',fieldLabel: "传真号码",allowBlank: false},
										{xtype: "textfield", id: "manUpMan", name:'manUpMan',fieldLabel: "上级部门",allowBlank: false},
										{xtype: "textfield", id: "manType", name:'manType',fieldLabel: "部门类型",allowBlank: false},
										{xtype: "textfield", id: "manPhone", name:'manPhone',fieldLabel: "电话号码",allowBlank: false},
										{xtype: "textfield", id: "manEmail", name:'manEmail',fieldLabel: "电子邮件",allowBlank: false},
						      		],
						      		buttons:[{
						      			text:"关闭",
						      			handler: function() {
						      			win.close();
						      			}
						      	   }]
								}
						}).show();
							Ext.getCmp('manName').setValue(look[0].get('manName'));
							Ext.getCmp('manAdd').setValue(look[0].get('manAdd'));
							Ext.getCmp('manPostalcode').setValue(look[0].get('manPostalcode'));
							Ext.getCmp('manFax').setValue(look[0].get('manFax'));
							Ext.getCmp('manUpMan').setValue(look[0].get('manUpMan'));	
							Ext.getCmp('manType').setValue(look[0].get('manType'));	
							Ext.getCmp('manPhone').setValue(look[0].get('manPhone'));	
							Ext.getCmp('manEmail').setValue(look[0].get('manEmail'));						
						}
					}
				},{
					xtype:'tbseparator'
				},{
					pressed:true,text:'调整部门',
					handler:function(){
								Ext.Msg.alert('Click', '您单击了调整部门');
					}
				},{
					xtype:'tbseparator'
				},{
					pressed:true,
					text:'查询部门',
					handler:function(){
//								Ext.Msg.alert('Click', '您单击了调整部门');
						var win = Ext.create('Ext.window.Window', {
							title:"查询部门信息",
						    height: 430,
						    width: 430,
						    layout: 'fit',
						    store:'singleTitleStore',
						    items:{
						    	id:'findGeneralForm',
						    	xtype:'form',
								renderTo: Ext.getBody(),
							    height: 400,
							    width: 420,
							    labelAlign: "right",
							    buttonAlign:'center',
							    frame: true,
							    renderTo: Ext.getBody(),
							    defaults:{
					      			width:350,
					      	 		labelWidth: 60
					      		},
					    		items: [
							      	 {xtype:'label', text:'请输入部门名称:'},
							      	 {xtype:'textfield',name:'findGeneralInfo'},
							      	 {xtype:'button',text:'查询',width:50,
							      	 	handler:function(){
							      	 		var title = new Title({
							      	 			titleName:this.up('form').getForm().getFieldValues().findGeneralInfo
					      					});
							      	 		Ext.Ajax.request({
							      	 			url:'json/findTitleAction',
								      	 		params:{
								      				jsonFind:Ext.JSON.encode(title.data)
								      			},
								      			success:function(resp, opts){
								      				if (resp.responseText == '[]'){
								      					Ext.Msg.alert('提示', '无该职称信息!')
								      					Ext.getCmp('findTitleForm').getForm().reset();;
								      				}
								      	 			var json = resp.responseText;		//从后台取到的是一个JSON数组
													var ejson = json.substring(1, json.length-1);		//只取其中有用的JSON字符串，即去掉方括号
													var qejson = Ext.JSON.decode(ejson);	//将JSON字符串转换为JSON对象
													var t = new Title(qejson);
													Ext.getCmp('findGeneralForm').getForm().loadRecord(t);
								      			}
							      	 		});
							      	 	}},							    		
							      	 	{xtype:'textfield',id: "manName", name:'manName', fieldLabel: "部门名称"},
										{xtype:'textfield',id: "manAdd", name:'manAdd', fieldLabel: "部门地址"},
										{xtype: "textfield", id: "manPostalcode", name:'manPostalcode',fieldLabel: "邮政编码"},
										{xtype: "textfield", id: "manFax", name:'manFax',fieldLabel: "传真号码"},
										{xtype: "textfield", id: "manUpMan", name:'manUpMan',fieldLabel: "上级部门"},
										{xtype: "textfield", id: "manType", name:'manType',fieldLabel: "部门类型"},
										{xtype: "textfield", id: "manPhone", name:'manPhone',fieldLabel: "电话号码"},
										{xtype: "textfield", id: "manEmail", name:'manEmail',fieldLabel: "电子邮件"},
					      		],
					      		buttons:[{
					      			text:"关闭",
					      			handler: function() {
					      				win.close();
					      			}
					      	   }]
							}
					}).show();	
					}
				}]
		});
		centerPanel.add(generalAffairsDepartmentComp);
	}
	centerPanel.setActiveTab(generalAffairsDepartmentComp);
};