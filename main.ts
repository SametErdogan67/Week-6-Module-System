// main.ts

import { reverseString, countCharacters, capitalizeWords } from './stringUtils';
import * as fs from 'fs';
import * as path from 'path';

// Write a sentence about why learning Node.js is important
const sentence = "I am doing assignment about node.js this week in the backend course.";

// Reverse the sentence
const reversedSentence = reverseString(sentence);

// Count the characters in the sentence
const characterCount = countCharacters(sentence);

// Log the results
console.log("Original Sentence: ", sentence);
console.log("Reversed Sentence: ", reversedSentence);
console.log("Character Count: ", characterCount);
console.log(capitalizeWords(sentence));

// Write the reversed sentence to a file
const filePath = path.join(__dirname, 'reversed.txt');
fs.writeFileSync(filePath, reversedSentence);

// Log the full path of the reversed.txt file
console.log("File Path: ", filePath);