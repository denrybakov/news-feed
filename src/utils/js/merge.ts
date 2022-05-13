export const merge = <O extends object>(obj: O) => 
    <K extends object>(obj2: K) => ({
      ...obj,
      ...obj2
    })
