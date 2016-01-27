module.exports = function MainCtrl(examples, logoSrc) {
  'ngInject';
  var vm = this;

  vm.examples = examples;
  vm.logoSrc = logoSrc;
};
