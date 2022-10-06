import assert from "assert";
import { Axios } from "axios";
import Options, {
  FilteringOptions,
  PaginationOptions,
  SortingOptions,
} from "./Options";

export default abstract class BaseService<T> {
  protected route;
  protected api;

  public constructor(api: Axios, route: string) {
    this.api = api;
    this.route = route;
  }

  #paginationQueries(pagination?: PaginationOptions): {
    [key: string]: string;
  } {
    if (!pagination) {
      return {};
    }

    const queries: any = {};

    if (pagination?.limit) {
      queries.limit = pagination.limit;
    }

    if (pagination?.offset) {
      queries.offset = pagination.offset;
    }

    if (pagination?.page) {
      queries.page = pagination.page;
    }

    return queries;
  }

  #sortingQueries(sorting?: SortingOptions): { [key: string]: string } {
    if (!sorting) {
      return {};
    }

    const queries: { [key: string]: string } = {};

    if (sorting) {
      queries.sort = `${sorting.field}:${sorting.asc ? "asc" : "desc"}`;
    }

    return queries;
  }

  #filteringQueries(filtering?: FilteringOptions): {
    [key: string]: string | number;
  } {
    if (!filtering) {
      return {};
    }

    const queries: { [key: string]: string | number } = {};

    // Match filter
    if (filtering.matches) {
      let key = filtering.matches.field;

      if (filtering.matches.matches != null && !filtering.matches.matches) {
        key = `!${key}`;
      }

      queries[key] = filtering.matches.value;
    }

    // Includes filter
    if (filtering.includes) {
      let key = filtering.includes.field;

      if (filtering.includes.include != null && !filtering.includes.include) {
        key = `!${key}`;
      }

      queries[key] = filtering.includes.values.join(",");
    }

    // Regex filter
    if (filtering.regex) {
      let key = filtering.regex.field;

      if (filtering.regex.matches != null && !filtering.regex.matches) {
        key = `!${key}`;
      }

      queries[key] = filtering.regex.regex;
    }

    //
    // Range filters
    //
    // The axios api handles query parameters as a string : any dict.
    // For ranges > and < that doesn't have a corresponding value, pass an empty string.
    //
    if (filtering.range) {
      const field = filtering.range.field;

      if (filtering.range?.equalTo) {
        queries[field] = filtering.range.equalTo;
      } else if (filtering.range?.lessThan) {
        const key = `${field}<${filtering.range.lessThan}`;

        queries[key] = "";
      } else if (filtering.range?.greaterThan) {
        const key = `${field}>${filtering.range.greaterThan}`;

        queries[key] = "";
      } else {
        throw Error("Invalid range filter.");
      }
    }

    return queries;
  }

  /**
   * Builds a dictionary of query parameters from the given options.
   * @param options The options to build the query parameters from.
   * @returns A dictionary with query parameters.
   */
  getQueryParams(options?: Options): { [key: string]: string | number } {
    if (!options) {
      return {};
    }

    return {
      ...this.#paginationQueries(options.pagination),
      ...this.#filteringQueries(options.filtering),
      ...this.#sortingQueries(options.sorting),
    };
  }

  async getAll(options?: Options): Promise<T[]> {
    try {
      const queryParams = this.getQueryParams(options);

      const response = await this.api.get(`/${this.route}`, {
        params: queryParams,
      });

      const documents = JSON.parse(response.data).docs.map(
        (doc: any) => doc as T
      );

      return documents;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async get(id: string): Promise<T> {
    try {
      const response = await this.api.get(`/${this.route}/${id}`);

      const documents = JSON.parse(response.data).docs.map(
        (doc: any) => doc as T
      );

      assert(documents.length == 1, "Expected exactly one object.");

      return documents[0];
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
