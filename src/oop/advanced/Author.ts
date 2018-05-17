import { Isbn } from "./Isbn";

/**
 * 書籍の作者
 */
export namespace Author {
  /**
   * AuthorBuilder
   */
  export class Builder {
    /**
     * 名
     */
    private _givenName: string;

    /**
     * 姓
     */
    private _familyName: string;

    /**
     * AuthorBuilder constructor
     */
    constructor() {
      this._givenName = "";
      this._familyName = "";
    }

    /**
     * @returns {string}
     */
    get givenName(): string {
      return this._givenName;
    }

    /**
     * @param {string} value
     */
    set givenName(value: string) {
      this._givenName = value;
    }

    /**
     * @returns {string}
     */
    get familyName(): string {
      return this._familyName;
    }

    /**
     * @param {string} value
     */
    set familyName(value: string) {
      this._familyName = value;
    }

    /**
     * @returns {Author.Entity}
     */
    build(): Entity {
      return new Entity(this);
    }
  }

  /**
   * 書籍の作者を表すクラス
   */
  export class Entity {
    /**
     * 名
     */
    private readonly _givenName: string;

    /**
     * 姓
     */
    private readonly _familyName: string;

    /**
     * @param {Author.Builder} builder
     */
    constructor(builder: Builder) {
      this._givenName = builder.givenName;
      this._familyName = builder.familyName;
    }

    /**
     * @returns {string}
     */
    get givenName(): string {
      return this._givenName;
    }

    /**
     * @returns {string}
     */
    get familyName(): string {
      return this._familyName;
    }

    /**
     * 作者のフルネームを取得する
     *
     * @param {Isbn.Entity} isbn
     * @returns {string}
     */
    fullName(isbn?: Isbn.Entity): string {
      // 書籍の言語が日本語の場合だけ姓、名の順番で返す
      if (isbn != null && isbn.extractLanguage() === "ja") {
        return `${this.familyName} ${this.givenName}`;
      }

      return `${this.givenName} ${this.familyName}`;
    }
  }
}
