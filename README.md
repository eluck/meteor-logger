# meteor-logger
Override console.log inside meteor project


#### Install

```
npm install meteor-logger

```

#### Use

```
import MeteorLogger from 'meteor-logger';

MeteorLogger.init()
```

#### MeteorLogger.init(options):

Parameter | Type | Description
------|------ | -------------
options.showTimeStamp | boolean | Add a timestamp to every console.log, Default is true.
options.customPrefix | function |  A function that returns the string which will be prefixed to every console.log invocation.

example:

```
import MeteorLogger from 'meteor-logger';

const options = {
  showTimeStamp: false,
  customPrefix: function() { return `APP LOG[${new Date().getTime()}]`}
}
MeteorLogger.init(options)

```
