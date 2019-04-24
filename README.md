# applitools-reproducible-example

### Update (4/24)

Took some time to get a working example of the visual grid solution available in the new @applitools bindings and kept running into CORS errors currently happening when attempting to work with the visual grid. Updated the reproducible example to mimic the error I am seeing. Is there a workaround for this?

Here's the logs:
```
  console.error node_modules/jsdom/lib/jsdom/virtual-console.js:29
    Error: Cross origin http://localhost forbidden
        at dispatchError (/Users/davidhale/Dev/reproducible-examples/applitools-reproducible-example/node_modules/jsdom/lib/jsdom/living/xhr-utils.js:65:19)
        at Object.validCORSHeaders (/Users/davidhale/Dev/reproducible-examples/applitools-reproducible-example/node_modules/jsdom/lib/jsdom/living/xhr-utils.js:77:5)
        at receiveResponse (/Users/davidhale/Dev/reproducible-examples/applitools-reproducible-example/node_modules/jsdom/lib/jsdom/living/xmlhttprequest.js:847:21)
        at Request.client.on.res (/Users/davidhale/Dev/reproducible-examples/applitools-reproducible-example/node_modules/jsdom/lib/jsdom/living/xmlhttprequest.js:679:38)
        at Request.emit (events.js:189:13)
        at Request.onRequestResponse (/Users/davidhale/Dev/reproducible-examples/applitools-reproducible-example/node_modules/request/request.js:1066:10)
        at ClientRequest.emit (events.js:189:13)
        at HTTPParser.parserOnIncomingClient [as onIncoming] (_http_client.js:556:21)
        at HTTPParser.parserOnHeadersComplete (_http_common.js:109:17)
        at TLSSocket.socketOnData (_http_client.js:442:20) undefined

    2019-04-24T19:10:53Z Eyes: [LOG    ] {} (): ServerConnector.renderInfo - post failed on https://eyesapi.applitools.com/api/sessions/renderinfo: Network Error with params {"apiKey":"<redacted_cause_secret>"}
```

### Update (4/19)

Was told to update my code without async/await in Typescript and was also told the Applitools representative couldn't get my reproducible example running properly on their end. When I removed my async/await code it did not work. Added await/async back into the mix. Still not sure how the representative couldn't get my repo running properly but I will make it more clear the version of node/npm I am running before removing it completely. 

```
node v10.15.1
npm v6.9.0
```

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