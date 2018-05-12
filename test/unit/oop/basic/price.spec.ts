import Price from "../../../../src/oop/basic/Price";

/**
 * 価格クラスのテスト
 */
describe("Price", () => {
  /**
   * 税込み価格が計算出来る事を確認する
   */
  it("should be able to calculate the price including tax", () => {
    const excludingTaxPrice = 225;
    const taxRate = 108;

    const price = new Price(excludingTaxPrice, taxRate);

    expect(price.calculateIncludingTaxPrice()).toBe(243);
  });
});
