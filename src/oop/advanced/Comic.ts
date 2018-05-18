import Book from "./Book";
import { Isbn } from "./Isbn";
import { Price } from "./Price";
import { Title } from "./Title";
import { Author } from "./Author";
import IsbnFactory from "./factory/IsbnFactory";
import TitleFactory from "./factory/TitleFactory";
import PriceFactory from "./factory/PriceFactory";
import AuthorFactory from "./factory/AuthorFactory";

/**
 * 漫画
 */
export namespace Comic {
  /**
   * ComicBuilder
   */
  export class Builder {
    /**
     * ISBN
     */
    private _isbn: Isbn.Entity;

    /**
     * タイトル
     */
    private _title: Title.Entity;

    /**
     * 価格
     */
    private _price: Price.Entity;

    /**
     * 作者
     */
    private _author: Author.Entity;

    /**
     * ComicBuilder constructor
     */
    constructor() {
      this._isbn = IsbnFactory.createEmptyObject();
      this._title = TitleFactory.createEmptyObject();
      this._price = PriceFactory.createEmptyObject();
      this._author = AuthorFactory.createEmptyObject();
    }

    /**
     * @returns {Isbn.Entity}
     */
    get isbn(): Isbn.Entity {
      return this._isbn;
    }

    /**
     * @param {Isbn.Entity} value
     */
    set isbn(value: Isbn.Entity) {
      this._isbn = value;
    }

    /**
     * @returns {Title.Entity}
     */
    get title(): Title.Entity {
      return this._title;
    }

    /**
     * @param {Title.Entity} value
     */
    set title(value: Title.Entity) {
      this._title = value;
    }

    /**
     * @returns {Price.Entity}
     */
    get price(): Price.Entity {
      return this._price;
    }

    /**
     * @param {Price.Entity} value
     */
    set price(value: Price.Entity) {
      this._price = value;
    }

    /**
     * @returns {Author.Entity}
     */
    get author(): Author.Entity {
      return this._author;
    }

    /**
     * @param {Author.Entity} value
     */
    set author(value: Author.Entity) {
      this._author = value;
    }

    /**
     * @returns {Comic.Entity}
     */
    build(): Entity {
      return new Entity(this);
    }
  }

  /**
   * 漫画クラス
   */
  export class Entity implements Book {
    /**
     * ISBN
     */
    private readonly _isbn: Isbn.Entity;

    /**
     * タイトル
     */
    private readonly _title: Title.Entity;

    /**
     * 価格
     */
    private readonly _price: Price.Entity;

    /**
     * 作者
     */
    private readonly _author: Author.Entity;

    /**
     * @param {Comic.Builder} builder
     */
    constructor(builder: Builder) {
      this._isbn = builder.isbn;
      this._title = builder.title;
      this._price = builder.price;
      this._author = builder.author;
    }

    /**
     * @returns {Isbn.Entity}
     */
    get isbn(): Isbn.Entity {
      return this._isbn;
    }

    /**
     * @returns {Title.Entity}
     */
    get title(): Title.Entity {
      return this._title;
    }

    /**
     * @returns {Price.Entity}
     */
    get price(): Price.Entity {
      return this._price;
    }

    /**
     * @returns {Author.Entity}
     */
    get author(): Author.Entity {
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
}
