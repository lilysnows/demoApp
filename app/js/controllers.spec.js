
  beforeEach(module('cioadminApp.controllers'));
  beforeEach(module('cioadminApp.services'));


  // Test the controller
  describe('CompanyListController', function() {
    var $httpBackend, ctrl;
    var scope = {};
    var state;
    var company;

    beforeEach(inject(function($controller, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('json/company.json')
                  .respond([{comapnyName: 'IBM'}, {comapnyName: 'gyh'}]);

      ctrl = $controller('CompanyListController', {$scope: scope, $state: state, popupService: null, $window: null, Company: company});
    }));

    it('should create a `companies` property with 2 companies fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(scope.companies).toEqual([]);

      $httpBackend.flush();
      expect(scope.companies).toEqual([{comapnyName: 'IBM'}, {comapnyName: 'gyh'}]);
    });


  });