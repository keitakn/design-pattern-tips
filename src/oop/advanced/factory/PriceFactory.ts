import { Price } from "../Price";

/**
 * PriceFactory.create IF
 */
export interface PriceCreateParams {
  excludingTaxPrice: number;
  taxRate: number;
}

/**
 * PriceFactory
 */
export default class PriceFactory {
  /**
   * 価格オブジェクトを生成する
   *
   * @param {PriceCreateParams} params
   * @returns {Price.Entity}
   */
  static create(params: PriceCreateParams) {
    const builder = new Price.Builder();
    builder.excludingTaxPrice = params.excludingTaxPrice;
    builder.taxRate = params.taxRate;

    return builder.build();
  }

  /**
   * 空の価格オブジェクトを生成する
   *
   * @returns {Price.Entity}
   */
  static createEmptyObject() {
    const builder = new Price.Builder();
    builder.excludingTaxPrice = 0;
    builder.taxRate = 0;

    return builder.build();
  }
}
