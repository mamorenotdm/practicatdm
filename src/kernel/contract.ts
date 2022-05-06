export interface UseCase<TIn, TOut> {
    execute(payload?: TIn): Promise<TOut>;
  }
  