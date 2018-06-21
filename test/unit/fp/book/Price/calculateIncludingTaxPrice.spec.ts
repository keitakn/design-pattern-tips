import { Price } from "src/fp/book/Price";

/**
 * 価格に関する関数のテスト
 */
describe("calculateIncludingTaxPrice", () => {
  it("should be able to calculate the price including tax", () => {
    const excludingTaxPrice = 225;
    const taxRate = 108;

    expect(Price.calculateIncludingTaxPrice(excludingTaxPrice, taxRate)).toBe(
      243
    );
  });
});
