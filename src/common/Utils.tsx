import * as React from "react";

export default class Utils {

}

export const useAsyncError = () => {
  const [_, setError] = React.useState();
  return React.useCallback(
      e => {
        setError(() => {
          throw e;
        });
      },
      [setError],
  );
};

export const getParameterByName = (name: string, urlString?: string): string => {
  const url: string = urlString ? urlString : (window as any).location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  const results = regex.exec(url);
  if (!results) { return ""; }
  if (!results[2]) { return ""; }
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};



/**
 * Add a URL parameter (or changing it if it already exists)
 * @param {search} string  this is typically document.location.search
 * @param {key}    string  the key to set
 * @param {val}    string  value 
 */
export const addUrlParam = (search: string, key: string, val: string) => {
  const newParam = key + '=' + encodeURIComponent(val);
  let params = '?' + newParam;

  // Separate the fragment from the search string, if it exists
  let hash = '';
  const hashIndex = search.indexOf('#');
  if (hashIndex !== -1) {
    hash = search.substring(hashIndex);
    search = search.substring(0, hashIndex);
  }

  // If the "search" string exists, then build params from it
  if (search) {
    // Try to replace an existance instance
    params = search.replace(new RegExp('([?&])' + key + '[^&]*'), '$1' + newParam);

    // If nothing was replaced, then add the new param to the end
    if (params === search) {
      if (params.indexOf("?") > -1) {
        params += '&' + newParam;
      } else {
        params = '?' + newParam;
      }
    }
  }

  return params;
};

export const isValidEmail = (email: string) => {
  // This regular expression checks basic structural criteria for an email address, but doesn't catch all possible variations.
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};


export const  storeData = (key: string, value: any) => {
  try {
      // Check if the browser supports localStorage
      if (typeof(Storage) !== "undefined") {
          // Convert the value to a JSON string before storing it 
          // because localStorage stores data as strings.
          localStorage.setItem(key, JSON.stringify(value));
      } else {
          // No web storage Support.
          console.error("localStorage is not supported by your browser");
      }
  } catch (e) {
      // Catch any errors, e.g., SecurityError if the storage is full or blocked
      console.error("Could not save to localStorage", e);
  }
};


export const retrieveData = (key: string, jsonKey: string) => {
  try {
      // Check if the browser supports localStorage
      if (typeof(Storage) !== "undefined") {
          // Retrieve the value with the key, and convert it back to its original format from the JSON string.
          const value = localStorage.getItem(key);
          return value !== null ? JSON.parse(value)[jsonKey] : null;
      } else {
          // No web storage Support.
          console.error("localStorage is not supported by your browser");
          return null;
      }
  } catch (e) {
      // Catch any errors, e.g., in JSON parsing
      console.error("Could not retrieve from localStorage", e);
      return null;
  }
};