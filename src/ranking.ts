import { ouputOrderedList, RankingInput } from './ranking.interface';
// TODO: Export the ranking function from here:
// export function ranking(...
// export class Ranking{
    export function ranking(books:RankingInput):  ouputOrderedList {
        try{
            var map = new Map<String, number>();
            const resobj:any = [];

            // Algorithm to validate isbn number
            books.forEach(item => {
                if(item.isbn.match("[0-9]{9}[X0-9]{1}")){
                    var isbnstr = item.isbn.replace(/[^0-9X]/gi, '');
                    var weight = 1;
                    var sum = 0;
                    for (var i = 0; i <= 9; i++) {
                        var digit = parseInt(isbnstr[i]);
                        sum += weight*digit;
                        weight++;
                    }
                    var modulus = sum % 11;
                    // If isbn number is invalid, put into map along with publisher name and number of invalid isbns.
                    if (modulus != 0) {
                        if(map.has(item.publisher)){
                            map.set(item.publisher, map.get(item.publisher) + 1);
                        }else{
                            map.set(item.publisher, 1);
                        }
                    }
                }
            })

            // Sort the map entries based on value.
            const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
            // Push sorted entries to result object.
            sortedMap.forEach(function(value, key) {
                resobj.push({publisherName: key, invalidISBNs: value});
            })
            return resobj;
        }catch(error){
            console.log("Error while validating isbn number ", error);
        }
    }
// }