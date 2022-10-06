import { Axios } from "axios";
import Chapter from "../models/Chapter";
import Character from "../models/Character";
import Quote from "../models/Quote";
import BaseService from "./BaseService";
import Options from "./Options";

/**
 * A service for fetching book chapters from the API.
 */
export default class CharacterService extends BaseService<Character> {
  public constructor(api: Axios) {
    super(api, "character");
  }

  async getQuotes(id: string, options?: Options): Promise<Quote[]> {
    try {
      const queryParams = this.getQueryParams(options);

      const response = await this.api.get(`/${this.route}/${id}/quote`, {
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
