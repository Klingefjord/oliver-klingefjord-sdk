# LOTR npm SDK

A simple npm SDK for the [Lord of The Rings API](https://the-one-api.dev/).

## Install

```bash
npm install lotr-npm-sdk
```

## Usage

```ts
import { LotrClient } from 'lotr-npm-sdk';

client = new LotrClient('my-api-key');
```

The client can be used as follows:

```ts
// Get all the books.
const books = client.books.getAll();

// Get one specific book.
const book = client.books.get("5cf58080b53e011a64671584");

// Can be filtered, sorted and matched dynamically.
const bigBudgetMovies = client.movies.movies.getAll({
    filtering: {
        range: { field: "budgetInMillions", greaterThan: 100 },
    },
});
```

The client wraps all endpoints of the lotr api:

```ts
const books = client.books.getAll();
const movies = client.movies.getAll();
const quotes = client.quotes.getAll();
const chapters = client.chapters.getAll();
const characters = client.characters.getAll();
```

Quotes and chapters can be obtained from a particular movie or book:

```ts
const chapters = client.books.getChapter("<book_id>")
const quotes = client.movies.getQuotes("<movie_id>")
```

The client supports pagination, filtering and sorting:

```ts
const options = { 
    filtering: { 
        field: "name", 
        includes: {
            values: [
                "The Return Of The King",
                "The Fellowship Of The Ring",
            ]
        }
    },
    pagination: {
        page: 1
    },
    sorting: {
        field: "name",
        asc: true 
    }
    
}

const movies = await client.movies.getAll(options);
```

# If I had more time

- Finish up tests for all services and options.