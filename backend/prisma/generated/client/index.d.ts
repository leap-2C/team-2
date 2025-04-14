
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Donation
 * 
 */
export type Donation = $Result.DefaultSelection<Prisma.$DonationPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model BankCard
 * 
 */
export type BankCard = $Result.DefaultSelection<Prisma.$BankCardPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donation`: Exposes CRUD operations for the **Donation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donations
    * const donations = await prisma.donation.findMany()
    * ```
    */
  get donation(): Prisma.DonationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bankCard`: Exposes CRUD operations for the **BankCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BankCards
    * const bankCards = await prisma.bankCard.findMany()
    * ```
    */
  get bankCard(): Prisma.BankCardDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Donation: 'Donation',
    Profile: 'Profile',
    BankCard: 'BankCard'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "donation" | "profile" | "bankCard"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Donation: {
        payload: Prisma.$DonationPayload<ExtArgs>
        fields: Prisma.DonationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findFirst: {
            args: Prisma.DonationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findMany: {
            args: Prisma.DonationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          create: {
            args: Prisma.DonationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          createMany: {
            args: Prisma.DonationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          delete: {
            args: Prisma.DonationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          update: {
            args: Prisma.DonationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          deleteMany: {
            args: Prisma.DonationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          upsert: {
            args: Prisma.DonationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          aggregate: {
            args: Prisma.DonationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonation>
          }
          groupBy: {
            args: Prisma.DonationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationCountArgs<ExtArgs>
            result: $Utils.Optional<DonationCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      BankCard: {
        payload: Prisma.$BankCardPayload<ExtArgs>
        fields: Prisma.BankCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BankCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BankCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankCardPayload>
          }
          findFirst: {
            args: Prisma.BankCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BankCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankCardPayload>
          }
          findMany: {
            args: Prisma.BankCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankCardPayload>[]
          }
          create: {
            args: Prisma.BankCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankCardPayload>
          }
          createMany: {
            args: Prisma.BankCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BankCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankCardPayload>[]
          }
          delete: {
            args: Prisma.BankCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankCardPayload>
          }
          update: {
            args: Prisma.BankCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankCardPayload>
          }
          deleteMany: {
            args: Prisma.BankCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BankCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BankCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankCardPayload>[]
          }
          upsert: {
            args: Prisma.BankCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BankCardPayload>
          }
          aggregate: {
            args: Prisma.BankCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBankCard>
          }
          groupBy: {
            args: Prisma.BankCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<BankCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BankCardCountArgs<ExtArgs>
            result: $Utils.Optional<BankCardCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    donation?: DonationOmit
    profile?: ProfileOmit
    bankCard?: BankCardOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bankCard: number
    donationsSent: number
    donationsReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bankCard?: boolean | UserCountOutputTypeCountBankCardArgs
    donationsSent?: boolean | UserCountOutputTypeCountDonationsSentArgs
    donationsReceived?: boolean | UserCountOutputTypeCountDonationsReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBankCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankCardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonationsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonationsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    username: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    email: string
    username: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    bankCard?: boolean | User$bankCardArgs<ExtArgs>
    donationsSent?: boolean | User$donationsSentArgs<ExtArgs>
    donationsReceived?: boolean | User$donationsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "email" | "username" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    bankCard?: boolean | User$bankCardArgs<ExtArgs>
    donationsSent?: boolean | User$donationsSentArgs<ExtArgs>
    donationsReceived?: boolean | User$donationsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      bankCard: Prisma.$BankCardPayload<ExtArgs>[]
      donationsSent: Prisma.$DonationPayload<ExtArgs>[]
      donationsReceived: Prisma.$DonationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      email: string
      username: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bankCard<T extends User$bankCardArgs<ExtArgs> = {}>(args?: Subset<T, User$bankCardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donationsSent<T extends User$donationsSentArgs<ExtArgs> = {}>(args?: Subset<T, User$donationsSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donationsReceived<T extends User$donationsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$donationsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.bankCard
   */
  export type User$bankCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankCard
     */
    select?: BankCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankCard
     */
    omit?: BankCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankCardInclude<ExtArgs> | null
    where?: BankCardWhereInput
    orderBy?: BankCardOrderByWithRelationInput | BankCardOrderByWithRelationInput[]
    cursor?: BankCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BankCardScalarFieldEnum | BankCardScalarFieldEnum[]
  }

  /**
   * User.donationsSent
   */
  export type User$donationsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    cursor?: DonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * User.donationsReceived
   */
  export type User$donationsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    cursor?: DonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Donation
   */

  export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  export type DonationAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    donorId: number | null
    recipientId: number | null
  }

  export type DonationSumAggregateOutputType = {
    id: number | null
    amount: number | null
    donorId: number | null
    recipientId: number | null
  }

  export type DonationMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    amount: number | null
    donorId: number | null
    recipientId: number | null
    socialUrlOrBuyMeACoffeeUrl: string | null
    specialMessage: string | null
  }

  export type DonationMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    amount: number | null
    donorId: number | null
    recipientId: number | null
    socialUrlOrBuyMeACoffeeUrl: string | null
    specialMessage: string | null
  }

  export type DonationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    amount: number
    donorId: number
    recipientId: number
    socialUrlOrBuyMeACoffeeUrl: number
    specialMessage: number
    _all: number
  }


  export type DonationAvgAggregateInputType = {
    id?: true
    amount?: true
    donorId?: true
    recipientId?: true
  }

  export type DonationSumAggregateInputType = {
    id?: true
    amount?: true
    donorId?: true
    recipientId?: true
  }

  export type DonationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    donorId?: true
    recipientId?: true
    socialUrlOrBuyMeACoffeeUrl?: true
    specialMessage?: true
  }

  export type DonationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    donorId?: true
    recipientId?: true
    socialUrlOrBuyMeACoffeeUrl?: true
    specialMessage?: true
  }

  export type DonationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    amount?: true
    donorId?: true
    recipientId?: true
    socialUrlOrBuyMeACoffeeUrl?: true
    specialMessage?: true
    _all?: true
  }

  export type DonationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donation to aggregate.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donations
    **/
    _count?: true | DonationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationMaxAggregateInputType
  }

  export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
        [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonation[P]>
      : GetScalarType<T[P], AggregateDonation[P]>
  }




  export type DonationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithAggregationInput | DonationOrderByWithAggregationInput[]
    by: DonationScalarFieldEnum[] | DonationScalarFieldEnum
    having?: DonationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationCountAggregateInputType | true
    _avg?: DonationAvgAggregateInputType
    _sum?: DonationSumAggregateInputType
    _min?: DonationMinAggregateInputType
    _max?: DonationMaxAggregateInputType
  }

  export type DonationGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    amount: number
    donorId: number
    recipientId: number
    socialUrlOrBuyMeACoffeeUrl: string
    specialMessage: string
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  type GetDonationGroupByPayload<T extends DonationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationGroupByOutputType[P]>
            : GetScalarType<T[P], DonationGroupByOutputType[P]>
        }
      >
    >


  export type DonationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    donorId?: boolean
    recipientId?: boolean
    socialUrlOrBuyMeACoffeeUrl?: boolean
    specialMessage?: boolean
    donor?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    donorId?: boolean
    recipientId?: boolean
    socialUrlOrBuyMeACoffeeUrl?: boolean
    specialMessage?: boolean
    donor?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    donorId?: boolean
    recipientId?: boolean
    socialUrlOrBuyMeACoffeeUrl?: boolean
    specialMessage?: boolean
    donor?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    amount?: boolean
    donorId?: boolean
    recipientId?: boolean
    socialUrlOrBuyMeACoffeeUrl?: boolean
    specialMessage?: boolean
  }

  export type DonationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "amount" | "donorId" | "recipientId" | "socialUrlOrBuyMeACoffeeUrl" | "specialMessage", ExtArgs["result"]["donation"]>
  export type DonationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DonationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DonationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donor?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DonationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donation"
    objects: {
      donor: Prisma.$UserPayload<ExtArgs>
      recipient: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      amount: number
      donorId: number
      recipientId: number
      socialUrlOrBuyMeACoffeeUrl: string
      specialMessage: string
    }, ExtArgs["result"]["donation"]>
    composites: {}
  }

  type DonationGetPayload<S extends boolean | null | undefined | DonationDefaultArgs> = $Result.GetResult<Prisma.$DonationPayload, S>

  type DonationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationCountAggregateInputType | true
    }

  export interface DonationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donation'], meta: { name: 'Donation' } }
    /**
     * Find zero or one Donation that matches the filter.
     * @param {DonationFindUniqueArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationFindUniqueArgs>(args: SelectSubset<T, DonationFindUniqueArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationFindUniqueOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationFindFirstArgs>(args?: SelectSubset<T, DonationFindFirstArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donations
     * const donations = await prisma.donation.findMany()
     * 
     * // Get first 10 Donations
     * const donations = await prisma.donation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationWithIdOnly = await prisma.donation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationFindManyArgs>(args?: SelectSubset<T, DonationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donation.
     * @param {DonationCreateArgs} args - Arguments to create a Donation.
     * @example
     * // Create one Donation
     * const Donation = await prisma.donation.create({
     *   data: {
     *     // ... data to create a Donation
     *   }
     * })
     * 
     */
    create<T extends DonationCreateArgs>(args: SelectSubset<T, DonationCreateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donations.
     * @param {DonationCreateManyArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationCreateManyArgs>(args?: SelectSubset<T, DonationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donations and returns the data saved in the database.
     * @param {DonationCreateManyAndReturnArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donation.
     * @param {DonationDeleteArgs} args - Arguments to delete one Donation.
     * @example
     * // Delete one Donation
     * const Donation = await prisma.donation.delete({
     *   where: {
     *     // ... filter to delete one Donation
     *   }
     * })
     * 
     */
    delete<T extends DonationDeleteArgs>(args: SelectSubset<T, DonationDeleteArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donation.
     * @param {DonationUpdateArgs} args - Arguments to update one Donation.
     * @example
     * // Update one Donation
     * const donation = await prisma.donation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationUpdateArgs>(args: SelectSubset<T, DonationUpdateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donations.
     * @param {DonationDeleteManyArgs} args - Arguments to filter Donations to delete.
     * @example
     * // Delete a few Donations
     * const { count } = await prisma.donation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationDeleteManyArgs>(args?: SelectSubset<T, DonationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationUpdateManyArgs>(args: SelectSubset<T, DonationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations and returns the data updated in the database.
     * @param {DonationUpdateManyAndReturnArgs} args - Arguments to update many Donations.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonationUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donation.
     * @param {DonationUpsertArgs} args - Arguments to update or create a Donation.
     * @example
     * // Update or create a Donation
     * const donation = await prisma.donation.upsert({
     *   create: {
     *     // ... data to create a Donation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donation we want to update
     *   }
     * })
     */
    upsert<T extends DonationUpsertArgs>(args: SelectSubset<T, DonationUpsertArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationCountArgs} args - Arguments to filter Donations to count.
     * @example
     * // Count the number of Donations
     * const count = await prisma.donation.count({
     *   where: {
     *     // ... the filter for the Donations we want to count
     *   }
     * })
    **/
    count<T extends DonationCountArgs>(
      args?: Subset<T, DonationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonationAggregateArgs>(args: Subset<T, DonationAggregateArgs>): Prisma.PrismaPromise<GetDonationAggregateType<T>>

    /**
     * Group by Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationGroupByArgs['orderBy'] }
        : { orderBy?: DonationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donation model
   */
  readonly fields: DonationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Donation model
   */
  interface DonationFieldRefs {
    readonly id: FieldRef<"Donation", 'Int'>
    readonly createdAt: FieldRef<"Donation", 'DateTime'>
    readonly updatedAt: FieldRef<"Donation", 'DateTime'>
    readonly amount: FieldRef<"Donation", 'Int'>
    readonly donorId: FieldRef<"Donation", 'Int'>
    readonly recipientId: FieldRef<"Donation", 'Int'>
    readonly socialUrlOrBuyMeACoffeeUrl: FieldRef<"Donation", 'String'>
    readonly specialMessage: FieldRef<"Donation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Donation findUnique
   */
  export type DonationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findUniqueOrThrow
   */
  export type DonationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findFirst
   */
  export type DonationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findFirstOrThrow
   */
  export type DonationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findMany
   */
  export type DonationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donations to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation create
   */
  export type DonationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to create a Donation.
     */
    data: XOR<DonationCreateInput, DonationUncheckedCreateInput>
  }

  /**
   * Donation createMany
   */
  export type DonationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Donation createManyAndReturn
   */
  export type DonationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donation update
   */
  export type DonationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to update a Donation.
     */
    data: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
    /**
     * Choose, which Donation to update.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation updateMany
   */
  export type DonationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
  }

  /**
   * Donation updateManyAndReturn
   */
  export type DonationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donation upsert
   */
  export type DonationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The filter to search for the Donation to update in case it exists.
     */
    where: DonationWhereUniqueInput
    /**
     * In case the Donation found by the `where` argument doesn't exist, create a new Donation with this data.
     */
    create: XOR<DonationCreateInput, DonationUncheckedCreateInput>
    /**
     * In case the Donation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
  }

  /**
   * Donation delete
   */
  export type DonationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter which Donation to delete.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation deleteMany
   */
  export type DonationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donations to delete
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to delete.
     */
    limit?: number
  }

  /**
   * Donation without action
   */
  export type DonationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    aboutMe: string | null
    avatarImage: string | null
    socialMediaUrl: string | null
    backgroundImage: string | null
    successMessage: string | null
    userId: number | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    aboutMe: string | null
    avatarImage: string | null
    socialMediaUrl: string | null
    backgroundImage: string | null
    successMessage: string | null
    userId: number | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    aboutMe: number
    avatarImage: number
    socialMediaUrl: number
    backgroundImage: number
    successMessage: number
    userId: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    aboutMe?: true
    avatarImage?: true
    socialMediaUrl?: true
    backgroundImage?: true
    successMessage?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    aboutMe?: true
    avatarImage?: true
    socialMediaUrl?: true
    backgroundImage?: true
    successMessage?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    aboutMe?: true
    avatarImage?: true
    socialMediaUrl?: true
    backgroundImage?: true
    successMessage?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    aboutMe: string
    avatarImage: string
    socialMediaUrl: string
    backgroundImage: string | null
    successMessage: string | null
    userId: number
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aboutMe?: boolean
    avatarImage?: boolean
    socialMediaUrl?: boolean
    backgroundImage?: boolean
    successMessage?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aboutMe?: boolean
    avatarImage?: boolean
    socialMediaUrl?: boolean
    backgroundImage?: boolean
    successMessage?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aboutMe?: boolean
    avatarImage?: boolean
    socialMediaUrl?: boolean
    backgroundImage?: boolean
    successMessage?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aboutMe?: boolean
    avatarImage?: boolean
    socialMediaUrl?: boolean
    backgroundImage?: boolean
    successMessage?: boolean
    userId?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "aboutMe" | "avatarImage" | "socialMediaUrl" | "backgroundImage" | "successMessage" | "userId", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      aboutMe: string
      avatarImage: string
      socialMediaUrl: string
      backgroundImage: string | null
      successMessage: string | null
      userId: number
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'Int'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
    readonly aboutMe: FieldRef<"Profile", 'String'>
    readonly avatarImage: FieldRef<"Profile", 'String'>
    readonly socialMediaUrl: FieldRef<"Profile", 'String'>
    readonly backgroundImage: FieldRef<"Profile", 'String'>
    readonly successMessage: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model BankCard
   */

  export type AggregateBankCard = {
    _count: BankCardCountAggregateOutputType | null
    _avg: BankCardAvgAggregateOutputType | null
    _sum: BankCardSumAggregateOutputType | null
    _min: BankCardMinAggregateOutputType | null
    _max: BankCardMaxAggregateOutputType | null
  }

  export type BankCardAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BankCardSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BankCardMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    cardNumber: string | null
    firstName: string | null
    lastName: string | null
    userId: number | null
    expirationDate: Date | null
  }

  export type BankCardMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    cardNumber: string | null
    firstName: string | null
    lastName: string | null
    userId: number | null
    expirationDate: Date | null
  }

  export type BankCardCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    cardNumber: number
    firstName: number
    lastName: number
    userId: number
    expirationDate: number
    _all: number
  }


  export type BankCardAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BankCardSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BankCardMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    cardNumber?: true
    firstName?: true
    lastName?: true
    userId?: true
    expirationDate?: true
  }

  export type BankCardMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    cardNumber?: true
    firstName?: true
    lastName?: true
    userId?: true
    expirationDate?: true
  }

  export type BankCardCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    cardNumber?: true
    firstName?: true
    lastName?: true
    userId?: true
    expirationDate?: true
    _all?: true
  }

  export type BankCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankCard to aggregate.
     */
    where?: BankCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankCards to fetch.
     */
    orderBy?: BankCardOrderByWithRelationInput | BankCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BankCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BankCards
    **/
    _count?: true | BankCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BankCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BankCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BankCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BankCardMaxAggregateInputType
  }

  export type GetBankCardAggregateType<T extends BankCardAggregateArgs> = {
        [P in keyof T & keyof AggregateBankCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBankCard[P]>
      : GetScalarType<T[P], AggregateBankCard[P]>
  }




  export type BankCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BankCardWhereInput
    orderBy?: BankCardOrderByWithAggregationInput | BankCardOrderByWithAggregationInput[]
    by: BankCardScalarFieldEnum[] | BankCardScalarFieldEnum
    having?: BankCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BankCardCountAggregateInputType | true
    _avg?: BankCardAvgAggregateInputType
    _sum?: BankCardSumAggregateInputType
    _min?: BankCardMinAggregateInputType
    _max?: BankCardMaxAggregateInputType
  }

  export type BankCardGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    cardNumber: string
    firstName: string
    lastName: string
    userId: number
    expirationDate: Date
    _count: BankCardCountAggregateOutputType | null
    _avg: BankCardAvgAggregateOutputType | null
    _sum: BankCardSumAggregateOutputType | null
    _min: BankCardMinAggregateOutputType | null
    _max: BankCardMaxAggregateOutputType | null
  }

  type GetBankCardGroupByPayload<T extends BankCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BankCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BankCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BankCardGroupByOutputType[P]>
            : GetScalarType<T[P], BankCardGroupByOutputType[P]>
        }
      >
    >


  export type BankCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cardNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    userId?: boolean
    expirationDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankCard"]>

  export type BankCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cardNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    userId?: boolean
    expirationDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankCard"]>

  export type BankCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cardNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    userId?: boolean
    expirationDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bankCard"]>

  export type BankCardSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cardNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    userId?: boolean
    expirationDate?: boolean
  }

  export type BankCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "cardNumber" | "firstName" | "lastName" | "userId" | "expirationDate", ExtArgs["result"]["bankCard"]>
  export type BankCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BankCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BankCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BankCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BankCard"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      cardNumber: string
      firstName: string
      lastName: string
      userId: number
      expirationDate: Date
    }, ExtArgs["result"]["bankCard"]>
    composites: {}
  }

  type BankCardGetPayload<S extends boolean | null | undefined | BankCardDefaultArgs> = $Result.GetResult<Prisma.$BankCardPayload, S>

  type BankCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BankCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BankCardCountAggregateInputType | true
    }

  export interface BankCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BankCard'], meta: { name: 'BankCard' } }
    /**
     * Find zero or one BankCard that matches the filter.
     * @param {BankCardFindUniqueArgs} args - Arguments to find a BankCard
     * @example
     * // Get one BankCard
     * const bankCard = await prisma.bankCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BankCardFindUniqueArgs>(args: SelectSubset<T, BankCardFindUniqueArgs<ExtArgs>>): Prisma__BankCardClient<$Result.GetResult<Prisma.$BankCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BankCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BankCardFindUniqueOrThrowArgs} args - Arguments to find a BankCard
     * @example
     * // Get one BankCard
     * const bankCard = await prisma.bankCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BankCardFindUniqueOrThrowArgs>(args: SelectSubset<T, BankCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BankCardClient<$Result.GetResult<Prisma.$BankCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankCardFindFirstArgs} args - Arguments to find a BankCard
     * @example
     * // Get one BankCard
     * const bankCard = await prisma.bankCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BankCardFindFirstArgs>(args?: SelectSubset<T, BankCardFindFirstArgs<ExtArgs>>): Prisma__BankCardClient<$Result.GetResult<Prisma.$BankCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BankCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankCardFindFirstOrThrowArgs} args - Arguments to find a BankCard
     * @example
     * // Get one BankCard
     * const bankCard = await prisma.bankCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BankCardFindFirstOrThrowArgs>(args?: SelectSubset<T, BankCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__BankCardClient<$Result.GetResult<Prisma.$BankCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BankCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BankCards
     * const bankCards = await prisma.bankCard.findMany()
     * 
     * // Get first 10 BankCards
     * const bankCards = await prisma.bankCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bankCardWithIdOnly = await prisma.bankCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BankCardFindManyArgs>(args?: SelectSubset<T, BankCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BankCard.
     * @param {BankCardCreateArgs} args - Arguments to create a BankCard.
     * @example
     * // Create one BankCard
     * const BankCard = await prisma.bankCard.create({
     *   data: {
     *     // ... data to create a BankCard
     *   }
     * })
     * 
     */
    create<T extends BankCardCreateArgs>(args: SelectSubset<T, BankCardCreateArgs<ExtArgs>>): Prisma__BankCardClient<$Result.GetResult<Prisma.$BankCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BankCards.
     * @param {BankCardCreateManyArgs} args - Arguments to create many BankCards.
     * @example
     * // Create many BankCards
     * const bankCard = await prisma.bankCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BankCardCreateManyArgs>(args?: SelectSubset<T, BankCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BankCards and returns the data saved in the database.
     * @param {BankCardCreateManyAndReturnArgs} args - Arguments to create many BankCards.
     * @example
     * // Create many BankCards
     * const bankCard = await prisma.bankCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BankCards and only return the `id`
     * const bankCardWithIdOnly = await prisma.bankCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BankCardCreateManyAndReturnArgs>(args?: SelectSubset<T, BankCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BankCard.
     * @param {BankCardDeleteArgs} args - Arguments to delete one BankCard.
     * @example
     * // Delete one BankCard
     * const BankCard = await prisma.bankCard.delete({
     *   where: {
     *     // ... filter to delete one BankCard
     *   }
     * })
     * 
     */
    delete<T extends BankCardDeleteArgs>(args: SelectSubset<T, BankCardDeleteArgs<ExtArgs>>): Prisma__BankCardClient<$Result.GetResult<Prisma.$BankCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BankCard.
     * @param {BankCardUpdateArgs} args - Arguments to update one BankCard.
     * @example
     * // Update one BankCard
     * const bankCard = await prisma.bankCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BankCardUpdateArgs>(args: SelectSubset<T, BankCardUpdateArgs<ExtArgs>>): Prisma__BankCardClient<$Result.GetResult<Prisma.$BankCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BankCards.
     * @param {BankCardDeleteManyArgs} args - Arguments to filter BankCards to delete.
     * @example
     * // Delete a few BankCards
     * const { count } = await prisma.bankCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BankCardDeleteManyArgs>(args?: SelectSubset<T, BankCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BankCards
     * const bankCard = await prisma.bankCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BankCardUpdateManyArgs>(args: SelectSubset<T, BankCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BankCards and returns the data updated in the database.
     * @param {BankCardUpdateManyAndReturnArgs} args - Arguments to update many BankCards.
     * @example
     * // Update many BankCards
     * const bankCard = await prisma.bankCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BankCards and only return the `id`
     * const bankCardWithIdOnly = await prisma.bankCard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BankCardUpdateManyAndReturnArgs>(args: SelectSubset<T, BankCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BankCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BankCard.
     * @param {BankCardUpsertArgs} args - Arguments to update or create a BankCard.
     * @example
     * // Update or create a BankCard
     * const bankCard = await prisma.bankCard.upsert({
     *   create: {
     *     // ... data to create a BankCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BankCard we want to update
     *   }
     * })
     */
    upsert<T extends BankCardUpsertArgs>(args: SelectSubset<T, BankCardUpsertArgs<ExtArgs>>): Prisma__BankCardClient<$Result.GetResult<Prisma.$BankCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BankCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankCardCountArgs} args - Arguments to filter BankCards to count.
     * @example
     * // Count the number of BankCards
     * const count = await prisma.bankCard.count({
     *   where: {
     *     // ... the filter for the BankCards we want to count
     *   }
     * })
    **/
    count<T extends BankCardCountArgs>(
      args?: Subset<T, BankCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BankCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BankCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BankCardAggregateArgs>(args: Subset<T, BankCardAggregateArgs>): Prisma.PrismaPromise<GetBankCardAggregateType<T>>

    /**
     * Group by BankCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BankCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BankCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BankCardGroupByArgs['orderBy'] }
        : { orderBy?: BankCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BankCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBankCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BankCard model
   */
  readonly fields: BankCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BankCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BankCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BankCard model
   */
  interface BankCardFieldRefs {
    readonly id: FieldRef<"BankCard", 'Int'>
    readonly createdAt: FieldRef<"BankCard", 'DateTime'>
    readonly updatedAt: FieldRef<"BankCard", 'DateTime'>
    readonly cardNumber: FieldRef<"BankCard", 'String'>
    readonly firstName: FieldRef<"BankCard", 'String'>
    readonly lastName: FieldRef<"BankCard", 'String'>
    readonly userId: FieldRef<"BankCard", 'Int'>
    readonly expirationDate: FieldRef<"BankCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BankCard findUnique
   */
  export type BankCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankCard
     */
    select?: BankCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankCard
     */
    omit?: BankCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankCardInclude<ExtArgs> | null
    /**
     * Filter, which BankCard to fetch.
     */
    where: BankCardWhereUniqueInput
  }

  /**
   * BankCard findUniqueOrThrow
   */
  export type BankCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankCard
     */
    select?: BankCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankCard
     */
    omit?: BankCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankCardInclude<ExtArgs> | null
    /**
     * Filter, which BankCard to fetch.
     */
    where: BankCardWhereUniqueInput
  }

  /**
   * BankCard findFirst
   */
  export type BankCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankCard
     */
    select?: BankCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankCard
     */
    omit?: BankCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankCardInclude<ExtArgs> | null
    /**
     * Filter, which BankCard to fetch.
     */
    where?: BankCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankCards to fetch.
     */
    orderBy?: BankCardOrderByWithRelationInput | BankCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankCards.
     */
    cursor?: BankCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankCards.
     */
    distinct?: BankCardScalarFieldEnum | BankCardScalarFieldEnum[]
  }

  /**
   * BankCard findFirstOrThrow
   */
  export type BankCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankCard
     */
    select?: BankCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankCard
     */
    omit?: BankCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankCardInclude<ExtArgs> | null
    /**
     * Filter, which BankCard to fetch.
     */
    where?: BankCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankCards to fetch.
     */
    orderBy?: BankCardOrderByWithRelationInput | BankCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BankCards.
     */
    cursor?: BankCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BankCards.
     */
    distinct?: BankCardScalarFieldEnum | BankCardScalarFieldEnum[]
  }

  /**
   * BankCard findMany
   */
  export type BankCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankCard
     */
    select?: BankCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankCard
     */
    omit?: BankCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankCardInclude<ExtArgs> | null
    /**
     * Filter, which BankCards to fetch.
     */
    where?: BankCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BankCards to fetch.
     */
    orderBy?: BankCardOrderByWithRelationInput | BankCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BankCards.
     */
    cursor?: BankCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BankCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BankCards.
     */
    skip?: number
    distinct?: BankCardScalarFieldEnum | BankCardScalarFieldEnum[]
  }

  /**
   * BankCard create
   */
  export type BankCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankCard
     */
    select?: BankCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankCard
     */
    omit?: BankCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankCardInclude<ExtArgs> | null
    /**
     * The data needed to create a BankCard.
     */
    data: XOR<BankCardCreateInput, BankCardUncheckedCreateInput>
  }

  /**
   * BankCard createMany
   */
  export type BankCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BankCards.
     */
    data: BankCardCreateManyInput | BankCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BankCard createManyAndReturn
   */
  export type BankCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankCard
     */
    select?: BankCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankCard
     */
    omit?: BankCardOmit<ExtArgs> | null
    /**
     * The data used to create many BankCards.
     */
    data: BankCardCreateManyInput | BankCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankCard update
   */
  export type BankCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankCard
     */
    select?: BankCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankCard
     */
    omit?: BankCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankCardInclude<ExtArgs> | null
    /**
     * The data needed to update a BankCard.
     */
    data: XOR<BankCardUpdateInput, BankCardUncheckedUpdateInput>
    /**
     * Choose, which BankCard to update.
     */
    where: BankCardWhereUniqueInput
  }

  /**
   * BankCard updateMany
   */
  export type BankCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BankCards.
     */
    data: XOR<BankCardUpdateManyMutationInput, BankCardUncheckedUpdateManyInput>
    /**
     * Filter which BankCards to update
     */
    where?: BankCardWhereInput
    /**
     * Limit how many BankCards to update.
     */
    limit?: number
  }

  /**
   * BankCard updateManyAndReturn
   */
  export type BankCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankCard
     */
    select?: BankCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BankCard
     */
    omit?: BankCardOmit<ExtArgs> | null
    /**
     * The data used to update BankCards.
     */
    data: XOR<BankCardUpdateManyMutationInput, BankCardUncheckedUpdateManyInput>
    /**
     * Filter which BankCards to update
     */
    where?: BankCardWhereInput
    /**
     * Limit how many BankCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BankCard upsert
   */
  export type BankCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankCard
     */
    select?: BankCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankCard
     */
    omit?: BankCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankCardInclude<ExtArgs> | null
    /**
     * The filter to search for the BankCard to update in case it exists.
     */
    where: BankCardWhereUniqueInput
    /**
     * In case the BankCard found by the `where` argument doesn't exist, create a new BankCard with this data.
     */
    create: XOR<BankCardCreateInput, BankCardUncheckedCreateInput>
    /**
     * In case the BankCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BankCardUpdateInput, BankCardUncheckedUpdateInput>
  }

  /**
   * BankCard delete
   */
  export type BankCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankCard
     */
    select?: BankCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankCard
     */
    omit?: BankCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankCardInclude<ExtArgs> | null
    /**
     * Filter which BankCard to delete.
     */
    where: BankCardWhereUniqueInput
  }

  /**
   * BankCard deleteMany
   */
  export type BankCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BankCards to delete
     */
    where?: BankCardWhereInput
    /**
     * Limit how many BankCards to delete.
     */
    limit?: number
  }

  /**
   * BankCard without action
   */
  export type BankCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BankCard
     */
    select?: BankCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BankCard
     */
    omit?: BankCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BankCardInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DonationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    amount: 'amount',
    donorId: 'donorId',
    recipientId: 'recipientId',
    socialUrlOrBuyMeACoffeeUrl: 'socialUrlOrBuyMeACoffeeUrl',
    specialMessage: 'specialMessage'
  };

  export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    aboutMe: 'aboutMe',
    avatarImage: 'avatarImage',
    socialMediaUrl: 'socialMediaUrl',
    backgroundImage: 'backgroundImage',
    successMessage: 'successMessage',
    userId: 'userId'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const BankCardScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    cardNumber: 'cardNumber',
    firstName: 'firstName',
    lastName: 'lastName',
    userId: 'userId',
    expirationDate: 'expirationDate'
  };

  export type BankCardScalarFieldEnum = (typeof BankCardScalarFieldEnum)[keyof typeof BankCardScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    bankCard?: BankCardListRelationFilter
    donationsSent?: DonationListRelationFilter
    donationsReceived?: DonationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    bankCard?: BankCardOrderByRelationAggregateInput
    donationsSent?: DonationOrderByRelationAggregateInput
    donationsReceived?: DonationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    bankCard?: BankCardListRelationFilter
    donationsSent?: DonationListRelationFilter
    donationsReceived?: DonationListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type DonationWhereInput = {
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    id?: IntFilter<"Donation"> | number
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
    amount?: IntFilter<"Donation"> | number
    donorId?: IntFilter<"Donation"> | number
    recipientId?: IntFilter<"Donation"> | number
    socialUrlOrBuyMeACoffeeUrl?: StringFilter<"Donation"> | string
    specialMessage?: StringFilter<"Donation"> | string
    donor?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DonationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    donorId?: SortOrder
    recipientId?: SortOrder
    socialUrlOrBuyMeACoffeeUrl?: SortOrder
    specialMessage?: SortOrder
    donor?: UserOrderByWithRelationInput
    recipient?: UserOrderByWithRelationInput
  }

  export type DonationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
    amount?: IntFilter<"Donation"> | number
    donorId?: IntFilter<"Donation"> | number
    recipientId?: IntFilter<"Donation"> | number
    socialUrlOrBuyMeACoffeeUrl?: StringFilter<"Donation"> | string
    specialMessage?: StringFilter<"Donation"> | string
    donor?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DonationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    donorId?: SortOrder
    recipientId?: SortOrder
    socialUrlOrBuyMeACoffeeUrl?: SortOrder
    specialMessage?: SortOrder
    _count?: DonationCountOrderByAggregateInput
    _avg?: DonationAvgOrderByAggregateInput
    _max?: DonationMaxOrderByAggregateInput
    _min?: DonationMinOrderByAggregateInput
    _sum?: DonationSumOrderByAggregateInput
  }

  export type DonationScalarWhereWithAggregatesInput = {
    AND?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    OR?: DonationScalarWhereWithAggregatesInput[]
    NOT?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Donation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
    amount?: IntWithAggregatesFilter<"Donation"> | number
    donorId?: IntWithAggregatesFilter<"Donation"> | number
    recipientId?: IntWithAggregatesFilter<"Donation"> | number
    socialUrlOrBuyMeACoffeeUrl?: StringWithAggregatesFilter<"Donation"> | string
    specialMessage?: StringWithAggregatesFilter<"Donation"> | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: IntFilter<"Profile"> | number
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    aboutMe?: StringFilter<"Profile"> | string
    avatarImage?: StringFilter<"Profile"> | string
    socialMediaUrl?: StringFilter<"Profile"> | string
    backgroundImage?: StringNullableFilter<"Profile"> | string | null
    successMessage?: StringNullableFilter<"Profile"> | string | null
    userId?: IntFilter<"Profile"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aboutMe?: SortOrder
    avatarImage?: SortOrder
    socialMediaUrl?: SortOrder
    backgroundImage?: SortOrderInput | SortOrder
    successMessage?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    aboutMe?: StringFilter<"Profile"> | string
    avatarImage?: StringFilter<"Profile"> | string
    socialMediaUrl?: StringFilter<"Profile"> | string
    backgroundImage?: StringNullableFilter<"Profile"> | string | null
    successMessage?: StringNullableFilter<"Profile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aboutMe?: SortOrder
    avatarImage?: SortOrder
    socialMediaUrl?: SortOrder
    backgroundImage?: SortOrderInput | SortOrder
    successMessage?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    aboutMe?: StringWithAggregatesFilter<"Profile"> | string
    avatarImage?: StringWithAggregatesFilter<"Profile"> | string
    socialMediaUrl?: StringWithAggregatesFilter<"Profile"> | string
    backgroundImage?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    successMessage?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    userId?: IntWithAggregatesFilter<"Profile"> | number
  }

  export type BankCardWhereInput = {
    AND?: BankCardWhereInput | BankCardWhereInput[]
    OR?: BankCardWhereInput[]
    NOT?: BankCardWhereInput | BankCardWhereInput[]
    id?: IntFilter<"BankCard"> | number
    createdAt?: DateTimeFilter<"BankCard"> | Date | string
    updatedAt?: DateTimeFilter<"BankCard"> | Date | string
    cardNumber?: StringFilter<"BankCard"> | string
    firstName?: StringFilter<"BankCard"> | string
    lastName?: StringFilter<"BankCard"> | string
    userId?: IntFilter<"BankCard"> | number
    expirationDate?: DateTimeFilter<"BankCard"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BankCardOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cardNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userId?: SortOrder
    expirationDate?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BankCardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BankCardWhereInput | BankCardWhereInput[]
    OR?: BankCardWhereInput[]
    NOT?: BankCardWhereInput | BankCardWhereInput[]
    createdAt?: DateTimeFilter<"BankCard"> | Date | string
    updatedAt?: DateTimeFilter<"BankCard"> | Date | string
    cardNumber?: StringFilter<"BankCard"> | string
    firstName?: StringFilter<"BankCard"> | string
    lastName?: StringFilter<"BankCard"> | string
    userId?: IntFilter<"BankCard"> | number
    expirationDate?: DateTimeFilter<"BankCard"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BankCardOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cardNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userId?: SortOrder
    expirationDate?: SortOrder
    _count?: BankCardCountOrderByAggregateInput
    _avg?: BankCardAvgOrderByAggregateInput
    _max?: BankCardMaxOrderByAggregateInput
    _min?: BankCardMinOrderByAggregateInput
    _sum?: BankCardSumOrderByAggregateInput
  }

  export type BankCardScalarWhereWithAggregatesInput = {
    AND?: BankCardScalarWhereWithAggregatesInput | BankCardScalarWhereWithAggregatesInput[]
    OR?: BankCardScalarWhereWithAggregatesInput[]
    NOT?: BankCardScalarWhereWithAggregatesInput | BankCardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BankCard"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BankCard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BankCard"> | Date | string
    cardNumber?: StringWithAggregatesFilter<"BankCard"> | string
    firstName?: StringWithAggregatesFilter<"BankCard"> | string
    lastName?: StringWithAggregatesFilter<"BankCard"> | string
    userId?: IntWithAggregatesFilter<"BankCard"> | number
    expirationDate?: DateTimeWithAggregatesFilter<"BankCard"> | Date | string
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    email: string
    username: string
    password: string
    profile?: ProfileCreateNestedOneWithoutUserInput
    bankCard?: BankCardCreateNestedManyWithoutUserInput
    donationsSent?: DonationCreateNestedManyWithoutDonorInput
    donationsReceived?: DonationCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    email: string
    username: string
    password: string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    bankCard?: BankCardUncheckedCreateNestedManyWithoutUserInput
    donationsSent?: DonationUncheckedCreateNestedManyWithoutDonorInput
    donationsReceived?: DonationUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    bankCard?: BankCardUpdateManyWithoutUserNestedInput
    donationsSent?: DonationUpdateManyWithoutDonorNestedInput
    donationsReceived?: DonationUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    bankCard?: BankCardUncheckedUpdateManyWithoutUserNestedInput
    donationsSent?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    donationsReceived?: DonationUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    email: string
    username: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type DonationCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    socialUrlOrBuyMeACoffeeUrl: string
    specialMessage: string
    donor: UserCreateNestedOneWithoutDonationsSentInput
    recipient: UserCreateNestedOneWithoutDonationsReceivedInput
  }

  export type DonationUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    donorId: number
    recipientId: number
    socialUrlOrBuyMeACoffeeUrl: string
    specialMessage: string
  }

  export type DonationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    socialUrlOrBuyMeACoffeeUrl?: StringFieldUpdateOperationsInput | string
    specialMessage?: StringFieldUpdateOperationsInput | string
    donor?: UserUpdateOneRequiredWithoutDonationsSentNestedInput
    recipient?: UserUpdateOneRequiredWithoutDonationsReceivedNestedInput
  }

  export type DonationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    donorId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    socialUrlOrBuyMeACoffeeUrl?: StringFieldUpdateOperationsInput | string
    specialMessage?: StringFieldUpdateOperationsInput | string
  }

  export type DonationCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    donorId: number
    recipientId: number
    socialUrlOrBuyMeACoffeeUrl: string
    specialMessage: string
  }

  export type DonationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    socialUrlOrBuyMeACoffeeUrl?: StringFieldUpdateOperationsInput | string
    specialMessage?: StringFieldUpdateOperationsInput | string
  }

  export type DonationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    donorId?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    socialUrlOrBuyMeACoffeeUrl?: StringFieldUpdateOperationsInput | string
    specialMessage?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    aboutMe: string
    avatarImage: string
    socialMediaUrl: string
    backgroundImage?: string | null
    successMessage?: string | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    aboutMe: string
    avatarImage: string
    socialMediaUrl: string
    backgroundImage?: string | null
    successMessage?: string | null
    userId: number
  }

  export type ProfileUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aboutMe?: StringFieldUpdateOperationsInput | string
    avatarImage?: StringFieldUpdateOperationsInput | string
    socialMediaUrl?: StringFieldUpdateOperationsInput | string
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    successMessage?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aboutMe?: StringFieldUpdateOperationsInput | string
    avatarImage?: StringFieldUpdateOperationsInput | string
    socialMediaUrl?: StringFieldUpdateOperationsInput | string
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    successMessage?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    aboutMe: string
    avatarImage: string
    socialMediaUrl: string
    backgroundImage?: string | null
    successMessage?: string | null
    userId: number
  }

  export type ProfileUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aboutMe?: StringFieldUpdateOperationsInput | string
    avatarImage?: StringFieldUpdateOperationsInput | string
    socialMediaUrl?: StringFieldUpdateOperationsInput | string
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    successMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aboutMe?: StringFieldUpdateOperationsInput | string
    avatarImage?: StringFieldUpdateOperationsInput | string
    socialMediaUrl?: StringFieldUpdateOperationsInput | string
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    successMessage?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BankCardCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    cardNumber: string
    firstName: string
    lastName: string
    expirationDate: Date | string
    user: UserCreateNestedOneWithoutBankCardInput
  }

  export type BankCardUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cardNumber: string
    firstName: string
    lastName: string
    userId: number
    expirationDate: Date | string
  }

  export type BankCardUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBankCardNestedInput
  }

  export type BankCardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankCardCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cardNumber: string
    firstName: string
    lastName: string
    userId: number
    expirationDate: Date | string
  }

  export type BankCardUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankCardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type BankCardListRelationFilter = {
    every?: BankCardWhereInput
    some?: BankCardWhereInput
    none?: BankCardWhereInput
  }

  export type DonationListRelationFilter = {
    every?: DonationWhereInput
    some?: DonationWhereInput
    none?: DonationWhereInput
  }

  export type BankCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DonationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    donorId?: SortOrder
    recipientId?: SortOrder
    socialUrlOrBuyMeACoffeeUrl?: SortOrder
    specialMessage?: SortOrder
  }

  export type DonationAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    donorId?: SortOrder
    recipientId?: SortOrder
  }

  export type DonationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    donorId?: SortOrder
    recipientId?: SortOrder
    socialUrlOrBuyMeACoffeeUrl?: SortOrder
    specialMessage?: SortOrder
  }

  export type DonationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    amount?: SortOrder
    donorId?: SortOrder
    recipientId?: SortOrder
    socialUrlOrBuyMeACoffeeUrl?: SortOrder
    specialMessage?: SortOrder
  }

  export type DonationSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    donorId?: SortOrder
    recipientId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aboutMe?: SortOrder
    avatarImage?: SortOrder
    socialMediaUrl?: SortOrder
    backgroundImage?: SortOrder
    successMessage?: SortOrder
    userId?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aboutMe?: SortOrder
    avatarImage?: SortOrder
    socialMediaUrl?: SortOrder
    backgroundImage?: SortOrder
    successMessage?: SortOrder
    userId?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aboutMe?: SortOrder
    avatarImage?: SortOrder
    socialMediaUrl?: SortOrder
    backgroundImage?: SortOrder
    successMessage?: SortOrder
    userId?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BankCardCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cardNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userId?: SortOrder
    expirationDate?: SortOrder
  }

  export type BankCardAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BankCardMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cardNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userId?: SortOrder
    expirationDate?: SortOrder
  }

  export type BankCardMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cardNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userId?: SortOrder
    expirationDate?: SortOrder
  }

  export type BankCardSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type BankCardCreateNestedManyWithoutUserInput = {
    create?: XOR<BankCardCreateWithoutUserInput, BankCardUncheckedCreateWithoutUserInput> | BankCardCreateWithoutUserInput[] | BankCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankCardCreateOrConnectWithoutUserInput | BankCardCreateOrConnectWithoutUserInput[]
    createMany?: BankCardCreateManyUserInputEnvelope
    connect?: BankCardWhereUniqueInput | BankCardWhereUniqueInput[]
  }

  export type DonationCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type DonationCreateNestedManyWithoutRecipientInput = {
    create?: XOR<DonationCreateWithoutRecipientInput, DonationUncheckedCreateWithoutRecipientInput> | DonationCreateWithoutRecipientInput[] | DonationUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutRecipientInput | DonationCreateOrConnectWithoutRecipientInput[]
    createMany?: DonationCreateManyRecipientInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type BankCardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BankCardCreateWithoutUserInput, BankCardUncheckedCreateWithoutUserInput> | BankCardCreateWithoutUserInput[] | BankCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankCardCreateOrConnectWithoutUserInput | BankCardCreateOrConnectWithoutUserInput[]
    createMany?: BankCardCreateManyUserInputEnvelope
    connect?: BankCardWhereUniqueInput | BankCardWhereUniqueInput[]
  }

  export type DonationUncheckedCreateNestedManyWithoutDonorInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type DonationUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<DonationCreateWithoutRecipientInput, DonationUncheckedCreateWithoutRecipientInput> | DonationCreateWithoutRecipientInput[] | DonationUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutRecipientInput | DonationCreateOrConnectWithoutRecipientInput[]
    createMany?: DonationCreateManyRecipientInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type BankCardUpdateManyWithoutUserNestedInput = {
    create?: XOR<BankCardCreateWithoutUserInput, BankCardUncheckedCreateWithoutUserInput> | BankCardCreateWithoutUserInput[] | BankCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankCardCreateOrConnectWithoutUserInput | BankCardCreateOrConnectWithoutUserInput[]
    upsert?: BankCardUpsertWithWhereUniqueWithoutUserInput | BankCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BankCardCreateManyUserInputEnvelope
    set?: BankCardWhereUniqueInput | BankCardWhereUniqueInput[]
    disconnect?: BankCardWhereUniqueInput | BankCardWhereUniqueInput[]
    delete?: BankCardWhereUniqueInput | BankCardWhereUniqueInput[]
    connect?: BankCardWhereUniqueInput | BankCardWhereUniqueInput[]
    update?: BankCardUpdateWithWhereUniqueWithoutUserInput | BankCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BankCardUpdateManyWithWhereWithoutUserInput | BankCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BankCardScalarWhereInput | BankCardScalarWhereInput[]
  }

  export type DonationUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutDonorInput | DonationUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutDonorInput | DonationUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutDonorInput | DonationUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type DonationUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<DonationCreateWithoutRecipientInput, DonationUncheckedCreateWithoutRecipientInput> | DonationCreateWithoutRecipientInput[] | DonationUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutRecipientInput | DonationCreateOrConnectWithoutRecipientInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutRecipientInput | DonationUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: DonationCreateManyRecipientInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutRecipientInput | DonationUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutRecipientInput | DonationUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type BankCardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BankCardCreateWithoutUserInput, BankCardUncheckedCreateWithoutUserInput> | BankCardCreateWithoutUserInput[] | BankCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BankCardCreateOrConnectWithoutUserInput | BankCardCreateOrConnectWithoutUserInput[]
    upsert?: BankCardUpsertWithWhereUniqueWithoutUserInput | BankCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BankCardCreateManyUserInputEnvelope
    set?: BankCardWhereUniqueInput | BankCardWhereUniqueInput[]
    disconnect?: BankCardWhereUniqueInput | BankCardWhereUniqueInput[]
    delete?: BankCardWhereUniqueInput | BankCardWhereUniqueInput[]
    connect?: BankCardWhereUniqueInput | BankCardWhereUniqueInput[]
    update?: BankCardUpdateWithWhereUniqueWithoutUserInput | BankCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BankCardUpdateManyWithWhereWithoutUserInput | BankCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BankCardScalarWhereInput | BankCardScalarWhereInput[]
  }

  export type DonationUncheckedUpdateManyWithoutDonorNestedInput = {
    create?: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput> | DonationCreateWithoutDonorInput[] | DonationUncheckedCreateWithoutDonorInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutDonorInput | DonationCreateOrConnectWithoutDonorInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutDonorInput | DonationUpsertWithWhereUniqueWithoutDonorInput[]
    createMany?: DonationCreateManyDonorInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutDonorInput | DonationUpdateWithWhereUniqueWithoutDonorInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutDonorInput | DonationUpdateManyWithWhereWithoutDonorInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type DonationUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<DonationCreateWithoutRecipientInput, DonationUncheckedCreateWithoutRecipientInput> | DonationCreateWithoutRecipientInput[] | DonationUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutRecipientInput | DonationCreateOrConnectWithoutRecipientInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutRecipientInput | DonationUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: DonationCreateManyRecipientInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutRecipientInput | DonationUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutRecipientInput | DonationUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDonationsSentInput = {
    create?: XOR<UserCreateWithoutDonationsSentInput, UserUncheckedCreateWithoutDonationsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDonationsReceivedInput = {
    create?: XOR<UserCreateWithoutDonationsReceivedInput, UserUncheckedCreateWithoutDonationsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDonationsSentNestedInput = {
    create?: XOR<UserCreateWithoutDonationsSentInput, UserUncheckedCreateWithoutDonationsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsSentInput
    upsert?: UserUpsertWithoutDonationsSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonationsSentInput, UserUpdateWithoutDonationsSentInput>, UserUncheckedUpdateWithoutDonationsSentInput>
  }

  export type UserUpdateOneRequiredWithoutDonationsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutDonationsReceivedInput, UserUncheckedCreateWithoutDonationsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsReceivedInput
    upsert?: UserUpsertWithoutDonationsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonationsReceivedInput, UserUpdateWithoutDonationsReceivedInput>, UserUncheckedUpdateWithoutDonationsReceivedInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutBankCardInput = {
    create?: XOR<UserCreateWithoutBankCardInput, UserUncheckedCreateWithoutBankCardInput>
    connectOrCreate?: UserCreateOrConnectWithoutBankCardInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBankCardNestedInput = {
    create?: XOR<UserCreateWithoutBankCardInput, UserUncheckedCreateWithoutBankCardInput>
    connectOrCreate?: UserCreateOrConnectWithoutBankCardInput
    upsert?: UserUpsertWithoutBankCardInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBankCardInput, UserUpdateWithoutBankCardInput>, UserUncheckedUpdateWithoutBankCardInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProfileCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    aboutMe: string
    avatarImage: string
    socialMediaUrl: string
    backgroundImage?: string | null
    successMessage?: string | null
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    aboutMe: string
    avatarImage: string
    socialMediaUrl: string
    backgroundImage?: string | null
    successMessage?: string | null
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type BankCardCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    cardNumber: string
    firstName: string
    lastName: string
    expirationDate: Date | string
  }

  export type BankCardUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cardNumber: string
    firstName: string
    lastName: string
    expirationDate: Date | string
  }

  export type BankCardCreateOrConnectWithoutUserInput = {
    where: BankCardWhereUniqueInput
    create: XOR<BankCardCreateWithoutUserInput, BankCardUncheckedCreateWithoutUserInput>
  }

  export type BankCardCreateManyUserInputEnvelope = {
    data: BankCardCreateManyUserInput | BankCardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DonationCreateWithoutDonorInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    socialUrlOrBuyMeACoffeeUrl: string
    specialMessage: string
    recipient: UserCreateNestedOneWithoutDonationsReceivedInput
  }

  export type DonationUncheckedCreateWithoutDonorInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    recipientId: number
    socialUrlOrBuyMeACoffeeUrl: string
    specialMessage: string
  }

  export type DonationCreateOrConnectWithoutDonorInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput>
  }

  export type DonationCreateManyDonorInputEnvelope = {
    data: DonationCreateManyDonorInput | DonationCreateManyDonorInput[]
    skipDuplicates?: boolean
  }

  export type DonationCreateWithoutRecipientInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    socialUrlOrBuyMeACoffeeUrl: string
    specialMessage: string
    donor: UserCreateNestedOneWithoutDonationsSentInput
  }

  export type DonationUncheckedCreateWithoutRecipientInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    donorId: number
    socialUrlOrBuyMeACoffeeUrl: string
    specialMessage: string
  }

  export type DonationCreateOrConnectWithoutRecipientInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutRecipientInput, DonationUncheckedCreateWithoutRecipientInput>
  }

  export type DonationCreateManyRecipientInputEnvelope = {
    data: DonationCreateManyRecipientInput | DonationCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aboutMe?: StringFieldUpdateOperationsInput | string
    avatarImage?: StringFieldUpdateOperationsInput | string
    socialMediaUrl?: StringFieldUpdateOperationsInput | string
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    successMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aboutMe?: StringFieldUpdateOperationsInput | string
    avatarImage?: StringFieldUpdateOperationsInput | string
    socialMediaUrl?: StringFieldUpdateOperationsInput | string
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    successMessage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BankCardUpsertWithWhereUniqueWithoutUserInput = {
    where: BankCardWhereUniqueInput
    update: XOR<BankCardUpdateWithoutUserInput, BankCardUncheckedUpdateWithoutUserInput>
    create: XOR<BankCardCreateWithoutUserInput, BankCardUncheckedCreateWithoutUserInput>
  }

  export type BankCardUpdateWithWhereUniqueWithoutUserInput = {
    where: BankCardWhereUniqueInput
    data: XOR<BankCardUpdateWithoutUserInput, BankCardUncheckedUpdateWithoutUserInput>
  }

  export type BankCardUpdateManyWithWhereWithoutUserInput = {
    where: BankCardScalarWhereInput
    data: XOR<BankCardUpdateManyMutationInput, BankCardUncheckedUpdateManyWithoutUserInput>
  }

  export type BankCardScalarWhereInput = {
    AND?: BankCardScalarWhereInput | BankCardScalarWhereInput[]
    OR?: BankCardScalarWhereInput[]
    NOT?: BankCardScalarWhereInput | BankCardScalarWhereInput[]
    id?: IntFilter<"BankCard"> | number
    createdAt?: DateTimeFilter<"BankCard"> | Date | string
    updatedAt?: DateTimeFilter<"BankCard"> | Date | string
    cardNumber?: StringFilter<"BankCard"> | string
    firstName?: StringFilter<"BankCard"> | string
    lastName?: StringFilter<"BankCard"> | string
    userId?: IntFilter<"BankCard"> | number
    expirationDate?: DateTimeFilter<"BankCard"> | Date | string
  }

  export type DonationUpsertWithWhereUniqueWithoutDonorInput = {
    where: DonationWhereUniqueInput
    update: XOR<DonationUpdateWithoutDonorInput, DonationUncheckedUpdateWithoutDonorInput>
    create: XOR<DonationCreateWithoutDonorInput, DonationUncheckedCreateWithoutDonorInput>
  }

  export type DonationUpdateWithWhereUniqueWithoutDonorInput = {
    where: DonationWhereUniqueInput
    data: XOR<DonationUpdateWithoutDonorInput, DonationUncheckedUpdateWithoutDonorInput>
  }

  export type DonationUpdateManyWithWhereWithoutDonorInput = {
    where: DonationScalarWhereInput
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyWithoutDonorInput>
  }

  export type DonationScalarWhereInput = {
    AND?: DonationScalarWhereInput | DonationScalarWhereInput[]
    OR?: DonationScalarWhereInput[]
    NOT?: DonationScalarWhereInput | DonationScalarWhereInput[]
    id?: IntFilter<"Donation"> | number
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
    amount?: IntFilter<"Donation"> | number
    donorId?: IntFilter<"Donation"> | number
    recipientId?: IntFilter<"Donation"> | number
    socialUrlOrBuyMeACoffeeUrl?: StringFilter<"Donation"> | string
    specialMessage?: StringFilter<"Donation"> | string
  }

  export type DonationUpsertWithWhereUniqueWithoutRecipientInput = {
    where: DonationWhereUniqueInput
    update: XOR<DonationUpdateWithoutRecipientInput, DonationUncheckedUpdateWithoutRecipientInput>
    create: XOR<DonationCreateWithoutRecipientInput, DonationUncheckedCreateWithoutRecipientInput>
  }

  export type DonationUpdateWithWhereUniqueWithoutRecipientInput = {
    where: DonationWhereUniqueInput
    data: XOR<DonationUpdateWithoutRecipientInput, DonationUncheckedUpdateWithoutRecipientInput>
  }

  export type DonationUpdateManyWithWhereWithoutRecipientInput = {
    where: DonationScalarWhereInput
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyWithoutRecipientInput>
  }

  export type UserCreateWithoutDonationsSentInput = {
    createdAt?: Date | string
    email: string
    username: string
    password: string
    profile?: ProfileCreateNestedOneWithoutUserInput
    bankCard?: BankCardCreateNestedManyWithoutUserInput
    donationsReceived?: DonationCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutDonationsSentInput = {
    id?: number
    createdAt?: Date | string
    email: string
    username: string
    password: string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    bankCard?: BankCardUncheckedCreateNestedManyWithoutUserInput
    donationsReceived?: DonationUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutDonationsSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonationsSentInput, UserUncheckedCreateWithoutDonationsSentInput>
  }

  export type UserCreateWithoutDonationsReceivedInput = {
    createdAt?: Date | string
    email: string
    username: string
    password: string
    profile?: ProfileCreateNestedOneWithoutUserInput
    bankCard?: BankCardCreateNestedManyWithoutUserInput
    donationsSent?: DonationCreateNestedManyWithoutDonorInput
  }

  export type UserUncheckedCreateWithoutDonationsReceivedInput = {
    id?: number
    createdAt?: Date | string
    email: string
    username: string
    password: string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    bankCard?: BankCardUncheckedCreateNestedManyWithoutUserInput
    donationsSent?: DonationUncheckedCreateNestedManyWithoutDonorInput
  }

  export type UserCreateOrConnectWithoutDonationsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonationsReceivedInput, UserUncheckedCreateWithoutDonationsReceivedInput>
  }

  export type UserUpsertWithoutDonationsSentInput = {
    update: XOR<UserUpdateWithoutDonationsSentInput, UserUncheckedUpdateWithoutDonationsSentInput>
    create: XOR<UserCreateWithoutDonationsSentInput, UserUncheckedCreateWithoutDonationsSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonationsSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonationsSentInput, UserUncheckedUpdateWithoutDonationsSentInput>
  }

  export type UserUpdateWithoutDonationsSentInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    bankCard?: BankCardUpdateManyWithoutUserNestedInput
    donationsReceived?: DonationUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutDonationsSentInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    bankCard?: BankCardUncheckedUpdateManyWithoutUserNestedInput
    donationsReceived?: DonationUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserUpsertWithoutDonationsReceivedInput = {
    update: XOR<UserUpdateWithoutDonationsReceivedInput, UserUncheckedUpdateWithoutDonationsReceivedInput>
    create: XOR<UserCreateWithoutDonationsReceivedInput, UserUncheckedCreateWithoutDonationsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonationsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonationsReceivedInput, UserUncheckedUpdateWithoutDonationsReceivedInput>
  }

  export type UserUpdateWithoutDonationsReceivedInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    bankCard?: BankCardUpdateManyWithoutUserNestedInput
    donationsSent?: DonationUpdateManyWithoutDonorNestedInput
  }

  export type UserUncheckedUpdateWithoutDonationsReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    bankCard?: BankCardUncheckedUpdateManyWithoutUserNestedInput
    donationsSent?: DonationUncheckedUpdateManyWithoutDonorNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    createdAt?: Date | string
    email: string
    username: string
    password: string
    bankCard?: BankCardCreateNestedManyWithoutUserInput
    donationsSent?: DonationCreateNestedManyWithoutDonorInput
    donationsReceived?: DonationCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: number
    createdAt?: Date | string
    email: string
    username: string
    password: string
    bankCard?: BankCardUncheckedCreateNestedManyWithoutUserInput
    donationsSent?: DonationUncheckedCreateNestedManyWithoutDonorInput
    donationsReceived?: DonationUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bankCard?: BankCardUpdateManyWithoutUserNestedInput
    donationsSent?: DonationUpdateManyWithoutDonorNestedInput
    donationsReceived?: DonationUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bankCard?: BankCardUncheckedUpdateManyWithoutUserNestedInput
    donationsSent?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    donationsReceived?: DonationUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserCreateWithoutBankCardInput = {
    createdAt?: Date | string
    email: string
    username: string
    password: string
    profile?: ProfileCreateNestedOneWithoutUserInput
    donationsSent?: DonationCreateNestedManyWithoutDonorInput
    donationsReceived?: DonationCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutBankCardInput = {
    id?: number
    createdAt?: Date | string
    email: string
    username: string
    password: string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    donationsSent?: DonationUncheckedCreateNestedManyWithoutDonorInput
    donationsReceived?: DonationUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutBankCardInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBankCardInput, UserUncheckedCreateWithoutBankCardInput>
  }

  export type UserUpsertWithoutBankCardInput = {
    update: XOR<UserUpdateWithoutBankCardInput, UserUncheckedUpdateWithoutBankCardInput>
    create: XOR<UserCreateWithoutBankCardInput, UserUncheckedCreateWithoutBankCardInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBankCardInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBankCardInput, UserUncheckedUpdateWithoutBankCardInput>
  }

  export type UserUpdateWithoutBankCardInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    donationsSent?: DonationUpdateManyWithoutDonorNestedInput
    donationsReceived?: DonationUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutBankCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    donationsSent?: DonationUncheckedUpdateManyWithoutDonorNestedInput
    donationsReceived?: DonationUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type BankCardCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cardNumber: string
    firstName: string
    lastName: string
    expirationDate: Date | string
  }

  export type DonationCreateManyDonorInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    recipientId: number
    socialUrlOrBuyMeACoffeeUrl: string
    specialMessage: string
  }

  export type DonationCreateManyRecipientInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    amount: number
    donorId: number
    socialUrlOrBuyMeACoffeeUrl: string
    specialMessage: string
  }

  export type BankCardUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankCardUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BankCardUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationUpdateWithoutDonorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    socialUrlOrBuyMeACoffeeUrl?: StringFieldUpdateOperationsInput | string
    specialMessage?: StringFieldUpdateOperationsInput | string
    recipient?: UserUpdateOneRequiredWithoutDonationsReceivedNestedInput
  }

  export type DonationUncheckedUpdateWithoutDonorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    socialUrlOrBuyMeACoffeeUrl?: StringFieldUpdateOperationsInput | string
    specialMessage?: StringFieldUpdateOperationsInput | string
  }

  export type DonationUncheckedUpdateManyWithoutDonorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    recipientId?: IntFieldUpdateOperationsInput | number
    socialUrlOrBuyMeACoffeeUrl?: StringFieldUpdateOperationsInput | string
    specialMessage?: StringFieldUpdateOperationsInput | string
  }

  export type DonationUpdateWithoutRecipientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    socialUrlOrBuyMeACoffeeUrl?: StringFieldUpdateOperationsInput | string
    specialMessage?: StringFieldUpdateOperationsInput | string
    donor?: UserUpdateOneRequiredWithoutDonationsSentNestedInput
  }

  export type DonationUncheckedUpdateWithoutRecipientInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    donorId?: IntFieldUpdateOperationsInput | number
    socialUrlOrBuyMeACoffeeUrl?: StringFieldUpdateOperationsInput | string
    specialMessage?: StringFieldUpdateOperationsInput | string
  }

  export type DonationUncheckedUpdateManyWithoutRecipientInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: IntFieldUpdateOperationsInput | number
    donorId?: IntFieldUpdateOperationsInput | number
    socialUrlOrBuyMeACoffeeUrl?: StringFieldUpdateOperationsInput | string
    specialMessage?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}