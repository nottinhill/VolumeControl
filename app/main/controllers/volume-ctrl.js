'use strict';
angular.module('main')
.controller('VolumeCtrl', function ($log) {

  $log.log('Hello from your Controller: VolumeCtrl in module main:. This is your controller:', this);

    var volume = this;

    volume.volume = {
      min:'0',
      max:'100',
      value:'20'
    };



    $log.log ( volume.volume);

    return volume;
});
