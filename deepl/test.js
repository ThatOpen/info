const axios = require("axios");
const fs = require("fs");

const errorMessage = "Only Ansoni can call the DEEPL API.";
const deeplURL = "https://api-free.deepl.com/v2/translate";
const headers = {
  "Cache-Control": "no-cache",
  "Access-Control-Allow-Origin": "*",
};

async function getTranslation(text, target) {
  if (!fs.existsSync("deepl.json")) throw new Error(errorMessage);
  const key = JSON.parse(fs.readFileSync("deepl.json")).key;
  const url = `${deeplURL}?auth_key=${key}&text=${text}&target_lang=${target}`;
  const translation = await callDeepl(url);
  console.log(translation);
}

async function callDeepl(url) {
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

getTranslation("Hello world!", "DE");
