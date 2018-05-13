/**
 * 本のタイトルを表すクラス
 */
export default class Title {
  /**
   * メインタイトル
   */
  private readonly _mainTitle: string;

  /**
   * サブタイトル
   */
  private readonly _subTitle: string;

  /**
   * @param {string} mainTitle
   * @param {string} subTitle
   */
  constructor(mainTitle: string, subTitle: string) {
    this._mainTitle = mainTitle;
    this._subTitle = subTitle;
  }

  /**
   * @returns {string}
   */
  get mainTitle(): string {
    return this._mainTitle;
  }

  /**
   * @returns {string}
   */
  get subTitle(): string {
    return this._subTitle;
  }

  /**
   * タイトルをフルで取得する
   *
   * @returns {string}
   */
  fullTitle() {
    return `${this.mainTitle} ${this.subTitle}`;
  }
}
