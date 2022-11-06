export function cfgModuleList<T>(
  base: Array<T>,
  add: Array<T>,
  bool: Array<boolean>,
) {
  const result = [...base];
  if (add.length == bool.length) {
    add.forEach((v, i, a) => {
      if (bool[i] == true) result.push(v);
    });
  } else {
    throw new Error('cfgModuleList: add and bool must be same length!');
  }
  return result;
}
