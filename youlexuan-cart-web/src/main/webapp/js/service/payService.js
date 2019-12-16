//服务层
app.service('payService',function($http){
	    	

	this.creatNative = function () {
	    alert()
        return $http.get("../pay/creatNative.do");
    }


});