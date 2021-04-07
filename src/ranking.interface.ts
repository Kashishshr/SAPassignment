export interface RankingInput extends Array<BookList> {}
interface BookList {
    isbn: String;
    publisher: String 
}

export interface ouputOrderedList extends Array<outputList> {}
interface outputList {
    publisherName: String;
    invalidISBNs: String
}
