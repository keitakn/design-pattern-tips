import { Isbn } from "./Isbn";
import { Price } from "./Price";
import { Title } from "./Title";

/**
 * 書籍の基本インターフェース
 */
export default interface Book {
  isbn: Isbn.Entity;
  title: Title.Entity;
  price: Price.Entity;
}
