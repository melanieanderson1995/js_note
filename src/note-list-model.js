'use strict';

(function(exports) {
  function Notelist() {
    this.notes = [];
  }

Notelist.prototype.create = function (message) {
  this.notes.push(message);
}

Notelist.prototype.all = function () {
  return this.notes;
}

  exports.Notelist = Notelist;
})(this);
