const axios = require('axios');
const parse = require('csv-parse/lib/sync');

const { log: print } = console;

const LANGUAGES = ['en', 'ko'];

const SHEET_IDS = [
  '2PACX-1vR-ukIlCflNYF4TJpzUc46Ex4uzvr7VgC0a1dzxnzoo5AfbRok_LdfV8jRPSs9JPTeXa7Opv7ESPJ9p',
  '2PACX-1vSsD19_UmuGR01lFBykyYDAZK60CbtQOdEW46XFZX-uTaNMk8qyrqQH_MDXmgE1xya7s6jSG8c8yb6r',
];

function csvUrl(sheetId) {
  return `https://docs.google.com/spreadsheets/d/e/${sheetId}/pub?output=csv`;
}

function sortByKey(obj) {
  return Object.keys(obj)
    .sort()
    .reduce((acc, key) => ({
      ...acc,
      [key]: obj[key],
    }), {});
}

async function fetchCSV(url) {
  const { data } = await axios.get(url);
  const records = parse(data, { columns: true });
  return LANGUAGES.reduce((sheets, language) => ({
    ...sheets,
    [language]: records.reduce((acc, row) => ({
      ...acc,
      [row.key]: row[language],
    }), {}),
  }), {});
}

function gatherByLanguage(sheets, language) {
  return sheets
    .map((sheet) => sheet[language])
    .reduce((a, b) => ({ ...a, ...b }));
}

async function main() {
  const sheets = await Promise.all(
    SHEET_IDS.map((sheetId) => fetchCSV(csvUrl(sheetId))),
  );
  const locales = LANGUAGES.reduce((acc, language) => ({
    ...acc,
    [language]: sortByKey(gatherByLanguage(sheets, language)),
  }), {});
  print(JSON.stringify(locales, null, '  '));
}

main();
