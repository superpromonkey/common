function sort(arr){
    
}
var garr={
	value1:'ewerw',
	value2:'12345',
	gan:function(){
    	console.log('qwer')
	},
	arr2:[1,2,3,4,5,[6,4,67,7,[67,88,55,33,[234,678,895]]]]
}
var garr2=[1,2,3,4,5,6,[12,13,14,15,[23,24,25,26]]]
	


/////////////////////////////////////////////////////
let arr = {
    sort(){
        
    },

    /**复制数组对象（深复制）
     *  @param {*} target [所有数据类型]
     */
    clone:function(arr){
        let obj = {}
        for(var item in arr){
            console.log(item,type(arr.item))

            // if(type(arr.item)===Object){
            //     console.log(arr.item)
            // }
        }
    }
}

/////////////////////////////////////////////////////

/**
 * 数据类型判断终极版
 * @param  {Every} data [任意数据类型]
 * @return {String}      [数据类型字符串]
 */
function type(data){
	return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}//判断数据类型


/////////////////////////////////////////////////////
/**
 * [生成任意范围内的随机整数]
 * @param  {Number} min [最小值]
 * @param  {Number]} max [最大]
 * @return {Number}     [返回min到max间的随机整数]
 */
function rn({min=0,max=9,n=1}){
    // var min = min?min:0
    // var max = max?max:9
    // var n = n?n:1
    var res = ''
        for (let idx = 0; idx <n; idx++) {
            res += parseInt(Math.random()*(max-min+1))+min;//0.999
        }
	return res;
}



let $ = {
    /////////////////////////////////////////////////////
    /**
     * [判断数据类型]
     * @param {*} data 
     */
     type(data){
        return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
    },//判断数据类型

    /////////////////////////////////////////////////////
    /**
     * [实现引用类型深拷贝]
     * @param {obj} arr 
     */
    copy(data){
        // console.log(type(data))
        var types = type(data);
        var obj;
    
        if(types === 'array'){
            obj = [];
        } else if(types === 'object'){
            obj = {};
        } else {
            return data;
        }
    
        if(types === 'array'){
            for(var i = 0, len = data.length; i < len; i++){
                obj.push(copy(data[i]));
            }
        } else if(types === 'object'){
            for(var key in data){
                obj[key] = copy(data[key]);
            }
        }
        return obj;
    },
    /////////////////////////////////////////////////////

/**
 * [随机颜色]
 * @return {String} [返回rgb格式随机颜色]
 */
    rc(num){
        if(num === 16){
            var str = '0123456789abcdef';
            var res = '#';

            for(var i=0;i<6;i++){
                // 获取随机索引值
                var idx = parseInt(Math.random()*str.length);
                res += str.charAt(idx);
            }

            return res;
        }

        var r = parseInt(Math.random()*256);
        var g = parseInt(Math.random()*256);
        var b = parseInt(Math.random()*256);

        return 'rgb('+r+','+g+','+b+')';//rgb(244,12,23)
    },
}




/////////////////////////////////////////////////////

// Cooie的操作
var Cookie = {
	/**
	 * [获取cookie]
	 * @param  {String} name [cookie名]
	 * @return {String}      [返回name对应的cookie值]
	 */
	get:function(name){
		// 获取所有cookie
		var cookies = document.cookie;//

		// 声明变量，用于保存结果
		var res = '';

		// 转成数组
		cookies = cookies.split('; ');

		// 遍历cookie找出name对应的值
		for(var i=0;i<cookies.length;i++){
			// 获取当前cookie
			var arr = cookies[i].split('=');

			// 找出name对应的cookie
			if(arr[0] === name){
				res = arr[1];
			}
		}

		// 返回name对应的值
		// 无则返回cookie
		return res;
	},
	/**
	 * [删除cookie]
	 * @param  {[type]} name [description]
	 * @return {[type]}      [description]
	 */
	remove:function(name){
		var now = new Date();
		now.setDate(now.getDate()-1);

		// document.cookie = name + '=x;expires='+now.toUTCString()
		this.set(name,'x',{expires:now});
	},
	/**
	 * [设置Cookie]
	 * @param {String} name  [cookie名]
	 * @param {String} value [cookie值]
	 * @param {[Object]} prop  [参数]
	 	* expires
	 	* path
	 	* domain
	 	* secure
	 */
	set:function(name,value,prop){
		// cookie必写部分
		var str = name + '=' + value;

		// 不传参数时避免报错
		if(prop === undefined){
			prop = {};
		}

		// 有效期
		if(prop.expires){
			str += ';expires=' + prop.expires.toUTCString();
		}

		// 保存路径
		if(prop.path){
			str +=';path=' + prop.path
		}

		// 域名
		if(prop.domain){
			str +=';domain=' + prop.domain
		}

		// 安全性
		if(prop.secure){
			str += ';secure';
		}

		// 写入cookie
		document.cookie = str;
	},

}

function gan(){
    for (var id = 0; id < 5; id++) {
        setTimeout((id=>{
                console.log(id)
            })(id),1000)
        }   
}
// gan()