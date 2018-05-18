import { Title } from "../Title";

/**
 * TitleFactory.create IF
 */
export interface TitleCreateParams {
  mainTitle: string;
  subTitle: string;
}

/**
 * TitleFactory
 */
export default class TitleFactory {
  /**
   * タイトルオブジェクトを生成する
   *
   * @param {TitleCreateParams} params
   * @returns {Title.Entity}
   */
  static create(params: TitleCreateParams) {
    const builder = new Title.Builder();
    builder.mainTitle = params.mainTitle;
    builder.subTitle = params.subTitle;

    return builder.build();
  }

  /**
   * 空のタイトルオブジェクトを生成する
   *
   * @returns {Title.Entity}
   */
  static createEmptyObject() {
    const builder = new Title.Builder();
    builder.mainTitle = "";
    builder.subTitle = "";

    return builder.build();
  }
}
