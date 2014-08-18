function sampleLoginCheck(){
	var name = login.name.value;
	var pwd = login.pwd.value;
	Ext.onReady(function(){
		if (name == null){
			Ext.Msg.alert('提示', '用户名不能为空!');			
		}
		if (pwd = null){
			Ext.Msg.alert('提示', '密码不能为空!');
		}
	});
};
