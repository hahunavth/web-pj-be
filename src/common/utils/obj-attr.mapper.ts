/**
 * Error: Cannot map req query to attribute of instance dto
 * @param target
 * @param source
 * @returns
 */
export function objAttrMapper(target: object, source: object) {
  // console.log(Object.getOwnPropertyNames(target));
  Object.getOwnPropertyNames(source).forEach((key, i, a) => {
    const attributeType = Reflect.getMetadata('design:type', target, key);
    // console.log(` >${key}: ${attributeType}`);
    // console.log(`${typeof source[key]}`);
    if (source[key] !== undefined) {
      target[key] = source[key];
    } else {
      delete target[key];
    }
  });
  return target;
}
