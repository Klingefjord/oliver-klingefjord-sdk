import { Axios } from "axios";
import Book from "../models/Book";
import Chapter from "../models/Chapter";
import BaseService from "./BaseService";
import Options from "./Options";

/**
 * A service for fetching books from the API.
 */
export default class BookService extends BaseService<Book> {
  public constructor(api: Axios) {
    super(api, "book");
  }

  async getChapters(id: string, options?: Options): Promise<Chapter[]> {
    try {
      const queryParams = this.getQueryParams(options);

      const response = await this.api.get(`/${this.route}/${id}/chapter`, {
        params: queryParams,
      });

      const documents = JSON.parse(response.data).docs.map(
        (doc: any) => doc as Chapter
      );

      return documents;
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
