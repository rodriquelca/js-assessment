exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var valBit = ('00000000' + num.toString(2)).substr(-8);
    return parseInt(valBit.charAt(8 - bit), 10);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    return ('00000000' + num.toString(2)).substr(-8);
  },

  multiply: function(a, b) {
    var c = b * 100;
    return a * c / 100;
  }
};
