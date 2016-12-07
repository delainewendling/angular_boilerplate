"use strict";

var app = angular.module("MyApp", ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl'
  })
  .otherwise('/');
});