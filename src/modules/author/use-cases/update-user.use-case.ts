import { UseCase } from "kernel/contract";
import { Author } from "../entity/author";
import { AuthorRepository } from "./repository/author.reposirtory";

export class UpddateAuthorUseCase implements UseCase<Author, boolean>{
    constructor(private readonly authorRepository: AuthorRepository) { }
    execute(payload: Author): Promise<boolean> {
        if (payload.name ||
            payload.surname ||
            payload.lastname ||
            payload.birthday ||
            payload.email ||
            payload.id) {
            throw Error("Missing fields");
        }
        return this.authorRepository.updateUser(payload);
    }
}