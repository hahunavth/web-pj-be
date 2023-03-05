/**
 * Error: Cannot map req query to attribute of instance dto
 * @param target
 * @param source
 * @returns
 */
export function objAttrMapper(target, source) {
  Object.keys(source).forEach((key, i, a) => {
    if (source[key] !== undefined) {
      target[key] = source[key];
    }
  });
  return target;
}
