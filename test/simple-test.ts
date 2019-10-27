/**
 * @jest-environment node
 */
import { WebDriver, Builder } from "selenium-webdriver";
import { Eyes, VisualGridRunner, Target, ConsoleLogHandler, Configuration, BrowserType, DeviceName, ScreenOrientation } from "@applitools/eyes-selenium";

describe("simple test", () => {
  console.log(process.env.APPLITOOLS_API_KEY);

  let driver: WebDriver;
  let eyes: Eyes;

  beforeEach(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    
    eyes = await new Eyes(new VisualGridRunner());
    eyes.setLogHandler(new ConsoleLogHandler(true));
    eyes.setForceFullPageScreenshot(true);

    const configuration = new Configuration();
    configuration.setConcurrentSessions(3);
    configuration.setAppName('Eyes Examples');
    configuration.setTestName('My first Javascript test!');
    configuration.addBrowser(1200, 800, BrowserType.CHROME);
    configuration.addBrowser(1200, 800, BrowserType.FIREFOX);
    configuration.addDeviceEmulation(DeviceName.iPhone_4, ScreenOrientation.PORTRAIT);

    eyes.setConfiguration(configuration);
  });

  test("visual check", async () => {
    await eyes.open(driver);

    await driver.get(process.env.URL);

    await eyes.check('Main Page', Target.window());

    const results = await eyes.getRunner().getAllTestResults();
    console.log(results); // eslint-disable-line
  });

  afterEach(async () => {
    await driver.close();
    await eyes.abortIfNotClosed();
  });
});
