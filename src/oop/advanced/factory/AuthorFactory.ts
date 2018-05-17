import { Author } from "../Author";

/**
 * AuthorFactory.create IF
 */
export interface AuthorCreateParams {
  givenName: string;
  familyName: string;
}

/**
 * AuthorFactory
 */
export default class AuthorFactory {
  /**
   * 作者オブジェクトを生成する
   *
   * @param {AuthorCreateParams} params
   * @returns {Author.Entity}
   */
  static create(params: AuthorCreateParams): Author.Entity {
    const builder = new Author.Builder();
    builder.givenName = params.givenName;
    builder.familyName = params.familyName;

    return builder.build();
  }

  /**
   * 空の作者オブジェクトを生成する
   *
   * @returns {Author.Entity}
   */
  static createEmptyObject(): Author.Entity {
    const builder = new Author.Builder();
    builder.givenName = "";
    builder.familyName = "";

    return builder.build();
  }
}
