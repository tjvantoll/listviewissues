var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;

var items = new ObservableArray([]);
var pageData = new Observable();
pageData.set("items", items);

exports.loaded = function(args) {
  var page = args.object;
  page.bindingContext = pageData;
};

var counter = 0;
exports.add = function() {
  counter++
  items.unshift({ name: counter });
};
