import {scrapeGovSG, scrapeAUS, scrapeState, scrapeCherwell, srapeFreshworks} from './getScrapes';
import {writeToCSVFile } from './writeToCSV';

async function start() {
  const govSG = await scrapeGovSG();
  const aus = await scrapeAUS();
  const state = await scrapeState();
  const cherwell = await scrapeCherwell();
  const freshworks = await srapeFreshworks();
  const final = govSG.concat(aus).concat(state).concat(cherwell).concat(freshworks);
  await writeToCSVFile({data: govSG, website: 'govSG'});
  await writeToCSVFile({data: aus, website: 'aus'});
  await writeToCSVFile({data: state, website: 'state'});
  await writeToCSVFile({data: final, website: 'all'});
  await writeToCSVFile({data: cherwell, website: 'cherwell'});
  await writeToCSVFile({data: freshworks, website: 'freshworks'});
}

start()