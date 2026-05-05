'use strict';

const countSentences = function(sentences){
  const regex = /(?<=[.!?])\s+(?=[A-Z])/

  const sentences_array = sentences.split(regex).filter((str) => str.trim() !== "");

  return sentences_array.length;
  
};

module.exports = countSentences;
