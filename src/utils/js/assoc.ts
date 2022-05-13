export const assoc = <K extends string, T>(key: K, value: T) => 
  <O extends object>(obj: O) => ({
    ...obj,
    [key]: value,
  }) as K extends keyof O ? (Omit<O, K> & Record<K, T>) : (O & Record<K, T>)
