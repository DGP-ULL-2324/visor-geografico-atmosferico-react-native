/**
 * @author Marcos Barrios
 * @since 09_12_2023
 */

'use strict';

import { inspect } from 'util';
import { writeFile } from "fs/promises";

import APIURLScrapper from "./src/api_urls_scrapper.mjs";
import URLScrapper from "./src/urls_scrapper.mjs";

async function main() {
  const urlScrapper = new URLScrapper('Datos meteorológicos diezminutales');
  const allURL = await urlScrapper.run();

  // it seems that if next scrapper is started too soon then there is an error,
  // so wait a bit.
  await (new Promise(resolve => setTimeout(resolve, 2000)));

  const apiURLScrapper = new APIURLScrapper(allURL);
  const apiUrlPerStation = await apiURLScrapper.run();

  try {
    await writeFile('output.json', JSON.stringify(apiUrlPerStation, null, 2));
    console.log('Output.json sucessfully written');
  } catch (error) {
    console.log('There was an error while writing apiUrlPerStation object.' +
        error);
  }
  console.log(inspect(apiUrlPerStation, null, 2));
}

(async () => {
  await main();
})();
