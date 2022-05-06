import { Entity } from "kernel/types";

export type Book = Entity<number> & {
    title: string,
    editorial: string,
    publicatedAt: Date,
    pages: number,
    synthesis: string,
    isbn: string,
    author: {
        id: number
    }
}