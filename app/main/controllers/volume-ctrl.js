'use strict';
angular.module('main')
.controller('VolumeCtrl', function ($log, $http) {

  $log.log('Hello from your Controller: VolumeCtrl in module main:. This is your controller:', this);

    var volume = this;

    volume.volume = {
      min:'0',
      max:'100',
      value:'20'
    };

    var onRelease = function () {

      $http.get('http://kingsland:9000/volume/change/' + volume.volume.value).then(function(res) {
        $log.log(res.data);
        volume.result = res.data;
      });

    }

    // Expose functions (to the view).

    volume.onRelease = onRelease;

    return volume;
});
