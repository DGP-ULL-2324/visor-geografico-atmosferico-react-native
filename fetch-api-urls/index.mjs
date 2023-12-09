/**
 * @author Marcos Barrios
 * @since 09_12_2023
 */

'use strict';

import URLScrapper from "./src/urls_scrapper.mjs";
import { inspect } from 'util';

async function main() {
  const urlScrapper = new URLScrapper();
  const allURL = await urlScrapper.run();
  console.log(inspect(allURL, null, 2));
}

(async () => {
  await main();
})();
