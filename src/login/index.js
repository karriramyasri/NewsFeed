import angular from "angular";
import uiRouter from "angular-ui-router";
import LoginController from "./login.controller";
import loginRoute from "./login.route";
var loginComponent=angular.module("NewsFeed.login",[uiRouter])
.config(loginRoute)
.controller("LoginController",LoginController)
.name;
export default loginComponent;
