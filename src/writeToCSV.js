import fs from 'fs';
import {createObjectCsvWriter} from 'csv-writer';

export function writeToCSVFile({data, website}) {
  fs.writeFile(`csv-files/${website}-companies.csv`, '', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('file created');
    }
  });
    const csvWriter = createObjectCsvWriter({
      path: `csv-files/${website}-companies.csv`,
      header: [
        { id: 'company', title: 'company' },
        { id: 'link', title: 'link' }
      ]
    });
    csvWriter.writeRecords(data)
      .then(() => {
        console.log('...Done');
      });
}