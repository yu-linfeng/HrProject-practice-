var allFindComp;
var showAllFind = function(id){
	allFindComp = centerPanel.getComponent(id)	;
	if (!allFindComp){
		allFindComp = Ext.create('Ext.form.Panel',{
			frame:true,
			closable:true,
			title:'综合查询',
			autoWidth:true,
			items:[{
				xtype:'container',
				anchor:'100%',
				layout:'column',
				items:[{
					xtype:'container',
					layout:'anchor',
					defaults:{
						labelAlign:'right'
					},
					items:[{
						xtype:'textfield',
						fieldLabel:'姓名',
						name:'staffName'
					},{
						xtype:'textfield',
						fieldLabel:'性别',
						name:'sex'
					},{
						xtype:'textfield',
						fieldLabel:'出生日期',
						name:'birthday'
					},{
						xtype:'textfield',
						fieldLabel:'身份证号',
						name:'idNo'
					},{
						xtype:'textfield',
						fieldLabel:'籍贯',
						name:'nativePlace'
					},{
						xtype:'textfield',
						fieldLabel:'最高学历',
						name:'edu'
					},{
						xtype:'textfield',
						fieldLabel:'政治面貌',
						name:'identity'
					},{
						xtype:'textfield',
						fieldLabel:'户口类型',
						name:'registeredResidence'
					}]
				},{
					xtype:'container',
					anchor:'100%',
					layout:'anchor',
					defaults:{
						labelAlign:'right'
					},
					items:[{
						xtype:'textfield',
						fieldLabel:'工号',
						name:'staffNo'
					},{
						xtype:'textfield',
						fieldLabel:'部门',
						name:'management'
					},{
						xtype:'textfield',
						fieldLabel:'职称',
						name:'title'
					},{
						xtype:'textfield',
						fieldLabel:'岗位',
						name:'position'
					},{
						xtype:'textfield',
						fieldLabel:'状态',
						name:'status'
					},{
						xtype:'textfield',
						fieldLabel:'民族',
						name:'people'
					},{
						xtype:'textfield',
						fieldLabel:'健康状况',
						name:'health'
					}]
				}]
			}],
			
				//顶部工具栏
				tbar:[
				{
					pressed:true,
					text:'精确查询',
//							iconCls:'findName',
					handler:function(){		//添加新的职称信息handler监听
					Ext.create('Ext.window.Window', {			//弹出window框
							title:"精确查询员工信息",
						    height: 100,
						    width: 430,
						    layout: 'fit',
						    items:{
								renderTo: Ext.getBody(),
							    height: 70,
							    width: 430,
							    labelAlign: "right",
							    buttonAlign:'center',
							    frame: true,
							    renderTo: Ext.getBody(),
							    defaults:{
					      			width:350,
					      	 		labelWidth: 60
					      		},
					    		items: [
					      	 		{xtype:'textfield',id:'staffNo', fieldLabel:'员工工号',allowBlank: false}
					      		],
					      		buttons:[{
					      			text:"查询"
					      			}, {
					      			text:"重置",
					      			handler: function() {
//							      				this.up('form').getForm().reset();
					      			}
					      	   }]
							}
					}).show();
				}
			}
//				,{
//				xtype:'tbseparator'			//按钮之间添加分隔符
//			},{
//				pressed:true,text:'模糊查询',
//				handler:function(){
//					Ext.Msg.alert('Click', '您单击了模糊查询');
//					
//				}
//			}
				]
		});
		centerPanel.add(allFindComp);
	}
		centerPanel.setActiveTab(allFindComp);
};