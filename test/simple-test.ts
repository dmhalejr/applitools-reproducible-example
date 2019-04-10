import { WebDriver, Builder } from "selenium-webdriver";
import { Eyes, ConsoleLogHandler } from "eyes.selenium";

describe("simple test", () => {
  let browser: WebDriver;
  let eyes: Eyes;

  beforeEach(async () => {
    browser = await new Builder().forBrowser("chrome").build();
    eyes = await new Eyes();
    eyes.setLogHandler(new ConsoleLogHandler(true));
    eyes.setForceFullPageScreenshot(true);
  });

  test("visual check", async () => {
    await browser.navigate().to("https://www.lonelyplanet.com");

    await eyes.open(browser, "Lonely Planet", "Simple Test");

    await eyes.checkWindow("Home Page");
  });

  afterEach(async () => {
    try {
        await eyes.close(false);
      } finally {
        await eyes.abortIfNotClosed();
    }
    await browser.close();
  });
});
