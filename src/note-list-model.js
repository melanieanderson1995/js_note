'use strict';

(function(exports) {
  function Notelist() {
    this.notes = [];
  }

Notelist.prototype.create = function (message) {
  this.notes.push(message);
}

  exports.Notelist = Notelist;
})(this);
