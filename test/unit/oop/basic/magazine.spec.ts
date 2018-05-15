import Magazine from "../../../../src/oop/basic/Magazine";
import Price from "../../../../src/oop/basic/Price";
import Isbn from "../../../../src/oop/basic/Isbn";
import Title from "../../../../src/oop/basic/Title";

/**
 * 雑誌クラスのテスト
 */
describe("Magazine", () => {
  /**
   * 雑誌オブジェクトのテスト
   */
  it("should be able to create the intended Magazine object", () => {
    const isbn = new Isbn("978-4-09-999991-3");
    const title = new Title("Ray", "2018年 05月号");
    const price = new Price(500, 108);

    const magazine = new Magazine(isbn, title, price);

    expect(magazine.isbn.extractLanguage()).toBe("ja");
    expect(magazine.title.fullTitle()).toBe("Ray 2018年 05月号");
    expect(price.calculateIncludingTaxPrice()).toBe(540);
  });
});
