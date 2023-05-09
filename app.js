const Tesseract = require('tesseract.js');
const stringSimilarity = require('string-similarity');

const doc1 = 'img/test2.jpeg';
const doc2 = 'img/test2.jpeg';

// Función para extraer texto utilizando Tesseract.js
async function extractText(filename) {
  const { data: { text } } = await Tesseract.recognize(filename);
  return text.trim();
}

// Comparar los documentos
async function compareDocuments() {
  const text1 = await extractText(doc1);
  const text2 = await extractText(doc2);
  console.log(text1);
  console.log(text2);
  const similarity = stringSimilarity.compareTwoStrings(text1, text2);
  console.log(`Los documentos tienen un ${similarity * 100}% de similitud.`);
}

compareDocuments();
