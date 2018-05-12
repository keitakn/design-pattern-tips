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

  /**
   * 言語が未定義なので"UndefinedLanguageError"がthrowされる事を確認する
   */
  it("should be thrown UndefinedLanguageError. Because the Language is undefined", () => {
    const isbnGermany = new Isbn("978-3-10-999999-2");

    try {
      const language = isbnGermany.extractLanguage();
      // catchブロックに入っていない時点でこのテストは意図した通りに動いていないのでテストを失敗させる
      fail(language);
    } catch (error) {
      // ドイツ語は未定義なのでエラーになるハズ
      expect(error.name).toBe("UndefinedLanguageError");
    }
  });
});
