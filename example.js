const smiggles = require('.');
const RawBuffer = require('raw-buffer');

class ImageBitmap {
  constructor(width, height, data) {
    this.width = width;
    this.height = height;
    this.data = data;
  }
}
smiggles.bind({
  ImageBitmap,
  RawBuffer,
});

const arrayBuffer = new ArrayBuffer(3 * Float32Array.BYTES_PER_ELEMENT);
new Float32Array(arrayBuffer, 0, 3).set(Float32Array.from([9, 8, 7]));
const buffer = smiggles.serialize([
  'lol',
  2,
  [true, false],
  null,
  {
    fail: 'whale',
    trail: {
      ail: 'kale',
    },
  },
  Uint8ClampedArray.from([7]),
  null,
  new Int8Array(arrayBuffer, 4, 4),
  Uint16Array.from([8]),
  Float32Array.from([1,2,3,4]),
  arrayBuffer,
  arrayBuffer,
  new ImageBitmap(2, 2, Uint8Array.from([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4])),
  'end',
], [arrayBuffer]);
// const buffer = smiggles.serialize(Float32Array.from([1,2,3,4]));
console.log(buffer);

const result = smiggles.deserialize(buffer);
console.log(result);
// process.stdout.write(JSON.stringify(result, null, 2));
// process.stdout.write('\n');
