export default class HTTPRequest {
  static async get(url, options = null) {
    return await fetch(url, options);
  }
  static async post(url, data, headers = {}, options = {}) {
    return await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      ...options,
    });
  }

  static async put(url, data, headers = {}, options = {}) {
    return await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      ...options,
    });
  }
}
