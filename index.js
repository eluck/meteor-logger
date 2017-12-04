var DateLogger = {
  init: function() {
    DateLogger.originalConsole = console;
    DateLogger.originals = {};

    ['info', 'warn', 'error'].forEach(function(func) {
      DateLogger.originals[func] = console[func];
      console[func] = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        args.unshift((new Date).toISOString());
        DateLogger.originals[func].apply(DateLogger.originalConsole, args);
      }
    });

    ['log'].forEach(function(func) {
      DateLogger.originals[func] = console[func];
      console[func] = function() {
        if (DateLogger.listeningRegexp.test(arguments[0]))
          DateLogger.originals[func].apply(DateLogger.originalConsole, arguments);
        var args = Array.prototype.slice.call(arguments, 0);
        args.unshift((new Date).toISOString());
        DateLogger.originals[func].apply(DateLogger.originalConsole, args);
      }
    });
  },


  reset: function() {
    ['log', 'info', 'warn', 'error'].forEach(function(func) {
      if (DateLogger.originals[func]) console[func] = DateLogger.originals[func];
    });
  },


  listeningRegexp: /^LISTENING$/
}


module.exports = DateLogger;
