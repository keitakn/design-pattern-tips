import Isbn from "./Isbn";

/**
 * 本の基本インターフェース
 */
export interface Book {
  /**
   * ISBNを取得する
   *
   * @returns {Isbn}
   */
  isbn() : Isbn;
}
