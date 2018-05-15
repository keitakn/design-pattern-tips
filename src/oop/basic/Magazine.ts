import Book from "./Book";
import Isbn from "./Isbn";
import Title from "./Title";
import Price from "./Price";

/**
 * 雑誌クラス
 */
export default class Magazine implements Book {
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
