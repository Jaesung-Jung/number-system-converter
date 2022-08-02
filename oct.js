// dec.js

import alfy from 'alfy'
import _ from 'lodash'
import converter from './converter.js'

const main = (input) => {
  const decimal = parseInt(input, 8)
  if (isNaN(decimal)) {
    return
  }

  const binary = converter.toBinary(decimal)
  const hex = converter.toHex(decimal)
  const output = [
    {
      title: binary,
      subtitle: 'Binary',
      uid: 'binary',
      arg: binary,
      icon: {
        path: 'icons/bin.png',
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
