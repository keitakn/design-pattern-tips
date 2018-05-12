/**
 * 価格クラス
 */
export default class Price {
  /**
   * 税抜き価格
   */
  private readonly _excludingTaxPrice: number;

  /**
   * 税率
   */
  private readonly _taxRate: number;

  /**
   * @param {number} excludingTaxPrice
   * @param {number} taxRate
   */
  constructor(excludingTaxPrice: number, taxRate: number) {
    this._excludingTaxPrice = excludingTaxPrice;
    this._taxRate = taxRate;
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
    return this.excludingTaxPrice * this.taxRate / 100;
  }
}
