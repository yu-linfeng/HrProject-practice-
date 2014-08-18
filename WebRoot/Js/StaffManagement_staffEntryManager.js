var staffEntryComp;
var showStaffEntryManager = function(id){
	staffEntryComp = centerPanel.getComponent(id);
	if(!staffEntryComp){
		staffEntryComp = Ext.create('Ext.form.Panel', {
		xtype:'form',
		frame : true,
		closable:true,		//是否可关闭
		title : '员工信息录入（*为必填）',
		autoWidth : true,
		items : [ {
			xtype : 'fieldset',
			title : '基本信息',
			defaultType : 'textfield',
			defaults:{
				labelWidth : 180
			},
			items:[{
				fieldLabel : '姓名(*2-30个字符)',
				name : 'employName',
			},new Ext.form.RadioGroup({
				fieldLabel:'性别(*)',
				width:400,
				allowBlank:false,
				items:[new Ext.form.Radio({
					name:'Gender',
					boxLabel:'男',
					inputValue:'男'
				}),new Ext.form.Radio({
					name:'Gender',
//					labelSeparator:' ',
					boxLabel:'女',
					inputValue:'女'
				})]
			}), {
				xtype:'datefield',
				name:'birthday',
				format:'Y年m月d日',
				fieldLabel:'出生日期(*)'
			}, {
				fieldLabel : '身份证号(*15或者18个字符)',
				name : 'idcardnum',
			}, {
				fieldLabel : '籍贯（3-30个字符)',
				name : 'address',
			}, {
				xtype : 'fieldcontainer',
				combineErrors : true,
				msgTarget : 'side',
				fieldLabel : '最高学历',
				defaults : {
					hideLabel : true
				},
				items : [ {
					width : 150,
					id:'eduCombo',
					xtype : 'combo',
					name:'eduCombo',
					editable : false,
					displayField : 'eduContent',
					valueField : 'eduContent',
					queryMode : 'local',		//提高用户的响应速度
					allowBlank:false,
					typeAhead:true,		//自动选择下拉框第一匹配的字段
					store : Ext.create('Ext.data.Store', {
						model:EduLevel,
						proxy:{
							type:'ajax',
							url:'json/eduList',
							reader:{
								type:'json'
							}
						},
						autoLoad: true
					})
				}]
			},{
				xtype : 'fieldcontainer',
				combineErrors : true,
				msgTarget : 'side',
				fieldLabel : '民族',
				defaults : {
				hideLabel : true
			},
				items : [ {
					width : 150,
					id:'nationCombo',
					name : 'nationCombo',
					xtype : 'combo',
					editable : false,
					allowBlank:false,
					typeAhead:true,		//自动选择下拉框第一匹配的字段
					displayField : 'nationContent',
					valueField : 'nationContent',
					queryMode : 'local',		//提高加载速度
					store : Ext.create('Ext.data.Store', {
						model:Nation,
						proxy:{
							type:'ajax',
							url:'json/nationList',
							reader:{
								type:'json'
							}
						},
						autoLoad:true
					})
				}]
		},{
			xtype : 'fieldcontainer',
			combineErrors : true,
			msgTarget : 'side',
			fieldLabel : '政治面貌',
			defaults : {
				hideLabel : true
			},
			items : [ {
				width : 150,
				id:'partyCombo',
				xtype : 'combo',
				editable : false,
				allowBlank:false,
				name : 'partyCombo',
				displayField : 'partyContent',
				valueField : 'partyContent',
				queryMode : 'local',
				store : Ext.create('Ext.data.Store', {
					model:Party,
					proxy:{
						type:'ajax',
						url:'json/partyList',
						reader:{
							type:'json'
						}
					},
					autoLoad:true
				})
			}]
		},{
			xtype : 'fieldcontainer',
			combineErrors : true,
			msgTarget : 'side',
			fieldLabel : '健康状况',
			defaults : {
				hideLabel : true
			},
			items : [ {
				xtype : 'combo',
				width:150,
				id:'healthCombo',
				name : 'healthCombo',
				allowBlank:false,
				editable : false,
				displayField : 'healthContent',
				valueField : 'healthContent',
				queryMode : 'local',
				store : Ext.create('Ext.data.Store', {
					model:Health,
					proxy:{
						type:'ajax',
						url:'json/healthList',
						reader:{
							type:'json'
						}
					},
					autoLoad:true
				})
			}]
		},{
			xtype:'fieldcontainer',
//			combineErrors:true,		//每一个单独显示错误信息
			msgTarget:'side',
			fieldLabel:'户口类型',
			defaults:{
				hideLabel:true
			},
			items:[{
				xtype:'combo',
				width:150,
				id:'regCombo',
				name:'regCombo',
				allowBlank:false,
				editable:false,
				displayField:'regContent',
				valueField:'regContent',
				queryMode:'local',
				store:Ext.create('Ext.data.Store',{
					model:'Reg',
					proxy:{
						type:'ajax',
						url:'json/regList',
						reader:{
							type:'json'
						}
					},
					autoLoad:true
				})
			}]
		}]
	},{
		xtype:'fieldset',
		title:'任职信息',
		defaultType:'textfield',
		defaults:{
				labelWidth : 180
		},
		items:[{
			fieldLabel:'工号(*12个字符，如201003310001，入职日期+当天入职员工工号)',
			id:'staffNo',
			name:'staffNo'
		},{
			xtype:'fieldcontainer',
			fieldLabel:'部门(*)',
			defaults : {
					hideLabel : true
			},
			items:[{
				xtype : 'combo',
				mode : 'local',
				triggerAction : 'all',
				forceSelection : true,
				editable : false,
				id:'employDeptCombo',
				name : 'employDeptCombo',
				allowBlank:false,
				displayField : 'name',
				valueField : 'value',
				queryMode : 'local',
				store : Ext.create('Ext.data.Store', {
					fields : [ 'name', 'value' ],
					data : [ {
						name : '总务部',
						value : '总务部'
					}, {
						name : '人资部',
						value : '人资部'
					},{
						name:'财务部',
						value:'财务部'
					},{
						name:'业务部',
						value:'业务部'
					},{
						name:'网络部',
						value:'网络部'
					}]
				})
			}]
		},{
			xtype:'fieldcontainer',
			fieldLabel:'职称(*)',
			items:[{
				xtype:'combo',
				width:150,
				id:'titleCombo',
				name:'titleCombo',
				allowBlank:false,
				editable:false,
				displayField:'titleName',
				valueField:'titleName',
				queryMode:'local',
				store:Ext.create('Ext.data.Store',{
					fields:['titleName'],
					proxy:{
						type:'ajax',
						url:'json/titleAction',
						reader:{
							type:'json'
						}
					},
					autoLoad:true
				})
			}]
		},{
//			xtype:'fieldcontainer',
			fieldLabel:'岗位(*)',
			xtype:'combobox',
//			items:[{
//				xtype:'combo',
				width:335,
				id:'positionCombo',
				name:'positionCombo',
				allowBlank:false,
				editable:false,
				displayField:'positionName',
				valueField:'positionName',
				queryMode:'local',
				store:Ext.create('Ext.data.Store',{
					fields:['positionName'],
					proxy:{
						type:'ajax',
						url:'json/allPositionAction',
						reader:{
							type:'json'
						}
					},
					autoLoad:true
				})
//			}]
		},{
//			xtype:'fieldcontainer',
			fieldLabel:'状态(*)',
			xtype:'combobox',
//			items:[{
//				xtype : 'combo',
				width : 335,
				id:'statusCombo',
				name : 'statusCombo',
				allowBlank:false,
				editable : false,
				displayField : 'statusContent',
				valueField : 'statusContent',
				queryMode : 'local',
				store : Ext.create('Ext.data.Store', {
					model:Status,
					proxy:{
						type:'ajax',
						url:'json/statusList',
						reader:{
							type:'json'
						}
					},
					autoLoad:true
				})
			}]
//		}]
	}],
		buttons : [{
			text : '确认创建',
			handler:function(){
				if (this.up('form').getForm().isValid()){
					var dept = Ext.getCmp('employDeptCombo').getValue();
					var title = Ext.getCmp('titleCombo').getValue();
					var position = Ext.getCmp('positionCombo').getValue();
					var edu = Ext.getCmp('eduCombo').getValue();
					var nation = Ext.getCmp('nationCombo').getValue();
					var party = Ext.getCmp('partyCombo').getValue();
					var health = Ext.getCmp('healthCombo').getValue();
					var type = Ext.getCmp('regCombo').getValue();
					var status = Ext.getCmp('statusCombo').getValue();
					var employee = new Employee({
						employDept:dept,
						employtTitle:title,
						employPosi:position,
						employName:this.up('form').getForm().getFieldValues().employName,
						employNo:this.up('form').getForm().getFieldValues().staffNo,
						employSex:this.up('form').getForm().getFieldValues().Gender,
						employIdCard:this.up('form').getForm().getFieldValues().idcardnum,
						employBirthday:Ext.util.Format.date(this.up('form').getForm().getFieldValues().birthday, 'Y年m月d日'),//this.up('form').getForm().getFieldValues().birthday,
						employPlace:this.up('form').getForm().getFieldValues().address,
						employEdu:edu,
						employNation:nation,
						employParty:party,
						employHealth:health,
						employType:type,
						employStatus:status
					});
					this.up('form').getForm().submit({
						url:'json/addEmployAction',
						waitTitle:'请稍后',
						waitMsg:'正在提交信息······',
						params:{
							jsonEmployee:Ext.JSON.encode(employee.data)
						},
						success:function(resp, opts){
							var success = opts.result.success;
							if (success){
								Ext.Msg.alert('提示', '添加成功!');
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
		},{
			text:'重置',
			handler: function () {
				Ext.Msg.confirm('提示', '确定重置吗？', function(btn){
					if (btn == 'yes'){
						staffEntryComp.getForm().reset();
					}
				});
             }
		}]
	});
	centerPanel.add(staffEntryComp);
	}
	centerPanel.setActiveTab(staffEntryComp);
};