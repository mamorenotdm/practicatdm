import { Consult } from "kernel/types";
import { Book } from "../entity/book";
import { BookDto } from "../use-cases/dto/book.dto";
import { BookRepository } from "../use-cases/repository/book.repository";

export class BookGateway implements BookRepository {
    getBooks(): Promise<Consult<Book>> {
        throw new Error("Method not implemented.");
    }
    getBooksByAuthor(author: number): Promise<Consult<Book>> {
        throw new Error("Method not implemented.");
    }
    registerBook(book: BookDto): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    updateBook(book: Book): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    deleteBook(identifier: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    deleteBooksByAuthor(authorIdentifier: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}