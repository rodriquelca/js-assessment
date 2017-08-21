/* jslint devel: true */
exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var r = 0;
    for (var i = 0; i < arr.length; i++) {
      r += arr[i];
    }
    return r;
  },

  remove: function(arr, item) {
    var i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i = 0;
      }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    var i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i = 0;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var c = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        c++;
      }
    }
    return c;
  },

  duplicates: function(arr) {
    arr.sort();
    var aux = [];
    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          aux[arr[i]] = arr[i];
        }
      }
    }
    return aux;
  },

  square: function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] *= arr[i];
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var aux = [];
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] === target) {
        aux.push(i);
      }
    }
    return aux;
  }
};
