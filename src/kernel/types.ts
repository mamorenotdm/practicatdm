export type Entity<TId extends number | string> = {
    id?: TId;
}

export type Consult<EntityType> = {
    entities: EntityType[],
}