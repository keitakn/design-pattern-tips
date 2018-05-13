import Book from "./Book";
import Isbn from "./Isbn";
import Price from "./Price";
import Title from "./Title";

/**
 * 漫画クラス
 */
export default class Comic implements Book {
  /**
   * ISBN
   */
  private readonly _isbn: Isbn;

  /**
   * タイトル
   */
  private readonly _title: Title;

  /**
   * 価格
   */
  private readonly _price: Price;

  /**
   * @param {Isbn} isbn
   * @param {Title} title
   * @param {Price} price
   */
  constructor(isbn: Isbn, title: Title, price: Price) {
    this._isbn = isbn;
    this._title = title;
    this._price = price;
  }

  /**
   * @returns {Isbn}
   */
  get isbn(): Isbn {
    return this._isbn;
  }

  /**
   * @returns {Title}
   */
  get title(): Title {
    return this._title;
  }

  /**
   * @returns {Price}
   */
  get price(): Price {
    return this._price;
  }
}
