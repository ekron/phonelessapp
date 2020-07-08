import stringify from 'json-stable-stringify';
import md5 from "blueimp-md5"

/**
 * Create a cache key from an object of key/value pairs with some
 * values being possible nested key/value pairs.
 */
export const createCacheKey = <T>(
  query: string,
  variables?: T
) => {
  var result = query + stringify(variables);
  return md5(result);
};