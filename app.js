var app = angular.module('green-leaves', ['vsGoogleAutocomplete']);

app.controller("content-controller", function($scope){

$scope.hideResult = 1;

$scope.validateForm = function(isValid){
  if(isValid){
    alert("Gracias");
    $scope.hideForm = 1;
    $scope.hideResult = 0;
  }else{
    var inputs = document.getElementsByTagName("input");
    alert("Se encontro uno o mas de los siguientes errores: \n\n-Nombre\n-Email\n-Telefono\n-Fecha\n-Ciudad y Estado \n\nPorfavor corriga los errores para continuar");
    for(var i=0;i<inputs.length;i++){
      if(inputs[i].hasAttribute("required")){
        inputs[i].style.backgroundColor="lightcoral";
      }
    }
  }
}

});

function myFunction() {
  alert("I am an alert box!")
};