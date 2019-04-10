# applitools-reproducible-example
Reproducible Example

While adopting Applitools as a possible visual regression tool to use at my job I'm having trouble figuring out some of slow down that are happening regarding creation of MutableImages.
I've been trying to figure out how the slowdown occurs and I can't really say. 
Sometimes slow down happens with a simple `checkWindow()` other times it only occurs when I am forcing full page screenshots. 

I'm okay with the probability of time delays with visual regression but thinking about the permutation of what is needed at my position and the amount of time it would take to do so has me concerned. An explanation as to why this is happening would be greatly appreciated.

All testing was done locally on a production environment. I'm seeing overall test run times of `3-5 minutes` for a single dimension/browser/test. 

Install:
```
npm i
```

Run:
```
npm test
```

Example Verbose Logs:
```
2019-04-10T21:27:34Z Eyes: Done getting base64! Creating MutableImage...

console.log node_modules/eyes.sdk/src/ConsoleLogHandler.js:31
2019-04-10T21:29:02Z Eyes: Scrolling to: {"x":0,"y":0}

2019-04-10T21:27:34Z Eyes: Done getting base64! Creating MutableImage...

console.log node_modules/eyes.sdk/src/ConsoleLogHandler.js:31
2019-04-10T21:29:02Z Eyes: Scrolling to: {"x":0,"y":0}
```

NOTE: The `scripts` folder is necessary as a hotswap needs to occur between typings defined inside `eyes.sdk` and `eyes.selenium` as tsc will fail on compilation