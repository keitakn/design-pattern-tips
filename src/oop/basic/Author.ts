/**
 * 書籍の作者を表すクラス
 */
import Isbn from "./Isbn";

export default class Author {
  /**
   * 名
   */
  private readonly _givenName: string;

  /**
   * 姓
   */
  private readonly _familyName: string;

  /**
   * @param {string} givenName
   * @param {string} familyName
   */
  constructor(givenName: string, familyName: string) {
    this._givenName = givenName;
    this._familyName = familyName;
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
   * @param {Isbn} isbn
   * @returns {string}
   */
  fullName(isbn?: Isbn): string {
    // 書籍の言語が日本語の場合だけ姓、名の順番で返す
    if (isbn != null && isbn.extractLanguage() === "ja") {
      return `${this.familyName} ${this.givenName}`;
    }

    return `${this.givenName} ${this.familyName}`;
  }
}
