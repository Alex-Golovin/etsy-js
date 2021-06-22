(function() {
  var Guest, util,
    __slice = [].slice;

  util = require('util');

  Guest = (function() {
    function Guest(guestId, client) {
      this.guestId = guestId;
      this.client = client;
    }

    Guest.prototype.addToCart = function({ listingId, personalization, listing_inventory_id }, cb) {
      return this.client.post("/guests/" + this.guestId + "/carts", {
        guest_id: this.guestId,
        listing_id: listingId,
        personalization: personalization,
        listing_inventory_id: listing_inventory_id
      }, function(err, status, body, headers) {
        if (err) {
          return cb(err);
        }
        if (status !== 200) {
          return cb(new Error('Get user error'));
        } else {
          return cb(null, body, headers);
        }
      });
    };

    Guest.prototype.generate = function(cb) {
      return this.client.get("/guests/generator", function(err, status, body, headers) {
        if (err) {
          return cb(err);
        }
        if (status !== 200) {
          return cb(new Error('Get user error'));
        } else {
          return cb(null, body, headers);
        }
      });
    };

    return Guest;

  })();

  module.exports = Guest;

}).call(this);
