import { strict as assert } from 'assert';
import { ranking } from './ranking';

describe("ranking function", function() {
    it("should validate isbn number", function(){
        let results = ranking([
            {isbn: "1112223339", publisher: "A"},
            {isbn: "1112223330", publisher: "B"},
        ]);

        var output = [ { publisherName: 'B', invalidISBNs: 1 } ];
        
        assert.deepStrictEqual(results, output);
    });
});
