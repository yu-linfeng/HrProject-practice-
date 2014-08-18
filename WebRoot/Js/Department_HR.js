var HRComp;
var showHR = function(id){
	HRComp = centerPanel.getComponent(id);
	var checkBox = Ext.create('Ext.selection.CheckboxModel');   		//grid中添加付复选框按钮	
	if(!HRComp){
		Ext.create('Ext.data.Store', {		//添加数据源
		 	    storeId:'simpsonsStore',
			    fields:['HRNo', 'HRName', 'HRAdd', 'HRpostalcode','HRfax','HRUpMan','HRType','HRPhone','HREmail'],
			    data:{'items':[
			        { 'HRNo': '000001',  "HRName":"人资部","HRAdd":"成都信息工程大学", "HRpostalcode":"610772",'HRfax':'028-87141352','HRUpMan':'业务部','HRType':'生产','HRPhone':'028-87151351','HREmail':'sc@hongda.com'}
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
		HRComp = Ext.create('Ext.grid.Panel', {		//new Ext.grid.GridPanel({
				id:id,
				title:'人资部',
				store:Ext.data.StoreManager.lookup('simpsonsStore'),
				loadMask:true,
				trackMouseOver:false,
				idsableSelection:true,
				selModel:checkBox,		//添加复选框
				closable:true,
				forceFit: true,		//列自动适应
				columnLines: true,		//是否能多行选中
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
						dataIndex:'HRNo',
					},{
						header:'部门地址',
						dataIndex:'HRAdd',
						align:'center',
					},{
						header:'邮政编码',
						dataIndex:'HRPostalcode',
						align:'center',
					},{
						header:'传真号码',
						dataIndex:'HRFax',
						align:'center'
					},{
						header:'上级部门',
						dataIndex:'HRUpMan',
						align:'center'
					},{
						header:'部门类型',
						dataIndex:'HRType',
						align:'center'
					},{
						header:'电话号码',
						dataIndex:'HRPhone',
						align:'center'
					},{
						header:'电子邮件',
						dataIndex:'HREmail',
						align:'center'
					}],
				//顶部工具栏
				tbar:[{
					pressed:true,
					text:'创建子部门',
					handler:function(){		//添加新的职称信息handler监听
						Ext.Msg.alert('提示','您单击了创建子部门');
					}
				},{
					xtype:'tbseparator'			//按钮之间添加分隔符
				},{
					pressed:true,text:'删除部门',
					handler:function(){
						Ext.Msg.alert('Click', '您单击了删除按钮');
						
					}
				},{
					xtype:'tbseparator'
				},{
					pressed:true,text:'修改部门信息',
					handler:function(){
						Ext.Msg.alert('Click', '您单击了修改按钮');
					}
				},{
					xtype:'tbseparator'
				},{
					pressed:true,text:'查看部门信息',
					handler:function(){
								Ext.Msg.alert('Click', '您单击了查看按钮');
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
								Ext.Msg.alert('Click', '您单击了调整部门');
					}
				}]
		});
		centerPanel.add(HRComp);
	}
	centerPanel.setActiveTab(HRComp);
};