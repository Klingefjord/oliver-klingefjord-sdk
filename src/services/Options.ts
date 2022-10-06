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

interface Filter {
  field: string;
}

interface MatchFilter extends Filter {
  matches?: boolean;
  value: string;
}

interface IncludeFilter extends Filter {
  include?: boolean;
  values: string[];
}

interface ExistsFilter extends Filter {
  exists: boolean;
}

interface RegexFilter extends Filter {
  matches?: boolean;
  regex: string;
}

interface RangeFilter extends Filter {
  equalTo?: number;
  lessThan?: number;
  greaterThan?: number;
}
