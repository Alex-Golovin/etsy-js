(function() {
  var etsyjs;

  etsyjs = module.exports = {
    client: require('./etsyjs/client'),
    shop: require('./etsyjs/shop'),
    category: require('./etsyjs/category'),
    user: require('./etsyjs/user'),
    guest: require('./etsyjs/guest'),
    me: require('./etsyjs/me'),
    search: require('./etsyjs/search'),
    listing: require('./etsyjs/listing'),
    address: require('./etsyjs/address')
  };

}).call(this);
