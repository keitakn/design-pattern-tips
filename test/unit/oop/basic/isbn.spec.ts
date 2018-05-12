import Isbn from "../../../../src/oop/basic/Isbn";

/**
 * ISBNクラスのテスト
 */
describe("Isbn", () => {
  /**
   * 言語コードを取り出せる事を担保する
   */
  it("should be able to extract the language code", () => {
    const isbnJapan = new Isbn("978-4-09-825202-2");

    expect(isbnJapan.extractLanguage()).toBe("ja");

    let isbnEnglish = new Isbn("978-1-40-127734-5");
    expect(isbnEnglish.extractLanguage()).toBe("en");

    isbnEnglish = new Isbn("978-0-40-127734-5");
    expect(isbnEnglish.extractLanguage()).toBe("en");

    const isbnFrance = new Isbn("978-2-10-825202-2");
    expect(isbnFrance.extractLanguage()).toBe("fr");
  });
});
