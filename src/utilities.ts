import { Dispatch, useEffect, useState } from "react";

export type classType = string | { name: string; enabled: boolean };

export function css(...arr: classType[]) {
  return arr
    .filter((x) => (typeof x === "string" ? true : x.enabled))
    .map((x) => (typeof x === "string" ? x : x.name))
    .join(" ");
}

//executes a function if it's defined
export function maybe<
  T extends ((...args: any[]) => W) | undefined,
  W = ReturnType<NonNullable<T>>
>(fun: T, ...args: Parameters<NonNullable<T>>): W | undefined {
  console.log({ fun, args });
  return fun && fun(...args);
}

export function useStateWithPromise<T>(
  prom: Promise<T> | T,
  initialState: T
): [T, Dispatch<React.SetStateAction<T>>] {
  const [val, setVal] = useState(prom instanceof Promise ? initialState : prom);

  useEffect(() => {
    prom instanceof Promise && prom.then((v) => setVal(v));
  }, [prom]);

  return [val, setVal];
}
