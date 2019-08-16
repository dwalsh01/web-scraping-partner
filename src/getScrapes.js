import cheerio from 'cheerio';
import axios from 'axios';

export async function getHTML(url, options) {
  const opts = options ? options : {};
  const { data: html } = await axios.get(url, opts);
  return html;
}

export async function scrapeGovSG() {
  const html = await getHTML('https://www.gov.sg/sgdi/statutory-boards');
  const $ = cheerio.load(html);
  let res = [];
  $('.ministries > li').each((i,e) => {
    
    let obj ={};
    const title = $(e).text();
    const href = `https://www.gov.sg${$(e).find('a').attr('href')}`;
    obj.company = title;
    obj.link = href;
    res[i] = obj;
  });
  return res;
}

export async function scrapeAUS() {
  const html = await getHTML('https://www.directory.gov.au/departments-and-agencies');
  const $ = cheerio.load(html);
  let res = [];
  $('tbody > tr > td').each((i,e) => {
    let obj ={};
    const title = $(e).find('a').text();
    const href = `https://www.directory.gov.au/departments-and-agencies${$(e).find('a').attr('href')}`;
    obj.company = title;
    obj.link = href;
    res[i] = obj;
  });
  return res;
}


export async function scrapeState() {
  const html = await getHTML('https://www.australia.gov.au/about-government/states-territories-and-local-government');
  const $ = cheerio.load(html);
  let res = [];
  $('div.views-field.views-field-field-content-main > div > ul').each((i,e) => {
    if (i !== 0 ) {
      $(e).find('li').each((_,el ) => {
        let obj = {};
        const title = $(el).text();
        const href = $(el).find('a').attr('href');
        obj.company = title;
        obj.link = href;
        res.push(obj);
      });
    }
  });
  return res;
}

export async function scrapeCherwell() {
  const html = await getHTML('https://www.cherwell.com/partners/');
  const $ = cheerio.load(html);
  let res = [];
  
  $('div.wrapper.pad--vert.rhythm--large > div.rhythm--large > div > div').each((i,e) => {
      let obj = {};
      const title = $(e).find('.aspect > a > img').attr('alt');
      const href = `https://www.cherwell.com${$(e).find('.aspect > a').attr('href')}`;
      obj.company = title;
      obj.link = href;
      res.push(obj);
     });
  return res;
}

export async function srapeFreshworks() {
  const html = await getHTML('https://www.freshworks.com/company/partners/find-partners/');
  const $ = cheerio.load(html);
  let res = [];
  $('.partner-card-content').each((i,e) => {
      let obj = {};
      const title = $(e).find('.reseller-info > h6').html();
      const href = $(e).find('.reseller-info > span:nth-child(4) > a').attr('href');
      obj.company = title;
      obj.link = href;
      res.push(obj);
     });
  return res;
}

export async function scrapeExample() {

  // html
  // |
  // -> section tag
  //   |
  //   -> sub section tag
  
  // fetch html
  const html = await getHTML('https://www.example.com');
  // parse html
  const $ = cheerio.load(html);

  // this is an empty list 
  let res = [];
  $('section where partners names are').each((_,e) => {
      // 'each' gives loops through each element that has the css/html required

      // this is the inital obj we will add company data to
      let obj = {};
      // using cheerio js to find the reseller information, tags found by inspecting page
      const title = $(e).find('sub tags here').html();
      const href = $(e).find('sub tags here').attr('href');

      // updating empty object to insert the data fetched
      obj.company = title;
      obj.link = href;

      // 'push' is a function of lists which give you the ability to add
      // something to the list (object, primative, etc.)
      res.push(obj);
     });
     // return the list of company data objects
  return res;
}