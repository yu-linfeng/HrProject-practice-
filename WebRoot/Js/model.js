//Title model
Ext.regModel('Title', {
    fields: [
            {name:'id',type:'integer'},
            { name: 'titleName', type: 'string' },
            { name: 'qualification', type: 'string' },
            { name: 'duty', type: 'string' },
            { name: 'workTarget', type: 'string' }
        ]
});
//岗位模型
Ext.define('Position',{
	extend:'Ext.data.Model',
	fields:[
	        {name:'positionId', type:'integer'},
	        {name:'positionName', type:'string'},
	        {name:'higherPosition', type:'string'},
	        {name:'positionDuty', type:'string'},
	        {name:'positionQualification', type:'string'},
	        {name:'positionPower', type:'string'},
	        {name:'positionContent', type:'string'}
	        ]
});
//学历模型
Ext.define('EduLevel',{
	extend:'Ext.data.Model',
	fields:[
	        {name:'eduId', type:'integer'},
	        {name:'eduContent', type:'string'}
	        ]
});
//民族模型
Ext.define('Nation',{
	extend:'Ext.data.Model',
	fields:[
	        {name:'nationId', type:'integer'},
	        {name:'nationContent', type:'string'}
	        ]
});
//政治面貌模型
Ext.define('Party',{
	extend:'Ext.data.Model',
	fields:[
	        {name:'partyId', type:'integer'},
	        {name:'partyContent', type:'string'}
	        ]
});
//健康状况模型
Ext.define('Health',{
	extend:'Ext.data.Model',
	fields:[
	        {name:'healthId', type:'integer'},
	        {name:'healthContent', type:'string'}
	        ]
});
//工作状态模型
Ext.define('Status',{
	extend:'Ext.data.Model',
	fields:[
	        {name:'statusId', type:'integer'},
	        {name:'statusContent', type:'string'}
	        ]
});
//户口类型模型
Ext.define('Reg',{
	extend:'Ext.data.Model',
	fields:[
	        {name:'regId', type:'integer'},
	        {name:'regContent', type:'string'}
	        ]
	
});
//员工模型
Ext.define('Employee',{
	extend:'Ext.data.Model',
	fields:[
	        {name:'employId', type:'integer'},
	        {name:'employDept', type:'string'},
	        {name:'employtTitle', type:'string'},
	        {name:'employPosi', type:'string'},
	        {name:'employName', type:'string'},
	        {name:'employNo', type:'string'},
	        {name:'employSex', type:'string'},
	        {name:'employIdCard', type:'string'},
	        {name:'employBirthday', type:'string'},
	        {name:'employPlace', type:'string'},
	        {name:'employEdu', type:'string'},
	        {name:'employNation', type:'string'},
	        {name:'employParty', type:'string'},
	        {name:'employHealth', type:'string'},
	        {name:'employType', type:'string'},
	        {name:'employStatus', type:'string'},
	        ]
});




