(function($) {

  if (!$ || (parseInt($().jquery.replace(/\./g,""), 10) > 170)) {
    throw new Error ("jQuery 1.7 or later required!");
  }

  var root = this;

  root.PasEventUI = PasEventUI;

  if (!self.PasDefaultTemplates) {
    throw new Error("Unable to find event templates!");
  }

  function PasEventUI(firebaseRef, el, options) {
    var self = this;

    if (!firebaseRef) {
      throw new Error('PasEventUI: Missing required argument `firebaseRef`');
    }

    if (!el) {
      throw new Error('PasEventUI: Missing required argument `el`');
    }

    options = options || {};
    this._options = options;

    this._el = el;
    this._user = null;
    this._event = new PasEvent(firebaseRef, options);

    this.
  }
})
