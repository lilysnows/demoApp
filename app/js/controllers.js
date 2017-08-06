angular.module('cioadminApp.controllers',[]).controller('CompanyListController',function($scope,$state,popupService,$window,Company){

    $scope.companies=Company.query();

    $scope.deleteCompany=function(company){
        if(popupService.showPopup('Really delete this?')){
            company.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('CompanyViewController',function($scope,$stateParams,Company){

// $window.confirm($stateParams.companyName);
    $scope.company=Company.get({companyName:$stateParams.companyName});

}).controller('CompanyCreateController',function($scope,$state,$stateParams,Company){

    $scope.company=new Company();

    $scope.addCompany=function(){
        $scope.company.$save(function(){
            $state.go('companies');
        });
    }

}).controller('CompanyEditController',function($scope,$state,$stateParams,Company){

    $scope.updateCompany=function(){
        $scope.company.$update(function(){
            $state.go('companies');
        });
    };

    $scope.loadCompany=function(){
        $scope.company=Company.get({companyName:$stateParams.companyName});
    };

    $scope.loadCompany();
});