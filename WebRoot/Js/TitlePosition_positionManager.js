var positionManagerComp;
var showPositionManager = function(id){
	var positionManagerComp = centerPanel.getComponent(id);
	var checkBox = Ext.create('Ext.selection.CheckboxModel');   		//grid中添加付复选框按钮
		if (!positionManagerComp){
			var store = Ext.create('Ext.data.Store', {		//添加数据源
				storeId:'positionStore',
				model:Position,
				proxy: {
					type: 'ajax',
					url:'json/allPositionAction',
					reader: {
						type: 'json'
					}
				}
			});
			store.load();
		//表格显示
		positionManagerComp = Ext.create('Ext.grid.Panel', {		//new Ext.grid.GridPanel({
			id:'positionManagerGrid',
			title:'岗位管理',
			store:Ext.data.StoreManager.lookup('positionStore'),
			loadMask:true,		//是否在加载数据时显示遮罩效果，默认为false 
//			trackMouseOver:false,
			autoHeight:true,
			autoWidth:true,
			idsableSelection:true,		//能否被选中
			selModel:checkBox,		//添加复选框
			closable:true,		//是否可关闭
			columnLines: true,		//是否显示列分割线
			forceFit: true,		//列自动适应
			columns:[{		//列名
					xtype:'rownumberer',		//自动编号
					header:'序号',
					align:'center',
				},{
					header:'id',
					dataIndex:'positionId',
					hidden:true
				},{
					header:'岗位名称',
					dataIndex:'positionName',
					align:'center',
				},{
					header:'上级岗位',
					align:'center',
					dataIndex:'higherPosition',
				},{
					header:'岗位职责',
					dataIndex:'positionDuty',
					align:'center',
				},{
					header:'任职资格',
					dataIndex:'positionQualification',
					align:'center',
				},{
					header:'岗位权限',
					dataIndex:'positionPower',
					align:'center',
				},{
					header:'岗位工作内容',
					dataIndex:'positionContent',
					align:'center',
				}
				],
			//顶部工具栏
			tbar:[
			{
				pressed:true,
				text:'新增岗位',
				handler:function(){		//添加新的职称信息handler监听
				var win = Ext.create('Ext.window.Window', {			//弹出window框
						title:"录入岗位信息（*必填）",
					    height: 580,
					    width: 430,
					    layout: 'fit',
					    items:{
					    	xtype:'form',
							renderTo: Ext.getBody(),
						    height: 550,
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
				      	 		{xtype:'textfield',id:'positionName',name:'positionName', fieldLabel:'岗位名称*(1~30字符)',allowBlank: false},
				         		{xtype:'textfield',id: "higherPosition", name:'higherPosition', fieldLabel: "上级岗位*(1~30字符)",allowBlank: false},
				         		{xtype:'textarea',id: "positionDuty", name:'positionDuty', fieldLabel: "岗位职责*(20~500字符)",allowBlank: false},
				         		{xtype:'textarea', id: "positionQualification", name:'positionQualification', fieldLabel: "任职资格*(20~500字符)",allowBlank: false},
				         		{xtype:'textarea',id: "positionPower", name:'positionPower', fieldLabel: "岗位权限*(20~500字符)",allowBlank: false},
				         		{xtype:'textarea',id: "positionContent", name:'positionContent', fieldLabel: "岗位工作内容*(20~500字符)",allowBlank: false},
				      		],
				      		buttons:[{
				      			text:"提交",
				      			handler:function(){
				      				if (this.up('form').getForm().isValid()){
				      					var position = new Position({
				      						positionName:this.up('form').getForm().getFieldValues().positionName,
				      						higherPosition:this.up('form').getForm().getFieldValues().higherPosition,
				      						positionDuty:this.up('form').getForm().getFieldValues().positionDuty,
				      						positionQualification:this.up('form').getForm().getFieldValues().positionQualification,
				      						positionPower:this.up('form').getForm().getFieldValues().positionPower,
				      						positionContent:this.up('form').getForm().getFieldValues().positionContent
				      					});
				      					this.up('form').getForm().submit({
				      						url:'json/addPositionAction',
				      						waitTitle:'请稍后',
				      						watiMsg:'正在提交信息······',
				      						params:{
				      							jsonAll:Ext.JSON.encode(position.data)
				      						},
				      						success:function(resp, opts){
				      							var success = opts.result.success;
				      							if (success){
				      								Ext.Msg.alert('提示', '添加成功');
				      								var positionManagerGrid = Ext.getCmp('positionManagerGrid');
				      								if (positionManagerGrid){
				      									var store = positionManagerGrid.getStore();
				      									store.load();
				      									win.close();
				      								}
				      							}else{
				      								Ext.Msg.alert('提示', '添加失败!');
				      							}
				      						},
				      						failure:function(resp, opts){
				      							Ext.Msg.alert('提示', '添加失败!请联系管理员!');
				      						}
				      					});
				      				}
				      			}
				      			}, {
				      			text:"重填",
				      			handler: function() {
							      		this.up('form').getForm().reset();
				      			}
				      	   }]
						}
				}).show();
			}
		},{
			xtype:'tbseparator'			//按钮之间添加分隔符
		},{
			pressed:true,text:'删除岗位',
			handler:function(){
//				Ext.Msg.alert('Click', '您单击了删除按钮');
				var look = positionManagerComp.getSelectionModel().getSelection();		//获取复选框的选择
				if (look.length != 1){
					Ext.Msg.alert('提示', '请选择一行进行删除!');
				}else{
					Ext.Msg.confirm('提示', '您确定要删除该岗位信息吗?', function(btn){
						if (btn == 'yes'){
							var position = new Position({
								positionId:look[0].get('positionId'),
								positionName:look[0].get('positionName'),
								higherPosition:look[0].get('higherPosition'),
								positionDuty:look[0].get('positionDuty'),
								positionQualification:look[0].get('positionQualification'),
								positionPower:look[0].get('positionPower'),
								positionContent:look[0].get('positionContent')
							});
							Ext.Ajax.request({
								url:'json/deletePositionAction',
								params:{
									jsonDelete:Ext.JSON.encode(position.data)
								},
								success:function(resp, opts){
									var success = Ext.decode(resp.responseText);
									if (success){
										Ext.Msg.alert('提示!', '删除成功!');
										var positionManagerGrid = Ext.getCmp('positionManagerGrid');
										if (positionManagerGrid){
											var store = positionManagerGrid.getStore();
											store.load();
										}
									}else{
										Ext.Msg.alert('提示', '删除失败!');
									}
								},
								failure:function(resp, opts){
									Ext.Msg.alert('提示!', '删除失败!请联系管理员!');
								}
							});
						}
					});
				}
			}
		},{
			xtype:'tbseparator'
		},{
			pressed:true,text:'修改岗位信息',
			handler:function(){
				var look = positionManagerComp.getSelectionModel().getSelection();
				if (look.length != 1){
					Ext.Msg.alert('提示','请选择一行进行修改!');
				}else{
					var win = Ext.create('Ext.window.Window', {			//弹出window框
						title:"录入岗位信息（*必填）",
					    height: 580,
					    width: 430,
					    layout: 'fit',
					    items:{
					    	xtype:'form',
							renderTo: Ext.getBody(),
						    height: 550,
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
				      	 		{xtype:'textfield',id:'positionName',name:'positionName', fieldLabel:'岗位名称*(1~30字符)',allowBlank: false},
				         		{xtype:'textfield',id: "higherPosition", name:'higherPosition', fieldLabel: "上级岗位*(1~30字符)",allowBlank: false},
				         		{xtype:'textarea',id: "positionDuty", name:'positionDuty', fieldLabel: "岗位职责*(20~500字符)",allowBlank: false},
				         		{xtype:'textarea', id: "positionQualification", name:'positionQualification', fieldLabel: "任职资格*(20~500字符)",allowBlank: false},
				         		{xtype:'textarea',id: "positionPower", name:'positionPower', fieldLabel: "岗位权限*(20~500字符)",allowBlank: false},
				         		{xtype:'textarea',id: "positionContent", name:'positionContent', fieldLabel: "岗位工作内容*(20~500字符)",allowBlank: false},
				      		],
				      		buttons:[{
				      			text:"修改",
				      			handler:function(){
				      				var position = new Position({
				      					positionId:look[0].get('positionId'),
				      					positionName:this.up('form').getForm().getFieldValues().positionName,
				      					higherPosition:this.up('form').getForm().getFieldValues().higherPosition,
				      					positionDuty:this.up('form').getForm().getFieldValues().positionDuty,
				      					positionQualification:this.up('form').getForm().getFieldValues().positionQualification,
				      					positionPower:this.up('form').getForm().getFieldValues().positionPower,
				      					positionContent:this.up('form').getForm().getFieldValues().positionContent
				      				});
				      				Ext.Ajax.request({
				      					url:'json/editPositionAction',
				      					params:{
				      						jsonEdit:Ext.JSON.encode(position.data)
				      					},
				      					success:function(resp, opts){
				      						var success = Ext.decode(resp.responseText);
				      						if (success){
				      							Ext.Msg.alert('提示', '修改成功!');
				      							var positionManagerGrid = Ext.getCmp('positionManagerGrid');
				      							if (positionManagerGrid){
				      								var store = positionManagerGrid.getStore();
				      								store.load();
				      								win.close();
				      							}
				      						}else{
				      							Ext.Msg.alert('提示', '修改失败!');
				      						}
				      					},
				      					failure:function(resp, opts){
				      						Ext.Msg.alert('提示', '修改失败!请联系管理员!');
				      					}
				      				});
				      			}
				      			}, {
				      			text:"关闭",
				      			handler: function() {
				      				win.close();
				      			}
				      	   }]
						}
				}).show();
					Ext.getCmp('positionName').setValue(look[0].get('positionName'));
					Ext.getCmp('higherPosition').setValue(look[0].get('higherPosition'));
					Ext.getCmp('positionDuty').setValue(look[0].get('positionDuty'));
					Ext.getCmp('positionQualification').setValue(look[0].get('positionQualification'));
					Ext.getCmp('positionPower').setValue(look[0].get('positionPower'));
					Ext.getCmp('positionContent').setValue(look[0].get('positionContent'));
				}
			}
		},{
			xtype:'tbseparator'
		},{
			pressed:true,text:'查看岗位',
			handler:function(){
//							Ext.Msg.alert('Click', '您单击了查看按钮');
				var look = positionManagerComp.getSelectionModel().getSelection();		//获取复选框的选择
				if (look.length != 1){		//选择的行数不等于1，只能一行一行的进行职称查看
					Ext.Msg.alert('提示','请选择一行进行查看！');
					return ;
				}else{
					//若选择了一行则通过look显示职称信息
					var win = Ext.create('Ext.window.Window', {
						title:"查看岗位信息",
					    height: 580,
					    width: 430,
					    layout: 'fit',
					    items:{
					    	xtype:'form',
							renderTo: Ext.getBody(),
						    height: 550,
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
				    		    {xtype:'textfield',id:'positionName',fieldLabel:'岗位名称'},
				    		    {xtype:'textfield',id:'higherPosition',fieldLabel:'上级岗位'},
				      	 		{xtype:'textarea',id:'positionDuty', fieldLabel:'岗位职责'},
				         		{xtype:'textarea',id: "positionQualification", fieldLabel: "任职资格"},
				         		{xtype:'textarea',id: "positionPower", fieldLabel: "岗位权限"},
				         		{xtype:'textarea',id:'positionContent', fieldLabel:'岗位工作内容'},
				      		],
				      		buttons:[{
				      			text:"关闭",
				      			handler: function() {
				      				win.close();
				      			}
				      	   }]
						}
				}).show();
				Ext.getCmp('positionName').setValue(look[0].get('positionName'));
				Ext.getCmp('higherPosition').setValue(look[0].get('higherPosition'));
				Ext.getCmp('positionDuty').setValue(look[0].get('positionDuty'));
				Ext.getCmp('positionQualification').setValue(look[0].get('positionQualification'));
				Ext.getCmp('positionPower').setValue(look[0].get('positionPower'));
				Ext.getCmp('positionContent').setValue(look[0].get('positionContent'));							
				}
			}
		},{
			xtype:'tbseparator'
		},{
			pressed:true,text:'查询岗位',
			handler:function(){
				var win = Ext.create('Ext.window.Window', {
						title:"查询岗位信息",
					    height: 480,
					    width: 430,
					    layout: 'fit',
					    items:{
					    	id:'findPositionform',
					    	xtype:'form',
							renderTo: Ext.getBody(),
						    height: 450,
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
						      	 {xtype:'label', text:'请输入岗位名称:'},
						      	 {xtype:'textfield',name:'findPositionInfo'},
						      	 {xtype:'button',text:'查询',width:50,
						      	 	handler:function(){
						      	 		var position = new Position({
						      	 			positionName:this.up('form').getForm().getFieldValues().findPositionInfo
				      					});
						      	 		Ext.Ajax.request({
						      	 			url:'json/findPositionAction',
							      	 		params:{
							      				jsonFind:Ext.JSON.encode(position.data)
							      			},
							      			success:function(resp, opts){
							      				if (resp.responseText == '[]'){
							      					Ext.Msg.alert('提示', '无该岗位信息!');
							      					Ext.getCmp('findPositionform').getForm().reset();
							      				}
							      	 			var json = resp.responseText;		//从后台取到的是一个JSON数组
												var ejson = json.substring(1, json.length-1);		//只取其中有用的JSON字符串，即去掉方括号
												var qejson = Ext.JSON.decode(ejson);	//将JSON字符串转换为JSON对象
												var p = new Position(qejson);
												Ext.getCmp('findPositionform').getForm().loadRecord(p);
							      			}
						      	 		});
						      	 	}},
						      	{xtype:'textfield',id:'positionName', name:'positionName',fieldLabel:'岗位名称'},
					    		{xtype:'textfield',id:'higherPosition',name:'higherPosition',fieldLabel:'上级岗位'},
					    		{xtype:'textfield',id:'positionDuty', name:'positionDuty',fieldLabel:'岗位职责'},
					    		{xtype:'textarea',id: "positionQualification", name:'positionQualification',fieldLabel: "任职资格"},
					         	{xtype:'textarea',id: "positionPower", name:'positionPower',fieldLabel: "岗位权限"},
					         	{xtype:'textarea',id:'positionContent', name:'positionContent',fieldLabel:'岗位工作内容'},
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
//					nameManager();
		centerPanel.add(positionManagerComp);
	}
	centerPanel.setActiveTab(positionManagerComp);
};