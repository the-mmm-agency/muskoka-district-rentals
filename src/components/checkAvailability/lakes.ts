import * as A from 'fp-ts/lib/Array'

export const LakeNames = [
  'Lake Joseph',
  'Lake Rosseau',
  'Lake Muskoka',
  'Lake of Bays',
  'Lake Simcoe',
  'Haliburton',
  'Toronto',
  'Other Lakes',
];

export const LakeIds = [
  'f4ce2ae03011559b',
  'd2f8ff8a2cc1e9a1',
  '9c78ea096e6aa845',
  '95cf8e560435499f',
  'cf763491e6c296e7',
  '1bd9a3b260f967ef',
];

export const LakePairs = A.zip(LakeNames, LakeIds);
