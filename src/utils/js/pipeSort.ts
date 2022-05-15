export const pipe = <U>(...fns: Function[]) =>
  <E ,>(initValue: any): U =>
    fns.reduce((prevValue, fn) => fn(prevValue), initValue)

export const pick = <K extends string>(value: K) => 
  <O extends Record<K, any>>(obj: O) => obj[value]

export const isEqual = <T>(left: T) => 
  <E extends T>(right: E) => left === right

export const cond = (b: boolean) => !b

export const filterBy = (prop: string) => 
  (id: string) => pipe(pick(prop), isEqual(id), cond)

export const filterId = filterBy('id')
