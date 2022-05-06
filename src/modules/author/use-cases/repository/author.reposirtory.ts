import { Consult } from "kernel/types";
import { Author } from "modules/author/entity/author";
import { AuthorDto } from "../dto/author.dto";

export interface AuthorRepository {
    getAuthors(): Promise<Consult<Author>>;
    registerAuthor(author: AuthorDto): Promise<boolean>;
    updateUser(author: Author): Promise<boolean>;
    deleteAuthor(identifier: number): Promise<boolean>;
}