module.exports = function(grunt) {

  grunt.initConfig({
    'gh-pages': {
      options: {
        message: 'Update ' + Date.now() + ' ' + getRandomEmoji()
      },
      src: ['index.html', 'bundle.js', 'res/**/*', 'favicon.ico', 'CNAME']
    }
  });

  grunt.loadNpmTasks('grunt-gh-pages');

  grunt.registerTask('deploy', ['gh-pages']);
};


function getRandomEmoji() {
  var emoji = [
    'ʕ •ᴥ•ʔ',
    '¯\\_(ツ)_/¯',
    '＼(＾O＾)／',
    'ᕕ( ᐛ )ᕗ',
    '♪┏(・o･)┛♪┗ ( ･o･) ┓♪',
    '(ó ì_í)=óò=(ì_í ò)',
    'd-_-b',
    '(－‸ლ)',
    'ᕙ(⇀‸↼‶)ᕗ',
    '┬┴┬┴┤(･_├┬┴┬┴',
    '~=[,,_,,]:3',
    'ಠ_ಠ',
    'ლ(ಠ益ಠლ)',
    '[¬º-°]¬',
    'ಠ_ರೃ',
    'ʕ •́؈•̀)',
    '(◞‸◟；)',
    '(╯°□°)╯︵ ┻━┻',
    '(ó ì_í)=óò=(ì_í ò)',
  ];
  return emoji[Math.floor(Math.random() * (emoji.length - 1))];
}
