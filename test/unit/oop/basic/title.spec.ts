import Title from "../../../../src/oop/basic/Title";

/**
 * Titleクラスのテスト
 */
describe("Title", () => {
  /**
   * 意図したタイトルを取得出来る事を確認する
   */
  it("should be able to get the intended title", () => {
    const mainTitle = "プロを目指す人のためのRuby入門";
    const subTitle = "言語仕様からテスト駆動開発・デバッグ技法まで";

    const title = new Title(mainTitle, subTitle);

    expect(title.fullTitle()).toBe(
      "プロを目指す人のためのRuby入門 言語仕様からテスト駆動開発・デバッグ技法まで"
    );
  });
});
