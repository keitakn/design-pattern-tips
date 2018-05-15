import Author from "../../../../src/oop/basic/Author";
import Isbn from "../../../../src/oop/basic/Isbn";

/**
 * 作者クラスのテスト
 */
describe("Author", () => {
  /**
   * 意図したフルネームを取得出来る事を確認する
   */
  it("should be able to get the intended FullName", () => {
    const enAuthor = new Author("Taylor", "Swift");

    expect(enAuthor.fullName()).toBe("Taylor Swift");

    const jaAuthor = new Author("アキコ", "東村");

    const isbnJapan = new Isbn("978-4-09-825202-2");

    expect(jaAuthor.fullName(isbnJapan)).toBe("東村 アキコ");
  });
});
