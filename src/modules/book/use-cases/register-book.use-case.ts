import { UseCase } from "kernel/contract";
import { BookDto } from "./dto/book.dto";
import { BookRepository } from "./repository/book.repository";

export class RegisterBookUseCase implements UseCase<BookDto, boolean>{
    constructor(private readonly bookRepository: BookRepository) { }
    execute(payload: BookDto): Promise<boolean> {
        if (payload.book.author ||
            payload.book.editorial ||
            payload.book.isbn ||
            payload.book.pages ||
            payload.book.publicatedAt ||
            payload.book.synthesis ||
            payload.book.title) {
            throw Error("Missing fields");
        }
        return this.bookRepository.registerBook(payload);
    }
}