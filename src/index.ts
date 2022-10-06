import { Axios } from "axios";
import BookService from "./services/Book";
import ChapterService from "./services/Chapter";
import CharacterService from "./services/Character";
import MovieService from "./services/Movie";
import QuoteService from "./services/Quote";

/**
 * An SDK client for communicating with the LOTR API.
 */
export class LotrClient {
  private api: Axios;
  public books: BookService;
  public movies: MovieService;
  public quotes: QuoteService;
  public chapters: ChapterService;
  public characters: CharacterService;

  public constructor(apiKey: string) {
    // Initialize the api.
    this.api = new Axios({
      baseURL: "https://the-one-api.dev/v2",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    // Setup the services with the api.
    this.books = new BookService(this.api);
    this.movies = new MovieService(this.api);
    this.quotes = new QuoteService(this.api);
    this.chapters = new ChapterService(this.api);
    this.characters = new CharacterService(this.api);
  }
}
