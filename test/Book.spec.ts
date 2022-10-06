import { LotrClient } from "../src/index";

describe("books", () => {
  const client = new LotrClient(process.env.API_KEY || "");

  test("fech books", async () => {
    const books = await client.books.getAll();

    expect(books.length).toEqual(3);
  });

  test("fetch book", async () => {
    const book = await client.books.get("5cf58080b53e011a64671584");

    expect(book.name).toEqual("The Return Of The King");
  });

  test("fetch chapters", async () => {
    const chapters = await client.books.getChapters("5cf58080b53e011a64671584");

    expect(chapters.length).toBeGreaterThan(0);
  });
});
