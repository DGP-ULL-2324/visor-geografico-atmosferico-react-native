/**
 * @author Marcos Barrios
 * @since 09_10_2022
 * @desc Scrapper for a webpage like {@link https://datos.tenerife.es/es/datos/conjuntos-de-datos/datos-meteorologicos-diezminutales-de-tenerife-para-la-estacion-realeth-n?return=aHR0cHM6Ly9kYXRvcy50ZW5lcmlmZS5lcy9lcy9kYXRvcy9jb25qdW50b3MtZGUtZGF0b3M=}
 *
 */

'use strict';

import { PlaywrightCrawler, log } from 'crawlee';
import playwright from 'playwright';
import { expect } from 'playwright/test';

/**
 * Scrapper for a webpage like {@link https://datos.tenerife.es/es/datos/conjuntos-de-datos/datos-meteorologicos-diezminutales-de-tenerife-para-la-estacion-realeth-n?return=aHR0cHM6Ly9kYXRvcy50ZW5lcmlmZS5lcy9lcy9kYXRvcy9jb25qdW50b3MtZGUtZGF0b3M=}
 */
export default class APIURLScrapper {
  /** @private @constant  */
  #scrapper = undefined;
  #output = undefined;
  #allURL = undefined;

  /**
   * @param {array} allURL array of string urls that the scrapper will visit
   */
  constructor(allURL) {
    this.#output = {};
    this.#allURL = allURL;

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
    log.info('APIURLScrapper visited page: ' + request.url);

    await page.waitForLoadState();

    const titleLocator = page.locator('div.titulo');
    const TITLE = await titleLocator.textContent();
    const STATION_NAME = /para la estación\s(.+)/.exec(TITLE)[1];

    const apiTextLocator = page.locator('a.lnk').getByText('api/action/');
    const API_URL = await apiTextLocator.textContent();
    
    this.#output[STATION_NAME] = API_URL;
    log.info(`Station: ${STATION_NAME}, API_URL: ${API_URL}`);
  };

  async run() {
    await this.#scrapper.run(this.#allURL);
    return this.#output;
  }
}
