import Book from "./Book";
import Isbn from "./Isbn";
import Price from "./Price";
import Title from "./Title";
import Author from "./Author";

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
   * 作者
   */
  private readonly _author: Author;

  /**
   * @param {Isbn} isbn
   * @param {Title} title
   * @param {Price} price
   * @param {Author} author
   */
  constructor(isbn: Isbn, title: Title, price: Price, author: Author) {
    this._isbn = isbn;
    this._title = title;
    this._price = price;
    this._author = author;
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

  /**
   * @returns {Author}
   */
  get author(): Author {
    return this._author;
  }

  /**
   * 作者のフルネームを取得する
   *
   * @returns {string}
   */
  extractAuthorFullName(): string {
    return this.author.fullName(this.isbn);
  }
}
