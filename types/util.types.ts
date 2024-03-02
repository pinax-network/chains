// To help maintain consistency, we can create a utility type that will
// throws error when extra fields are set in an object. That can help us
// to avoid typos and other mistakes.
// TODO: Create test to ensure all chains uses the utility type
// https://stackoverflow.com/a/57117594

// First, define a type that, when passed a union of keys, creates an object which
// cannot have those properties. I couldn't find a way to use this type directly,
// but it can be used with the below type.
export type Impossible<K extends keyof any> = {
  [P in K]: never;
};

// The secret sauce! Provide it the type that contains only the properties you want,
// and then a type that extends that type, based on what the caller provided
// using generics.
export type NoExtraProperties<T, U extends T = T> = U &
  Impossible<Exclude<keyof U, keyof T>>;
