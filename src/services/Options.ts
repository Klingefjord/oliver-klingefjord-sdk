/**
 * Options for fetching the data from the api.
 */
export default interface Options {
  pagination?: PaginationOptions;
  filtering?: FilteringOptions;
  sorting?: SortingOptions;
}

/**
 * Options for pagination.
 *
 * - limit: The number of items to return.
 * - page: The pagination page to return.
 * - offset: The number of items to skip.
 */
export interface PaginationOptions {
  limit: number;
  page: number;
  offset: number;
}

/**
 * Options for sorting.
 *
 * - field: The field to sort.
 * - asc: Whether to sort ascending (if true) or descending (if false).
 */
export interface SortingOptions {
  field: string;
  asc: boolean;
}

/**
 * Options for filtering.
 *
 * - matches: Return elements that matches the field.
 * - includes: Return elements that includes the field. Can be negated.
 * - exists: Return elements where the field exists. Can be negated.
 * - regex: Return elements that matches the regex. Can be negated.
 * - range: Return elements that are within a certain range.
 */
export interface FilteringOptions {
  matches?: MatchFilter;
  includes?: IncludeFilter;
  exists?: ExistsFilter;
  regex?: RegexFilter;
  range?: RangeFilter;
}

/**
 * Passing "false" to "matches" negates the filter.
 */
interface MatchFilter {
  field: string;
  value: string;
  matches?: boolean;
}

/**
 * Passing "false" to "include" negates the filter.
 */
interface IncludeFilter {
  field: string;
  values: string[];
  include?: boolean;
}

/**
 * Passing "false" to "exists" negates the filter.
 */
interface ExistsFilter {
  field: string;
  exists?: boolean;
}

/**
 * Passing "false" to "matches" negates the filter.
 */
interface RegexFilter {
  field: string;
  regex: string;
  matches?: boolean;
}

interface RangeFilter {
  field: string;
  equalTo?: number;
  lessThan?: number;
  greaterThan?: number;
}
