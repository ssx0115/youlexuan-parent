 //控制层 
app.controller('payController' ,function($scope,$controller   ,payService){
	
	$controller('baseController',{$scope:$scope});//继承
	
	$scope.creatNative =function () {
		payService.creatNative().success(
			function (response) {
                new QRious({
                    element:document.getElementById("qrious"),
                    size:250,
                    level:'H',
                    value:response.qrcode
                })

            }
		)
    }

});	