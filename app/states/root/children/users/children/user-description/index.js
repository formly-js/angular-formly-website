const ngModule = require('registerModule')(require('ngCommon'));
const stateUtils = require('stateUtils');

module.exports = {
  name: ngModule.name,
  url: ':slug',
  template: require('./index.html'),
  data: {
    activationEvents: 'showUserDescription'
  },
  controllerAs: 'vm',
  resolve: {
    slug: stateUtils.resolveParameter('slug')
  },
  controller: function(users, slug, _, $sce) {
    'ngInject';
    var vm = this;
    vm.user = _.find(users, {slug});
    vm.userDescription = $sce.trustAsHtml(vm.user.description);
  }
};
