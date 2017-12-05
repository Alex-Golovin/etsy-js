(function() {
  var Receipt;

  Receipt = (function() {
    function Receipt(shopId, client) {
      this.shopId = shopId;
      this.client = client;
    }

    Receipt.prototype.findAllShopReceipts = function(cb) {
      return this.client.get("/shops/" + this.shopId + "/receipts", function(err, status, body, headers) {
        if (err) {
          return cb(err);
        }
        if (status !== 200) {
          return cb(new Error('Get receipts error'));
        } else {
          return cb(null, body, headers);
        }
      });
    };

    return Receipt;

  })();

  module.exports = Receipt;

}).call(this);
