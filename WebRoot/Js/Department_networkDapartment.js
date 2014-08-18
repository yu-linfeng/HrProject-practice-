var networkDepartmentComp;
var showNetworkDepartment = function(id){
	networkDepartmentComp = centerPanel.getComponent(id);
	var checkBox = Ext.create('Ext.selection.CheckboxModel');   		//grid中添加付复选框按钮	
	if(!networkDepartmentComp){
		Ext.create('Ext.data.Store', {		//添加数据源
		 	    storeId:'simpsonsStore',
			    fields:['manNo', 'manName', 'manAdd', 'postalcode','fox','upMan','manType','phone','email'],
			    data:{'items':[
			        { 'manNo': '000001',  "manName":"网络部","manAdd":"成都信息工程大学", "postalcode":"610772",'fox':'028-87141352','upMan':'业务部','manType':'生产','phone':'028-87151351','email':'sc@hongda.com'}
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
		networkDepartmentComp = Ext.create('Ext.grid.Panel', {		//new Ext.grid.GridPanel({
				id:id,
				title:'网络部',
				store:Ext.data.StoreManager.lookup('simpsonsStore'),
				loadMask:true,
				trackMouseOver:false,
				idsableSelection:true,
				selModel:checkBox,		//添加复选框
				closable:true,
				columnLines: true,		//是否能多行选中
				columns:[{			//列名
						id:'manNo',
						header:'部门编码',
						dataIndex:'manNo',
						align:'center',
//								sortable:true
					},{
						id:'manName',
						header:'部门名称',
						align:'center',
						dataIndex:'manName',
					},{
						id:'manAdd',
						header:'部门地址',
						dataIndex:'manAdd',
						align:'center',
					},{
						id:'postalcode',
						header:'邮政编码',
						dataIndex:'postalcode',
						align:'center',
					},{
						id:'fox',
						header:'传真号码',
						dataIndex:'fox',
						align:'center'
					},{
						id:'upMan',
						header:'上级部门',
						dataIndex:'upMan',
						align:'center'
					},{
						id:'manType',
						header:'部门类型',
						dataIndex:'manType',
						align:'center'
					},{
						id:'phone',
						header:'电话号码',
						dataIndex:'phone',
						align:'center'
					},{
						id:'email',
						header:'电子邮件',
						dataIndex:'email',
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
		centerPanel.add(networkDepartmentComp);
	}
	centerPanel.setActiveTab(networkDepartmentComp);
};