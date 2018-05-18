import { IsbnCreateParams } from "./IsbnFactory";
import { TitleCreateParams } from "./TitleFactory";
import { PriceCreateParams } from "./PriceFactory";
import { AuthorCreateParams } from "./AuthorFactory";
import PriceFactory from "./PriceFactory";
import IsbnFactory from "./IsbnFactory";
import TitleFactory from "./TitleFactory";
import { Comic } from "../Comic";
import AuthorFactory from "./AuthorFactory";

/**
 * ComicFactory.create IF
 */
export interface ComicCreateParams {
  isbnCreateParams: IsbnCreateParams;
  titleCreateParams: TitleCreateParams;
  priceCreateParams: PriceCreateParams;
  authorCreateParams: AuthorCreateParams;
}

/**
 * ComicFactory
 */
export default class ComicFactory {
  /**
   * 漫画オブジェクトを生成する
   *
   * @param {ComicCreateParams} params
   * @returns {Comic.Entity}
   */
  static create(params: ComicCreateParams) {
    const isbn = IsbnFactory.create(params.isbnCreateParams);
    const title = TitleFactory.create(params.titleCreateParams);
    const price = PriceFactory.create(params.priceCreateParams);
    const author = AuthorFactory.create(params.authorCreateParams);

    const comicBuilder = new Comic.Builder();
    comicBuilder.isbn = isbn;
    comicBuilder.title = title;
    comicBuilder.author = author;
    comicBuilder.price = price;

    return comicBuilder.build();
  }
}
