var summarizingStatisticsComp;

var showSummarizingStatistics = function(id){
	summarizingStatisticsComp = centerPanel.getComponent(id);
	if (!summarizingStatisticsComp){
		//学历表格数据源
	var eduGridStore = Ext.create('Ext.data.JsonStore',{
		fields:['no','education','people','percentage'],
		data:[
			{no:'1',education:'博士',people:40,percentage:'40%'},
			{no:'2',education:'硕士',people:15,percentage:'15%'},
			{no:'3',education:'大学',people:30,percentage:'30%'},
			{no:'4',education:'专科',people:15,percentage:'15%'}
		]
	});
	//学历表格
	var eduGrid = Ext.create('Ext.grid.Panel',{
		title:'公司员工按学历划分所占比例情况',
		store:eduGridStore,
//		columnLines:true,
		columnWidth:0.5,
		height:300,
		columns:[
			{header:'序号',dataIndex:'no',autoWidth:true},
			{header:'学历',dataIndex:'education',autoWidth:true},
			{header:'所占人数',dataIndex:'people',autoWidth:true},
			{header:'比例',dataIndex:'percentage',autoWidth:true}
		]
	});
	
//	goodsGrid.getSelectionModel().on('select', function(sm, record, reoIndex){
//		chartDataStore.loadData([
//			{goods:'汽车',gain:record.get('car')},
//			{goods:'住房',gain:record.get('house')},
//			{goods:'食品',gain:record.get('food')},
//			{goods:'文化',gain:record.get('culture')}
//		]);
//	});
	//学历饼图数据源
	var eduChartStore = Ext.create('Ext.data.JsonStore',{
		fields:['goods', 'gain'],
		data:[
			{goods:'博士',gain:40},
			{goods:'硕士',gain:15},
			{goods:'大学',gain:30},
			{goods:'专科',gain:15}
			]
	});
	//学历饼图
	var eduChart = Ext.create('Ext.chart.Chart',{
		store:eduChartStore,
		animate:true,
		legend:{
			position:'bottom'
		},
		height:300,
		columnWidth:.5,
		series:[{
			type:'pie',
			field:'gain',
			showInLegend:true,
			label:{
				field:'goods',
				contrast:true,
				display:'middle',
				font:'15 px "Lucida Grande"'
			}
		}]
	});
	
	//职称表格数据源
	var titleGridStore = Ext.create('Ext.data.JsonStore',{
		fields:['no','title','people','percentage'],
		data:[
			{no:'1',title:'助理工程师',people:40,percentage:'40%'},
			{no:'2',title:'高级工程师',people:15,percentage:'15%'},
			{no:'3',title:'系统分析工程师',people:30,percentage:'30%'},
			{no:'4',title:'高级架构师',people:15,percentage:'15%'}
		]
	});
	//职称表格
	var titleGrid = Ext.create('Ext.grid.Panel',{
		title:'公司员工按职称划分所占比例情况',
		store:titleGridStore,
//		columnLines:true,
		columnWidth:0.5,
		height:300,
		columns:[
			{header:'序号',dataIndex:'no',autoWidth:true},
			{header:'职称',dataIndex:'title',autoWidth:true},
			{header:'所占人数',dataIndex:'people',autoWidth:true},
			{header:'比例',dataIndex:'percentage',autoWidth:true}
		]
	});
	//职称饼图数据源
	var titleChartStore = Ext.create('Ext.data.JsonStore',{
		fields:['goods', 'gain'],
		data:[
			{goods:'助理工程师',gain:40},
			{goods:'高级工程师',gain:15},
			{goods:'系统分析工程师',gain:30},
			{goods:'高级架构师',gain:15}
			]
	});
	//职称饼图
	var titleChart = Ext.create('Ext.chart.Chart',{
		store:titleChartStore,
		animate:true,
		legend:{
			position:'bottom'
		},
		height:300,
		columnWidth:.5,
		series:[{
			type:'pie',
			field:'gain',
			showInLegend:true,
			label:{
				field:'goods',
				contrast:true,
				display:'middle',
				font:'15 px "Lucida Grande"'
			}
		}]
	});
	
	
	//年龄表格数据源
	var ageGridStore = Ext.create('Ext.data.JsonStore',{
		fields:['no','age','people','percentage'],
		data:[
			{no:'1',age:'20岁以下',people:40,percentage:'40%'},
			{no:'2',age:'20~40岁',people:15,percentage:'15%'},
			{no:'3',age:'40~60岁',people:30,percentage:'30%'},
			{no:'4',age:'60岁以上',people:15,percentage:'15%'}
		]
	});
	//职称表格
	var ageGrid = Ext.create('Ext.grid.Panel',{
		title:'公司员工按年龄划分所占比例情况',
		store:ageGridStore,
//		columnLines:true,
		columnWidth:0.5,
		height:300,
		columns:[
			{header:'序号',dataIndex:'no',autoWidth:true},
			{header:'年龄段',dataIndex:'age',autoWidth:true},
			{header:'所占人数',dataIndex:'people',autoWidth:true},
			{header:'比例',dataIndex:'percentage',autoWidth:true}
		]
	});
	//年龄饼图数据源
	var ageChartStore = Ext.create('Ext.data.JsonStore',{
		fields:['goods', 'gain'],
		data:[
			{goods:'20岁以下',gain:40},
			{goods:'20~40岁',gain:15},
			{goods:'40~60岁',gain:30},
			{goods:'60岁以上',gain:15}
			]
	});
	//年龄饼图
	var ageChart = Ext.create('Ext.chart.Chart',{
		store:ageChartStore,
		animate:true,
		legend:{
			position:'bottom'
		},
		height:300,
		columnWidth:.5,
		series:[{
			type:'pie',
			field:'gain',
			showInLegend:true,
			label:{
				field:'goods',
				contrast:true,
				display:'middle',
				font:'15 px "Lucida Grande"'
			}
		}]
	});
	
	summarizingStatisticsComp = Ext.create('Ext.panel.Panel',{
		title:'汇总统计',
		closable:true,
		autoWidth:true,
		height:400,
		items:[{
			layout:'column',
			items:[eduGrid,eduChart]
		},{
			layout:'column',
			items:[titleGrid,titleChart]
		},{
			layout:'column',
			items:[ageGrid,ageChart]
		}]
	});
	
	centerPanel.add(summarizingStatisticsComp);
	}
	centerPanel.setActiveTab(summarizingStatisticsComp);
};
