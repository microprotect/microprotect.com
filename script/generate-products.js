const axios = require('axios');
const parse = require('csv-parse/lib/sync');

const { log: print } = console;

const PRODUCTS = [
  {
    name: 'carediscover',
    locale: 'ko',
    documentId: '2PACX-1vRp0lZ0RzZuGP98LQBpgRwrTHJD4aDEjJx4PLCE-DLlpl4zmQngZFpU7JKg_lPpDlluVSpANIHlf4bZ',
    informationSheetId: '0',
    pricingSheetId: '631227283',
  },
  {
    name: 'carecollege',
    locale: 'ko',
    documentId: '2PACX-1vSq1BKUMN2KMjODrOUtZEyhz2OYb7KzV8Mbhmy44_XKIt6_0lR3tarhIkHxVVC9n3li4LtwjKM6Cn2F',
    informationSheetId: '0',
    pricingSheetId: '631227283',
  },
];

const INFORMATION_KEYS = ['icon', 'label', 'description'];

function csvUrl(documentId, sheetId) {
  return `https://docs.google.com/spreadsheets/d/e/${documentId}/pub?gid=${sheetId}&single=true&output=csv`;
}

async function fetchCSV(url) {
  const { data } = await axios.get(url);
  return parse(data);
}

async function fetchProduct(product) {
  const {
    name, documentId, informationSheetId, pricingSheetId,
  } = product;

  const informationItems = await fetchCSV(csvUrl(documentId, informationSheetId));
  const pricingRows = await fetchCSV(csvUrl(documentId, pricingSheetId));

  return {
    name,
    informationItems: informationItems.map((item) => (
      INFORMATION_KEYS.reduce((acc, key, index) => ({
        ...acc,
        [key]: item[index],
      }), {})
    )),
    pricing: {
      labels: pricingRows[0],
      items: pricingRows.slice(1, pricingRows.length),
    },
  };
}

async function main() {
  const products = await Promise.all(PRODUCTS.map(fetchProduct));
  const data = products.reduce((acc, product) => ({
    ...acc,
    [product.name]: {
      informationItems: product.informationItems,
      pricing: product.pricing,
    },
  }), {});
  print(JSON.stringify(data, null, '  '));
}

main();
