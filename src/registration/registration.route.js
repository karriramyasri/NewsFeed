function route($stateProvider)
{
 $stateProvider.state("registration",{
     url:"/registration",
     template:require("./registration.html"),
     controller:"RegistrationController",
     controllerAs:"regisCtrl"

    })
}
route.$inject=["$stateProvider"];
export default route;
