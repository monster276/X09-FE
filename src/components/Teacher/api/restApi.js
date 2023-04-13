const headerDefault = {
  Accept: "application/json, text/plain, */*",
  "Content-Type": "application/json",
};

const parseParams = (url, params) => {
  if (params) {
    const qs = Object.keys(params)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
      .join("&");
    return url + "?" + qs;
  } else return url;
};

function get(route, params) {
  const headers = {
    ...headerDefault,
  };
  const url = parseParams(route, params);
  const options = { headers };
  return fetch(url, options).then(handleStatus).catch(catchError);
}

function post(route, payload, params) {
  const headers = {
    ...headerDefault,
  };
  const url = parseParams(route, params);
  const options = { headers };
  return fetch(url, {
    method: "POST",
    ...options,
    body: JSON.stringify(payload),
  })
    .then(handleStatus)
    .catch(catchError);
}

function put(route, payload, params = null) {
  const headers = {
    ...headerDefault,
  };
  let url = parseParams(route, params);
  return fetch(url, { method: "PUT", headers, body: JSON.stringify(payload) })
    .then(handleStatus)
    .catch(catchError);
}

function deleteRequest(route, params) {
  const headers = {
    ...headerDefault,
  };
  const url = parseParams(route, params);

  return fetch(url, { method: "DELETE", headers })
    .then(handleStatus)
    .catch(catchError);
}

function catchError(err) {
  console.log(err);
  if (err.name === "AbortError") {
    console.log("Request aborted");
  } else {
    throw err;
  }
}

function handleStatus(res) {
  if (!res.ok) {
    throw new Error(res.statusText);
  } else {
    return res.json();
  }
}

export { get, post, put, deleteRequest };
