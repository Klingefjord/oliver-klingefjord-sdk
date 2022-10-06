import { LotrClient } from "../src/index";

describe("characters", () => {
  const client = new LotrClient(process.env.API_KEY || "");

  test("Client loaded", () => {
    expect(client).toBeDefined();
  });

  //
  // These tests require a valid api key.
  //

  //   test("fetch characters", async () => {
  //     const characters = await client.characters.getAll();

  //     console.log(characters.length);

  //     expect(characters.length).toBeGreaterThan(0);
  //   });

  //   test("fetch quotes", async () => {
  //     const quotes = await client.characters.getQuotes(
  //       "5cd99d4bde30eff6ebccfbe6"
  //     );
  //     expect(quotes.length).toBeGreaterThan(0);
  //   });
});
