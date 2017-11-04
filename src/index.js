const originalConsole = console;
const originalLog = console.log;
const listeningRegexp = /^LISTENING$/;


const meteorLogger = {
  init(options = {}) {
    const { customPrefix = null, showTimeStamp = true } = options;

    console.log = function()  {
      if (listeningRegexp.test(arguments[0])) originalLog.apply(originalConsole, arguments);
      let newArgs = Object.values(arguments);
      if (customPrefix) newArgs.unshift(customPrefix())
      if (showTimeStamp) newArgs.unshift(new Date)
      originalLog.apply(originalConsole, newArgs);
    }
  },


  reset() {
    console.log = originalLog;
  }

}

export default meteorLogger
