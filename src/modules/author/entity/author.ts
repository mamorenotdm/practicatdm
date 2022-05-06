import { Entity } from "kernel/types";

export type Author = Entity<number> & {
    name: string,
    surname: string,
    lastname: string,
    birthday: Date,
    blog?: string,
    photo?: string,
    status: boolean,
    email: string
}