# meteor-logger
Prepends console functions with timestamp. Works for Meteor.


#### Install

```
npm install @knotel/meteor-logger
```

#### Init the logger

```
import MeteorLogger from 'meteor-logger';
MeteorLogger.init()
```


Example:

```
import MeteorLogger from 'meteor-logger';
MeteorLogger.init(options)
console.log('Hello World')
// APP LOG[1509812506800]: Hello World
```

#### Reset the logger

```
MeteorLogger.reset()
```
