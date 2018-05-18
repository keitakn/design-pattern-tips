/**
 * 価格
 */
export namespace Price {
  /**
   * Price Builder Class
   */
  export class Builder {
    /**
     * 税抜き価格
     */
    private _excludingTaxPrice: number;

    /**
     * 税率
     */
    private _taxRate: number;

    /**
     * PriceBuilder constructor
     */
    constructor() {
      this._excludingTaxPrice = 100;
      this._taxRate = 108;
    }

    /**
     * @returns {number}
     */
    get excludingTaxPrice(): number {
      return this._excludingTaxPrice;
    }

    /**
     * @param {number} value
     */
    set excludingTaxPrice(value: number) {
      this._excludingTaxPrice = value;
    }

    /**
     * @returns {number}
     */
    get taxRate(): number {
      return this._taxRate;
    }

    /**
     * @param {number} value
     */
    set taxRate(value: number) {
      this._taxRate = value;
    }

    /**
     * @returns {Price.Entity}
     */
    build(): Entity {
      return new Entity(this);
    }
  }

  /**
   * 価格クラス
   */
  export class Entity {
    /**
     * 税抜き価格
     */
    private readonly _excludingTaxPrice: number;

    /**
     * 税率
     */
    private readonly _taxRate: number;

    /**
     * @param {Price.Builder} builder
     */
    constructor(builder: Builder) {
      this._excludingTaxPrice = builder.excludingTaxPrice;
      this._taxRate = builder.taxRate;
    }

    /**
     * @returns {number}
     */
    get excludingTaxPrice(): number {
      return this._excludingTaxPrice;
    }

    /**
     * @returns {number}
     */
    get taxRate(): number {
      return this._taxRate;
    }

    /**
     * 税込み価格を計算する
     *
     * @returns {number}
     */
    calculateIncludingTaxPrice(): number {
      // taxRateを1.08のように設定すると誤差が出るので108のように渡す事
      // （参考）https://qiita.com/jkr_2255/items/0ca7bc536d930f83a901
      return Math.round(this.excludingTaxPrice * this.taxRate / 100);
    }
  }
}
