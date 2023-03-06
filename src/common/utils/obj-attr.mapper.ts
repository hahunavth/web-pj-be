/**
 * Error: Cannot map req query to attribute of instance dto
 * @param target
 * @param source
 * @returns
 */
export function objAttrMapper(target: object, source: object) {
  // console.log(Object.getOwnPropertyNames(target));
  Object.getOwnPropertyNames(target).forEach((key, i, a) => {
    const attributeType = Reflect.getMetadata('design:type', target, key);
    console.log(` >${key}: ${attributeType}`);
    console.log(`${typeof target[key]}`);
    if (Object.hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    } else {
      delete target[key];
    }
  });
  return target;
}
