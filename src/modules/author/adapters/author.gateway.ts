import { Consult } from "kernel/types";
import { Author } from "../entity/author";
import { AuthorDto } from "../use-cases/dto/author.dto";
import { AuthorRepository } from "../use-cases/repository/author.reposirtory";

export class AuthorGateway implements AuthorRepository {
    async getAuthors(): Promise<Consult<Author>> {
        let authors: Consult<Author> = {
            entities: []
        }
        let query = "SELECT * FROM author;";
        
        throw new Error("Method not implemented.");
    }
    async registerAuthor(author: AuthorDto): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async updateUser(author: Author): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async deleteAuthor(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}