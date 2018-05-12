import Isbn from "./Isbn";
import Price from "./Price";

/**
 * 書籍の基本インターフェース
 */
export interface Book {
  /**
   * ISBNを取得する
   *
   * @returns {Isbn}
   */
  isbn(): Isbn;

  /**
   * 価格を取得する
   *
   * @returns {Price}
   */
  price(): Price;
}
