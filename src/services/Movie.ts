import { Axios } from "axios";
import Movie from "../models/Movie";
import BaseService from "./BaseService";

/**
 * A service for fetching movies from the API.
 */
export default class MovieService extends BaseService<Movie> {
  public constructor(api: Axios) {
    super(api, "movie");
  }
}
