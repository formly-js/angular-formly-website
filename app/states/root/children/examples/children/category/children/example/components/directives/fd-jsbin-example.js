module.exports = ngModule => {
  ngModule.directive('fdJsbinExample', fdJsbinExample);

  fdJsbinExample.styles = require('./fd-jsbin-example.css');

  function fdJsbinExample() {
    return {
      restrict: 'E',
      scope: {
        noSsl: '@',
        jsbinId: '@'
      },
      link: function(scope, el) {
        // const s = scope.noSSL === 'true' ? '' : 's';
        const s = ''; // maybe eventually we'll add HTTPS support again...
        el.replaceWith(angular.element(`
          <div class="fd-jsbin-example">
            <iframe width="100%"
                    height="100%"
                    src="http${s}://jsbin.com/${scope.jsbinId}/embed?output">
            </iframe>
          </div>
        `));
      }
    };
  }
};
