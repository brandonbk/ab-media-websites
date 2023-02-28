/**
 * @param {object} params
 * @param {array} params.array
 * @param {number} params.size
 * @param {function} params.mapper
 * @param {function} params.formatter
 */
module.exports = ({
  array,
  size,
  mapper,
  formatter,
} = {}) => {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    const slice = array.slice(index, size + index);
    const mapped = mapper ? slice.map(mapper) : slice;
    const formatted = formatter ? formatter(mapped) : mapped;
    chunked.push(formatted);
    index += size;
  }
  return chunked;
};
