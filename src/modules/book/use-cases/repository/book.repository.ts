import { Consult } from "kernel/types";
import { Book } from "modules/book/entity/book";
import { BookDto } from "../dto/book.dto";

export interface BookRepository {
    getBooks(): Promise<Consult<Book>>;
    getBooksByAuthor(author: number): Promise<Consult<Book>>;
    registerBook(book: BookDto): Promise<boolean>;
    updateBook(book: Book): Promise<boolean>;
    deleteBook(identifier: number): Promise<boolean>;
    deleteBooksByAuthor(authorIdentifier: number): Promise<boolean>;
}