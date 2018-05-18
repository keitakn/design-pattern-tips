import AuthorFactory from "src/oop/advanced/factory/AuthorFactory";
import IsbnFactory from "src/oop/advanced/factory/IsbnFactory";
import TitleFactory from "src/oop/advanced/factory/TitleFactory";
import PriceFactory from "src/oop/advanced/factory/PriceFactory";
import { Comic } from "src/oop/advanced/Comic";

/**
 * 漫画クラスのテスト
 */
describe("Comic.Entity", () => {
  /**
   * 英語の漫画オブジェクトが作成出来る事を確認する
   */
  it("should be able to create English Comic Object", () => {
    const isbn = IsbnFactory.create({ isbn: "978-1-40-127734-5" });
    const title = TitleFactory.create({ mainTitle: "Batman", subTitle: "1" });
    const price = PriceFactory.create({ excludingTaxPrice: 100, taxRate: 110 });
    const author = AuthorFactory.create({
      givenName: "Bob",
      familyName: "Kane"
    });

    const comicBuilder = new Comic.Builder();
    comicBuilder.isbn = isbn;
    comicBuilder.title = title;
    comicBuilder.author = author;
    comicBuilder.price = price;

    const comic = comicBuilder.build();

    expect(comic.isbn.extractLanguage()).toBe("en");
    expect(comic.title.fullTitle()).toBe("Batman 1");
    expect(comic.price.calculateIncludingTaxPrice()).toBe(110);
    expect(comic.extractAuthorFullName()).toBe("Bob Kane");
  });

  /**
   * フランス語の漫画オブジェクトが作成出来る事を確認する
   */
  it("should be able to create France Comic Object", () => {
    const isbn = IsbnFactory.create({ isbn: "978-2-40-127734-5" });
    const title = TitleFactory.create({
      mainTitle: "ブラックサッド",
      subTitle: "1"
    });
    const price = PriceFactory.create({ excludingTaxPrice: 100, taxRate: 108 });
    const author = AuthorFactory.create({
      givenName: "フアンホ",
      familyName: "ガルニド"
    });

    const comicBuilder = new Comic.Builder();
    comicBuilder.isbn = isbn;
    comicBuilder.title = title;
    comicBuilder.author = author;
    comicBuilder.price = price;

    const comic = comicBuilder.build();

    expect(comic.isbn.extractLanguage()).toBe("fr");
    expect(comic.title.fullTitle()).toBe("ブラックサッド 1");
    expect(comic.price.calculateIncludingTaxPrice()).toBe(108);
    expect(comic.extractAuthorFullName()).toBe("フアンホ ガルニド");
  });

  /**
   * 日本語の漫画オブジェクトが作成出来る事を確認する
   */
  it("should be able to create Japanese Comic Object", () => {
    const isbn = IsbnFactory.create({ isbn: "978-4-06-319239-1" });
    const title = TitleFactory.create({
      mainTitle: "ちはやふる",
      subTitle: "第1巻"
    });
    const price = PriceFactory.create({ excludingTaxPrice: 463, taxRate: 108 });
    const author = AuthorFactory.create({
      givenName: "由紀",
      familyName: "末次"
    });

    const comicBuilder = new Comic.Builder();
    comicBuilder.isbn = isbn;
    comicBuilder.title = title;
    comicBuilder.author = author;
    comicBuilder.price = price;

    const comic = comicBuilder.build();

    expect(comic.isbn.extractLanguage()).toBe("ja");
    expect(comic.title.fullTitle()).toBe("ちはやふる 第1巻");
    expect(comic.price.calculateIncludingTaxPrice()).toBe(500);
    expect(comic.extractAuthorFullName()).toBe("末次 由紀");
  });

  /**
   * 言語が未定義なので"UndefinedLanguageError"がthrowされる事を確認する
   */
  it("should be thrown UndefinedLanguageError. Because the Language is undefined", () => {
    const isbnGermany = IsbnFactory.create({ isbn: "978-3-10-999999-2" });
    const title = TitleFactory.create({
      mainTitle: "ちはやふる",
      subTitle: "第1巻"
    });
    const price = PriceFactory.create({ excludingTaxPrice: 463, taxRate: 108 });
    const author = AuthorFactory.create({
      givenName: "由紀",
      familyName: "末次"
    });

    const comicBuilder = new Comic.Builder();
    comicBuilder.isbn = isbnGermany;
    comicBuilder.title = title;
    comicBuilder.author = author;
    comicBuilder.price = price;

    const comic = comicBuilder.build();

    try {
      const language = comic.isbn.extractLanguage();
      // catchブロックに入っていない時点でこのテストは意図した通りに動いていないのでテストを失敗させる
      fail(language);
    } catch (error) {
      // ドイツ語は未定義なのでエラーになるハズ
      expect(error.name).toBe("UndefinedLanguageError");
    }
  });
});
