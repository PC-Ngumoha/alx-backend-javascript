export default function createInt8TypedArray(len, pos, val) {
  const view = new DataView(new ArrayBuffer(len));
  if (pos >= view.byteLength) throw new Error('Position outside range');
  view.setInt8(pos, val);
  return view;
}
