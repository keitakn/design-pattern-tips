import Comic from "../../../../src/oop/basic/Comic";
import Isbn from "../../../../src/oop/basic/Isbn";
import Title from "../../../../src/oop/basic/Title";
import Price from "../../../../src/oop/basic/Price";

/**
 * 漫画クラスのテスト
 */
describe("Comic", () => {
  /**
   * 意図した漫画オブジェクトが生成出来る事を確認する
   */
  it("should be able to create the intended Comic object", () => {
    const isbn = new Isbn("978-4-06-319239-1");
    const title = new Title("ちはやふる", "第1巻");
    const price = new Price(463, 108);

    const comic = new Comic(isbn, title, price);

    expect(comic.isbn.extractLanguage()).toBe("ja");
    expect(comic.title.fullTitle()).toBe("ちはやふる 第1巻");
    expect(comic.price.calculateIncludingTaxPrice()).toBe(500);
  });
});
