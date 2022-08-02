// converter.js

import _ from 'lodash'

const chunkRight = (arr, size) => {
  const rm = arr.length % size
  return rm
    ? [[arr.slice(0, rm)], ..._.chunk(arr.slice(rm), size)]
    : _.chunk(arr, size)
}

const converter = {
  toBinary: (number) => {
    return _.chain(chunkRight(number.toString(2), 8))
      .map((chunk) => {
        return chunk.join('').padStart(8, '0')
      })
      .join(' ')
      .value()
  },

  toHex: (number) => {
    return _.chain(chunkRight(number.toString(16), 2))
      .map((chunk) => {
        return chunk.join('').padStart(2, '0').toUpperCase()
      })
      .join(' ')
      .value()
  },

  toOct: (number) => {
    return number.toString(8)
  },
}

export default converter
