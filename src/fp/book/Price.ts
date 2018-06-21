/**
 * 価格に関する関数
 */
export namespace Price {
  /**
   * 税込み価格を計算する
   *
   * @param {number} excludingTaxPrice
   * @param {number} taxRate
   * @returns {number}
   */
  export const calculateIncludingTaxPrice = (
    excludingTaxPrice: number,
    taxRate: number = 108
  ) => {
    return Math.round(excludingTaxPrice * taxRate / 100);
  };
}
