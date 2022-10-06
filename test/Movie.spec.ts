import { LotrClient } from "../src/index";

describe("movie", () => {
  const client = new LotrClient(process.env.API_KEY || "");

  test("Client loaded", () => {
    expect(client).toBeDefined();
  });

  //
  // These tests require a valid api key.
  //

  //   test("Test fetch movies", async () => {
  //     const movies = await client.movies.getAll();

  //     expect(movies.length).toBeGreaterThan(0);
  //   });

  //   test("Test fetch movies with filter", async () => {
  //     const movies = await client.movies.getAll({
  //       filtering: {
  //         range: { field: "budgetInMillions", greaterThan: 100 },
  //       },
  //     });

  //     expect(movies.length).toEqual(5);
  //   });

  //   test("Test match movies", async () => {
  //     const movies = await client.movies.getAll({
  //       filtering: {
  //         matches: { field: "name", value: "The Lord of the Rings Series" },
  //       },
  //     });

  //     expect(movies.length).toEqual(1);
  //   });

  //   test("Test fetch movies with sorting", async () => {
  //     const movies = await client.movies.getAll({
  //       sorting: { field: "runtimeInMinutes", asc: false },
  //     });

  //     expect(movies[0].name).toEqual("The Lord of the Rings Series");
  //   });

  //   test("Test fetch movie", async () => {
  //     const movie = await client.movies.get("5cd95395de30eff6ebccde5d");

  //     expect(movie.name).toEqual("The Return of the King");
  //   });
});
