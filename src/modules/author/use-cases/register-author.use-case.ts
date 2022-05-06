import { UseCase } from "kernel/contract";
import { AuthorDto } from "./dto/author.dto";
import { AuthorRepository } from "./repository/author.reposirtory";

export class RegisterAuthorUseCase implements UseCase<AuthorDto, boolean>{
    constructor(private readonly authorRepository: AuthorRepository) { }
    execute(payload: AuthorDto): Promise<boolean> {
        if (payload.author.name ||
            payload.author.surname ||
            payload.author.lastname ||
            payload.author.birthday ||
            payload.author.email) {
            throw Error("Missing fields");
        }
        return this.authorRepository.registerAuthor(payload);
    }
}