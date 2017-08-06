

angular.module('cioadminApp.services',[]).factory('Company',function($resource){
    // return $resource('http://movieapp-13434.onmodulus.net/api/movies/:id',{id:'@_id'},{
    return $resource('json/:companyName.json',{companyName: '@companyName'}, {
    	query:{
    		method: 'GET',
    		params: {companyName: 'company'},
	        isArray: true
    	},    	
        update: {
            method: 'PUT'
        }


    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});