export class Book {
    id_book:number;
    nameBook:string;
    nameAuthor:string;


    constructor(value:any){
        this.id_book=value.id;
        this.nameBook=value.name;
        this.nameAuthor=value.author;
    }
}