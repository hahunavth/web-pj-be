export function objAttrMapper(target, source) {
  Object.keys(target).forEach((key, i, a) => {
    if (source[key] !== undefined) {
      target[key] = source[key];
    }
  });
  return target;
}
