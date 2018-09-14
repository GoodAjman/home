var _util = require('util');

var _cart = {
	addCart:function(data,success,error){
		_util.request({
			url:'/cart',
			method:'post',
			dataType:'json',
			data:data,
			success:success,
			error:error
		});
	},
	getCart:function(success,error){
		_util.request({
			url:'/cart',
			dataType:'json',
			success:success,
			error:error
		});
	},
	selectOne:function(data,success,error){
		_util.request({
			url:'/cart/selectOne',
			method:'post',
			dataType:'json',
			data:data,
			success:success,
			error:error
		});
	},
	unselectOne:function(data,success,error){
		_util.request({
			url:'/cart/unselectOne',
			method:'post',
			dataType:'json',
			data:data,
			success:success,
			error:error
		});
	},	
	selectAll:function(success,error){
		_util.request({
			url:'/cart/selectAll',
			dataType:'json',
			success:success,
			error:error
		});
	},
	unselectAll:function(success,error){
		_util.request({
			url:'/cart/unselectAll',
			dataType:'json',
			success:success,
			error:error
		});
	},
	deleteOne:function(data,success,error){
		_util.request({
			url:'/cart/deleteOne',
			method:'get',
			dataType:'json',
			data:data,
			success:success,
			error:error
		});
	},
	deleteSelect:function(success,error){
		_util.request({
			url:'/cart/deleteSelect',
			dataType:'json',
			success:success,
			error:error
		});
	},	
	updateCount:function(data,success,error){
		_util.request({
			url:'/cart/updateCount',
			method:'post',
			dataType:'json',
			data:data,
			success:success,
			error:error
		});
	},			
};
module.exports = _cart;