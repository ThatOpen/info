const axios = require("axios");
const fs = require("fs");

const AUTH_ERROR = "Only Ansoni can call the DEEPL API.";
const PATH_ERROR = "Path for this language not configured yet.";
const WRITE_ERROR = "An error occured while writing JSON Object to File.";
const WRITE_OK = "All translations have been successfully saved!";

async function translateJSON(lang) {
  const route = `i18n/${lang}/code.json`;
  if (!fs.existsSync(route)) throw new Error(PATH_ERROR);
  const texts = JSON.parse(fs.readFileSync("./deepl/base_code.json"));
  const translated = await translateText(texts, lang.toUpperCase());
  createTranslatedJson(texts, translated);
  writeResultFile(texts, route);
}

function createTranslatedJson(texts, translated){
  const keys = Object.keys(texts);
  for (let i = 0; i < keys.length; i++) {
    texts[keys[i]].message = translated[i];
  }
}

function writeResultFile(content, route) {
  const jsonContent = JSON.stringify(content);
  fs.writeFile(route, jsonContent, "utf8", (err) => {
    if (!err) console.log(WRITE_OK);
    console.log(WRITE_ERROR);
    return console.log(err);
  });
}

async function translateText(texts, target) {
  const token = getToken();
  const chunks = getChunksToTranslate(texts);
  return await translateChunks(target, token, chunks);
}

async function translateChunks(target, token, chunks) {
  const translated = [];
  const deeplURL = "https://api-free.deepl.com/v2/translate";
  for (let i = 0; i < chunks.length; i++) {
    const url = `${deeplURL}?auth_key=${token}${chunks[i]}&target_lang=${target}`;
    const result = await callDeepl(url);
    translated.push(...result.data.translations.map((trans) => trans.text));
  }
  return translated;
}

function getChunksToTranslate(texts) {
  const values = Object.values(texts);
  const allTexts = values.map((text) => `&text=${text.message}`);
  let chunks = [];
  while (allTexts.length > 0) chunks.push(allTexts.splice(0, 50));
  return chunks.map((chunk) => chunk.join(""));
}

function getToken() {
  const tokenPath = "deepl/deepl.json";
  if (!fs.existsSync(tokenPath)) throw new Error(AUTH_ERROR);
  return JSON.parse(fs.readFileSync(tokenPath)).key;
}

async function callDeepl(url) {
  const headers = {
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*",
  };
  try {
    return await axios.get(url, { headers });
  } catch (error) {
    console.log(error);
  }
}

translateJSON("es");

// getTranslation("Hello world!", "DE");
