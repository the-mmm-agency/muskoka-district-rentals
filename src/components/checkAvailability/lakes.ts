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
  '10d0e6c133279360',
  'bf0bee3a74d7f870',
  'afc29f03f16ed586',
  'af3052a85311ccfe',
  'affc17d6f20a4755',
  '1bd9a3b260f967ef',
  '1466847ff885aa34',
];

export const LakePairs = A.zip(LakeNames, LakeIds);
