import UndefinedLanguageError from "./UndefinedLanguageError";

/**
 * ISBN
 */
export namespace Isbn {
  /**
   * ISBN Builder Class
   */
  export class Builder {
    /**
     * ISBN
     */
    private _isbn: string;

    /**
     * IsbnBuilder constructor
     */
    constructor() {
      this._isbn = "";
    }

    /**
     * @returns {string}
     */
    get isbn(): string {
      return this._isbn;
    }

    /**
     * @param {string} value
     */
    set isbn(value: string) {
      this._isbn = value;
    }

    /**
     * @returns {Isbn.Entity}
     */
    build(): Entity {
      return new Entity(this);
    }
  }

  /**
   * ISBNクラス
   *
   * @link https://ja.wikipedia.org/wiki/ISBN
   */
  export class Entity {
    /**
     * ISBN
     */
    private readonly _isbn: string;

    /**
     * @param {Isbn.Builder} builder
     */
    constructor(builder: Builder) {
      this._isbn = builder.isbn;
    }

    /**
     * @returns {string}
     */
    get isbn(): string {
      return this._isbn;
    }

    /**
     * ISBNから言語コードを取り出す
     *
     * @returns {string}
     * @link https://ja.wikipedia.org/wiki/ISO_639-1
     */
    extractLanguage(): string {
      switch (this.isbn.split("-")[1]) {
        case "0":
        case "1":
          return "en";
        case "2":
          return "fr";
        case "4":
          return "ja";
        default:
          throw new UndefinedLanguageError();
      }
    }
  }
}
