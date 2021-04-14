export interface Variable<T = boolean | number | string> {
  name: string;
  type?: string;
  get: () => T | Promise<T>;
  set?: (x: T) => T | Promise<T>;
  onUpdate?: (x: T) => void;
}
