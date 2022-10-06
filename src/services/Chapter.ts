import { Axios } from "axios";
import Chapter from "../models/Chapter";
import BaseService from "./BaseService";

/**
 * A service for fetching book chapters from the API.
 */
export default class ChapterService extends BaseService<Chapter> {
  public constructor(api: Axios) {
    super(api, "chapter");
  }
}
