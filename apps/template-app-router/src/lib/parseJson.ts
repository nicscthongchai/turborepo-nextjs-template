function parseJson(obj: any) {
  try {
    return JSON.parse(obj);
  } catch {
    return null;
  }
}

export default parseJson;
