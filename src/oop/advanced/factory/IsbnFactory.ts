import { Isbn } from "../Isbn";

/**
 * IsbnFactory.create IF
 */
export interface IsbnCreateParams {
  isbn: string;
}

/**
 * IsbnFactory
 */
export default class IsbnFactory {
  /**
   * ISBNオブジェクトを生成する
   *
   * @param {IsbnCreateParams} params
   * @returns {Isbn.Entity}
   */
  static create(params: IsbnCreateParams): Isbn.Entity {
    const builder = new Isbn.Builder();
    builder.isbn = params.isbn;

    return builder.build();
  }

  /**
   * 空のISBNオブジェクトを生成する
   *
   * @returns {Isbn.Entity}
   */
  static createEmptyObject(): Isbn.Entity {
    const builder = new Isbn.Builder();
    builder.isbn = "";

    return builder.build();
  }
}
