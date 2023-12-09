/**
 * @author Marcos Barrios
 * @since 09_10_2022
 * @desc Scrapper for {@link https://datos.tenerife.es/es/datos/conjuntos-de-datos?filter%5bgroups%5d%5b0%5d=medio-ambiente}
 *
 */

'use strict';

import { PlaywrightCrawler, log } from 'crawlee';
import playwright from 'playwright';
import { expect } from 'playwright/test';

/**
 * Scrapper for {@link https://datos.tenerife.es/es/datos/conjuntos-de-datos?filter%5bgroups%5d%5b0%5d=medio-ambiente}
 */
export default class URLScrapper {
  /** @private @constant  */
  #scrapper = undefined;
  #output = undefined;
  #url = undefined;
  #partialLinkTitle = undefined;

  /**
   * 
   * @param {string} partialLinkTitle partial content that the meteorology entry
   *    must have to extract it's link.
   */
  constructor(partialLinkTitle) {
    this.#output = [];
    this.#url = 'https://datos.tenerife.es/es/datos/conjuntos-de-datos?filter%5bgroups%5d%5b0%5d=medio-ambiente';
    this.#partialLinkTitle = partialLinkTitle;

    const requestHandler = this.#myHandler.bind(this);
    this.#scrapper = new PlaywrightCrawler({
      headless: true,
      navigationTimeoutSecs: 100000,
      requestHandlerTimeoutSecs: 100000,
      browserPoolOptions: {
        closeInactiveBrowserAfterSecs: 100000,
        operationTimeoutSecs: 100000,
      },
      requestHandler,
      retryOnBlocked: true,
      maxConcurrency: 1,
      maxRequestRetries: 0,
    });
  }

  async #myHandler({ page, request }) {
    page.setDefaultTimeout(5000);
    log.info('URLScrapper visited page: ' + request.url);

    try {
      const buttonNextPageLocator = page.locator('a.forward', { timeout: 5000 });
      const linkLocator =
          page.getByRole('link').getByText(this.#partialLinkTitle);

      await page.waitForLoadState();

      while (await buttonNextPageLocator.isVisible()) {
        const allLinkLocator = await linkLocator.all();
        for (const locator of allLinkLocator) {
          await expect(locator).toHaveAttribute('href');
          const HREF = await locator.getAttribute('href');
          const URL = 'https://datos.tenerife.es' + HREF;
          this.#output.push(URL);
        }
        await buttonNextPageLocator.click();
        await page.waitForLoadState();
      }
    } catch (error) {
      if (error instanceof playwright.errors.TimeoutError) {
        log.info('A timeout took place: ' + error);
      } else {
        log.error('An error took place ' + error);
      }
      log.info('Stopping scrapper.');
    }
  };

  async run() {
    await this.#scrapper.run([this.#url]);
    return this.#output;
  }
}
