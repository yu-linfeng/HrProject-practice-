var titleManagerComp;
var showTitleManager = function(id){
	var titleManagerComp = centerPanel.getComponent(id);
	var checkBox = Ext.create('Ext.selection.CheckboxModel');   		//grid中添加付复选框按钮			
		if (!titleManagerComp){
			var store = Ext.create('Ext.data.Store', {		//添加数据源
		 	    storeId:'titleStore',
		 	    model:Title,
			    pageSize: 16,
			    proxy: {
			    	type: 'ajax',
			    	url: 'json/titleAction',
			    	reader: {
			    		type: 'json',
			    	}
			    },
			});
			store.load({ params: { start: 0, limit: 16} });
			//表格显示
			titleManagerComp = Ext.create('Ext.grid.Panel', {		//new Ext.grid.GridPanel({
				id:'titleManagerGrid',
				title:'职称管理',
				store:Ext.data.StoreManager.lookup('titleStore'),
				autoHeight:true,
				autoWidth:true,
				loadMask:true,		//是否在加载数据时显示遮罩效果，默认为false 
				idsableSelection:true,		//能否被选中
				selModel:checkBox,		//添加复选框
				closable:true,
				columnLines: true,		//是否显示列分割线
				forceFit: true,		//列自动适应
				columns:[{		//列名
					xtype:'rownumberer',		//自动编号
					header:'序号',
					align:'center',
				},{
					header:'id',
					dataIndex:'id',
					hidden:true
				},{		
					header:'职称名称',
					dataIndex:'titleName',
					align:'center'
				},{
					header:'任职资格',
					align:'center',
					dataIndex:'qualification'
				},{
					id:'duty',
					header:'职责',
					dataIndex:'duty',
					align:'center'
				},{
					header:'工作目标',
					dataIndex:'workTarget',
					align:'center'
				}],
				//底部工具栏
				bbar: Ext.create('Ext.PagingToolbar', {
		            pageSize: 16,
		            store:Ext.data.StoreManager.lookup('titleStore'),
		            displayInfo: true,
		            displayMsg: '显示第 {0} 条到 {1} 条记录，一共 {2} 条',
		            emptyMsg: '没有数据可以显示',
		            toggleHandler: function (btn, pressed) {
		                Ext.Msg.show({ title: '提示', msg: 'toggleHandler' });
		            }
		        }),
				//顶部工具栏
				tbar:[{
					pressed:true,
					text:'新增职称',
					handler:function(){		//添加新的职称信息
						var win = Ext.create('Ext.window.Window', {			//弹出window框
							title:"录入职称信息（*必填）",
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
					      	 		{xtype:'textfield',id:'titleName', name:'titleName', fieldLabel:'职称名称*(1~30字符)',allowBlank: false},
					         		{xtype:'textarea',id: "qualification", name:'qualification', fieldLabel: "任职资格*(20~500字符)",allowBlank: false},
					         		{xtype:'textarea',id: "duty", name:'duty', fieldLabel: "职责*(20~500字符)",allowBlank: false},
					         		{xtype: "textarea", id: "workTarget", name:'workTarget',fieldLabel: "工作目标*(20~500字符)",allowBlank: false}
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
				pressed:true,
				text:'删除职称',
				handler:function(){
					//Ext.Msg.alert('Click', '您单击了删除按钮');
					var look = titleManagerComp.getSelectionModel().getSelection();		//获取复选框的选择
					if (look.length != 1){
						Ext.Msg.alert('提示','请选择一行进行删除！');
						return ;
					}else{
						Ext.Msg.confirm('提示','您确定要删除该职称信息吗？', function(btn){
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
//		      							var success = opts.result.success;
		      							var success=Ext.decode(resp.responseText);    
		      							if (success){
		      								Ext.Msg.alert('提示','删除成功!');
		      								var titleManagerGrid = Ext.getCmp('titleManagerGrid');
		      								if (titleManagerGrid){
		      									var store = titleManagerGrid.getStore();
		      									store.load();
//		      									win.close();
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
				pressed:true,text:'修改职称',
				handler:function(){
//					Ext.Msg.alert('Click', '您单击了修改按钮');
					var look = titleManagerComp.getSelectionModel().getSelection();
					if (look.length != 1){
						Ext.Msg.alert('提示','请选择一行进行修改!');
					}else{
						var win = Ext.create('Ext.window.Window',{
							title:"修改职称信息",
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
					      	 		{xtype:'textfield',id:'titleName', name:'titleName', fieldLabel:'职称名称'},
					         		{xtype:'textarea',id: "qualification",name:'qualification', fieldLabel: "任职资格"},
					         		{xtype:'textarea',id: "duty", name:'duty', fieldLabel: "职责"},
					         		{xtype: "textarea", id: "workTarget", name:'workTarget', fieldLabel: "工作目标"}
					      		],
					      		buttons:[{
					      			text:'提交',
					      			handler:function(){
					      				var title = new Title({
					      					id:look[0].get('id'),
				      						titleName:this.up('form').getForm().getFieldValues().titleName,
				      						qualification:this.up('form').getForm().getFieldValues().qualification,
				      						duty:this.up('form').getForm().getFieldValues().duty,
				      						workTarget:this.up('form').getForm().getFieldValues().workTarget
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
						Ext.getCmp('titleName').setValue(look[0].get('titleName'));
						Ext.getCmp('qualification').setValue(look[0].get('qualification'));
						Ext.getCmp('duty').setValue(look[0].get('duty'));
						Ext.getCmp('workTarget').setValue(look[0].get('workTarget'));	
					}
				}
			},{
				xtype:'tbseparator'
			},{
				pressed:true,text:'查看职称',
				handler:function(){
					var look = titleManagerComp.getSelectionModel().getSelection();		//获取复选框的选择
					if (look.length != 1){		//选择的行数不等于1，只能一行一行的进行职称查看
						Ext.Msg.alert('提示','请选择一行进行查看！');
						return ;
					}else{
						//若选择了一行则通过look显示职称信息
						var win = Ext.create('Ext.window.Window', {
							title:"查看职称信息",
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
					      	 		{xtype:'textfield',id:'titleName', fieldLabel:'职称名称'},
					         		{xtype:'textarea',id: "qualification", fieldLabel: "任职资格"},
					         		{xtype:'textarea',id: "duty", fieldLabel: "职责"},
					         		{xtype: "textarea", id: "workTarget", fieldLabel: "工作目标"}
					      		],
					      		buttons:[{
					      			text:"关闭",
					      			handler: function() {
					      			win.close();
					      			}
					      	   }]
							}
					}).show();
					Ext.getCmp('titleName').setValue(look[0].get('titleName'));
					Ext.getCmp('qualification').setValue(look[0].get('qualification'));
					Ext.getCmp('duty').setValue(look[0].get('duty'));
					Ext.getCmp('workTarget').setValue(look[0].get('workTarget'));							
					}
				}
			},{
				xtype:'tbseparator'
			},{
				pressed:true,text:'查询职称',
				handler:function(){
					var win = Ext.create('Ext.window.Window', {
							title:"查询职称信息",
						    height: 430,
						    width: 430,
						    layout: 'fit',
						    store:'singleTitleStore',
						    items:{
						    	id:'findTitleForm',
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
							      	 {xtype:'label', text:'请输入职称名称:'},
							      	 {xtype:'textfield',name:'findTitleNameInfo'},
							      	 {xtype:'button',text:'查询',width:50,
							      	 	handler:function(){
							      	 		var title = new Title({
							      	 			titleName:this.up('form').getForm().getFieldValues().findTitleNameInfo
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
													Ext.getCmp('findTitleForm').getForm().loadRecord(t);
								      			}
							      	 		});
							      	 	}},							    		
					      	 		{xtype:'textfield',id:'titleName',name:'titleName', dataIndex:'titleName', fieldLabel:'职称名称'},
					         		{xtype:'textarea',id: "qualification", name:'titleName',dataIndex:'qualification',fieldLabel: "任职资格"},
					         		{xtype:'textarea',id: "duty", name:'titleName',dataIndex:'duty',fieldLabel: "职责"},
					         		{xtype: "textarea", id: "workTarget", name:'titleName',dataIndex:'workTarget',fieldLabel: "工作目标"}
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
			centerPanel.add(titleManagerComp);
		}
		centerPanel.setActiveTab(titleManagerComp);
		
};