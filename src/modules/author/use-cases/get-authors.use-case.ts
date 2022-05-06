import { UseCase } from "kernel/contract";
import { Consult } from "kernel/types";
import { Author } from "../entity/author";
import { AuthorRepository } from "./repository/author.reposirtory";

export class GetAuthors implements UseCase<void, Consult<Author>>{
    constructor(private readonly authorRepository: AuthorRepository) { }
    execute(): Promise<Consult<Author>> {
        return this.authorRepository.getAuthors();
    }
}