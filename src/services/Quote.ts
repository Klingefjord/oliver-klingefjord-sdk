import { Axios } from "axios";
import Quote from "../models/Quote";
import BaseService from "./BaseService";

/**
 * A service for fetching quotes from the API.
 */
export default class QuoteService extends BaseService<Quote> {
  public constructor(api: Axios) {
    super(api, "quote");
  }
}
