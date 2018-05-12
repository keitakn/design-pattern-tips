/**
 * ISBNクラス
 */
export default class Isbn {

  /**
   * ISBN
   */
  private readonly _isbn: string;

  /**
   * @param {string} isbn
   */
  constructor(isbn: string) {
    this._isbn = isbn;
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
    switch (this.isbn.split('-')[1]) {
      case '0':
      case '1':
        return 'en';
      case '2':
        return 'fr';
      case '4':
        return 'ja';
      default:
        throw new Error('言語コードが不明です。');
    }
  }
}
