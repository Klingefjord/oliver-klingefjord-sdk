# Design

The SDK surfaces a LotrClient. This client has a service for each endpoint in the lotr api.

Each service extends an abstract class, and injects the correct route. Each service has an api for fetching a single document and a list of documents.

The [/character](src/services/Character.ts) and [/book](src/services/Book.ts) services have one custom function for retrieving quotes and chapters respectively.

An optional [Options](src/services/Options.ts) document can be passed to the `.getAll()` apis. The base service class contains functionality for converting the options into query parameters.