angular.module('starter.controllers')
  .controller('camera', function($scope) {
    $scope.name = "camera";
    $scope.takePicture = function() {
      navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
      });

      function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
      }

      function onFail(message) {
        alert('Failed: ' + message);
      }
    }

  });