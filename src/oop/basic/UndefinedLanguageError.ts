/**
 * 未定義の言語が使われた際に発生するError
 */
export default class UndefinedLanguageError extends Error {
  /**
   * @param {string} message
   */
  constructor(message: string = "specified Language is Undefined") {
    super(message);
    this.name = this.constructor.name;

    Error.captureStackTrace(this, this.constructor);
  }
}
