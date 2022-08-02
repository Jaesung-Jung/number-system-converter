// dec.js

import alfy from 'alfy'
import _ from 'lodash'
import converter from './converter.js'

const main = (input) => {
  const decimal = parseInt(input, 2)
  if (isNaN(decimal)) {
    return
  }

  const oct = converter.toOct(decimal)
  const hex = converter.toHex(decimal)
  const output = [
    {
      title: oct,
      subtitle: 'Octal',
      uid: 'octal',
      arg: oct,
      icon: {
        path: 'icons/oct.png',
      },
    },
    {
      title: decimal,
      subtitle: 'Decimal',
      uid: 'decimal',
      arg: decimal,
      icon: {
        path: 'icons/dec.png',
      },
    },
    {
      title: hex,
      subtitle: 'Hexadecimal',
      uid: 'hexadecimal',
      arg: hex,
      icon: {
        path: 'icons/hex.png',
      },
    },
  ]
  alfy.output(output)
}

main(alfy.input)
