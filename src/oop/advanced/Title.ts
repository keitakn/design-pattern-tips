/**
 * 書籍タイトル
 */
export namespace Title {
  /**
   * TitleBuilder
   */
  export class Builder {
    /**
     * メインタイトル
     */
    private _mainTitle: string;

    /**
     * サブタイトル
     */
    private _subTitle: string;

    /**
     * TitleBuilder constructor
     */
    constructor() {
      this._mainTitle = "";
      this._subTitle = "";
    }

    /**
     * @returns {string}
     */
    get mainTitle(): string {
      return this._mainTitle;
    }

    /**
     * @param {string} value
     */
    set mainTitle(value: string) {
      this._mainTitle = value;
    }

    /**
     * @returns {string}
     */
    get subTitle(): string {
      return this._subTitle;
    }

    /**
     * @param {string} value
     */
    set subTitle(value: string) {
      this._subTitle = value;
    }

    /**
     * @returns {Title.Entity}
     */
    build() {
      return new Entity(this);
    }
  }

  /**
   * 書籍タイトルを表すクラス
   */
  export class Entity {
    /**
     * メインタイトル
     */
    private readonly _mainTitle: string;

    /**
     * サブタイトル
     */
    private readonly _subTitle: string;

    /**
     * @param {Title.Builder} builder
     */
    constructor(builder: Builder) {
      this._mainTitle = builder.mainTitle;
      this._subTitle = builder.subTitle;
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
}
