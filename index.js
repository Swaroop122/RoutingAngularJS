var app = angular.module("myApp", ["ngRoute"]);
app.config($routeProvider=> {
   
 $routeProvider
    .when("/", {
        templateUrl : "./m.html"
    })
    .when("/internships", {
        templateUrl : "./i.html"
    })
    .when("/courses", {
        templateUrl : "./c.html"
    })


   
})