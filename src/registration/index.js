import angular from "angular";
import uiRouter from "angular-ui-router";
import RegistrationController from "./registration.controller";
import RegistrationRoute from "./registration.route";
var registrationComponent=angular.module("NewsFeed.registration",[uiRouter])
.config(RegistrationRoute)
.controller("RegistrationController",RegistrationController)
.name;
export default registrationComponent;
