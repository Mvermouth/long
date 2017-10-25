import UImodal from '@/components/model/Alert'
//import HelloWorld from '@/components/HelloWorld'

//vue插件
const modal = function(Vue){//传入vue

	// Vue.prototype.$test = modal.test = function(){
	// 	alert(">>>");
	// }
	// return;
	const create = function(type,text){
		//创建构造器
		const Loading = Vue.extend({
			template:'<UImodal :text="text" :type="type">',
			data:function(){
				return {
					text,
					type
				}
			},
			components:{ UImodal } //标签名
		});
		//获取节点
		debugger;
		modal.el = new Loading().$mount.$el;
		document.body.appendChild(modal.el);


	}

	Vue.prototype.$loading = modal.loading = function(text,type){
		create(text,type);		
	}
}

export default modal