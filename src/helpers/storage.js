function set(storage, key, value) {
  // Return false if value or key not provided
  if (typeof key === "undefined" || typeof value === "undefined") {
    return false;
  }

  // Stringify object.
  if (typeof value === "object" && value !== null) {
    value = JSON.stringify(value);
  }

  // Try to save to storage.
  try {
    setItem(storage, key, value);
  } catch (e) {
    return false;
  }

  // Return true if saving successful.
  return true;
}

function setItem(storage, key, value) {
  return storage.setItem(key, value);
}

const createStorage = storage => ({
  set: set.bind(null, storage),
});

const LocalStorage = createStorage(window.localStorage);

export { LocalStorage };
