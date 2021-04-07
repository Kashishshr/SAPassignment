import { ranking } from './ranking';

const ranked = ranking([
    {isbn: "1112223339", publisher: "A"},
    {isbn: "1112223330", publisher: "B"},
    {isbn: "1112223330", publisher: "C"},
    {isbn: "1112223330", publisher: "C"},
]);

console.log(ranked);
