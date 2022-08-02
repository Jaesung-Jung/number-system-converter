// dec.js

import alfy from 'alfy'
import _ from 'lodash'
import converter from './converter.js'

const main = (input) => {
  const decimal = parseInt(input)
  if (isNaN(decimal)) {
    return
  }

  const binary = converter.toBinary(decimal)
  const oct = converter.toOct(decimal)
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
      title: oct,
      subtitle: 'Octal',
      uid: 'octal',
      arg: oct,
      icon: {
        path: 'icons/oct.png',
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
