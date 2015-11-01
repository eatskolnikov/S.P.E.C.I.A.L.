app.controller("SpecialCtrl", ["$scope", "$sce", "$http", function($scope, $sce, $http)
{
  this.remainingPoints = { value:21 };
  this.strength = { value:1, x:60, y:120, w:60, h:50 };
  this.perception = { value:1, x:120, y:120, w:60, h:50 };
  this.endurance = { value:1, x:180, y:120, w:50, h:50 };
  this.charisma = { value:1, x:230, y:120, w:60, h:50 };
  this.intelligence = { value:1, x:290, y:120, w:60, h:50 };
  this.agility = { value:1, x:350, y:120, w:50, h:50 };
  this.luck = { value:1, x:400, y:120, w:60, h:50 };
  this.perks =[];
  $scope.inSquare = function(specialProperty, x, y)
  {
    return ((x>=specialProperty.x) && x<=(specialProperty.x+specialProperty.w)) && ((y>=specialProperty.y)&&(y<=(specialProperty.y+(specialProperty.value*specialProperty.h))) );
  };
  $scope.drawImage = function(imageObj)
  {
    var canvas = document.getElementById('specialChartCanvas');
    var context = canvas.getContext('2d');
    context.drawImage(imageObj, 0, 0);
    var imageData = context.getImageData(0, 0, imageObj.width, imageObj.height);
    var data = imageData.data;
    for(var i = 0; i < data.length; i += 4) {
      var coordX = (i/4)%imageObj.width;
      var coordY = ((i/4)/imageObj.width);
      if($scope.inSquare($scope.special.strength,coordX,coordY)){ continue; }
      if($scope.inSquare($scope.special.perception,coordX,coordY)){ continue; }
      if($scope.inSquare($scope.special.endurance,coordX,coordY)){ continue; }
      if($scope.inSquare($scope.special.charisma,coordX,coordY)){ continue; }
      if($scope.inSquare($scope.special.intelligence,coordX,coordY)){ continue; }
      if($scope.inSquare($scope.special.agility,coordX,coordY)){ continue; }
      if($scope.inSquare($scope.special.luck,coordX,coordY)){ continue; }
      var brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
      data[i] = brightness;
      data[i + 1] = brightness;
      data[i + 2] = brightness;
    }
    context.putImageData(imageData, 0, 0);
  };
  var valueChangedHandler = function(specialProperty){
    return function (newVal, oldVal) {
      if(newVal ==='' || typeof(newVal) =='undefined'){ specialProperty.value = oldVal; }
      else if(newVal > 10){ specialProperty.value = 10; }
      else if(newVal < 1){ specialProperty.value = 1; }
      $scope.special.remainingPoints.value = 28 - ($scope.special.strength.value + $scope.special.perception.value + $scope.special.endurance.value + $scope.special.charisma.value + $scope.special.intelligence.value + $scope.special.agility.value + $scope.special.luck.value);
      if($scope.special.remainingPoints.value < 0){
        $scope.special.remainingPoints.value = 0;
        specialProperty.value = oldVal;
      }
      $scope.imageObj.src = './assets/img/perks/Fallout_4_Perk_Poster_web.jpg?'+new Date().getTime();
    };
  };
  $scope.$watch(angular.bind(this, function () {
      return this.strength.value;
  }), valueChangedHandler(this.strength));
  $scope.$watch(angular.bind(this, function () {
      return this.perception.value;
  }), valueChangedHandler(this.perception));
  $scope.$watch(angular.bind(this, function () {
      return this.endurance.value;
  }), valueChangedHandler(this.endurance));
  $scope.$watch(angular.bind(this, function () {
      return this.charisma.value;
  }), valueChangedHandler(this.charisma));
  $scope.$watch(angular.bind(this, function () {
      return this.intelligence.value;
  }), valueChangedHandler(this.intelligence));
  $scope.$watch(angular.bind(this, function () {
      return this.agility.value;
  }), valueChangedHandler(this.agility));
  $scope.$watch(angular.bind(this, function () {
      return this.luck.value;
  }), valueChangedHandler(this.luck));
  this.loadImage = function(){
    $scope.imageObj = new Image();
    $scope.imageObj.onload = function() {
      $scope.drawImage($scope.imageObj);
    };
    $scope.imageObj.width=480;
    $scope.imageObj.height=715;
    $scope.imageObj.src = './assets/img/perks/Fallout_4_Perk_Poster_web.jpg';
  };
  this.loadImage();
}]);
