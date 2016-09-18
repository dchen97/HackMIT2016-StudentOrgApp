(function() {
  var root = this;

  function PasEvent(firebaseRef, options) {

    this._eventRef = firebaseRef;
    this._firebaseApp = firebaseRef.database.app;

    this._description = null;
    this._rsvps = null;
    this._attendees = null;
    this._teams = null;

    this._options = options || {};

    PasEvent.prototype = {

      _loadEventMetadata: function(onComplete) {
        var self = this;

        this._eventRef.transaction(function(current) {
          if (!current || !current.id || !current.name) {
            return {
              self._
            }
          }
        })
      }
    }
  }
})
