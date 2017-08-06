angular.module('cioadminApp',['ui.router','ngResource','cioadminApp.controllers','cioadminApp.services']);

angular.module('cioadminApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('companies',{
        url:'/companies',
        templateUrl:'partials/list.html',
        controller:'CompanyListController'
    }).state('viewCompany',{
       url:'/companies/view',
       templateUrl:'partials/view.html',
       controller:'CompanyViewController'
    }).state('newCompany',{
        url:'/companies/new',
        templateUrl:'partials/add.html',
        controller:'CompanyCreateController'
    }).state('editCompany',{
        url:'/companies//edit',
        templateUrl:'partials/edit.html',
        controller:'CompanyEditController'
    });
}).run(function($state){
   $state.go('companies');
});