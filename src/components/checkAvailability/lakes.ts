import * as A from 'fp-ts/lib/Array'

export const LakeNames = [
  'Georgian Bay',
  'Lake Joseph',
  'Lake Muskoka',
  'Lake of Bays',
  'Lake Rosseau',
  'Lake Simcoe',
  'Toronto',
  'Haliburton',
  'Other Lakes',
];

export const LakeIds = [
  'ad3cd275100718ff',
  '10d0e6c133279360',
  'bf0bee3a74d7f870',
  'afc29f03f16ed586',
  'af3052a85311ccfe',
  'affc17d6f20a4755',
  '1466847ff885aa34',
  '1bd9a3b260f967ef',
];

export const LakePairs = A.zip(LakeNames, LakeIds);
