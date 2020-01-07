export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 */
  Date: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export type DirectoryFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  highlight: Scalars['String'],
  shadow: Scalars['String'],
  opacity?: Maybe<Scalars['Int']>,
};

export type File = Node & {
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  url?: Maybe<Scalars['String']>,
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>,
  childImageSharp?: Maybe<ImageSharp>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childrenTestimonialsJson?: Maybe<Array<Maybe<TestimonialsJson>>>,
  childrenTeamJson?: Maybe<Array<Maybe<TeamJson>>>,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export type FileFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'url' |
  'publicURL' |
  'childImageSharp___fixed___base64' |
  'childImageSharp___fixed___tracedSVG' |
  'childImageSharp___fixed___aspectRatio' |
  'childImageSharp___fixed___width' |
  'childImageSharp___fixed___height' |
  'childImageSharp___fixed___src' |
  'childImageSharp___fixed___srcSet' |
  'childImageSharp___fixed___srcWebp' |
  'childImageSharp___fixed___srcSetWebp' |
  'childImageSharp___fixed___originalName' |
  'childImageSharp___resolutions___base64' |
  'childImageSharp___resolutions___tracedSVG' |
  'childImageSharp___resolutions___aspectRatio' |
  'childImageSharp___resolutions___width' |
  'childImageSharp___resolutions___height' |
  'childImageSharp___resolutions___src' |
  'childImageSharp___resolutions___srcSet' |
  'childImageSharp___resolutions___srcWebp' |
  'childImageSharp___resolutions___srcSetWebp' |
  'childImageSharp___resolutions___originalName' |
  'childImageSharp___fluid___base64' |
  'childImageSharp___fluid___tracedSVG' |
  'childImageSharp___fluid___aspectRatio' |
  'childImageSharp___fluid___src' |
  'childImageSharp___fluid___srcSet' |
  'childImageSharp___fluid___srcWebp' |
  'childImageSharp___fluid___srcSetWebp' |
  'childImageSharp___fluid___sizes' |
  'childImageSharp___fluid___originalImg' |
  'childImageSharp___fluid___originalName' |
  'childImageSharp___fluid___presentationWidth' |
  'childImageSharp___fluid___presentationHeight' |
  'childImageSharp___sizes___base64' |
  'childImageSharp___sizes___tracedSVG' |
  'childImageSharp___sizes___aspectRatio' |
  'childImageSharp___sizes___src' |
  'childImageSharp___sizes___srcSet' |
  'childImageSharp___sizes___srcWebp' |
  'childImageSharp___sizes___srcSetWebp' |
  'childImageSharp___sizes___sizes' |
  'childImageSharp___sizes___originalImg' |
  'childImageSharp___sizes___originalName' |
  'childImageSharp___sizes___presentationWidth' |
  'childImageSharp___sizes___presentationHeight' |
  'childImageSharp___original___width' |
  'childImageSharp___original___height' |
  'childImageSharp___original___src' |
  'childImageSharp___resize___src' |
  'childImageSharp___resize___tracedSVG' |
  'childImageSharp___resize___width' |
  'childImageSharp___resize___height' |
  'childImageSharp___resize___aspectRatio' |
  'childImageSharp___resize___originalName' |
  'childImageSharp___id' |
  'childImageSharp___parent___id' |
  'childImageSharp___parent___parent___id' |
  'childImageSharp___parent___parent___children' |
  'childImageSharp___parent___children' |
  'childImageSharp___parent___children___id' |
  'childImageSharp___parent___children___children' |
  'childImageSharp___parent___internal___content' |
  'childImageSharp___parent___internal___contentDigest' |
  'childImageSharp___parent___internal___description' |
  'childImageSharp___parent___internal___fieldOwners' |
  'childImageSharp___parent___internal___ignoreType' |
  'childImageSharp___parent___internal___mediaType' |
  'childImageSharp___parent___internal___owner' |
  'childImageSharp___parent___internal___type' |
  'childImageSharp___children' |
  'childImageSharp___children___id' |
  'childImageSharp___children___parent___id' |
  'childImageSharp___children___parent___children' |
  'childImageSharp___children___children' |
  'childImageSharp___children___children___id' |
  'childImageSharp___children___children___children' |
  'childImageSharp___children___internal___content' |
  'childImageSharp___children___internal___contentDigest' |
  'childImageSharp___children___internal___description' |
  'childImageSharp___children___internal___fieldOwners' |
  'childImageSharp___children___internal___ignoreType' |
  'childImageSharp___children___internal___mediaType' |
  'childImageSharp___children___internal___owner' |
  'childImageSharp___children___internal___type' |
  'childImageSharp___internal___content' |
  'childImageSharp___internal___contentDigest' |
  'childImageSharp___internal___description' |
  'childImageSharp___internal___fieldOwners' |
  'childImageSharp___internal___ignoreType' |
  'childImageSharp___internal___mediaType' |
  'childImageSharp___internal___owner' |
  'childImageSharp___internal___type' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'childrenTestimonialsJson' |
  'childrenTestimonialsJson___id' |
  'childrenTestimonialsJson___parent___id' |
  'childrenTestimonialsJson___parent___parent___id' |
  'childrenTestimonialsJson___parent___parent___children' |
  'childrenTestimonialsJson___parent___children' |
  'childrenTestimonialsJson___parent___children___id' |
  'childrenTestimonialsJson___parent___children___children' |
  'childrenTestimonialsJson___parent___internal___content' |
  'childrenTestimonialsJson___parent___internal___contentDigest' |
  'childrenTestimonialsJson___parent___internal___description' |
  'childrenTestimonialsJson___parent___internal___fieldOwners' |
  'childrenTestimonialsJson___parent___internal___ignoreType' |
  'childrenTestimonialsJson___parent___internal___mediaType' |
  'childrenTestimonialsJson___parent___internal___owner' |
  'childrenTestimonialsJson___parent___internal___type' |
  'childrenTestimonialsJson___children' |
  'childrenTestimonialsJson___children___id' |
  'childrenTestimonialsJson___children___parent___id' |
  'childrenTestimonialsJson___children___parent___children' |
  'childrenTestimonialsJson___children___children' |
  'childrenTestimonialsJson___children___children___id' |
  'childrenTestimonialsJson___children___children___children' |
  'childrenTestimonialsJson___children___internal___content' |
  'childrenTestimonialsJson___children___internal___contentDigest' |
  'childrenTestimonialsJson___children___internal___description' |
  'childrenTestimonialsJson___children___internal___fieldOwners' |
  'childrenTestimonialsJson___children___internal___ignoreType' |
  'childrenTestimonialsJson___children___internal___mediaType' |
  'childrenTestimonialsJson___children___internal___owner' |
  'childrenTestimonialsJson___children___internal___type' |
  'childrenTestimonialsJson___internal___content' |
  'childrenTestimonialsJson___internal___contentDigest' |
  'childrenTestimonialsJson___internal___description' |
  'childrenTestimonialsJson___internal___fieldOwners' |
  'childrenTestimonialsJson___internal___ignoreType' |
  'childrenTestimonialsJson___internal___mediaType' |
  'childrenTestimonialsJson___internal___owner' |
  'childrenTestimonialsJson___internal___type' |
  'childrenTestimonialsJson___body' |
  'childrenTestimonialsJson___rating' |
  'childrenTestimonialsJson___author' |
  'childrenTestimonialsJson___property___name' |
  'childrenTestimonialsJson___property___location' |
  'childrenTeamJson' |
  'childrenTeamJson___id' |
  'childrenTeamJson___parent___id' |
  'childrenTeamJson___parent___parent___id' |
  'childrenTeamJson___parent___parent___children' |
  'childrenTeamJson___parent___children' |
  'childrenTeamJson___parent___children___id' |
  'childrenTeamJson___parent___children___children' |
  'childrenTeamJson___parent___internal___content' |
  'childrenTeamJson___parent___internal___contentDigest' |
  'childrenTeamJson___parent___internal___description' |
  'childrenTeamJson___parent___internal___fieldOwners' |
  'childrenTeamJson___parent___internal___ignoreType' |
  'childrenTeamJson___parent___internal___mediaType' |
  'childrenTeamJson___parent___internal___owner' |
  'childrenTeamJson___parent___internal___type' |
  'childrenTeamJson___children' |
  'childrenTeamJson___children___id' |
  'childrenTeamJson___children___parent___id' |
  'childrenTeamJson___children___parent___children' |
  'childrenTeamJson___children___children' |
  'childrenTeamJson___children___children___id' |
  'childrenTeamJson___children___children___children' |
  'childrenTeamJson___children___internal___content' |
  'childrenTeamJson___children___internal___contentDigest' |
  'childrenTeamJson___children___internal___description' |
  'childrenTeamJson___children___internal___fieldOwners' |
  'childrenTeamJson___children___internal___ignoreType' |
  'childrenTeamJson___children___internal___mediaType' |
  'childrenTeamJson___children___internal___owner' |
  'childrenTeamJson___children___internal___type' |
  'childrenTeamJson___internal___content' |
  'childrenTeamJson___internal___contentDigest' |
  'childrenTeamJson___internal___description' |
  'childrenTeamJson___internal___fieldOwners' |
  'childrenTeamJson___internal___ignoreType' |
  'childrenTeamJson___internal___mediaType' |
  'childrenTeamJson___internal___owner' |
  'childrenTeamJson___internal___type' |
  'childrenTeamJson___name' |
  'childrenTeamJson___title' |
  'childrenTeamJson___picture___sourceInstanceName' |
  'childrenTeamJson___picture___absolutePath' |
  'childrenTeamJson___picture___relativePath' |
  'childrenTeamJson___picture___extension' |
  'childrenTeamJson___picture___size' |
  'childrenTeamJson___picture___prettySize' |
  'childrenTeamJson___picture___modifiedTime' |
  'childrenTeamJson___picture___accessTime' |
  'childrenTeamJson___picture___changeTime' |
  'childrenTeamJson___picture___birthTime' |
  'childrenTeamJson___picture___root' |
  'childrenTeamJson___picture___dir' |
  'childrenTeamJson___picture___base' |
  'childrenTeamJson___picture___ext' |
  'childrenTeamJson___picture___name' |
  'childrenTeamJson___picture___relativeDirectory' |
  'childrenTeamJson___picture___dev' |
  'childrenTeamJson___picture___mode' |
  'childrenTeamJson___picture___nlink' |
  'childrenTeamJson___picture___uid' |
  'childrenTeamJson___picture___gid' |
  'childrenTeamJson___picture___rdev' |
  'childrenTeamJson___picture___ino' |
  'childrenTeamJson___picture___atimeMs' |
  'childrenTeamJson___picture___mtimeMs' |
  'childrenTeamJson___picture___ctimeMs' |
  'childrenTeamJson___picture___atime' |
  'childrenTeamJson___picture___mtime' |
  'childrenTeamJson___picture___ctime' |
  'childrenTeamJson___picture___birthtime' |
  'childrenTeamJson___picture___birthtimeMs' |
  'childrenTeamJson___picture___blksize' |
  'childrenTeamJson___picture___blocks' |
  'childrenTeamJson___picture___url' |
  'childrenTeamJson___picture___publicURL' |
  'childrenTeamJson___picture___childImageSharp___id' |
  'childrenTeamJson___picture___childImageSharp___children' |
  'childrenTeamJson___picture___id' |
  'childrenTeamJson___picture___parent___id' |
  'childrenTeamJson___picture___parent___children' |
  'childrenTeamJson___picture___children' |
  'childrenTeamJson___picture___children___id' |
  'childrenTeamJson___picture___children___children' |
  'childrenTeamJson___picture___internal___content' |
  'childrenTeamJson___picture___internal___contentDigest' |
  'childrenTeamJson___picture___internal___description' |
  'childrenTeamJson___picture___internal___fieldOwners' |
  'childrenTeamJson___picture___internal___ignoreType' |
  'childrenTeamJson___picture___internal___mediaType' |
  'childrenTeamJson___picture___internal___owner' |
  'childrenTeamJson___picture___internal___type' |
  'childrenTeamJson___picture___childrenTestimonialsJson' |
  'childrenTeamJson___picture___childrenTestimonialsJson___id' |
  'childrenTeamJson___picture___childrenTestimonialsJson___children' |
  'childrenTeamJson___picture___childrenTestimonialsJson___body' |
  'childrenTeamJson___picture___childrenTestimonialsJson___rating' |
  'childrenTeamJson___picture___childrenTestimonialsJson___author' |
  'childrenTeamJson___picture___childrenTeamJson' |
  'childrenTeamJson___picture___childrenTeamJson___id' |
  'childrenTeamJson___picture___childrenTeamJson___children' |
  'childrenTeamJson___picture___childrenTeamJson___name' |
  'childrenTeamJson___picture___childrenTeamJson___title' |
  'childrenTeamJson___picture___childrenTeamJson___bio' |
  'childrenTeamJson___bio';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childrenTestimonialsJson?: Maybe<TestimonialsJsonFilterListInput>,
  childrenTeamJson?: Maybe<TeamJsonFilterListInput>,
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type ImageCropFocus = 
  'CENTER' |
  'NORTH' |
  'NORTHEAST' |
  'EAST' |
  'SOUTHEAST' |
  'SOUTH' |
  'SOUTHWEST' |
  'WEST' |
  'NORTHWEST' |
  'ENTROPY' |
  'ATTENTION';

export type ImageFit = 
  'COVER' |
  'CONTAIN' |
  'FILL';

export type ImageFormat = 
  'NO_CHANGE' |
  'JPG' |
  'PNG' |
  'WEBP';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>,
  resolutions?: Maybe<ImageSharpResolutions>,
  fluid?: Maybe<ImageSharpFluid>,
  sizes?: Maybe<ImageSharpSizes>,
  original?: Maybe<ImageSharpOriginal>,
  resize?: Maybe<ImageSharpResize>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG?: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>,
  node: ImageSharp,
  previous?: Maybe<ImageSharp>,
};

export type ImageSharpFieldsEnum = 
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'fixed___originalName' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___srcWebp' |
  'resolutions___srcSetWebp' |
  'resolutions___originalName' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'fluid___originalImg' |
  'fluid___originalName' |
  'fluid___presentationWidth' |
  'fluid___presentationHeight' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___srcWebp' |
  'sizes___srcSetWebp' |
  'sizes___sizes' |
  'sizes___originalImg' |
  'sizes___originalName' |
  'sizes___presentationWidth' |
  'sizes___presentationHeight' |
  'original___width' |
  'original___height' |
  'original___src' |
  'resize___src' |
  'resize___tracedSVG' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio' |
  'resize___originalName' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Internal = {
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


/** Node Interface */
export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>,
  turdSize?: Maybe<Scalars['Float']>,
  alphaMax?: Maybe<Scalars['Float']>,
  optCurve?: Maybe<Scalars['Boolean']>,
  optTolerance?: Maybe<Scalars['Float']>,
  threshold?: Maybe<Scalars['Int']>,
  blackOnWhite?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
};

export type PotraceTurnPolicy = 
  'TURNPOLICY_BLACK' |
  'TURNPOLICY_WHITE' |
  'TURNPOLICY_LEFT' |
  'TURNPOLICY_RIGHT' |
  'TURNPOLICY_MINORITY' |
  'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>,
  allFile: FileConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  imageSharp?: Maybe<ImageSharp>,
  allImageSharp: ImageSharpConnection,
  wordpressAcfOptions?: Maybe<Wordpress__Acf_Options>,
  allWordpressAcfOptions: Wordpress__Acf_OptionsConnection,
  wordpressWpLake?: Maybe<Wordpress__Wp_Lake>,
  allWordpressWpLake: Wordpress__Wp_LakeConnection,
  wordpressWpPropertyFeatures?: Maybe<Wordpress__Wp_Property_Features>,
  allWordpressWpPropertyFeatures: Wordpress__Wp_Property_FeaturesConnection,
  wordpressWpPropertyCategory?: Maybe<Wordpress__Wp_Property_Category>,
  allWordpressWpPropertyCategory: Wordpress__Wp_Property_CategoryConnection,
  wordpressWpPostTag?: Maybe<Wordpress__Wp_Post_Tag>,
  allWordpressWpPostTag: Wordpress__Wp_Post_TagConnection,
  wordpressWpCategory?: Maybe<Wordpress__Wp_Category>,
  allWordpressWpCategory: Wordpress__Wp_CategoryConnection,
  wordpressWpBlogPost?: Maybe<Wordpress__Wp_Blog_Post>,
  allWordpressWpBlogPost: Wordpress__Wp_Blog_PostConnection,
  wordpressWpPageContent?: Maybe<Wordpress__Wp_Page_Content>,
  allWordpressWpPageContent: Wordpress__Wp_Page_ContentConnection,
  wordpressWpProperty?: Maybe<Wordpress__Wp_Property>,
  allWordpressWpProperty: Wordpress__Wp_PropertyConnection,
  wordpressWpMedia?: Maybe<Wordpress__Wp_Media>,
  allWordpressWpMedia: Wordpress__Wp_MediaConnection,
  wordpressAcfUsers?: Maybe<Wordpress__Acf_Users>,
  allWordpressAcfUsers: Wordpress__Acf_UsersConnection,
  wordpressAcfLake?: Maybe<Wordpress__Acf_Lake>,
  allWordpressAcfLake: Wordpress__Acf_LakeConnection,
  wordpressAcfProductType?: Maybe<Wordpress__Acf_Product_Type>,
  allWordpressAcfProductType: Wordpress__Acf_Product_TypeConnection,
  wordpressAcfActionGroup?: Maybe<Wordpress__Acf_Action_Group>,
  allWordpressAcfActionGroup: Wordpress__Acf_Action_GroupConnection,
  wordpressAcfPropertyFeatures?: Maybe<Wordpress__Acf_Property_Features>,
  allWordpressAcfPropertyFeatures: Wordpress__Acf_Property_FeaturesConnection,
  wordpressAcfPropertyArea?: Maybe<Wordpress__Acf_Property_Area>,
  allWordpressAcfPropertyArea: Wordpress__Acf_Property_AreaConnection,
  wordpressAcfPropertyCity?: Maybe<Wordpress__Acf_Property_City>,
  allWordpressAcfPropertyCity: Wordpress__Acf_Property_CityConnection,
  wordpressAcfPropertyCategory?: Maybe<Wordpress__Acf_Property_Category>,
  allWordpressAcfPropertyCategory: Wordpress__Acf_Property_CategoryConnection,
  wordpressAcfCategory?: Maybe<Wordpress__Acf_Category>,
  allWordpressAcfCategory: Wordpress__Acf_CategoryConnection,
  wordpressAcfBlogPost?: Maybe<Wordpress__Acf_Blog_Post>,
  allWordpressAcfBlogPost: Wordpress__Acf_Blog_PostConnection,
  wordpressAcfPageContent?: Maybe<Wordpress__Acf_Page_Content>,
  allWordpressAcfPageContent: Wordpress__Acf_Page_ContentConnection,
  wordpressAcfWpcf7ContactForm?: Maybe<Wordpress__Acf_Wpcf7_Contact_Form>,
  allWordpressAcfWpcf7ContactForm: Wordpress__Acf_Wpcf7_Contact_FormConnection,
  wordpressAcfShopCoupon?: Maybe<Wordpress__Acf_Shop_Coupon>,
  allWordpressAcfShopCoupon: Wordpress__Acf_Shop_CouponConnection,
  wordpressAcfProductVariation?: Maybe<Wordpress__Acf_Product_Variation>,
  allWordpressAcfProductVariation: Wordpress__Acf_Product_VariationConnection,
  wordpressAcfProduct?: Maybe<Wordpress__Acf_Product>,
  allWordpressAcfProduct: Wordpress__Acf_ProductConnection,
  wordpressAcfAcfField?: Maybe<Wordpress__Acf_Acf_Field>,
  allWordpressAcfAcfField: Wordpress__Acf_Acf_FieldConnection,
  wordpressAcfAcfFieldGroup?: Maybe<Wordpress__Acf_Acf_Field_Group>,
  allWordpressAcfAcfFieldGroup: Wordpress__Acf_Acf_Field_GroupConnection,
  wordpressAcfScheduledAction?: Maybe<Wordpress__Acf_Scheduled_Action>,
  allWordpressAcfScheduledAction: Wordpress__Acf_Scheduled_ActionConnection,
  wordpressAcfWpestateMessage?: Maybe<Wordpress__Acf_Wpestate_Message>,
  allWordpressAcfWpestateMessage: Wordpress__Acf_Wpestate_MessageConnection,
  wordpressAcfMembershipPackage?: Maybe<Wordpress__Acf_Membership_Package>,
  allWordpressAcfMembershipPackage: Wordpress__Acf_Membership_PackageConnection,
  wordpressAcfWpestateInvoice?: Maybe<Wordpress__Acf_Wpestate_Invoice>,
  allWordpressAcfWpestateInvoice: Wordpress__Acf_Wpestate_InvoiceConnection,
  wordpressAcfWpestateBooking?: Maybe<Wordpress__Acf_Wpestate_Booking>,
  allWordpressAcfWpestateBooking: Wordpress__Acf_Wpestate_BookingConnection,
  wordpressAcfEstateAgent?: Maybe<Wordpress__Acf_Estate_Agent>,
  allWordpressAcfEstateAgent: Wordpress__Acf_Estate_AgentConnection,
  wordpressAcfProperty?: Maybe<Wordpress__Acf_Property>,
  allWordpressAcfProperty: Wordpress__Acf_PropertyConnection,
  wordpressAcfMedia?: Maybe<Wordpress__Acf_Media>,
  allWordpressAcfMedia: Wordpress__Acf_MediaConnection,
  wordpressAcfPosts?: Maybe<Wordpress__Acf_Posts>,
  allWordpressAcfPosts: Wordpress__Acf_PostsConnection,
  wordpressSiteMetadata?: Maybe<Wordpress__Site_Metadata>,
  allWordpressSiteMetadata: Wordpress__Site_MetadataConnection,
  teamJson?: Maybe<TeamJson>,
  allTeamJson: TeamJsonConnection,
  testimonialsJson?: Maybe<TestimonialsJson>,
  allTestimonialsJson: TestimonialsJsonConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childrenTestimonialsJson?: Maybe<TestimonialsJsonFilterListInput>,
  childrenTeamJson?: Maybe<TeamJsonFilterListInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>,
  sort?: Maybe<ImageSharpSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfOptionsArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<StringQueryOperatorInput>
};


export type QueryAllWordpressAcfOptionsArgs = {
  filter?: Maybe<Wordpress__Acf_OptionsFilterInput>,
  sort?: Maybe<Wordpress__Acf_OptionsSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressWpLakeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  count?: Maybe<IntQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  taxonomy?: Maybe<StringQueryOperatorInput>,
  _links?: Maybe<Wordpress__Wp_Lake_LinksFilterInput>,
  path?: Maybe<StringQueryOperatorInput>
};


export type QueryAllWordpressWpLakeArgs = {
  filter?: Maybe<Wordpress__Wp_LakeFilterInput>,
  sort?: Maybe<Wordpress__Wp_LakeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressWpPropertyFeaturesArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  count?: Maybe<IntQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  taxonomy?: Maybe<StringQueryOperatorInput>,
  wordpress_parent?: Maybe<IntQueryOperatorInput>,
  _links?: Maybe<Wordpress__Wp_Property_Features_LinksFilterInput>,
  parent_element?: Maybe<Wordpress__Wp_Property_FeaturesFilterInput>,
  path?: Maybe<StringQueryOperatorInput>
};


export type QueryAllWordpressWpPropertyFeaturesArgs = {
  filter?: Maybe<Wordpress__Wp_Property_FeaturesFilterInput>,
  sort?: Maybe<Wordpress__Wp_Property_FeaturesSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressWpPropertyCategoryArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  count?: Maybe<IntQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  taxonomy?: Maybe<StringQueryOperatorInput>,
  wordpress_parent?: Maybe<IntQueryOperatorInput>,
  _links?: Maybe<Wordpress__Wp_Property_Category_LinksFilterInput>,
  path?: Maybe<StringQueryOperatorInput>
};


export type QueryAllWordpressWpPropertyCategoryArgs = {
  filter?: Maybe<Wordpress__Wp_Property_CategoryFilterInput>,
  sort?: Maybe<Wordpress__Wp_Property_CategorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressWpPostTagArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  count?: Maybe<IntQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  taxonomy?: Maybe<StringQueryOperatorInput>,
  _links?: Maybe<Wordpress__Wp_Post_Tag_LinksFilterInput>,
  path?: Maybe<StringQueryOperatorInput>
};


export type QueryAllWordpressWpPostTagArgs = {
  filter?: Maybe<Wordpress__Wp_Post_TagFilterInput>,
  sort?: Maybe<Wordpress__Wp_Post_TagSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressWpCategoryArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  count?: Maybe<IntQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  taxonomy?: Maybe<StringQueryOperatorInput>,
  wordpress_parent?: Maybe<IntQueryOperatorInput>,
  _links?: Maybe<Wordpress__Wp_Category_LinksFilterInput>,
  path?: Maybe<StringQueryOperatorInput>
};


export type QueryAllWordpressWpCategoryArgs = {
  filter?: Maybe<Wordpress__Wp_CategoryFilterInput>,
  sort?: Maybe<Wordpress__Wp_CategorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressWpBlogPostArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  guid?: Maybe<StringQueryOperatorInput>,
  modified?: Maybe<DateQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  status?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  content?: Maybe<StringQueryOperatorInput>,
  template?: Maybe<StringQueryOperatorInput>,
  category?: Maybe<Wordpress__Wp_CategoryFilterInput>,
  _links?: Maybe<Wordpress__Wp_Blog_Post_LinksFilterInput>,
  featured_media?: Maybe<Wordpress__Wp_MediaFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  tags?: Maybe<Wordpress__Wp_Post_TagFilterListInput>
};


export type QueryAllWordpressWpBlogPostArgs = {
  filter?: Maybe<Wordpress__Wp_Blog_PostFilterInput>,
  sort?: Maybe<Wordpress__Wp_Blog_PostSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressWpPageContentArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  guid?: Maybe<StringQueryOperatorInput>,
  modified?: Maybe<DateQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  status?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  content?: Maybe<StringQueryOperatorInput>,
  template?: Maybe<StringQueryOperatorInput>,
  acf?: Maybe<Wordpress__Wp_Page_ContentAcfFilterInput>,
  _links?: Maybe<Wordpress__Wp_Page_Content_LinksFilterInput>,
  featured_media?: Maybe<Wordpress__Wp_MediaFilterInput>,
  path?: Maybe<StringQueryOperatorInput>
};


export type QueryAllWordpressWpPageContentArgs = {
  filter?: Maybe<Wordpress__Wp_Page_ContentFilterInput>,
  sort?: Maybe<Wordpress__Wp_Page_ContentSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressWpPropertyArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  guid?: Maybe<StringQueryOperatorInput>,
  modified?: Maybe<DateQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  status?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  content?: Maybe<StringQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  comment_status?: Maybe<StringQueryOperatorInput>,
  ping_status?: Maybe<StringQueryOperatorInput>,
  template?: Maybe<StringQueryOperatorInput>,
  property_city?: Maybe<IntQueryOperatorInput>,
  property_area?: Maybe<IntQueryOperatorInput>,
  property_features?: Maybe<IntQueryOperatorInput>,
  lake?: Maybe<IntQueryOperatorInput>,
  suitability?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<StringQueryOperatorInput>,
  bathrooms?: Maybe<StringQueryOperatorInput>,
  bedrooms?: Maybe<StringQueryOperatorInput>,
  latitude?: Maybe<StringQueryOperatorInput>,
  longitude?: Maybe<StringQueryOperatorInput>,
  houseRules?: Maybe<StringQueryOperatorInput>,
  guests?: Maybe<StringQueryOperatorInput>,
  price?: Maybe<StringQueryOperatorInput>,
  pricePerWeek?: Maybe<StringQueryOperatorInput>,
  pricePerMonth?: Maybe<StringQueryOperatorInput>,
  rooms?: Maybe<StringQueryOperatorInput>,
  address?: Maybe<StringQueryOperatorInput>,
  order?: Maybe<StringQueryOperatorInput>,
  featured?: Maybe<StringQueryOperatorInput>,
  acf?: Maybe<Wordpress__Wp_PropertyAcfFilterInput>,
  bookedDates?: Maybe<IntQueryOperatorInput>,
  property_images?: Maybe<IntQueryOperatorInput>,
  _links?: Maybe<Wordpress__Wp_Property_LinksFilterInput>,
  featured_media?: Maybe<Wordpress__Wp_MediaFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  category?: Maybe<Wordpress__Wp_Property_CategoryFilterInput>
};


export type QueryAllWordpressWpPropertyArgs = {
  filter?: Maybe<Wordpress__Wp_PropertyFilterInput>,
  sort?: Maybe<Wordpress__Wp_PropertySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressWpMediaArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  guid?: Maybe<Wordpress__Wp_MediaFilterInput>,
  modified?: Maybe<DateQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  status?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<IntQueryOperatorInput>,
  comment_status?: Maybe<StringQueryOperatorInput>,
  ping_status?: Maybe<StringQueryOperatorInput>,
  template?: Maybe<StringQueryOperatorInput>,
  meta?: Maybe<Wordpress__Wp_MediaMetaFilterInput>,
  description?: Maybe<StringQueryOperatorInput>,
  caption?: Maybe<StringQueryOperatorInput>,
  alt_text?: Maybe<StringQueryOperatorInput>,
  media_type?: Maybe<StringQueryOperatorInput>,
  mime_type?: Maybe<StringQueryOperatorInput>,
  media_details?: Maybe<Wordpress__Wp_MediaMedia_DetailsFilterInput>,
  post?: Maybe<IntQueryOperatorInput>,
  source_url?: Maybe<StringQueryOperatorInput>,
  _links?: Maybe<Wordpress__Wp_Media_LinksFilterInput>,
  localFile?: Maybe<FileFilterInput>,
  path?: Maybe<StringQueryOperatorInput>
};


export type QueryAllWordpressWpMediaArgs = {
  filter?: Maybe<Wordpress__Wp_MediaFilterInput>,
  sort?: Maybe<Wordpress__Wp_MediaSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfUsersArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfUsersArgs = {
  filter?: Maybe<Wordpress__Acf_UsersFilterInput>,
  sort?: Maybe<Wordpress__Acf_UsersSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfLakeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfLakeArgs = {
  filter?: Maybe<Wordpress__Acf_LakeFilterInput>,
  sort?: Maybe<Wordpress__Acf_LakeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfProductTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfProductTypeArgs = {
  filter?: Maybe<Wordpress__Acf_Product_TypeFilterInput>,
  sort?: Maybe<Wordpress__Acf_Product_TypeSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfActionGroupArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfActionGroupArgs = {
  filter?: Maybe<Wordpress__Acf_Action_GroupFilterInput>,
  sort?: Maybe<Wordpress__Acf_Action_GroupSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfPropertyFeaturesArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfPropertyFeaturesArgs = {
  filter?: Maybe<Wordpress__Acf_Property_FeaturesFilterInput>,
  sort?: Maybe<Wordpress__Acf_Property_FeaturesSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfPropertyAreaArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfPropertyAreaArgs = {
  filter?: Maybe<Wordpress__Acf_Property_AreaFilterInput>,
  sort?: Maybe<Wordpress__Acf_Property_AreaSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfPropertyCityArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfPropertyCityArgs = {
  filter?: Maybe<Wordpress__Acf_Property_CityFilterInput>,
  sort?: Maybe<Wordpress__Acf_Property_CitySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfPropertyCategoryArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfPropertyCategoryArgs = {
  filter?: Maybe<Wordpress__Acf_Property_CategoryFilterInput>,
  sort?: Maybe<Wordpress__Acf_Property_CategorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfCategoryArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfCategoryArgs = {
  filter?: Maybe<Wordpress__Acf_CategoryFilterInput>,
  sort?: Maybe<Wordpress__Acf_CategorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfBlogPostArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfBlogPostArgs = {
  filter?: Maybe<Wordpress__Acf_Blog_PostFilterInput>,
  sort?: Maybe<Wordpress__Acf_Blog_PostSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfPageContentArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  acf?: Maybe<Wordpress__Acf_Page_ContentAcfFilterInput>
};


export type QueryAllWordpressAcfPageContentArgs = {
  filter?: Maybe<Wordpress__Acf_Page_ContentFilterInput>,
  sort?: Maybe<Wordpress__Acf_Page_ContentSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfWpcf7ContactFormArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfWpcf7ContactFormArgs = {
  filter?: Maybe<Wordpress__Acf_Wpcf7_Contact_FormFilterInput>,
  sort?: Maybe<Wordpress__Acf_Wpcf7_Contact_FormSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfShopCouponArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfShopCouponArgs = {
  filter?: Maybe<Wordpress__Acf_Shop_CouponFilterInput>,
  sort?: Maybe<Wordpress__Acf_Shop_CouponSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfProductVariationArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfProductVariationArgs = {
  filter?: Maybe<Wordpress__Acf_Product_VariationFilterInput>,
  sort?: Maybe<Wordpress__Acf_Product_VariationSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfProductArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfProductArgs = {
  filter?: Maybe<Wordpress__Acf_ProductFilterInput>,
  sort?: Maybe<Wordpress__Acf_ProductSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfAcfFieldArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfAcfFieldArgs = {
  filter?: Maybe<Wordpress__Acf_Acf_FieldFilterInput>,
  sort?: Maybe<Wordpress__Acf_Acf_FieldSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfAcfFieldGroupArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfAcfFieldGroupArgs = {
  filter?: Maybe<Wordpress__Acf_Acf_Field_GroupFilterInput>,
  sort?: Maybe<Wordpress__Acf_Acf_Field_GroupSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfScheduledActionArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfScheduledActionArgs = {
  filter?: Maybe<Wordpress__Acf_Scheduled_ActionFilterInput>,
  sort?: Maybe<Wordpress__Acf_Scheduled_ActionSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfWpestateMessageArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfWpestateMessageArgs = {
  filter?: Maybe<Wordpress__Acf_Wpestate_MessageFilterInput>,
  sort?: Maybe<Wordpress__Acf_Wpestate_MessageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfMembershipPackageArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfMembershipPackageArgs = {
  filter?: Maybe<Wordpress__Acf_Membership_PackageFilterInput>,
  sort?: Maybe<Wordpress__Acf_Membership_PackageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfWpestateInvoiceArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfWpestateInvoiceArgs = {
  filter?: Maybe<Wordpress__Acf_Wpestate_InvoiceFilterInput>,
  sort?: Maybe<Wordpress__Acf_Wpestate_InvoiceSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfWpestateBookingArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfWpestateBookingArgs = {
  filter?: Maybe<Wordpress__Acf_Wpestate_BookingFilterInput>,
  sort?: Maybe<Wordpress__Acf_Wpestate_BookingSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfEstateAgentArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfEstateAgentArgs = {
  filter?: Maybe<Wordpress__Acf_Estate_AgentFilterInput>,
  sort?: Maybe<Wordpress__Acf_Estate_AgentSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfPropertyArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  acf?: Maybe<Wordpress__Acf_PropertyAcfFilterInput>
};


export type QueryAllWordpressAcfPropertyArgs = {
  filter?: Maybe<Wordpress__Acf_PropertyFilterInput>,
  sort?: Maybe<Wordpress__Acf_PropertySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfMediaArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfMediaArgs = {
  filter?: Maybe<Wordpress__Acf_MediaFilterInput>,
  sort?: Maybe<Wordpress__Acf_MediaSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressAcfPostsArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>
};


export type QueryAllWordpressAcfPostsArgs = {
  filter?: Maybe<Wordpress__Acf_PostsFilterInput>,
  sort?: Maybe<Wordpress__Acf_PostsSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryWordpressSiteMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  home?: Maybe<StringQueryOperatorInput>
};


export type QueryAllWordpressSiteMetadataArgs = {
  filter?: Maybe<Wordpress__Site_MetadataFilterInput>,
  sort?: Maybe<Wordpress__Site_MetadataSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryTeamJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  picture?: Maybe<FileFilterInput>,
  bio?: Maybe<StringQueryOperatorInput>
};


export type QueryAllTeamJsonArgs = {
  filter?: Maybe<TeamJsonFilterInput>,
  sort?: Maybe<TeamJsonSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryTestimonialsJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  rating?: Maybe<IntQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  property?: Maybe<TestimonialsJsonPropertyFilterInput>
};


export type QueryAllTestimonialsJsonArgs = {
  filter?: Maybe<TestimonialsJsonFilterInput>,
  sort?: Maybe<TestimonialsJsonSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type Site = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  siteMetadata?: Maybe<SiteSiteMetadata>,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export type SiteFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'siteMetadata___productionUrl' |
  'siteMetadata___title' |
  'siteMetadata___description' |
  'siteMetadata___author' |
  'siteMetadata___headerLinks' |
  'siteMetadata___footerLinks' |
  'siteMetadata___manifest___name' |
  'siteMetadata___manifest___short_name' |
  'siteMetadata___manifest___start_url' |
  'siteMetadata___manifest___background_color' |
  'siteMetadata___manifest___theme_color' |
  'siteMetadata___manifest___display' |
  'siteMetadata___manifest___icon' |
  'port' |
  'host' |
  'polyfill' |
  'pathPrefix' |
  'buildTime';

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  path?: Maybe<Scalars['String']>,
  internalComponentName?: Maybe<Scalars['String']>,
  component?: Maybe<Scalars['String']>,
  componentChunkName?: Maybe<Scalars['String']>,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  context?: Maybe<SitePageContext>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
  id?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export type SitePageFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'path' |
  'internalComponentName' |
  'component' |
  'componentChunkName' |
  'isCreatedByStatefulCreatePages' |
  'context___id' |
  'context___slug' |
  'pluginCreator___id' |
  'pluginCreator___parent___id' |
  'pluginCreator___parent___parent___id' |
  'pluginCreator___parent___parent___children' |
  'pluginCreator___parent___children' |
  'pluginCreator___parent___children___id' |
  'pluginCreator___parent___children___children' |
  'pluginCreator___parent___internal___content' |
  'pluginCreator___parent___internal___contentDigest' |
  'pluginCreator___parent___internal___description' |
  'pluginCreator___parent___internal___fieldOwners' |
  'pluginCreator___parent___internal___ignoreType' |
  'pluginCreator___parent___internal___mediaType' |
  'pluginCreator___parent___internal___owner' |
  'pluginCreator___parent___internal___type' |
  'pluginCreator___children' |
  'pluginCreator___children___id' |
  'pluginCreator___children___parent___id' |
  'pluginCreator___children___parent___children' |
  'pluginCreator___children___children' |
  'pluginCreator___children___children___id' |
  'pluginCreator___children___children___children' |
  'pluginCreator___children___internal___content' |
  'pluginCreator___children___internal___contentDigest' |
  'pluginCreator___children___internal___description' |
  'pluginCreator___children___internal___fieldOwners' |
  'pluginCreator___children___internal___ignoreType' |
  'pluginCreator___children___internal___mediaType' |
  'pluginCreator___children___internal___owner' |
  'pluginCreator___children___internal___type' |
  'pluginCreator___internal___content' |
  'pluginCreator___internal___contentDigest' |
  'pluginCreator___internal___description' |
  'pluginCreator___internal___fieldOwners' |
  'pluginCreator___internal___ignoreType' |
  'pluginCreator___internal___mediaType' |
  'pluginCreator___internal___owner' |
  'pluginCreator___internal___type' |
  'pluginCreator___resolve' |
  'pluginCreator___name' |
  'pluginCreator___version' |
  'pluginCreator___pluginOptions___components' |
  'pluginCreator___pluginOptions___elements' |
  'pluginCreator___pluginOptions___images' |
  'pluginCreator___pluginOptions___hooks' |
  'pluginCreator___pluginOptions___pages' |
  'pluginCreator___pluginOptions___styles' |
  'pluginCreator___pluginOptions___templates' |
  'pluginCreator___pluginOptions___theme' |
  'pluginCreator___pluginOptions___util' |
  'pluginCreator___pluginOptions___instances' |
  'pluginCreator___pluginOptions___color' |
  'pluginCreator___pluginOptions___showSpinner' |
  'pluginCreator___pluginOptions___name' |
  'pluginCreator___pluginOptions___short_name' |
  'pluginCreator___pluginOptions___start_url' |
  'pluginCreator___pluginOptions___background_color' |
  'pluginCreator___pluginOptions___theme_color' |
  'pluginCreator___pluginOptions___display' |
  'pluginCreator___pluginOptions___icon' |
  'pluginCreator___pluginOptions___defaultQuality' |
  'pluginCreator___pluginOptions___path' |
  'pluginCreator___pluginOptions___useACF' |
  'pluginCreator___pluginOptions___baseUrl' |
  'pluginCreator___pluginOptions___concurrentRequests' |
  'pluginCreator___pluginOptions___protocol' |
  'pluginCreator___pluginOptions___auth___jwt_user' |
  'pluginCreator___pluginOptions___auth___jwt_pass' |
  'pluginCreator___pluginOptions___auth___jwt_base_path' |
  'pluginCreator___pluginOptions___includedRoutes' |
  'pluginCreator___pluginOptions___allPageHeaders' |
  'pluginCreator___pluginOptions___fileName' |
  'pluginCreator___pluginOptions___codegen' |
  'pluginCreator___pluginOptions___codegenDelay' |
  'pluginCreator___pluginOptions___functionsSrc' |
  'pluginCreator___pluginOptions___functionsOutput' |
  'pluginCreator___pluginOptions___pathCheck' |
  'pluginCreator___nodeAPIs' |
  'pluginCreator___browserAPIs' |
  'pluginCreator___ssrAPIs' |
  'pluginCreator___pluginFilepath' |
  'pluginCreator___packageJson___name' |
  'pluginCreator___packageJson___description' |
  'pluginCreator___packageJson___version' |
  'pluginCreator___packageJson___main' |
  'pluginCreator___packageJson___author' |
  'pluginCreator___packageJson___license' |
  'pluginCreator___packageJson___dependencies' |
  'pluginCreator___packageJson___dependencies___name' |
  'pluginCreator___packageJson___dependencies___version' |
  'pluginCreator___packageJson___devDependencies' |
  'pluginCreator___packageJson___devDependencies___name' |
  'pluginCreator___packageJson___devDependencies___version' |
  'pluginCreator___packageJson___peerDependencies' |
  'pluginCreator___packageJson___peerDependencies___name' |
  'pluginCreator___packageJson___peerDependencies___version' |
  'pluginCreator___packageJson___keywords' |
  'pluginCreatorId' |
  'componentPath';

export type SitePageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export type SitePluginFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'resolve' |
  'name' |
  'version' |
  'pluginOptions___components' |
  'pluginOptions___elements' |
  'pluginOptions___images' |
  'pluginOptions___hooks' |
  'pluginOptions___pages' |
  'pluginOptions___styles' |
  'pluginOptions___templates' |
  'pluginOptions___theme' |
  'pluginOptions___util' |
  'pluginOptions___instances' |
  'pluginOptions___color' |
  'pluginOptions___showSpinner' |
  'pluginOptions___name' |
  'pluginOptions___short_name' |
  'pluginOptions___start_url' |
  'pluginOptions___background_color' |
  'pluginOptions___theme_color' |
  'pluginOptions___display' |
  'pluginOptions___icon' |
  'pluginOptions___defaultQuality' |
  'pluginOptions___path' |
  'pluginOptions___useACF' |
  'pluginOptions___baseUrl' |
  'pluginOptions___concurrentRequests' |
  'pluginOptions___protocol' |
  'pluginOptions___auth___jwt_user' |
  'pluginOptions___auth___jwt_pass' |
  'pluginOptions___auth___jwt_base_path' |
  'pluginOptions___includedRoutes' |
  'pluginOptions___allPageHeaders' |
  'pluginOptions___fileName' |
  'pluginOptions___codegen' |
  'pluginOptions___codegenDelay' |
  'pluginOptions___functionsSrc' |
  'pluginOptions___functionsOutput' |
  'pluginOptions___pathCheck' |
  'nodeAPIs' |
  'browserAPIs' |
  'ssrAPIs' |
  'pluginFilepath' |
  'packageJson___name' |
  'packageJson___description' |
  'packageJson___version' |
  'packageJson___main' |
  'packageJson___author' |
  'packageJson___license' |
  'packageJson___dependencies' |
  'packageJson___dependencies___name' |
  'packageJson___dependencies___version' |
  'packageJson___devDependencies' |
  'packageJson___devDependencies___name' |
  'packageJson___devDependencies___version' |
  'packageJson___peerDependencies' |
  'packageJson___peerDependencies___name' |
  'packageJson___peerDependencies___version' |
  'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
  components?: Maybe<Scalars['String']>,
  elements?: Maybe<Scalars['String']>,
  images?: Maybe<Scalars['String']>,
  hooks?: Maybe<Scalars['String']>,
  pages?: Maybe<Scalars['String']>,
  styles?: Maybe<Scalars['String']>,
  templates?: Maybe<Scalars['String']>,
  theme?: Maybe<Scalars['String']>,
  util?: Maybe<Scalars['String']>,
  instances?: Maybe<Array<Maybe<Scalars['String']>>>,
  color?: Maybe<Scalars['String']>,
  showSpinner?: Maybe<Scalars['Boolean']>,
  name?: Maybe<Scalars['String']>,
  short_name?: Maybe<Scalars['String']>,
  start_url?: Maybe<Scalars['String']>,
  background_color?: Maybe<Scalars['String']>,
  theme_color?: Maybe<Scalars['String']>,
  display?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  defaultQuality?: Maybe<Scalars['Int']>,
  path?: Maybe<Scalars['String']>,
  useACF?: Maybe<Scalars['Boolean']>,
  baseUrl?: Maybe<Scalars['String']>,
  concurrentRequests?: Maybe<Scalars['Int']>,
  protocol?: Maybe<Scalars['String']>,
  auth?: Maybe<SitePluginPluginOptionsAuth>,
  includedRoutes?: Maybe<Array<Maybe<Scalars['String']>>>,
  allPageHeaders?: Maybe<Array<Maybe<Scalars['String']>>>,
  fileName?: Maybe<Scalars['String']>,
  codegen?: Maybe<Scalars['Boolean']>,
  codegenDelay?: Maybe<Scalars['Int']>,
  functionsSrc?: Maybe<Scalars['String']>,
  functionsOutput?: Maybe<Scalars['String']>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsAuth = {
  jwt_user?: Maybe<Scalars['String']>,
  jwt_pass?: Maybe<Scalars['String']>,
  jwt_base_path?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsAuthFilterInput = {
  jwt_user?: Maybe<StringQueryOperatorInput>,
  jwt_pass?: Maybe<StringQueryOperatorInput>,
  jwt_base_path?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsFilterInput = {
  components?: Maybe<StringQueryOperatorInput>,
  elements?: Maybe<StringQueryOperatorInput>,
  images?: Maybe<StringQueryOperatorInput>,
  hooks?: Maybe<StringQueryOperatorInput>,
  pages?: Maybe<StringQueryOperatorInput>,
  styles?: Maybe<StringQueryOperatorInput>,
  templates?: Maybe<StringQueryOperatorInput>,
  theme?: Maybe<StringQueryOperatorInput>,
  util?: Maybe<StringQueryOperatorInput>,
  instances?: Maybe<StringQueryOperatorInput>,
  color?: Maybe<StringQueryOperatorInput>,
  showSpinner?: Maybe<BooleanQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  short_name?: Maybe<StringQueryOperatorInput>,
  start_url?: Maybe<StringQueryOperatorInput>,
  background_color?: Maybe<StringQueryOperatorInput>,
  theme_color?: Maybe<StringQueryOperatorInput>,
  display?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<StringQueryOperatorInput>,
  defaultQuality?: Maybe<IntQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  useACF?: Maybe<BooleanQueryOperatorInput>,
  baseUrl?: Maybe<StringQueryOperatorInput>,
  concurrentRequests?: Maybe<IntQueryOperatorInput>,
  protocol?: Maybe<StringQueryOperatorInput>,
  auth?: Maybe<SitePluginPluginOptionsAuthFilterInput>,
  includedRoutes?: Maybe<StringQueryOperatorInput>,
  allPageHeaders?: Maybe<StringQueryOperatorInput>,
  fileName?: Maybe<StringQueryOperatorInput>,
  codegen?: Maybe<BooleanQueryOperatorInput>,
  codegenDelay?: Maybe<IntQueryOperatorInput>,
  functionsSrc?: Maybe<StringQueryOperatorInput>,
  functionsOutput?: Maybe<StringQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
  productionUrl?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  headerLinks?: Maybe<Array<Maybe<Scalars['String']>>>,
  footerLinks?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>,
  manifest?: Maybe<SiteSiteMetadataManifest>,
};

export type SiteSiteMetadataFilterInput = {
  productionUrl?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  headerLinks?: Maybe<StringQueryOperatorInput>,
  footerLinks?: Maybe<StringQueryOperatorInput>,
  manifest?: Maybe<SiteSiteMetadataManifestFilterInput>,
};

export type SiteSiteMetadataManifest = {
  name?: Maybe<Scalars['String']>,
  short_name?: Maybe<Scalars['String']>,
  start_url?: Maybe<Scalars['String']>,
  background_color?: Maybe<Scalars['String']>,
  theme_color?: Maybe<Scalars['String']>,
  display?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataManifestFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  short_name?: Maybe<StringQueryOperatorInput>,
  start_url?: Maybe<StringQueryOperatorInput>,
  background_color?: Maybe<StringQueryOperatorInput>,
  theme_color?: Maybe<StringQueryOperatorInput>,
  display?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<StringQueryOperatorInput>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SortOrderEnum = 
  'ASC' |
  'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};

export type TeamJson = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  name?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  picture?: Maybe<File>,
  bio?: Maybe<Scalars['String']>,
};

export type TeamJsonConnection = {
  totalCount: Scalars['Int'],
  edges: Array<TeamJsonEdge>,
  nodes: Array<TeamJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<TeamJsonGroupConnection>,
};


export type TeamJsonConnectionDistinctArgs = {
  field: TeamJsonFieldsEnum
};


export type TeamJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: TeamJsonFieldsEnum
};

export type TeamJsonEdge = {
  next?: Maybe<TeamJson>,
  node: TeamJson,
  previous?: Maybe<TeamJson>,
};

export type TeamJsonFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'name' |
  'title' |
  'picture___sourceInstanceName' |
  'picture___absolutePath' |
  'picture___relativePath' |
  'picture___extension' |
  'picture___size' |
  'picture___prettySize' |
  'picture___modifiedTime' |
  'picture___accessTime' |
  'picture___changeTime' |
  'picture___birthTime' |
  'picture___root' |
  'picture___dir' |
  'picture___base' |
  'picture___ext' |
  'picture___name' |
  'picture___relativeDirectory' |
  'picture___dev' |
  'picture___mode' |
  'picture___nlink' |
  'picture___uid' |
  'picture___gid' |
  'picture___rdev' |
  'picture___ino' |
  'picture___atimeMs' |
  'picture___mtimeMs' |
  'picture___ctimeMs' |
  'picture___atime' |
  'picture___mtime' |
  'picture___ctime' |
  'picture___birthtime' |
  'picture___birthtimeMs' |
  'picture___blksize' |
  'picture___blocks' |
  'picture___url' |
  'picture___publicURL' |
  'picture___childImageSharp___fixed___base64' |
  'picture___childImageSharp___fixed___tracedSVG' |
  'picture___childImageSharp___fixed___aspectRatio' |
  'picture___childImageSharp___fixed___width' |
  'picture___childImageSharp___fixed___height' |
  'picture___childImageSharp___fixed___src' |
  'picture___childImageSharp___fixed___srcSet' |
  'picture___childImageSharp___fixed___srcWebp' |
  'picture___childImageSharp___fixed___srcSetWebp' |
  'picture___childImageSharp___fixed___originalName' |
  'picture___childImageSharp___resolutions___base64' |
  'picture___childImageSharp___resolutions___tracedSVG' |
  'picture___childImageSharp___resolutions___aspectRatio' |
  'picture___childImageSharp___resolutions___width' |
  'picture___childImageSharp___resolutions___height' |
  'picture___childImageSharp___resolutions___src' |
  'picture___childImageSharp___resolutions___srcSet' |
  'picture___childImageSharp___resolutions___srcWebp' |
  'picture___childImageSharp___resolutions___srcSetWebp' |
  'picture___childImageSharp___resolutions___originalName' |
  'picture___childImageSharp___fluid___base64' |
  'picture___childImageSharp___fluid___tracedSVG' |
  'picture___childImageSharp___fluid___aspectRatio' |
  'picture___childImageSharp___fluid___src' |
  'picture___childImageSharp___fluid___srcSet' |
  'picture___childImageSharp___fluid___srcWebp' |
  'picture___childImageSharp___fluid___srcSetWebp' |
  'picture___childImageSharp___fluid___sizes' |
  'picture___childImageSharp___fluid___originalImg' |
  'picture___childImageSharp___fluid___originalName' |
  'picture___childImageSharp___fluid___presentationWidth' |
  'picture___childImageSharp___fluid___presentationHeight' |
  'picture___childImageSharp___sizes___base64' |
  'picture___childImageSharp___sizes___tracedSVG' |
  'picture___childImageSharp___sizes___aspectRatio' |
  'picture___childImageSharp___sizes___src' |
  'picture___childImageSharp___sizes___srcSet' |
  'picture___childImageSharp___sizes___srcWebp' |
  'picture___childImageSharp___sizes___srcSetWebp' |
  'picture___childImageSharp___sizes___sizes' |
  'picture___childImageSharp___sizes___originalImg' |
  'picture___childImageSharp___sizes___originalName' |
  'picture___childImageSharp___sizes___presentationWidth' |
  'picture___childImageSharp___sizes___presentationHeight' |
  'picture___childImageSharp___original___width' |
  'picture___childImageSharp___original___height' |
  'picture___childImageSharp___original___src' |
  'picture___childImageSharp___resize___src' |
  'picture___childImageSharp___resize___tracedSVG' |
  'picture___childImageSharp___resize___width' |
  'picture___childImageSharp___resize___height' |
  'picture___childImageSharp___resize___aspectRatio' |
  'picture___childImageSharp___resize___originalName' |
  'picture___childImageSharp___id' |
  'picture___childImageSharp___parent___id' |
  'picture___childImageSharp___parent___children' |
  'picture___childImageSharp___children' |
  'picture___childImageSharp___children___id' |
  'picture___childImageSharp___children___children' |
  'picture___childImageSharp___internal___content' |
  'picture___childImageSharp___internal___contentDigest' |
  'picture___childImageSharp___internal___description' |
  'picture___childImageSharp___internal___fieldOwners' |
  'picture___childImageSharp___internal___ignoreType' |
  'picture___childImageSharp___internal___mediaType' |
  'picture___childImageSharp___internal___owner' |
  'picture___childImageSharp___internal___type' |
  'picture___id' |
  'picture___parent___id' |
  'picture___parent___parent___id' |
  'picture___parent___parent___children' |
  'picture___parent___children' |
  'picture___parent___children___id' |
  'picture___parent___children___children' |
  'picture___parent___internal___content' |
  'picture___parent___internal___contentDigest' |
  'picture___parent___internal___description' |
  'picture___parent___internal___fieldOwners' |
  'picture___parent___internal___ignoreType' |
  'picture___parent___internal___mediaType' |
  'picture___parent___internal___owner' |
  'picture___parent___internal___type' |
  'picture___children' |
  'picture___children___id' |
  'picture___children___parent___id' |
  'picture___children___parent___children' |
  'picture___children___children' |
  'picture___children___children___id' |
  'picture___children___children___children' |
  'picture___children___internal___content' |
  'picture___children___internal___contentDigest' |
  'picture___children___internal___description' |
  'picture___children___internal___fieldOwners' |
  'picture___children___internal___ignoreType' |
  'picture___children___internal___mediaType' |
  'picture___children___internal___owner' |
  'picture___children___internal___type' |
  'picture___internal___content' |
  'picture___internal___contentDigest' |
  'picture___internal___description' |
  'picture___internal___fieldOwners' |
  'picture___internal___ignoreType' |
  'picture___internal___mediaType' |
  'picture___internal___owner' |
  'picture___internal___type' |
  'picture___childrenTestimonialsJson' |
  'picture___childrenTestimonialsJson___id' |
  'picture___childrenTestimonialsJson___parent___id' |
  'picture___childrenTestimonialsJson___parent___children' |
  'picture___childrenTestimonialsJson___children' |
  'picture___childrenTestimonialsJson___children___id' |
  'picture___childrenTestimonialsJson___children___children' |
  'picture___childrenTestimonialsJson___internal___content' |
  'picture___childrenTestimonialsJson___internal___contentDigest' |
  'picture___childrenTestimonialsJson___internal___description' |
  'picture___childrenTestimonialsJson___internal___fieldOwners' |
  'picture___childrenTestimonialsJson___internal___ignoreType' |
  'picture___childrenTestimonialsJson___internal___mediaType' |
  'picture___childrenTestimonialsJson___internal___owner' |
  'picture___childrenTestimonialsJson___internal___type' |
  'picture___childrenTestimonialsJson___body' |
  'picture___childrenTestimonialsJson___rating' |
  'picture___childrenTestimonialsJson___author' |
  'picture___childrenTestimonialsJson___property___name' |
  'picture___childrenTestimonialsJson___property___location' |
  'picture___childrenTeamJson' |
  'picture___childrenTeamJson___id' |
  'picture___childrenTeamJson___parent___id' |
  'picture___childrenTeamJson___parent___children' |
  'picture___childrenTeamJson___children' |
  'picture___childrenTeamJson___children___id' |
  'picture___childrenTeamJson___children___children' |
  'picture___childrenTeamJson___internal___content' |
  'picture___childrenTeamJson___internal___contentDigest' |
  'picture___childrenTeamJson___internal___description' |
  'picture___childrenTeamJson___internal___fieldOwners' |
  'picture___childrenTeamJson___internal___ignoreType' |
  'picture___childrenTeamJson___internal___mediaType' |
  'picture___childrenTeamJson___internal___owner' |
  'picture___childrenTeamJson___internal___type' |
  'picture___childrenTeamJson___name' |
  'picture___childrenTeamJson___title' |
  'picture___childrenTeamJson___picture___sourceInstanceName' |
  'picture___childrenTeamJson___picture___absolutePath' |
  'picture___childrenTeamJson___picture___relativePath' |
  'picture___childrenTeamJson___picture___extension' |
  'picture___childrenTeamJson___picture___size' |
  'picture___childrenTeamJson___picture___prettySize' |
  'picture___childrenTeamJson___picture___modifiedTime' |
  'picture___childrenTeamJson___picture___accessTime' |
  'picture___childrenTeamJson___picture___changeTime' |
  'picture___childrenTeamJson___picture___birthTime' |
  'picture___childrenTeamJson___picture___root' |
  'picture___childrenTeamJson___picture___dir' |
  'picture___childrenTeamJson___picture___base' |
  'picture___childrenTeamJson___picture___ext' |
  'picture___childrenTeamJson___picture___name' |
  'picture___childrenTeamJson___picture___relativeDirectory' |
  'picture___childrenTeamJson___picture___dev' |
  'picture___childrenTeamJson___picture___mode' |
  'picture___childrenTeamJson___picture___nlink' |
  'picture___childrenTeamJson___picture___uid' |
  'picture___childrenTeamJson___picture___gid' |
  'picture___childrenTeamJson___picture___rdev' |
  'picture___childrenTeamJson___picture___ino' |
  'picture___childrenTeamJson___picture___atimeMs' |
  'picture___childrenTeamJson___picture___mtimeMs' |
  'picture___childrenTeamJson___picture___ctimeMs' |
  'picture___childrenTeamJson___picture___atime' |
  'picture___childrenTeamJson___picture___mtime' |
  'picture___childrenTeamJson___picture___ctime' |
  'picture___childrenTeamJson___picture___birthtime' |
  'picture___childrenTeamJson___picture___birthtimeMs' |
  'picture___childrenTeamJson___picture___blksize' |
  'picture___childrenTeamJson___picture___blocks' |
  'picture___childrenTeamJson___picture___url' |
  'picture___childrenTeamJson___picture___publicURL' |
  'picture___childrenTeamJson___picture___id' |
  'picture___childrenTeamJson___picture___children' |
  'picture___childrenTeamJson___picture___childrenTestimonialsJson' |
  'picture___childrenTeamJson___picture___childrenTeamJson' |
  'picture___childrenTeamJson___bio' |
  'bio';

export type TeamJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  picture?: Maybe<FileFilterInput>,
  bio?: Maybe<StringQueryOperatorInput>,
};

export type TeamJsonFilterListInput = {
  elemMatch?: Maybe<TeamJsonFilterInput>,
};

export type TeamJsonGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<TeamJsonEdge>,
  nodes: Array<TeamJson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type TeamJsonSortInput = {
  fields?: Maybe<Array<Maybe<TeamJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type TestimonialsJson = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  body?: Maybe<Scalars['String']>,
  rating?: Maybe<Scalars['Int']>,
  author?: Maybe<Scalars['String']>,
  property?: Maybe<TestimonialsJsonProperty>,
};

export type TestimonialsJsonConnection = {
  totalCount: Scalars['Int'],
  edges: Array<TestimonialsJsonEdge>,
  nodes: Array<TestimonialsJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<TestimonialsJsonGroupConnection>,
};


export type TestimonialsJsonConnectionDistinctArgs = {
  field: TestimonialsJsonFieldsEnum
};


export type TestimonialsJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: TestimonialsJsonFieldsEnum
};

export type TestimonialsJsonEdge = {
  next?: Maybe<TestimonialsJson>,
  node: TestimonialsJson,
  previous?: Maybe<TestimonialsJson>,
};

export type TestimonialsJsonFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'body' |
  'rating' |
  'author' |
  'property___name' |
  'property___location';

export type TestimonialsJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  rating?: Maybe<IntQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  property?: Maybe<TestimonialsJsonPropertyFilterInput>,
};

export type TestimonialsJsonFilterListInput = {
  elemMatch?: Maybe<TestimonialsJsonFilterInput>,
};

export type TestimonialsJsonGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<TestimonialsJsonEdge>,
  nodes: Array<TestimonialsJson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type TestimonialsJsonProperty = {
  name?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
};

export type TestimonialsJsonPropertyFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  location?: Maybe<StringQueryOperatorInput>,
};

export type TestimonialsJsonSortInput = {
  fields?: Maybe<Array<Maybe<TestimonialsJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Acf_Field = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_Acf_Field_Group = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_Acf_Field_GroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Acf_Field_GroupEdge>,
  nodes: Array<Wordpress__Acf_Acf_Field_Group>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_Acf_Field_GroupGroupConnection>,
};


export type Wordpress__Acf_Acf_Field_GroupConnectionDistinctArgs = {
  field: Wordpress__Acf_Acf_Field_GroupFieldsEnum
};


export type Wordpress__Acf_Acf_Field_GroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_Acf_Field_GroupFieldsEnum
};

export type Wordpress__Acf_Acf_Field_GroupEdge = {
  next?: Maybe<Wordpress__Acf_Acf_Field_Group>,
  node: Wordpress__Acf_Acf_Field_Group,
  previous?: Maybe<Wordpress__Acf_Acf_Field_Group>,
};

export type Wordpress__Acf_Acf_Field_GroupFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_Acf_Field_GroupFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_Acf_Field_GroupGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Acf_Field_GroupEdge>,
  nodes: Array<Wordpress__Acf_Acf_Field_Group>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_Acf_Field_GroupSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Acf_Field_GroupFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Acf_FieldConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Acf_FieldEdge>,
  nodes: Array<Wordpress__Acf_Acf_Field>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_Acf_FieldGroupConnection>,
};


export type Wordpress__Acf_Acf_FieldConnectionDistinctArgs = {
  field: Wordpress__Acf_Acf_FieldFieldsEnum
};


export type Wordpress__Acf_Acf_FieldConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_Acf_FieldFieldsEnum
};

export type Wordpress__Acf_Acf_FieldEdge = {
  next?: Maybe<Wordpress__Acf_Acf_Field>,
  node: Wordpress__Acf_Acf_Field,
  previous?: Maybe<Wordpress__Acf_Acf_Field>,
};

export type Wordpress__Acf_Acf_FieldFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_Acf_FieldFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_Acf_FieldGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Acf_FieldEdge>,
  nodes: Array<Wordpress__Acf_Acf_Field>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_Acf_FieldSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Acf_FieldFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Action_Group = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_Action_GroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Action_GroupEdge>,
  nodes: Array<Wordpress__Acf_Action_Group>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_Action_GroupGroupConnection>,
};


export type Wordpress__Acf_Action_GroupConnectionDistinctArgs = {
  field: Wordpress__Acf_Action_GroupFieldsEnum
};


export type Wordpress__Acf_Action_GroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_Action_GroupFieldsEnum
};

export type Wordpress__Acf_Action_GroupEdge = {
  next?: Maybe<Wordpress__Acf_Action_Group>,
  node: Wordpress__Acf_Action_Group,
  previous?: Maybe<Wordpress__Acf_Action_Group>,
};

export type Wordpress__Acf_Action_GroupFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_Action_GroupFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_Action_GroupGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Action_GroupEdge>,
  nodes: Array<Wordpress__Acf_Action_Group>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_Action_GroupSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Action_GroupFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Blog_Post = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_Blog_PostConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Blog_PostEdge>,
  nodes: Array<Wordpress__Acf_Blog_Post>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_Blog_PostGroupConnection>,
};


export type Wordpress__Acf_Blog_PostConnectionDistinctArgs = {
  field: Wordpress__Acf_Blog_PostFieldsEnum
};


export type Wordpress__Acf_Blog_PostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_Blog_PostFieldsEnum
};

export type Wordpress__Acf_Blog_PostEdge = {
  next?: Maybe<Wordpress__Acf_Blog_Post>,
  node: Wordpress__Acf_Blog_Post,
  previous?: Maybe<Wordpress__Acf_Blog_Post>,
};

export type Wordpress__Acf_Blog_PostFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_Blog_PostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_Blog_PostGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Blog_PostEdge>,
  nodes: Array<Wordpress__Acf_Blog_Post>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_Blog_PostSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Blog_PostFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Category = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_CategoryConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_CategoryEdge>,
  nodes: Array<Wordpress__Acf_Category>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_CategoryGroupConnection>,
};


export type Wordpress__Acf_CategoryConnectionDistinctArgs = {
  field: Wordpress__Acf_CategoryFieldsEnum
};


export type Wordpress__Acf_CategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_CategoryFieldsEnum
};

export type Wordpress__Acf_CategoryEdge = {
  next?: Maybe<Wordpress__Acf_Category>,
  node: Wordpress__Acf_Category,
  previous?: Maybe<Wordpress__Acf_Category>,
};

export type Wordpress__Acf_CategoryFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_CategoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_CategoryGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_CategoryEdge>,
  nodes: Array<Wordpress__Acf_Category>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_CategorySortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_CategoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Estate_Agent = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_Estate_AgentConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Estate_AgentEdge>,
  nodes: Array<Wordpress__Acf_Estate_Agent>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_Estate_AgentGroupConnection>,
};


export type Wordpress__Acf_Estate_AgentConnectionDistinctArgs = {
  field: Wordpress__Acf_Estate_AgentFieldsEnum
};


export type Wordpress__Acf_Estate_AgentConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_Estate_AgentFieldsEnum
};

export type Wordpress__Acf_Estate_AgentEdge = {
  next?: Maybe<Wordpress__Acf_Estate_Agent>,
  node: Wordpress__Acf_Estate_Agent,
  previous?: Maybe<Wordpress__Acf_Estate_Agent>,
};

export type Wordpress__Acf_Estate_AgentFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_Estate_AgentFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_Estate_AgentGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Estate_AgentEdge>,
  nodes: Array<Wordpress__Acf_Estate_Agent>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_Estate_AgentSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Estate_AgentFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Lake = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_LakeConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_LakeEdge>,
  nodes: Array<Wordpress__Acf_Lake>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_LakeGroupConnection>,
};


export type Wordpress__Acf_LakeConnectionDistinctArgs = {
  field: Wordpress__Acf_LakeFieldsEnum
};


export type Wordpress__Acf_LakeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_LakeFieldsEnum
};

export type Wordpress__Acf_LakeEdge = {
  next?: Maybe<Wordpress__Acf_Lake>,
  node: Wordpress__Acf_Lake,
  previous?: Maybe<Wordpress__Acf_Lake>,
};

export type Wordpress__Acf_LakeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_LakeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_LakeGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_LakeEdge>,
  nodes: Array<Wordpress__Acf_Lake>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_LakeSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_LakeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Media = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_MediaConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_MediaEdge>,
  nodes: Array<Wordpress__Acf_Media>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_MediaGroupConnection>,
};


export type Wordpress__Acf_MediaConnectionDistinctArgs = {
  field: Wordpress__Acf_MediaFieldsEnum
};


export type Wordpress__Acf_MediaConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_MediaFieldsEnum
};

export type Wordpress__Acf_MediaEdge = {
  next?: Maybe<Wordpress__Acf_Media>,
  node: Wordpress__Acf_Media,
  previous?: Maybe<Wordpress__Acf_Media>,
};

export type Wordpress__Acf_MediaFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_MediaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_MediaGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_MediaEdge>,
  nodes: Array<Wordpress__Acf_Media>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_MediaSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_MediaFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Membership_Package = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_Membership_PackageConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Membership_PackageEdge>,
  nodes: Array<Wordpress__Acf_Membership_Package>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_Membership_PackageGroupConnection>,
};


export type Wordpress__Acf_Membership_PackageConnectionDistinctArgs = {
  field: Wordpress__Acf_Membership_PackageFieldsEnum
};


export type Wordpress__Acf_Membership_PackageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_Membership_PackageFieldsEnum
};

export type Wordpress__Acf_Membership_PackageEdge = {
  next?: Maybe<Wordpress__Acf_Membership_Package>,
  node: Wordpress__Acf_Membership_Package,
  previous?: Maybe<Wordpress__Acf_Membership_Package>,
};

export type Wordpress__Acf_Membership_PackageFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_Membership_PackageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_Membership_PackageGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Membership_PackageEdge>,
  nodes: Array<Wordpress__Acf_Membership_Package>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_Membership_PackageSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Membership_PackageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Options = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_OptionsConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_OptionsEdge>,
  nodes: Array<Wordpress__Acf_Options>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_OptionsGroupConnection>,
};


export type Wordpress__Acf_OptionsConnectionDistinctArgs = {
  field: Wordpress__Acf_OptionsFieldsEnum
};


export type Wordpress__Acf_OptionsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_OptionsFieldsEnum
};

export type Wordpress__Acf_OptionsEdge = {
  next?: Maybe<Wordpress__Acf_Options>,
  node: Wordpress__Acf_Options,
  previous?: Maybe<Wordpress__Acf_Options>,
};

export type Wordpress__Acf_OptionsFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_OptionsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Acf_OptionsGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_OptionsEdge>,
  nodes: Array<Wordpress__Acf_Options>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_OptionsSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_OptionsFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Page_Content = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
  acf?: Maybe<Wordpress__Acf_Page_ContentAcf>,
};

export type Wordpress__Acf_Page_ContentAcf = {
  concierge_services?: Maybe<Array<Maybe<Wordpress__Acf_Page_ContentAcfConcierge_Services>>>,
};

export type Wordpress__Acf_Page_ContentAcfConcierge_Services = {
  service?: Maybe<Scalars['String']>,
  image?: Maybe<Wordpress__Wp_Media>,
};

export type Wordpress__Acf_Page_ContentAcfConcierge_ServicesFilterInput = {
  service?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<Wordpress__Wp_MediaFilterInput>,
};

export type Wordpress__Acf_Page_ContentAcfConcierge_ServicesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Acf_Page_ContentAcfConcierge_ServicesFilterInput>,
};

export type Wordpress__Acf_Page_ContentAcfFilterInput = {
  concierge_services?: Maybe<Wordpress__Acf_Page_ContentAcfConcierge_ServicesFilterListInput>,
};

export type Wordpress__Acf_Page_ContentConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Page_ContentEdge>,
  nodes: Array<Wordpress__Acf_Page_Content>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_Page_ContentGroupConnection>,
};


export type Wordpress__Acf_Page_ContentConnectionDistinctArgs = {
  field: Wordpress__Acf_Page_ContentFieldsEnum
};


export type Wordpress__Acf_Page_ContentConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_Page_ContentFieldsEnum
};

export type Wordpress__Acf_Page_ContentEdge = {
  next?: Maybe<Wordpress__Acf_Page_Content>,
  node: Wordpress__Acf_Page_Content,
  previous?: Maybe<Wordpress__Acf_Page_Content>,
};

export type Wordpress__Acf_Page_ContentFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id' |
  'acf___concierge_services' |
  'acf___concierge_services___service' |
  'acf___concierge_services___image___id' |
  'acf___concierge_services___image___children' |
  'acf___concierge_services___image___wordpress_id' |
  'acf___concierge_services___image___date' |
  'acf___concierge_services___image___modified' |
  'acf___concierge_services___image___slug' |
  'acf___concierge_services___image___status' |
  'acf___concierge_services___image___type' |
  'acf___concierge_services___image___link' |
  'acf___concierge_services___image___title' |
  'acf___concierge_services___image___author' |
  'acf___concierge_services___image___comment_status' |
  'acf___concierge_services___image___ping_status' |
  'acf___concierge_services___image___template' |
  'acf___concierge_services___image___description' |
  'acf___concierge_services___image___caption' |
  'acf___concierge_services___image___alt_text' |
  'acf___concierge_services___image___media_type' |
  'acf___concierge_services___image___mime_type' |
  'acf___concierge_services___image___post' |
  'acf___concierge_services___image___source_url' |
  'acf___concierge_services___image___path';

export type Wordpress__Acf_Page_ContentFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  acf?: Maybe<Wordpress__Acf_Page_ContentAcfFilterInput>,
};

export type Wordpress__Acf_Page_ContentGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Page_ContentEdge>,
  nodes: Array<Wordpress__Acf_Page_Content>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_Page_ContentSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Page_ContentFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Posts = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_PostsConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_PostsEdge>,
  nodes: Array<Wordpress__Acf_Posts>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_PostsGroupConnection>,
};


export type Wordpress__Acf_PostsConnectionDistinctArgs = {
  field: Wordpress__Acf_PostsFieldsEnum
};


export type Wordpress__Acf_PostsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_PostsFieldsEnum
};

export type Wordpress__Acf_PostsEdge = {
  next?: Maybe<Wordpress__Acf_Posts>,
  node: Wordpress__Acf_Posts,
  previous?: Maybe<Wordpress__Acf_Posts>,
};

export type Wordpress__Acf_PostsFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_PostsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_PostsGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_PostsEdge>,
  nodes: Array<Wordpress__Acf_Posts>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_PostsSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_PostsFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Product = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_Product_Type = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_Product_TypeConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Product_TypeEdge>,
  nodes: Array<Wordpress__Acf_Product_Type>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_Product_TypeGroupConnection>,
};


export type Wordpress__Acf_Product_TypeConnectionDistinctArgs = {
  field: Wordpress__Acf_Product_TypeFieldsEnum
};


export type Wordpress__Acf_Product_TypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_Product_TypeFieldsEnum
};

export type Wordpress__Acf_Product_TypeEdge = {
  next?: Maybe<Wordpress__Acf_Product_Type>,
  node: Wordpress__Acf_Product_Type,
  previous?: Maybe<Wordpress__Acf_Product_Type>,
};

export type Wordpress__Acf_Product_TypeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_Product_TypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_Product_TypeGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Product_TypeEdge>,
  nodes: Array<Wordpress__Acf_Product_Type>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_Product_TypeSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Product_TypeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Product_Variation = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_Product_VariationConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Product_VariationEdge>,
  nodes: Array<Wordpress__Acf_Product_Variation>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_Product_VariationGroupConnection>,
};


export type Wordpress__Acf_Product_VariationConnectionDistinctArgs = {
  field: Wordpress__Acf_Product_VariationFieldsEnum
};


export type Wordpress__Acf_Product_VariationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_Product_VariationFieldsEnum
};

export type Wordpress__Acf_Product_VariationEdge = {
  next?: Maybe<Wordpress__Acf_Product_Variation>,
  node: Wordpress__Acf_Product_Variation,
  previous?: Maybe<Wordpress__Acf_Product_Variation>,
};

export type Wordpress__Acf_Product_VariationFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_Product_VariationFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_Product_VariationGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Product_VariationEdge>,
  nodes: Array<Wordpress__Acf_Product_Variation>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_Product_VariationSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Product_VariationFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_ProductConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_ProductEdge>,
  nodes: Array<Wordpress__Acf_Product>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_ProductGroupConnection>,
};


export type Wordpress__Acf_ProductConnectionDistinctArgs = {
  field: Wordpress__Acf_ProductFieldsEnum
};


export type Wordpress__Acf_ProductConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_ProductFieldsEnum
};

export type Wordpress__Acf_ProductEdge = {
  next?: Maybe<Wordpress__Acf_Product>,
  node: Wordpress__Acf_Product,
  previous?: Maybe<Wordpress__Acf_Product>,
};

export type Wordpress__Acf_ProductFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_ProductFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_ProductGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_ProductEdge>,
  nodes: Array<Wordpress__Acf_Product>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_ProductSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_ProductFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Property = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
  acf?: Maybe<Wordpress__Acf_PropertyAcf>,
};

export type Wordpress__Acf_Property_Area = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_Property_AreaConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Property_AreaEdge>,
  nodes: Array<Wordpress__Acf_Property_Area>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_Property_AreaGroupConnection>,
};


export type Wordpress__Acf_Property_AreaConnectionDistinctArgs = {
  field: Wordpress__Acf_Property_AreaFieldsEnum
};


export type Wordpress__Acf_Property_AreaConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_Property_AreaFieldsEnum
};

export type Wordpress__Acf_Property_AreaEdge = {
  next?: Maybe<Wordpress__Acf_Property_Area>,
  node: Wordpress__Acf_Property_Area,
  previous?: Maybe<Wordpress__Acf_Property_Area>,
};

export type Wordpress__Acf_Property_AreaFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_Property_AreaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_Property_AreaGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Property_AreaEdge>,
  nodes: Array<Wordpress__Acf_Property_Area>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_Property_AreaSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Property_AreaFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Property_Category = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_Property_CategoryConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Property_CategoryEdge>,
  nodes: Array<Wordpress__Acf_Property_Category>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_Property_CategoryGroupConnection>,
};


export type Wordpress__Acf_Property_CategoryConnectionDistinctArgs = {
  field: Wordpress__Acf_Property_CategoryFieldsEnum
};


export type Wordpress__Acf_Property_CategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_Property_CategoryFieldsEnum
};

export type Wordpress__Acf_Property_CategoryEdge = {
  next?: Maybe<Wordpress__Acf_Property_Category>,
  node: Wordpress__Acf_Property_Category,
  previous?: Maybe<Wordpress__Acf_Property_Category>,
};

export type Wordpress__Acf_Property_CategoryFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_Property_CategoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_Property_CategoryGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Property_CategoryEdge>,
  nodes: Array<Wordpress__Acf_Property_Category>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_Property_CategorySortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Property_CategoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Property_City = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_Property_CityConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Property_CityEdge>,
  nodes: Array<Wordpress__Acf_Property_City>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_Property_CityGroupConnection>,
};


export type Wordpress__Acf_Property_CityConnectionDistinctArgs = {
  field: Wordpress__Acf_Property_CityFieldsEnum
};


export type Wordpress__Acf_Property_CityConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_Property_CityFieldsEnum
};

export type Wordpress__Acf_Property_CityEdge = {
  next?: Maybe<Wordpress__Acf_Property_City>,
  node: Wordpress__Acf_Property_City,
  previous?: Maybe<Wordpress__Acf_Property_City>,
};

export type Wordpress__Acf_Property_CityFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_Property_CityFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_Property_CityGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Property_CityEdge>,
  nodes: Array<Wordpress__Acf_Property_City>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_Property_CitySortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Property_CityFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Property_Features = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_Property_FeaturesConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Property_FeaturesEdge>,
  nodes: Array<Wordpress__Acf_Property_Features>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_Property_FeaturesGroupConnection>,
};


export type Wordpress__Acf_Property_FeaturesConnectionDistinctArgs = {
  field: Wordpress__Acf_Property_FeaturesFieldsEnum
};


export type Wordpress__Acf_Property_FeaturesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_Property_FeaturesFieldsEnum
};

export type Wordpress__Acf_Property_FeaturesEdge = {
  next?: Maybe<Wordpress__Acf_Property_Features>,
  node: Wordpress__Acf_Property_Features,
  previous?: Maybe<Wordpress__Acf_Property_Features>,
};

export type Wordpress__Acf_Property_FeaturesFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_Property_FeaturesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_Property_FeaturesGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Property_FeaturesEdge>,
  nodes: Array<Wordpress__Acf_Property_Features>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_Property_FeaturesSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Property_FeaturesFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_PropertyAcf = {
  order?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
};

export type Wordpress__Acf_PropertyAcfFilterInput = {
  order?: Maybe<StringQueryOperatorInput>,
  featured?: Maybe<BooleanQueryOperatorInput>,
};

export type Wordpress__Acf_PropertyConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_PropertyEdge>,
  nodes: Array<Wordpress__Acf_Property>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_PropertyGroupConnection>,
};


export type Wordpress__Acf_PropertyConnectionDistinctArgs = {
  field: Wordpress__Acf_PropertyFieldsEnum
};


export type Wordpress__Acf_PropertyConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_PropertyFieldsEnum
};

export type Wordpress__Acf_PropertyEdge = {
  next?: Maybe<Wordpress__Acf_Property>,
  node: Wordpress__Acf_Property,
  previous?: Maybe<Wordpress__Acf_Property>,
};

export type Wordpress__Acf_PropertyFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id' |
  'acf___order' |
  'acf___featured';

export type Wordpress__Acf_PropertyFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  acf?: Maybe<Wordpress__Acf_PropertyAcfFilterInput>,
};

export type Wordpress__Acf_PropertyGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_PropertyEdge>,
  nodes: Array<Wordpress__Acf_Property>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_PropertySortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_PropertyFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Scheduled_Action = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_Scheduled_ActionConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Scheduled_ActionEdge>,
  nodes: Array<Wordpress__Acf_Scheduled_Action>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_Scheduled_ActionGroupConnection>,
};


export type Wordpress__Acf_Scheduled_ActionConnectionDistinctArgs = {
  field: Wordpress__Acf_Scheduled_ActionFieldsEnum
};


export type Wordpress__Acf_Scheduled_ActionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_Scheduled_ActionFieldsEnum
};

export type Wordpress__Acf_Scheduled_ActionEdge = {
  next?: Maybe<Wordpress__Acf_Scheduled_Action>,
  node: Wordpress__Acf_Scheduled_Action,
  previous?: Maybe<Wordpress__Acf_Scheduled_Action>,
};

export type Wordpress__Acf_Scheduled_ActionFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_Scheduled_ActionFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_Scheduled_ActionGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Scheduled_ActionEdge>,
  nodes: Array<Wordpress__Acf_Scheduled_Action>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_Scheduled_ActionSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Scheduled_ActionFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Shop_Coupon = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_Shop_CouponConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Shop_CouponEdge>,
  nodes: Array<Wordpress__Acf_Shop_Coupon>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_Shop_CouponGroupConnection>,
};


export type Wordpress__Acf_Shop_CouponConnectionDistinctArgs = {
  field: Wordpress__Acf_Shop_CouponFieldsEnum
};


export type Wordpress__Acf_Shop_CouponConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_Shop_CouponFieldsEnum
};

export type Wordpress__Acf_Shop_CouponEdge = {
  next?: Maybe<Wordpress__Acf_Shop_Coupon>,
  node: Wordpress__Acf_Shop_Coupon,
  previous?: Maybe<Wordpress__Acf_Shop_Coupon>,
};

export type Wordpress__Acf_Shop_CouponFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_Shop_CouponFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_Shop_CouponGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Shop_CouponEdge>,
  nodes: Array<Wordpress__Acf_Shop_Coupon>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_Shop_CouponSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Shop_CouponFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Users = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_UsersConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_UsersEdge>,
  nodes: Array<Wordpress__Acf_Users>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_UsersGroupConnection>,
};


export type Wordpress__Acf_UsersConnectionDistinctArgs = {
  field: Wordpress__Acf_UsersFieldsEnum
};


export type Wordpress__Acf_UsersConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_UsersFieldsEnum
};

export type Wordpress__Acf_UsersEdge = {
  next?: Maybe<Wordpress__Acf_Users>,
  node: Wordpress__Acf_Users,
  previous?: Maybe<Wordpress__Acf_Users>,
};

export type Wordpress__Acf_UsersFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_UsersFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_UsersGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_UsersEdge>,
  nodes: Array<Wordpress__Acf_Users>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_UsersSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_UsersFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Wpcf7_Contact_Form = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_Wpcf7_Contact_FormConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Wpcf7_Contact_FormEdge>,
  nodes: Array<Wordpress__Acf_Wpcf7_Contact_Form>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_Wpcf7_Contact_FormGroupConnection>,
};


export type Wordpress__Acf_Wpcf7_Contact_FormConnectionDistinctArgs = {
  field: Wordpress__Acf_Wpcf7_Contact_FormFieldsEnum
};


export type Wordpress__Acf_Wpcf7_Contact_FormConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_Wpcf7_Contact_FormFieldsEnum
};

export type Wordpress__Acf_Wpcf7_Contact_FormEdge = {
  next?: Maybe<Wordpress__Acf_Wpcf7_Contact_Form>,
  node: Wordpress__Acf_Wpcf7_Contact_Form,
  previous?: Maybe<Wordpress__Acf_Wpcf7_Contact_Form>,
};

export type Wordpress__Acf_Wpcf7_Contact_FormFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_Wpcf7_Contact_FormFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_Wpcf7_Contact_FormGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Wpcf7_Contact_FormEdge>,
  nodes: Array<Wordpress__Acf_Wpcf7_Contact_Form>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_Wpcf7_Contact_FormSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Wpcf7_Contact_FormFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Wpestate_Booking = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_Wpestate_BookingConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Wpestate_BookingEdge>,
  nodes: Array<Wordpress__Acf_Wpestate_Booking>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_Wpestate_BookingGroupConnection>,
};


export type Wordpress__Acf_Wpestate_BookingConnectionDistinctArgs = {
  field: Wordpress__Acf_Wpestate_BookingFieldsEnum
};


export type Wordpress__Acf_Wpestate_BookingConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_Wpestate_BookingFieldsEnum
};

export type Wordpress__Acf_Wpestate_BookingEdge = {
  next?: Maybe<Wordpress__Acf_Wpestate_Booking>,
  node: Wordpress__Acf_Wpestate_Booking,
  previous?: Maybe<Wordpress__Acf_Wpestate_Booking>,
};

export type Wordpress__Acf_Wpestate_BookingFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_Wpestate_BookingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_Wpestate_BookingGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Wpestate_BookingEdge>,
  nodes: Array<Wordpress__Acf_Wpestate_Booking>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_Wpestate_BookingSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Wpestate_BookingFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Wpestate_Invoice = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_Wpestate_InvoiceConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Wpestate_InvoiceEdge>,
  nodes: Array<Wordpress__Acf_Wpestate_Invoice>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_Wpestate_InvoiceGroupConnection>,
};


export type Wordpress__Acf_Wpestate_InvoiceConnectionDistinctArgs = {
  field: Wordpress__Acf_Wpestate_InvoiceFieldsEnum
};


export type Wordpress__Acf_Wpestate_InvoiceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_Wpestate_InvoiceFieldsEnum
};

export type Wordpress__Acf_Wpestate_InvoiceEdge = {
  next?: Maybe<Wordpress__Acf_Wpestate_Invoice>,
  node: Wordpress__Acf_Wpestate_Invoice,
  previous?: Maybe<Wordpress__Acf_Wpestate_Invoice>,
};

export type Wordpress__Acf_Wpestate_InvoiceFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_Wpestate_InvoiceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_Wpestate_InvoiceGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Wpestate_InvoiceEdge>,
  nodes: Array<Wordpress__Acf_Wpestate_Invoice>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_Wpestate_InvoiceSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Wpestate_InvoiceFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Acf_Wpestate_Message = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
};

export type Wordpress__Acf_Wpestate_MessageConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Wpestate_MessageEdge>,
  nodes: Array<Wordpress__Acf_Wpestate_Message>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Acf_Wpestate_MessageGroupConnection>,
};


export type Wordpress__Acf_Wpestate_MessageConnectionDistinctArgs = {
  field: Wordpress__Acf_Wpestate_MessageFieldsEnum
};


export type Wordpress__Acf_Wpestate_MessageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Acf_Wpestate_MessageFieldsEnum
};

export type Wordpress__Acf_Wpestate_MessageEdge = {
  next?: Maybe<Wordpress__Acf_Wpestate_Message>,
  node: Wordpress__Acf_Wpestate_Message,
  previous?: Maybe<Wordpress__Acf_Wpestate_Message>,
};

export type Wordpress__Acf_Wpestate_MessageFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id';

export type Wordpress__Acf_Wpestate_MessageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
};

export type Wordpress__Acf_Wpestate_MessageGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Acf_Wpestate_MessageEdge>,
  nodes: Array<Wordpress__Acf_Wpestate_Message>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Acf_Wpestate_MessageSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Acf_Wpestate_MessageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Site_Metadata = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  home?: Maybe<Scalars['String']>,
};

export type Wordpress__Site_MetadataConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Site_MetadataEdge>,
  nodes: Array<Wordpress__Site_Metadata>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Site_MetadataGroupConnection>,
};


export type Wordpress__Site_MetadataConnectionDistinctArgs = {
  field: Wordpress__Site_MetadataFieldsEnum
};


export type Wordpress__Site_MetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Site_MetadataFieldsEnum
};

export type Wordpress__Site_MetadataEdge = {
  next?: Maybe<Wordpress__Site_Metadata>,
  node: Wordpress__Site_Metadata,
  previous?: Maybe<Wordpress__Site_Metadata>,
};

export type Wordpress__Site_MetadataFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'name' |
  'description' |
  'url' |
  'home';

export type Wordpress__Site_MetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  home?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Site_MetadataGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Site_MetadataEdge>,
  nodes: Array<Wordpress__Site_Metadata>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Site_MetadataSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Site_MetadataFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Wp_Blog_Post = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
  date?: Maybe<Scalars['Date']>,
  guid?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Date']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  template?: Maybe<Scalars['String']>,
  category?: Maybe<Wordpress__Wp_Category>,
  _links?: Maybe<Wordpress__Wp_Blog_Post_Links>,
  featured_media?: Maybe<Wordpress__Wp_Media>,
  path?: Maybe<Scalars['String']>,
  tags?: Maybe<Array<Maybe<Wordpress__Wp_Post_Tag>>>,
};


export type Wordpress__Wp_Blog_PostDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type Wordpress__Wp_Blog_PostModifiedArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type Wordpress__Wp_Blog_Post_Links = {
  self?: Maybe<Array<Maybe<Wordpress__Wp_Blog_Post_LinksSelf>>>,
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Blog_Post_LinksCollection>>>,
  about?: Maybe<Array<Maybe<Wordpress__Wp_Blog_Post_LinksAbout>>>,
  wp_featuredmedia?: Maybe<Array<Maybe<Wordpress__Wp_Blog_Post_LinksWp_Featuredmedia>>>,
  wp_attachment?: Maybe<Array<Maybe<Wordpress__Wp_Blog_Post_LinksWp_Attachment>>>,
  wp_term?: Maybe<Array<Maybe<Wordpress__Wp_Blog_Post_LinksWp_Term>>>,
  curies?: Maybe<Array<Maybe<Wordpress__Wp_Blog_Post_LinksCuries>>>,
};

export type Wordpress__Wp_Blog_Post_LinksAbout = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Blog_Post_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Blog_Post_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Blog_Post_LinksAboutFilterInput>,
};

export type Wordpress__Wp_Blog_Post_LinksCollection = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Blog_Post_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Blog_Post_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Blog_Post_LinksCollectionFilterInput>,
};

export type Wordpress__Wp_Blog_Post_LinksCuries = {
  name?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  templated?: Maybe<Scalars['Boolean']>,
};

export type Wordpress__Wp_Blog_Post_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  href?: Maybe<StringQueryOperatorInput>,
  templated?: Maybe<BooleanQueryOperatorInput>,
};

export type Wordpress__Wp_Blog_Post_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Blog_Post_LinksCuriesFilterInput>,
};

export type Wordpress__Wp_Blog_Post_LinksFilterInput = {
  self?: Maybe<Wordpress__Wp_Blog_Post_LinksSelfFilterListInput>,
  collection?: Maybe<Wordpress__Wp_Blog_Post_LinksCollectionFilterListInput>,
  about?: Maybe<Wordpress__Wp_Blog_Post_LinksAboutFilterListInput>,
  wp_featuredmedia?: Maybe<Wordpress__Wp_Blog_Post_LinksWp_FeaturedmediaFilterListInput>,
  wp_attachment?: Maybe<Wordpress__Wp_Blog_Post_LinksWp_AttachmentFilterListInput>,
  wp_term?: Maybe<Wordpress__Wp_Blog_Post_LinksWp_TermFilterListInput>,
  curies?: Maybe<Wordpress__Wp_Blog_Post_LinksCuriesFilterListInput>,
};

export type Wordpress__Wp_Blog_Post_LinksSelf = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Blog_Post_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Blog_Post_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Blog_Post_LinksSelfFilterInput>,
};

export type Wordpress__Wp_Blog_Post_LinksWp_Attachment = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Blog_Post_LinksWp_AttachmentFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Blog_Post_LinksWp_AttachmentFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Blog_Post_LinksWp_AttachmentFilterInput>,
};

export type Wordpress__Wp_Blog_Post_LinksWp_Featuredmedia = {
  embeddable?: Maybe<Scalars['Boolean']>,
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Blog_Post_LinksWp_FeaturedmediaFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>,
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Blog_Post_LinksWp_FeaturedmediaFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Blog_Post_LinksWp_FeaturedmediaFilterInput>,
};

export type Wordpress__Wp_Blog_Post_LinksWp_Term = {
  taxonomy?: Maybe<Scalars['String']>,
  embeddable?: Maybe<Scalars['Boolean']>,
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Blog_Post_LinksWp_TermFilterInput = {
  taxonomy?: Maybe<StringQueryOperatorInput>,
  embeddable?: Maybe<BooleanQueryOperatorInput>,
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Blog_Post_LinksWp_TermFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Blog_Post_LinksWp_TermFilterInput>,
};

export type Wordpress__Wp_Blog_PostConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Wp_Blog_PostEdge>,
  nodes: Array<Wordpress__Wp_Blog_Post>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Wp_Blog_PostGroupConnection>,
};


export type Wordpress__Wp_Blog_PostConnectionDistinctArgs = {
  field: Wordpress__Wp_Blog_PostFieldsEnum
};


export type Wordpress__Wp_Blog_PostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Wp_Blog_PostFieldsEnum
};

export type Wordpress__Wp_Blog_PostEdge = {
  next?: Maybe<Wordpress__Wp_Blog_Post>,
  node: Wordpress__Wp_Blog_Post,
  previous?: Maybe<Wordpress__Wp_Blog_Post>,
};

export type Wordpress__Wp_Blog_PostFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id' |
  'date' |
  'guid' |
  'modified' |
  'slug' |
  'status' |
  'type' |
  'link' |
  'title' |
  'content' |
  'template' |
  'category___id' |
  'category___parent___id' |
  'category___parent___parent___id' |
  'category___parent___parent___children' |
  'category___parent___children' |
  'category___parent___children___id' |
  'category___parent___children___children' |
  'category___parent___internal___content' |
  'category___parent___internal___contentDigest' |
  'category___parent___internal___description' |
  'category___parent___internal___fieldOwners' |
  'category___parent___internal___ignoreType' |
  'category___parent___internal___mediaType' |
  'category___parent___internal___owner' |
  'category___parent___internal___type' |
  'category___children' |
  'category___children___id' |
  'category___children___parent___id' |
  'category___children___parent___children' |
  'category___children___children' |
  'category___children___children___id' |
  'category___children___children___children' |
  'category___children___internal___content' |
  'category___children___internal___contentDigest' |
  'category___children___internal___description' |
  'category___children___internal___fieldOwners' |
  'category___children___internal___ignoreType' |
  'category___children___internal___mediaType' |
  'category___children___internal___owner' |
  'category___children___internal___type' |
  'category___internal___content' |
  'category___internal___contentDigest' |
  'category___internal___description' |
  'category___internal___fieldOwners' |
  'category___internal___ignoreType' |
  'category___internal___mediaType' |
  'category___internal___owner' |
  'category___internal___type' |
  'category___wordpress_id' |
  'category___count' |
  'category___description' |
  'category___link' |
  'category___name' |
  'category___slug' |
  'category___taxonomy' |
  'category___wordpress_parent' |
  'category____links___self' |
  'category____links___self___href' |
  'category____links___collection' |
  'category____links___collection___href' |
  'category____links___about' |
  'category____links___about___href' |
  'category____links___wp_post_type' |
  'category____links___wp_post_type___href' |
  'category____links___curies' |
  'category____links___curies___name' |
  'category____links___curies___href' |
  'category____links___curies___templated' |
  'category___path' |
  '_links___self' |
  '_links___self___href' |
  '_links___collection' |
  '_links___collection___href' |
  '_links___about' |
  '_links___about___href' |
  '_links___wp_featuredmedia' |
  '_links___wp_featuredmedia___embeddable' |
  '_links___wp_featuredmedia___href' |
  '_links___wp_attachment' |
  '_links___wp_attachment___href' |
  '_links___wp_term' |
  '_links___wp_term___taxonomy' |
  '_links___wp_term___embeddable' |
  '_links___wp_term___href' |
  '_links___curies' |
  '_links___curies___name' |
  '_links___curies___href' |
  '_links___curies___templated' |
  'featured_media___id' |
  'featured_media___parent___id' |
  'featured_media___parent___parent___id' |
  'featured_media___parent___parent___children' |
  'featured_media___parent___children' |
  'featured_media___parent___children___id' |
  'featured_media___parent___children___children' |
  'featured_media___parent___internal___content' |
  'featured_media___parent___internal___contentDigest' |
  'featured_media___parent___internal___description' |
  'featured_media___parent___internal___fieldOwners' |
  'featured_media___parent___internal___ignoreType' |
  'featured_media___parent___internal___mediaType' |
  'featured_media___parent___internal___owner' |
  'featured_media___parent___internal___type' |
  'featured_media___children' |
  'featured_media___children___id' |
  'featured_media___children___parent___id' |
  'featured_media___children___parent___children' |
  'featured_media___children___children' |
  'featured_media___children___children___id' |
  'featured_media___children___children___children' |
  'featured_media___children___internal___content' |
  'featured_media___children___internal___contentDigest' |
  'featured_media___children___internal___description' |
  'featured_media___children___internal___fieldOwners' |
  'featured_media___children___internal___ignoreType' |
  'featured_media___children___internal___mediaType' |
  'featured_media___children___internal___owner' |
  'featured_media___children___internal___type' |
  'featured_media___internal___content' |
  'featured_media___internal___contentDigest' |
  'featured_media___internal___description' |
  'featured_media___internal___fieldOwners' |
  'featured_media___internal___ignoreType' |
  'featured_media___internal___mediaType' |
  'featured_media___internal___owner' |
  'featured_media___internal___type' |
  'featured_media___wordpress_id' |
  'featured_media___date' |
  'featured_media___guid___id' |
  'featured_media___guid___parent___id' |
  'featured_media___guid___parent___children' |
  'featured_media___guid___children' |
  'featured_media___guid___children___id' |
  'featured_media___guid___children___children' |
  'featured_media___guid___internal___content' |
  'featured_media___guid___internal___contentDigest' |
  'featured_media___guid___internal___description' |
  'featured_media___guid___internal___fieldOwners' |
  'featured_media___guid___internal___ignoreType' |
  'featured_media___guid___internal___mediaType' |
  'featured_media___guid___internal___owner' |
  'featured_media___guid___internal___type' |
  'featured_media___guid___wordpress_id' |
  'featured_media___guid___date' |
  'featured_media___guid___guid___id' |
  'featured_media___guid___guid___children' |
  'featured_media___guid___guid___wordpress_id' |
  'featured_media___guid___guid___date' |
  'featured_media___guid___guid___modified' |
  'featured_media___guid___guid___slug' |
  'featured_media___guid___guid___status' |
  'featured_media___guid___guid___type' |
  'featured_media___guid___guid___link' |
  'featured_media___guid___guid___title' |
  'featured_media___guid___guid___author' |
  'featured_media___guid___guid___comment_status' |
  'featured_media___guid___guid___ping_status' |
  'featured_media___guid___guid___template' |
  'featured_media___guid___guid___description' |
  'featured_media___guid___guid___caption' |
  'featured_media___guid___guid___alt_text' |
  'featured_media___guid___guid___media_type' |
  'featured_media___guid___guid___mime_type' |
  'featured_media___guid___guid___post' |
  'featured_media___guid___guid___source_url' |
  'featured_media___guid___guid___path' |
  'featured_media___guid___modified' |
  'featured_media___guid___slug' |
  'featured_media___guid___status' |
  'featured_media___guid___type' |
  'featured_media___guid___link' |
  'featured_media___guid___title' |
  'featured_media___guid___author' |
  'featured_media___guid___comment_status' |
  'featured_media___guid___ping_status' |
  'featured_media___guid___template' |
  'featured_media___guid___meta___lbn_published_stage' |
  'featured_media___guid___meta___lbn_published_production' |
  'featured_media___guid___description' |
  'featured_media___guid___caption' |
  'featured_media___guid___alt_text' |
  'featured_media___guid___media_type' |
  'featured_media___guid___mime_type' |
  'featured_media___guid___media_details___width' |
  'featured_media___guid___media_details___height' |
  'featured_media___guid___media_details___file' |
  'featured_media___guid___media_details___dummy' |
  'featured_media___guid___post' |
  'featured_media___guid___source_url' |
  'featured_media___guid____links___self' |
  'featured_media___guid____links___collection' |
  'featured_media___guid____links___about' |
  'featured_media___guid____links___author' |
  'featured_media___guid____links___replies' |
  'featured_media___guid___localFile___sourceInstanceName' |
  'featured_media___guid___localFile___absolutePath' |
  'featured_media___guid___localFile___relativePath' |
  'featured_media___guid___localFile___extension' |
  'featured_media___guid___localFile___size' |
  'featured_media___guid___localFile___prettySize' |
  'featured_media___guid___localFile___modifiedTime' |
  'featured_media___guid___localFile___accessTime' |
  'featured_media___guid___localFile___changeTime' |
  'featured_media___guid___localFile___birthTime' |
  'featured_media___guid___localFile___root' |
  'featured_media___guid___localFile___dir' |
  'featured_media___guid___localFile___base' |
  'featured_media___guid___localFile___ext' |
  'featured_media___guid___localFile___name' |
  'featured_media___guid___localFile___relativeDirectory' |
  'featured_media___guid___localFile___dev' |
  'featured_media___guid___localFile___mode' |
  'featured_media___guid___localFile___nlink' |
  'featured_media___guid___localFile___uid' |
  'featured_media___guid___localFile___gid' |
  'featured_media___guid___localFile___rdev' |
  'featured_media___guid___localFile___ino' |
  'featured_media___guid___localFile___atimeMs' |
  'featured_media___guid___localFile___mtimeMs' |
  'featured_media___guid___localFile___ctimeMs' |
  'featured_media___guid___localFile___atime' |
  'featured_media___guid___localFile___mtime' |
  'featured_media___guid___localFile___ctime' |
  'featured_media___guid___localFile___birthtime' |
  'featured_media___guid___localFile___birthtimeMs' |
  'featured_media___guid___localFile___blksize' |
  'featured_media___guid___localFile___blocks' |
  'featured_media___guid___localFile___url' |
  'featured_media___guid___localFile___publicURL' |
  'featured_media___guid___localFile___id' |
  'featured_media___guid___localFile___children' |
  'featured_media___guid___localFile___childrenTestimonialsJson' |
  'featured_media___guid___localFile___childrenTeamJson' |
  'featured_media___guid___path' |
  'featured_media___modified' |
  'featured_media___slug' |
  'featured_media___status' |
  'featured_media___type' |
  'featured_media___link' |
  'featured_media___title' |
  'featured_media___author' |
  'featured_media___comment_status' |
  'featured_media___ping_status' |
  'featured_media___template' |
  'featured_media___meta___lbn_published_stage' |
  'featured_media___meta___lbn_published_production' |
  'featured_media___description' |
  'featured_media___caption' |
  'featured_media___alt_text' |
  'featured_media___media_type' |
  'featured_media___mime_type' |
  'featured_media___media_details___width' |
  'featured_media___media_details___height' |
  'featured_media___media_details___file' |
  'featured_media___media_details___image_meta___aperture' |
  'featured_media___media_details___image_meta___credit' |
  'featured_media___media_details___image_meta___camera' |
  'featured_media___media_details___image_meta___caption' |
  'featured_media___media_details___image_meta___created_timestamp' |
  'featured_media___media_details___image_meta___copyright' |
  'featured_media___media_details___image_meta___focal_length' |
  'featured_media___media_details___image_meta___iso' |
  'featured_media___media_details___image_meta___shutter_speed' |
  'featured_media___media_details___image_meta___title' |
  'featured_media___media_details___image_meta___orientation' |
  'featured_media___media_details___dummy' |
  'featured_media___post' |
  'featured_media___source_url' |
  'featured_media____links___self' |
  'featured_media____links___self___href' |
  'featured_media____links___collection' |
  'featured_media____links___collection___href' |
  'featured_media____links___about' |
  'featured_media____links___about___href' |
  'featured_media____links___author' |
  'featured_media____links___author___embeddable' |
  'featured_media____links___author___href' |
  'featured_media____links___replies' |
  'featured_media____links___replies___embeddable' |
  'featured_media____links___replies___href' |
  'featured_media___localFile___sourceInstanceName' |
  'featured_media___localFile___absolutePath' |
  'featured_media___localFile___relativePath' |
  'featured_media___localFile___extension' |
  'featured_media___localFile___size' |
  'featured_media___localFile___prettySize' |
  'featured_media___localFile___modifiedTime' |
  'featured_media___localFile___accessTime' |
  'featured_media___localFile___changeTime' |
  'featured_media___localFile___birthTime' |
  'featured_media___localFile___root' |
  'featured_media___localFile___dir' |
  'featured_media___localFile___base' |
  'featured_media___localFile___ext' |
  'featured_media___localFile___name' |
  'featured_media___localFile___relativeDirectory' |
  'featured_media___localFile___dev' |
  'featured_media___localFile___mode' |
  'featured_media___localFile___nlink' |
  'featured_media___localFile___uid' |
  'featured_media___localFile___gid' |
  'featured_media___localFile___rdev' |
  'featured_media___localFile___ino' |
  'featured_media___localFile___atimeMs' |
  'featured_media___localFile___mtimeMs' |
  'featured_media___localFile___ctimeMs' |
  'featured_media___localFile___atime' |
  'featured_media___localFile___mtime' |
  'featured_media___localFile___ctime' |
  'featured_media___localFile___birthtime' |
  'featured_media___localFile___birthtimeMs' |
  'featured_media___localFile___blksize' |
  'featured_media___localFile___blocks' |
  'featured_media___localFile___url' |
  'featured_media___localFile___publicURL' |
  'featured_media___localFile___childImageSharp___id' |
  'featured_media___localFile___childImageSharp___children' |
  'featured_media___localFile___id' |
  'featured_media___localFile___parent___id' |
  'featured_media___localFile___parent___children' |
  'featured_media___localFile___children' |
  'featured_media___localFile___children___id' |
  'featured_media___localFile___children___children' |
  'featured_media___localFile___internal___content' |
  'featured_media___localFile___internal___contentDigest' |
  'featured_media___localFile___internal___description' |
  'featured_media___localFile___internal___fieldOwners' |
  'featured_media___localFile___internal___ignoreType' |
  'featured_media___localFile___internal___mediaType' |
  'featured_media___localFile___internal___owner' |
  'featured_media___localFile___internal___type' |
  'featured_media___localFile___childrenTestimonialsJson' |
  'featured_media___localFile___childrenTestimonialsJson___id' |
  'featured_media___localFile___childrenTestimonialsJson___children' |
  'featured_media___localFile___childrenTestimonialsJson___body' |
  'featured_media___localFile___childrenTestimonialsJson___rating' |
  'featured_media___localFile___childrenTestimonialsJson___author' |
  'featured_media___localFile___childrenTeamJson' |
  'featured_media___localFile___childrenTeamJson___id' |
  'featured_media___localFile___childrenTeamJson___children' |
  'featured_media___localFile___childrenTeamJson___name' |
  'featured_media___localFile___childrenTeamJson___title' |
  'featured_media___localFile___childrenTeamJson___bio' |
  'featured_media___path' |
  'path' |
  'tags' |
  'tags___id' |
  'tags___parent___id' |
  'tags___parent___parent___id' |
  'tags___parent___parent___children' |
  'tags___parent___children' |
  'tags___parent___children___id' |
  'tags___parent___children___children' |
  'tags___parent___internal___content' |
  'tags___parent___internal___contentDigest' |
  'tags___parent___internal___description' |
  'tags___parent___internal___fieldOwners' |
  'tags___parent___internal___ignoreType' |
  'tags___parent___internal___mediaType' |
  'tags___parent___internal___owner' |
  'tags___parent___internal___type' |
  'tags___children' |
  'tags___children___id' |
  'tags___children___parent___id' |
  'tags___children___parent___children' |
  'tags___children___children' |
  'tags___children___children___id' |
  'tags___children___children___children' |
  'tags___children___internal___content' |
  'tags___children___internal___contentDigest' |
  'tags___children___internal___description' |
  'tags___children___internal___fieldOwners' |
  'tags___children___internal___ignoreType' |
  'tags___children___internal___mediaType' |
  'tags___children___internal___owner' |
  'tags___children___internal___type' |
  'tags___internal___content' |
  'tags___internal___contentDigest' |
  'tags___internal___description' |
  'tags___internal___fieldOwners' |
  'tags___internal___ignoreType' |
  'tags___internal___mediaType' |
  'tags___internal___owner' |
  'tags___internal___type' |
  'tags___wordpress_id' |
  'tags___count' |
  'tags___description' |
  'tags___link' |
  'tags___name' |
  'tags___slug' |
  'tags___taxonomy' |
  'tags____links___self' |
  'tags____links___self___href' |
  'tags____links___collection' |
  'tags____links___collection___href' |
  'tags____links___about' |
  'tags____links___about___href' |
  'tags____links___wp_post_type' |
  'tags____links___wp_post_type___href' |
  'tags____links___curies' |
  'tags____links___curies___name' |
  'tags____links___curies___href' |
  'tags____links___curies___templated' |
  'tags___path';

export type Wordpress__Wp_Blog_PostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  guid?: Maybe<StringQueryOperatorInput>,
  modified?: Maybe<DateQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  status?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  content?: Maybe<StringQueryOperatorInput>,
  template?: Maybe<StringQueryOperatorInput>,
  category?: Maybe<Wordpress__Wp_CategoryFilterInput>,
  _links?: Maybe<Wordpress__Wp_Blog_Post_LinksFilterInput>,
  featured_media?: Maybe<Wordpress__Wp_MediaFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  tags?: Maybe<Wordpress__Wp_Post_TagFilterListInput>,
};

export type Wordpress__Wp_Blog_PostGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Wp_Blog_PostEdge>,
  nodes: Array<Wordpress__Wp_Blog_Post>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Blog_PostSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_Blog_PostFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Wp_Category = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<Scalars['String']>,
  wordpress_parent?: Maybe<Scalars['Int']>,
  _links?: Maybe<Wordpress__Wp_Category_Links>,
  path?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Category_Links = {
  self?: Maybe<Array<Maybe<Wordpress__Wp_Category_LinksSelf>>>,
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Category_LinksCollection>>>,
  about?: Maybe<Array<Maybe<Wordpress__Wp_Category_LinksAbout>>>,
  wp_post_type?: Maybe<Array<Maybe<Wordpress__Wp_Category_LinksWp_Post_Type>>>,
  curies?: Maybe<Array<Maybe<Wordpress__Wp_Category_LinksCuries>>>,
};

export type Wordpress__Wp_Category_LinksAbout = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Category_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Category_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Category_LinksAboutFilterInput>,
};

export type Wordpress__Wp_Category_LinksCollection = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Category_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Category_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Category_LinksCollectionFilterInput>,
};

export type Wordpress__Wp_Category_LinksCuries = {
  name?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  templated?: Maybe<Scalars['Boolean']>,
};

export type Wordpress__Wp_Category_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  href?: Maybe<StringQueryOperatorInput>,
  templated?: Maybe<BooleanQueryOperatorInput>,
};

export type Wordpress__Wp_Category_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Category_LinksCuriesFilterInput>,
};

export type Wordpress__Wp_Category_LinksFilterInput = {
  self?: Maybe<Wordpress__Wp_Category_LinksSelfFilterListInput>,
  collection?: Maybe<Wordpress__Wp_Category_LinksCollectionFilterListInput>,
  about?: Maybe<Wordpress__Wp_Category_LinksAboutFilterListInput>,
  wp_post_type?: Maybe<Wordpress__Wp_Category_LinksWp_Post_TypeFilterListInput>,
  curies?: Maybe<Wordpress__Wp_Category_LinksCuriesFilterListInput>,
};

export type Wordpress__Wp_Category_LinksSelf = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Category_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Category_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Category_LinksSelfFilterInput>,
};

export type Wordpress__Wp_Category_LinksWp_Post_Type = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Category_LinksWp_Post_TypeFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Category_LinksWp_Post_TypeFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Category_LinksWp_Post_TypeFilterInput>,
};

export type Wordpress__Wp_CategoryConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Wp_CategoryEdge>,
  nodes: Array<Wordpress__Wp_Category>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Wp_CategoryGroupConnection>,
};


export type Wordpress__Wp_CategoryConnectionDistinctArgs = {
  field: Wordpress__Wp_CategoryFieldsEnum
};


export type Wordpress__Wp_CategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Wp_CategoryFieldsEnum
};

export type Wordpress__Wp_CategoryEdge = {
  next?: Maybe<Wordpress__Wp_Category>,
  node: Wordpress__Wp_Category,
  previous?: Maybe<Wordpress__Wp_Category>,
};

export type Wordpress__Wp_CategoryFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id' |
  'count' |
  'description' |
  'link' |
  'name' |
  'slug' |
  'taxonomy' |
  'wordpress_parent' |
  '_links___self' |
  '_links___self___href' |
  '_links___collection' |
  '_links___collection___href' |
  '_links___about' |
  '_links___about___href' |
  '_links___wp_post_type' |
  '_links___wp_post_type___href' |
  '_links___curies' |
  '_links___curies___name' |
  '_links___curies___href' |
  '_links___curies___templated' |
  'path';

export type Wordpress__Wp_CategoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  count?: Maybe<IntQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  taxonomy?: Maybe<StringQueryOperatorInput>,
  wordpress_parent?: Maybe<IntQueryOperatorInput>,
  _links?: Maybe<Wordpress__Wp_Category_LinksFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_CategoryGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Wp_CategoryEdge>,
  nodes: Array<Wordpress__Wp_Category>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_CategorySortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_CategoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Wp_Lake = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<Scalars['String']>,
  _links?: Maybe<Wordpress__Wp_Lake_Links>,
  path?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Lake_Links = {
  self?: Maybe<Array<Maybe<Wordpress__Wp_Lake_LinksSelf>>>,
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Lake_LinksCollection>>>,
  about?: Maybe<Array<Maybe<Wordpress__Wp_Lake_LinksAbout>>>,
  wp_post_type?: Maybe<Array<Maybe<Wordpress__Wp_Lake_LinksWp_Post_Type>>>,
  curies?: Maybe<Array<Maybe<Wordpress__Wp_Lake_LinksCuries>>>,
};

export type Wordpress__Wp_Lake_LinksAbout = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Lake_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Lake_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Lake_LinksAboutFilterInput>,
};

export type Wordpress__Wp_Lake_LinksCollection = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Lake_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Lake_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Lake_LinksCollectionFilterInput>,
};

export type Wordpress__Wp_Lake_LinksCuries = {
  name?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  templated?: Maybe<Scalars['Boolean']>,
};

export type Wordpress__Wp_Lake_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  href?: Maybe<StringQueryOperatorInput>,
  templated?: Maybe<BooleanQueryOperatorInput>,
};

export type Wordpress__Wp_Lake_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Lake_LinksCuriesFilterInput>,
};

export type Wordpress__Wp_Lake_LinksFilterInput = {
  self?: Maybe<Wordpress__Wp_Lake_LinksSelfFilterListInput>,
  collection?: Maybe<Wordpress__Wp_Lake_LinksCollectionFilterListInput>,
  about?: Maybe<Wordpress__Wp_Lake_LinksAboutFilterListInput>,
  wp_post_type?: Maybe<Wordpress__Wp_Lake_LinksWp_Post_TypeFilterListInput>,
  curies?: Maybe<Wordpress__Wp_Lake_LinksCuriesFilterListInput>,
};

export type Wordpress__Wp_Lake_LinksSelf = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Lake_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Lake_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Lake_LinksSelfFilterInput>,
};

export type Wordpress__Wp_Lake_LinksWp_Post_Type = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Lake_LinksWp_Post_TypeFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Lake_LinksWp_Post_TypeFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Lake_LinksWp_Post_TypeFilterInput>,
};

export type Wordpress__Wp_LakeConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Wp_LakeEdge>,
  nodes: Array<Wordpress__Wp_Lake>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Wp_LakeGroupConnection>,
};


export type Wordpress__Wp_LakeConnectionDistinctArgs = {
  field: Wordpress__Wp_LakeFieldsEnum
};


export type Wordpress__Wp_LakeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Wp_LakeFieldsEnum
};

export type Wordpress__Wp_LakeEdge = {
  next?: Maybe<Wordpress__Wp_Lake>,
  node: Wordpress__Wp_Lake,
  previous?: Maybe<Wordpress__Wp_Lake>,
};

export type Wordpress__Wp_LakeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id' |
  'count' |
  'description' |
  'link' |
  'name' |
  'slug' |
  'taxonomy' |
  '_links___self' |
  '_links___self___href' |
  '_links___collection' |
  '_links___collection___href' |
  '_links___about' |
  '_links___about___href' |
  '_links___wp_post_type' |
  '_links___wp_post_type___href' |
  '_links___curies' |
  '_links___curies___name' |
  '_links___curies___href' |
  '_links___curies___templated' |
  'path';

export type Wordpress__Wp_LakeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  count?: Maybe<IntQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  taxonomy?: Maybe<StringQueryOperatorInput>,
  _links?: Maybe<Wordpress__Wp_Lake_LinksFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_LakeGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Wp_LakeEdge>,
  nodes: Array<Wordpress__Wp_Lake>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_LakeSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_LakeFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Wp_Media = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
  date?: Maybe<Scalars['Date']>,
  guid?: Maybe<Wordpress__Wp_Media>,
  modified?: Maybe<Scalars['Date']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['Int']>,
  comment_status?: Maybe<Scalars['String']>,
  ping_status?: Maybe<Scalars['String']>,
  template?: Maybe<Scalars['String']>,
  meta?: Maybe<Wordpress__Wp_MediaMeta>,
  description?: Maybe<Scalars['String']>,
  caption?: Maybe<Scalars['String']>,
  alt_text?: Maybe<Scalars['String']>,
  media_type?: Maybe<Scalars['String']>,
  mime_type?: Maybe<Scalars['String']>,
  media_details?: Maybe<Wordpress__Wp_MediaMedia_Details>,
  post?: Maybe<Scalars['Int']>,
  source_url?: Maybe<Scalars['String']>,
  _links?: Maybe<Wordpress__Wp_Media_Links>,
  localFile?: Maybe<File>,
  path?: Maybe<Scalars['String']>,
};


export type Wordpress__Wp_MediaDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type Wordpress__Wp_MediaModifiedArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type Wordpress__Wp_Media_Links = {
  self?: Maybe<Array<Maybe<Wordpress__Wp_Media_LinksSelf>>>,
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Media_LinksCollection>>>,
  about?: Maybe<Array<Maybe<Wordpress__Wp_Media_LinksAbout>>>,
  author?: Maybe<Array<Maybe<Wordpress__Wp_Media_LinksAuthor>>>,
  replies?: Maybe<Array<Maybe<Wordpress__Wp_Media_LinksReplies>>>,
};

export type Wordpress__Wp_Media_LinksAbout = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Media_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Media_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Media_LinksAboutFilterInput>,
};

export type Wordpress__Wp_Media_LinksAuthor = {
  embeddable?: Maybe<Scalars['Boolean']>,
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Media_LinksAuthorFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>,
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Media_LinksAuthorFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Media_LinksAuthorFilterInput>,
};

export type Wordpress__Wp_Media_LinksCollection = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Media_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Media_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Media_LinksCollectionFilterInput>,
};

export type Wordpress__Wp_Media_LinksFilterInput = {
  self?: Maybe<Wordpress__Wp_Media_LinksSelfFilterListInput>,
  collection?: Maybe<Wordpress__Wp_Media_LinksCollectionFilterListInput>,
  about?: Maybe<Wordpress__Wp_Media_LinksAboutFilterListInput>,
  author?: Maybe<Wordpress__Wp_Media_LinksAuthorFilterListInput>,
  replies?: Maybe<Wordpress__Wp_Media_LinksRepliesFilterListInput>,
};

export type Wordpress__Wp_Media_LinksReplies = {
  embeddable?: Maybe<Scalars['Boolean']>,
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Media_LinksRepliesFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>,
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Media_LinksRepliesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Media_LinksRepliesFilterInput>,
};

export type Wordpress__Wp_Media_LinksSelf = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Media_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Media_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Media_LinksSelfFilterInput>,
};

export type Wordpress__Wp_MediaConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Wp_MediaEdge>,
  nodes: Array<Wordpress__Wp_Media>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Wp_MediaGroupConnection>,
};


export type Wordpress__Wp_MediaConnectionDistinctArgs = {
  field: Wordpress__Wp_MediaFieldsEnum
};


export type Wordpress__Wp_MediaConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Wp_MediaFieldsEnum
};

export type Wordpress__Wp_MediaEdge = {
  next?: Maybe<Wordpress__Wp_Media>,
  node: Wordpress__Wp_Media,
  previous?: Maybe<Wordpress__Wp_Media>,
};

export type Wordpress__Wp_MediaFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id' |
  'date' |
  'guid___id' |
  'guid___parent___id' |
  'guid___parent___parent___id' |
  'guid___parent___parent___children' |
  'guid___parent___children' |
  'guid___parent___children___id' |
  'guid___parent___children___children' |
  'guid___parent___internal___content' |
  'guid___parent___internal___contentDigest' |
  'guid___parent___internal___description' |
  'guid___parent___internal___fieldOwners' |
  'guid___parent___internal___ignoreType' |
  'guid___parent___internal___mediaType' |
  'guid___parent___internal___owner' |
  'guid___parent___internal___type' |
  'guid___children' |
  'guid___children___id' |
  'guid___children___parent___id' |
  'guid___children___parent___children' |
  'guid___children___children' |
  'guid___children___children___id' |
  'guid___children___children___children' |
  'guid___children___internal___content' |
  'guid___children___internal___contentDigest' |
  'guid___children___internal___description' |
  'guid___children___internal___fieldOwners' |
  'guid___children___internal___ignoreType' |
  'guid___children___internal___mediaType' |
  'guid___children___internal___owner' |
  'guid___children___internal___type' |
  'guid___internal___content' |
  'guid___internal___contentDigest' |
  'guid___internal___description' |
  'guid___internal___fieldOwners' |
  'guid___internal___ignoreType' |
  'guid___internal___mediaType' |
  'guid___internal___owner' |
  'guid___internal___type' |
  'guid___wordpress_id' |
  'guid___date' |
  'guid___guid___id' |
  'guid___guid___parent___id' |
  'guid___guid___parent___children' |
  'guid___guid___children' |
  'guid___guid___children___id' |
  'guid___guid___children___children' |
  'guid___guid___internal___content' |
  'guid___guid___internal___contentDigest' |
  'guid___guid___internal___description' |
  'guid___guid___internal___fieldOwners' |
  'guid___guid___internal___ignoreType' |
  'guid___guid___internal___mediaType' |
  'guid___guid___internal___owner' |
  'guid___guid___internal___type' |
  'guid___guid___wordpress_id' |
  'guid___guid___date' |
  'guid___guid___guid___id' |
  'guid___guid___guid___children' |
  'guid___guid___guid___wordpress_id' |
  'guid___guid___guid___date' |
  'guid___guid___guid___modified' |
  'guid___guid___guid___slug' |
  'guid___guid___guid___status' |
  'guid___guid___guid___type' |
  'guid___guid___guid___link' |
  'guid___guid___guid___title' |
  'guid___guid___guid___author' |
  'guid___guid___guid___comment_status' |
  'guid___guid___guid___ping_status' |
  'guid___guid___guid___template' |
  'guid___guid___guid___description' |
  'guid___guid___guid___caption' |
  'guid___guid___guid___alt_text' |
  'guid___guid___guid___media_type' |
  'guid___guid___guid___mime_type' |
  'guid___guid___guid___post' |
  'guid___guid___guid___source_url' |
  'guid___guid___guid___path' |
  'guid___guid___modified' |
  'guid___guid___slug' |
  'guid___guid___status' |
  'guid___guid___type' |
  'guid___guid___link' |
  'guid___guid___title' |
  'guid___guid___author' |
  'guid___guid___comment_status' |
  'guid___guid___ping_status' |
  'guid___guid___template' |
  'guid___guid___meta___lbn_published_stage' |
  'guid___guid___meta___lbn_published_production' |
  'guid___guid___description' |
  'guid___guid___caption' |
  'guid___guid___alt_text' |
  'guid___guid___media_type' |
  'guid___guid___mime_type' |
  'guid___guid___media_details___width' |
  'guid___guid___media_details___height' |
  'guid___guid___media_details___file' |
  'guid___guid___media_details___dummy' |
  'guid___guid___post' |
  'guid___guid___source_url' |
  'guid___guid____links___self' |
  'guid___guid____links___collection' |
  'guid___guid____links___about' |
  'guid___guid____links___author' |
  'guid___guid____links___replies' |
  'guid___guid___localFile___sourceInstanceName' |
  'guid___guid___localFile___absolutePath' |
  'guid___guid___localFile___relativePath' |
  'guid___guid___localFile___extension' |
  'guid___guid___localFile___size' |
  'guid___guid___localFile___prettySize' |
  'guid___guid___localFile___modifiedTime' |
  'guid___guid___localFile___accessTime' |
  'guid___guid___localFile___changeTime' |
  'guid___guid___localFile___birthTime' |
  'guid___guid___localFile___root' |
  'guid___guid___localFile___dir' |
  'guid___guid___localFile___base' |
  'guid___guid___localFile___ext' |
  'guid___guid___localFile___name' |
  'guid___guid___localFile___relativeDirectory' |
  'guid___guid___localFile___dev' |
  'guid___guid___localFile___mode' |
  'guid___guid___localFile___nlink' |
  'guid___guid___localFile___uid' |
  'guid___guid___localFile___gid' |
  'guid___guid___localFile___rdev' |
  'guid___guid___localFile___ino' |
  'guid___guid___localFile___atimeMs' |
  'guid___guid___localFile___mtimeMs' |
  'guid___guid___localFile___ctimeMs' |
  'guid___guid___localFile___atime' |
  'guid___guid___localFile___mtime' |
  'guid___guid___localFile___ctime' |
  'guid___guid___localFile___birthtime' |
  'guid___guid___localFile___birthtimeMs' |
  'guid___guid___localFile___blksize' |
  'guid___guid___localFile___blocks' |
  'guid___guid___localFile___url' |
  'guid___guid___localFile___publicURL' |
  'guid___guid___localFile___id' |
  'guid___guid___localFile___children' |
  'guid___guid___localFile___childrenTestimonialsJson' |
  'guid___guid___localFile___childrenTeamJson' |
  'guid___guid___path' |
  'guid___modified' |
  'guid___slug' |
  'guid___status' |
  'guid___type' |
  'guid___link' |
  'guid___title' |
  'guid___author' |
  'guid___comment_status' |
  'guid___ping_status' |
  'guid___template' |
  'guid___meta___lbn_published_stage' |
  'guid___meta___lbn_published_production' |
  'guid___description' |
  'guid___caption' |
  'guid___alt_text' |
  'guid___media_type' |
  'guid___mime_type' |
  'guid___media_details___width' |
  'guid___media_details___height' |
  'guid___media_details___file' |
  'guid___media_details___image_meta___aperture' |
  'guid___media_details___image_meta___credit' |
  'guid___media_details___image_meta___camera' |
  'guid___media_details___image_meta___caption' |
  'guid___media_details___image_meta___created_timestamp' |
  'guid___media_details___image_meta___copyright' |
  'guid___media_details___image_meta___focal_length' |
  'guid___media_details___image_meta___iso' |
  'guid___media_details___image_meta___shutter_speed' |
  'guid___media_details___image_meta___title' |
  'guid___media_details___image_meta___orientation' |
  'guid___media_details___dummy' |
  'guid___post' |
  'guid___source_url' |
  'guid____links___self' |
  'guid____links___self___href' |
  'guid____links___collection' |
  'guid____links___collection___href' |
  'guid____links___about' |
  'guid____links___about___href' |
  'guid____links___author' |
  'guid____links___author___embeddable' |
  'guid____links___author___href' |
  'guid____links___replies' |
  'guid____links___replies___embeddable' |
  'guid____links___replies___href' |
  'guid___localFile___sourceInstanceName' |
  'guid___localFile___absolutePath' |
  'guid___localFile___relativePath' |
  'guid___localFile___extension' |
  'guid___localFile___size' |
  'guid___localFile___prettySize' |
  'guid___localFile___modifiedTime' |
  'guid___localFile___accessTime' |
  'guid___localFile___changeTime' |
  'guid___localFile___birthTime' |
  'guid___localFile___root' |
  'guid___localFile___dir' |
  'guid___localFile___base' |
  'guid___localFile___ext' |
  'guid___localFile___name' |
  'guid___localFile___relativeDirectory' |
  'guid___localFile___dev' |
  'guid___localFile___mode' |
  'guid___localFile___nlink' |
  'guid___localFile___uid' |
  'guid___localFile___gid' |
  'guid___localFile___rdev' |
  'guid___localFile___ino' |
  'guid___localFile___atimeMs' |
  'guid___localFile___mtimeMs' |
  'guid___localFile___ctimeMs' |
  'guid___localFile___atime' |
  'guid___localFile___mtime' |
  'guid___localFile___ctime' |
  'guid___localFile___birthtime' |
  'guid___localFile___birthtimeMs' |
  'guid___localFile___blksize' |
  'guid___localFile___blocks' |
  'guid___localFile___url' |
  'guid___localFile___publicURL' |
  'guid___localFile___childImageSharp___id' |
  'guid___localFile___childImageSharp___children' |
  'guid___localFile___id' |
  'guid___localFile___parent___id' |
  'guid___localFile___parent___children' |
  'guid___localFile___children' |
  'guid___localFile___children___id' |
  'guid___localFile___children___children' |
  'guid___localFile___internal___content' |
  'guid___localFile___internal___contentDigest' |
  'guid___localFile___internal___description' |
  'guid___localFile___internal___fieldOwners' |
  'guid___localFile___internal___ignoreType' |
  'guid___localFile___internal___mediaType' |
  'guid___localFile___internal___owner' |
  'guid___localFile___internal___type' |
  'guid___localFile___childrenTestimonialsJson' |
  'guid___localFile___childrenTestimonialsJson___id' |
  'guid___localFile___childrenTestimonialsJson___children' |
  'guid___localFile___childrenTestimonialsJson___body' |
  'guid___localFile___childrenTestimonialsJson___rating' |
  'guid___localFile___childrenTestimonialsJson___author' |
  'guid___localFile___childrenTeamJson' |
  'guid___localFile___childrenTeamJson___id' |
  'guid___localFile___childrenTeamJson___children' |
  'guid___localFile___childrenTeamJson___name' |
  'guid___localFile___childrenTeamJson___title' |
  'guid___localFile___childrenTeamJson___bio' |
  'guid___path' |
  'modified' |
  'slug' |
  'status' |
  'type' |
  'link' |
  'title' |
  'author' |
  'comment_status' |
  'ping_status' |
  'template' |
  'meta___lbn_published_stage' |
  'meta___lbn_published_production' |
  'description' |
  'caption' |
  'alt_text' |
  'media_type' |
  'mime_type' |
  'media_details___width' |
  'media_details___height' |
  'media_details___file' |
  'media_details___image_meta___aperture' |
  'media_details___image_meta___credit' |
  'media_details___image_meta___camera' |
  'media_details___image_meta___caption' |
  'media_details___image_meta___created_timestamp' |
  'media_details___image_meta___copyright' |
  'media_details___image_meta___focal_length' |
  'media_details___image_meta___iso' |
  'media_details___image_meta___shutter_speed' |
  'media_details___image_meta___title' |
  'media_details___image_meta___orientation' |
  'media_details___dummy' |
  'post' |
  'source_url' |
  '_links___self' |
  '_links___self___href' |
  '_links___collection' |
  '_links___collection___href' |
  '_links___about' |
  '_links___about___href' |
  '_links___author' |
  '_links___author___embeddable' |
  '_links___author___href' |
  '_links___replies' |
  '_links___replies___embeddable' |
  '_links___replies___href' |
  'localFile___sourceInstanceName' |
  'localFile___absolutePath' |
  'localFile___relativePath' |
  'localFile___extension' |
  'localFile___size' |
  'localFile___prettySize' |
  'localFile___modifiedTime' |
  'localFile___accessTime' |
  'localFile___changeTime' |
  'localFile___birthTime' |
  'localFile___root' |
  'localFile___dir' |
  'localFile___base' |
  'localFile___ext' |
  'localFile___name' |
  'localFile___relativeDirectory' |
  'localFile___dev' |
  'localFile___mode' |
  'localFile___nlink' |
  'localFile___uid' |
  'localFile___gid' |
  'localFile___rdev' |
  'localFile___ino' |
  'localFile___atimeMs' |
  'localFile___mtimeMs' |
  'localFile___ctimeMs' |
  'localFile___atime' |
  'localFile___mtime' |
  'localFile___ctime' |
  'localFile___birthtime' |
  'localFile___birthtimeMs' |
  'localFile___blksize' |
  'localFile___blocks' |
  'localFile___url' |
  'localFile___publicURL' |
  'localFile___childImageSharp___fixed___base64' |
  'localFile___childImageSharp___fixed___tracedSVG' |
  'localFile___childImageSharp___fixed___aspectRatio' |
  'localFile___childImageSharp___fixed___width' |
  'localFile___childImageSharp___fixed___height' |
  'localFile___childImageSharp___fixed___src' |
  'localFile___childImageSharp___fixed___srcSet' |
  'localFile___childImageSharp___fixed___srcWebp' |
  'localFile___childImageSharp___fixed___srcSetWebp' |
  'localFile___childImageSharp___fixed___originalName' |
  'localFile___childImageSharp___resolutions___base64' |
  'localFile___childImageSharp___resolutions___tracedSVG' |
  'localFile___childImageSharp___resolutions___aspectRatio' |
  'localFile___childImageSharp___resolutions___width' |
  'localFile___childImageSharp___resolutions___height' |
  'localFile___childImageSharp___resolutions___src' |
  'localFile___childImageSharp___resolutions___srcSet' |
  'localFile___childImageSharp___resolutions___srcWebp' |
  'localFile___childImageSharp___resolutions___srcSetWebp' |
  'localFile___childImageSharp___resolutions___originalName' |
  'localFile___childImageSharp___fluid___base64' |
  'localFile___childImageSharp___fluid___tracedSVG' |
  'localFile___childImageSharp___fluid___aspectRatio' |
  'localFile___childImageSharp___fluid___src' |
  'localFile___childImageSharp___fluid___srcSet' |
  'localFile___childImageSharp___fluid___srcWebp' |
  'localFile___childImageSharp___fluid___srcSetWebp' |
  'localFile___childImageSharp___fluid___sizes' |
  'localFile___childImageSharp___fluid___originalImg' |
  'localFile___childImageSharp___fluid___originalName' |
  'localFile___childImageSharp___fluid___presentationWidth' |
  'localFile___childImageSharp___fluid___presentationHeight' |
  'localFile___childImageSharp___sizes___base64' |
  'localFile___childImageSharp___sizes___tracedSVG' |
  'localFile___childImageSharp___sizes___aspectRatio' |
  'localFile___childImageSharp___sizes___src' |
  'localFile___childImageSharp___sizes___srcSet' |
  'localFile___childImageSharp___sizes___srcWebp' |
  'localFile___childImageSharp___sizes___srcSetWebp' |
  'localFile___childImageSharp___sizes___sizes' |
  'localFile___childImageSharp___sizes___originalImg' |
  'localFile___childImageSharp___sizes___originalName' |
  'localFile___childImageSharp___sizes___presentationWidth' |
  'localFile___childImageSharp___sizes___presentationHeight' |
  'localFile___childImageSharp___original___width' |
  'localFile___childImageSharp___original___height' |
  'localFile___childImageSharp___original___src' |
  'localFile___childImageSharp___resize___src' |
  'localFile___childImageSharp___resize___tracedSVG' |
  'localFile___childImageSharp___resize___width' |
  'localFile___childImageSharp___resize___height' |
  'localFile___childImageSharp___resize___aspectRatio' |
  'localFile___childImageSharp___resize___originalName' |
  'localFile___childImageSharp___id' |
  'localFile___childImageSharp___parent___id' |
  'localFile___childImageSharp___parent___children' |
  'localFile___childImageSharp___children' |
  'localFile___childImageSharp___children___id' |
  'localFile___childImageSharp___children___children' |
  'localFile___childImageSharp___internal___content' |
  'localFile___childImageSharp___internal___contentDigest' |
  'localFile___childImageSharp___internal___description' |
  'localFile___childImageSharp___internal___fieldOwners' |
  'localFile___childImageSharp___internal___ignoreType' |
  'localFile___childImageSharp___internal___mediaType' |
  'localFile___childImageSharp___internal___owner' |
  'localFile___childImageSharp___internal___type' |
  'localFile___id' |
  'localFile___parent___id' |
  'localFile___parent___parent___id' |
  'localFile___parent___parent___children' |
  'localFile___parent___children' |
  'localFile___parent___children___id' |
  'localFile___parent___children___children' |
  'localFile___parent___internal___content' |
  'localFile___parent___internal___contentDigest' |
  'localFile___parent___internal___description' |
  'localFile___parent___internal___fieldOwners' |
  'localFile___parent___internal___ignoreType' |
  'localFile___parent___internal___mediaType' |
  'localFile___parent___internal___owner' |
  'localFile___parent___internal___type' |
  'localFile___children' |
  'localFile___children___id' |
  'localFile___children___parent___id' |
  'localFile___children___parent___children' |
  'localFile___children___children' |
  'localFile___children___children___id' |
  'localFile___children___children___children' |
  'localFile___children___internal___content' |
  'localFile___children___internal___contentDigest' |
  'localFile___children___internal___description' |
  'localFile___children___internal___fieldOwners' |
  'localFile___children___internal___ignoreType' |
  'localFile___children___internal___mediaType' |
  'localFile___children___internal___owner' |
  'localFile___children___internal___type' |
  'localFile___internal___content' |
  'localFile___internal___contentDigest' |
  'localFile___internal___description' |
  'localFile___internal___fieldOwners' |
  'localFile___internal___ignoreType' |
  'localFile___internal___mediaType' |
  'localFile___internal___owner' |
  'localFile___internal___type' |
  'localFile___childrenTestimonialsJson' |
  'localFile___childrenTestimonialsJson___id' |
  'localFile___childrenTestimonialsJson___parent___id' |
  'localFile___childrenTestimonialsJson___parent___children' |
  'localFile___childrenTestimonialsJson___children' |
  'localFile___childrenTestimonialsJson___children___id' |
  'localFile___childrenTestimonialsJson___children___children' |
  'localFile___childrenTestimonialsJson___internal___content' |
  'localFile___childrenTestimonialsJson___internal___contentDigest' |
  'localFile___childrenTestimonialsJson___internal___description' |
  'localFile___childrenTestimonialsJson___internal___fieldOwners' |
  'localFile___childrenTestimonialsJson___internal___ignoreType' |
  'localFile___childrenTestimonialsJson___internal___mediaType' |
  'localFile___childrenTestimonialsJson___internal___owner' |
  'localFile___childrenTestimonialsJson___internal___type' |
  'localFile___childrenTestimonialsJson___body' |
  'localFile___childrenTestimonialsJson___rating' |
  'localFile___childrenTestimonialsJson___author' |
  'localFile___childrenTestimonialsJson___property___name' |
  'localFile___childrenTestimonialsJson___property___location' |
  'localFile___childrenTeamJson' |
  'localFile___childrenTeamJson___id' |
  'localFile___childrenTeamJson___parent___id' |
  'localFile___childrenTeamJson___parent___children' |
  'localFile___childrenTeamJson___children' |
  'localFile___childrenTeamJson___children___id' |
  'localFile___childrenTeamJson___children___children' |
  'localFile___childrenTeamJson___internal___content' |
  'localFile___childrenTeamJson___internal___contentDigest' |
  'localFile___childrenTeamJson___internal___description' |
  'localFile___childrenTeamJson___internal___fieldOwners' |
  'localFile___childrenTeamJson___internal___ignoreType' |
  'localFile___childrenTeamJson___internal___mediaType' |
  'localFile___childrenTeamJson___internal___owner' |
  'localFile___childrenTeamJson___internal___type' |
  'localFile___childrenTeamJson___name' |
  'localFile___childrenTeamJson___title' |
  'localFile___childrenTeamJson___picture___sourceInstanceName' |
  'localFile___childrenTeamJson___picture___absolutePath' |
  'localFile___childrenTeamJson___picture___relativePath' |
  'localFile___childrenTeamJson___picture___extension' |
  'localFile___childrenTeamJson___picture___size' |
  'localFile___childrenTeamJson___picture___prettySize' |
  'localFile___childrenTeamJson___picture___modifiedTime' |
  'localFile___childrenTeamJson___picture___accessTime' |
  'localFile___childrenTeamJson___picture___changeTime' |
  'localFile___childrenTeamJson___picture___birthTime' |
  'localFile___childrenTeamJson___picture___root' |
  'localFile___childrenTeamJson___picture___dir' |
  'localFile___childrenTeamJson___picture___base' |
  'localFile___childrenTeamJson___picture___ext' |
  'localFile___childrenTeamJson___picture___name' |
  'localFile___childrenTeamJson___picture___relativeDirectory' |
  'localFile___childrenTeamJson___picture___dev' |
  'localFile___childrenTeamJson___picture___mode' |
  'localFile___childrenTeamJson___picture___nlink' |
  'localFile___childrenTeamJson___picture___uid' |
  'localFile___childrenTeamJson___picture___gid' |
  'localFile___childrenTeamJson___picture___rdev' |
  'localFile___childrenTeamJson___picture___ino' |
  'localFile___childrenTeamJson___picture___atimeMs' |
  'localFile___childrenTeamJson___picture___mtimeMs' |
  'localFile___childrenTeamJson___picture___ctimeMs' |
  'localFile___childrenTeamJson___picture___atime' |
  'localFile___childrenTeamJson___picture___mtime' |
  'localFile___childrenTeamJson___picture___ctime' |
  'localFile___childrenTeamJson___picture___birthtime' |
  'localFile___childrenTeamJson___picture___birthtimeMs' |
  'localFile___childrenTeamJson___picture___blksize' |
  'localFile___childrenTeamJson___picture___blocks' |
  'localFile___childrenTeamJson___picture___url' |
  'localFile___childrenTeamJson___picture___publicURL' |
  'localFile___childrenTeamJson___picture___id' |
  'localFile___childrenTeamJson___picture___children' |
  'localFile___childrenTeamJson___picture___childrenTestimonialsJson' |
  'localFile___childrenTeamJson___picture___childrenTeamJson' |
  'localFile___childrenTeamJson___bio' |
  'path';

export type Wordpress__Wp_MediaFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  guid?: Maybe<Wordpress__Wp_MediaFilterInput>,
  modified?: Maybe<DateQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  status?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<IntQueryOperatorInput>,
  comment_status?: Maybe<StringQueryOperatorInput>,
  ping_status?: Maybe<StringQueryOperatorInput>,
  template?: Maybe<StringQueryOperatorInput>,
  meta?: Maybe<Wordpress__Wp_MediaMetaFilterInput>,
  description?: Maybe<StringQueryOperatorInput>,
  caption?: Maybe<StringQueryOperatorInput>,
  alt_text?: Maybe<StringQueryOperatorInput>,
  media_type?: Maybe<StringQueryOperatorInput>,
  mime_type?: Maybe<StringQueryOperatorInput>,
  media_details?: Maybe<Wordpress__Wp_MediaMedia_DetailsFilterInput>,
  post?: Maybe<IntQueryOperatorInput>,
  source_url?: Maybe<StringQueryOperatorInput>,
  _links?: Maybe<Wordpress__Wp_Media_LinksFilterInput>,
  localFile?: Maybe<FileFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_MediaGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Wp_MediaEdge>,
  nodes: Array<Wordpress__Wp_Media>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_MediaMedia_Details = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  file?: Maybe<Scalars['String']>,
  image_meta?: Maybe<Wordpress__Wp_MediaMedia_DetailsImage_Meta>,
  dummy?: Maybe<Scalars['Boolean']>,
};

export type Wordpress__Wp_MediaMedia_DetailsFilterInput = {
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  file?: Maybe<StringQueryOperatorInput>,
  image_meta?: Maybe<Wordpress__Wp_MediaMedia_DetailsImage_MetaFilterInput>,
  dummy?: Maybe<BooleanQueryOperatorInput>,
};

export type Wordpress__Wp_MediaMedia_DetailsImage_Meta = {
  aperture?: Maybe<Scalars['String']>,
  credit?: Maybe<Scalars['String']>,
  camera?: Maybe<Scalars['String']>,
  caption?: Maybe<Scalars['String']>,
  created_timestamp?: Maybe<Scalars['String']>,
  copyright?: Maybe<Scalars['String']>,
  focal_length?: Maybe<Scalars['String']>,
  iso?: Maybe<Scalars['String']>,
  shutter_speed?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  orientation?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_MediaMedia_DetailsImage_MetaFilterInput = {
  aperture?: Maybe<StringQueryOperatorInput>,
  credit?: Maybe<StringQueryOperatorInput>,
  camera?: Maybe<StringQueryOperatorInput>,
  caption?: Maybe<StringQueryOperatorInput>,
  created_timestamp?: Maybe<StringQueryOperatorInput>,
  copyright?: Maybe<StringQueryOperatorInput>,
  focal_length?: Maybe<StringQueryOperatorInput>,
  iso?: Maybe<StringQueryOperatorInput>,
  shutter_speed?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  orientation?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_MediaMeta = {
  lbn_published_stage?: Maybe<Scalars['Boolean']>,
  lbn_published_production?: Maybe<Scalars['Boolean']>,
};

export type Wordpress__Wp_MediaMetaFilterInput = {
  lbn_published_stage?: Maybe<BooleanQueryOperatorInput>,
  lbn_published_production?: Maybe<BooleanQueryOperatorInput>,
};

export type Wordpress__Wp_MediaSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_MediaFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Wp_Page_Content = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
  date?: Maybe<Scalars['Date']>,
  guid?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Date']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  template?: Maybe<Scalars['String']>,
  acf?: Maybe<Wordpress__Wp_Page_ContentAcf>,
  _links?: Maybe<Wordpress__Wp_Page_Content_Links>,
  featured_media?: Maybe<Wordpress__Wp_Media>,
  path?: Maybe<Scalars['String']>,
};


export type Wordpress__Wp_Page_ContentDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type Wordpress__Wp_Page_ContentModifiedArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type Wordpress__Wp_Page_Content_Links = {
  self?: Maybe<Array<Maybe<Wordpress__Wp_Page_Content_LinksSelf>>>,
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Page_Content_LinksCollection>>>,
  about?: Maybe<Array<Maybe<Wordpress__Wp_Page_Content_LinksAbout>>>,
  wp_featuredmedia?: Maybe<Array<Maybe<Wordpress__Wp_Page_Content_LinksWp_Featuredmedia>>>,
  wp_attachment?: Maybe<Array<Maybe<Wordpress__Wp_Page_Content_LinksWp_Attachment>>>,
  curies?: Maybe<Array<Maybe<Wordpress__Wp_Page_Content_LinksCuries>>>,
};

export type Wordpress__Wp_Page_Content_LinksAbout = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Page_Content_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Page_Content_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Page_Content_LinksAboutFilterInput>,
};

export type Wordpress__Wp_Page_Content_LinksCollection = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Page_Content_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Page_Content_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Page_Content_LinksCollectionFilterInput>,
};

export type Wordpress__Wp_Page_Content_LinksCuries = {
  name?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  templated?: Maybe<Scalars['Boolean']>,
};

export type Wordpress__Wp_Page_Content_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  href?: Maybe<StringQueryOperatorInput>,
  templated?: Maybe<BooleanQueryOperatorInput>,
};

export type Wordpress__Wp_Page_Content_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Page_Content_LinksCuriesFilterInput>,
};

export type Wordpress__Wp_Page_Content_LinksFilterInput = {
  self?: Maybe<Wordpress__Wp_Page_Content_LinksSelfFilterListInput>,
  collection?: Maybe<Wordpress__Wp_Page_Content_LinksCollectionFilterListInput>,
  about?: Maybe<Wordpress__Wp_Page_Content_LinksAboutFilterListInput>,
  wp_featuredmedia?: Maybe<Wordpress__Wp_Page_Content_LinksWp_FeaturedmediaFilterListInput>,
  wp_attachment?: Maybe<Wordpress__Wp_Page_Content_LinksWp_AttachmentFilterListInput>,
  curies?: Maybe<Wordpress__Wp_Page_Content_LinksCuriesFilterListInput>,
};

export type Wordpress__Wp_Page_Content_LinksSelf = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Page_Content_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Page_Content_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Page_Content_LinksSelfFilterInput>,
};

export type Wordpress__Wp_Page_Content_LinksWp_Attachment = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Page_Content_LinksWp_AttachmentFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Page_Content_LinksWp_AttachmentFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Page_Content_LinksWp_AttachmentFilterInput>,
};

export type Wordpress__Wp_Page_Content_LinksWp_Featuredmedia = {
  embeddable?: Maybe<Scalars['Boolean']>,
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Page_Content_LinksWp_FeaturedmediaFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>,
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Page_Content_LinksWp_FeaturedmediaFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Page_Content_LinksWp_FeaturedmediaFilterInput>,
};

export type Wordpress__Wp_Page_ContentAcf = {
  concierge_services?: Maybe<Array<Maybe<Wordpress__Wp_Page_ContentAcfConcierge_Services>>>,
};

export type Wordpress__Wp_Page_ContentAcfConcierge_Services = {
  service?: Maybe<Scalars['String']>,
  image?: Maybe<Wordpress__Wp_Media>,
};

export type Wordpress__Wp_Page_ContentAcfConcierge_ServicesFilterInput = {
  service?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<Wordpress__Wp_MediaFilterInput>,
};

export type Wordpress__Wp_Page_ContentAcfConcierge_ServicesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Page_ContentAcfConcierge_ServicesFilterInput>,
};

export type Wordpress__Wp_Page_ContentAcfFilterInput = {
  concierge_services?: Maybe<Wordpress__Wp_Page_ContentAcfConcierge_ServicesFilterListInput>,
};

export type Wordpress__Wp_Page_ContentConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Wp_Page_ContentEdge>,
  nodes: Array<Wordpress__Wp_Page_Content>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Wp_Page_ContentGroupConnection>,
};


export type Wordpress__Wp_Page_ContentConnectionDistinctArgs = {
  field: Wordpress__Wp_Page_ContentFieldsEnum
};


export type Wordpress__Wp_Page_ContentConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Wp_Page_ContentFieldsEnum
};

export type Wordpress__Wp_Page_ContentEdge = {
  next?: Maybe<Wordpress__Wp_Page_Content>,
  node: Wordpress__Wp_Page_Content,
  previous?: Maybe<Wordpress__Wp_Page_Content>,
};

export type Wordpress__Wp_Page_ContentFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id' |
  'date' |
  'guid' |
  'modified' |
  'slug' |
  'status' |
  'type' |
  'link' |
  'title' |
  'content' |
  'template' |
  'acf___concierge_services' |
  'acf___concierge_services___service' |
  'acf___concierge_services___image___id' |
  'acf___concierge_services___image___children' |
  'acf___concierge_services___image___wordpress_id' |
  'acf___concierge_services___image___date' |
  'acf___concierge_services___image___modified' |
  'acf___concierge_services___image___slug' |
  'acf___concierge_services___image___status' |
  'acf___concierge_services___image___type' |
  'acf___concierge_services___image___link' |
  'acf___concierge_services___image___title' |
  'acf___concierge_services___image___author' |
  'acf___concierge_services___image___comment_status' |
  'acf___concierge_services___image___ping_status' |
  'acf___concierge_services___image___template' |
  'acf___concierge_services___image___description' |
  'acf___concierge_services___image___caption' |
  'acf___concierge_services___image___alt_text' |
  'acf___concierge_services___image___media_type' |
  'acf___concierge_services___image___mime_type' |
  'acf___concierge_services___image___post' |
  'acf___concierge_services___image___source_url' |
  'acf___concierge_services___image___path' |
  '_links___self' |
  '_links___self___href' |
  '_links___collection' |
  '_links___collection___href' |
  '_links___about' |
  '_links___about___href' |
  '_links___wp_featuredmedia' |
  '_links___wp_featuredmedia___embeddable' |
  '_links___wp_featuredmedia___href' |
  '_links___wp_attachment' |
  '_links___wp_attachment___href' |
  '_links___curies' |
  '_links___curies___name' |
  '_links___curies___href' |
  '_links___curies___templated' |
  'featured_media___id' |
  'featured_media___parent___id' |
  'featured_media___parent___parent___id' |
  'featured_media___parent___parent___children' |
  'featured_media___parent___children' |
  'featured_media___parent___children___id' |
  'featured_media___parent___children___children' |
  'featured_media___parent___internal___content' |
  'featured_media___parent___internal___contentDigest' |
  'featured_media___parent___internal___description' |
  'featured_media___parent___internal___fieldOwners' |
  'featured_media___parent___internal___ignoreType' |
  'featured_media___parent___internal___mediaType' |
  'featured_media___parent___internal___owner' |
  'featured_media___parent___internal___type' |
  'featured_media___children' |
  'featured_media___children___id' |
  'featured_media___children___parent___id' |
  'featured_media___children___parent___children' |
  'featured_media___children___children' |
  'featured_media___children___children___id' |
  'featured_media___children___children___children' |
  'featured_media___children___internal___content' |
  'featured_media___children___internal___contentDigest' |
  'featured_media___children___internal___description' |
  'featured_media___children___internal___fieldOwners' |
  'featured_media___children___internal___ignoreType' |
  'featured_media___children___internal___mediaType' |
  'featured_media___children___internal___owner' |
  'featured_media___children___internal___type' |
  'featured_media___internal___content' |
  'featured_media___internal___contentDigest' |
  'featured_media___internal___description' |
  'featured_media___internal___fieldOwners' |
  'featured_media___internal___ignoreType' |
  'featured_media___internal___mediaType' |
  'featured_media___internal___owner' |
  'featured_media___internal___type' |
  'featured_media___wordpress_id' |
  'featured_media___date' |
  'featured_media___guid___id' |
  'featured_media___guid___parent___id' |
  'featured_media___guid___parent___children' |
  'featured_media___guid___children' |
  'featured_media___guid___children___id' |
  'featured_media___guid___children___children' |
  'featured_media___guid___internal___content' |
  'featured_media___guid___internal___contentDigest' |
  'featured_media___guid___internal___description' |
  'featured_media___guid___internal___fieldOwners' |
  'featured_media___guid___internal___ignoreType' |
  'featured_media___guid___internal___mediaType' |
  'featured_media___guid___internal___owner' |
  'featured_media___guid___internal___type' |
  'featured_media___guid___wordpress_id' |
  'featured_media___guid___date' |
  'featured_media___guid___guid___id' |
  'featured_media___guid___guid___children' |
  'featured_media___guid___guid___wordpress_id' |
  'featured_media___guid___guid___date' |
  'featured_media___guid___guid___modified' |
  'featured_media___guid___guid___slug' |
  'featured_media___guid___guid___status' |
  'featured_media___guid___guid___type' |
  'featured_media___guid___guid___link' |
  'featured_media___guid___guid___title' |
  'featured_media___guid___guid___author' |
  'featured_media___guid___guid___comment_status' |
  'featured_media___guid___guid___ping_status' |
  'featured_media___guid___guid___template' |
  'featured_media___guid___guid___description' |
  'featured_media___guid___guid___caption' |
  'featured_media___guid___guid___alt_text' |
  'featured_media___guid___guid___media_type' |
  'featured_media___guid___guid___mime_type' |
  'featured_media___guid___guid___post' |
  'featured_media___guid___guid___source_url' |
  'featured_media___guid___guid___path' |
  'featured_media___guid___modified' |
  'featured_media___guid___slug' |
  'featured_media___guid___status' |
  'featured_media___guid___type' |
  'featured_media___guid___link' |
  'featured_media___guid___title' |
  'featured_media___guid___author' |
  'featured_media___guid___comment_status' |
  'featured_media___guid___ping_status' |
  'featured_media___guid___template' |
  'featured_media___guid___meta___lbn_published_stage' |
  'featured_media___guid___meta___lbn_published_production' |
  'featured_media___guid___description' |
  'featured_media___guid___caption' |
  'featured_media___guid___alt_text' |
  'featured_media___guid___media_type' |
  'featured_media___guid___mime_type' |
  'featured_media___guid___media_details___width' |
  'featured_media___guid___media_details___height' |
  'featured_media___guid___media_details___file' |
  'featured_media___guid___media_details___dummy' |
  'featured_media___guid___post' |
  'featured_media___guid___source_url' |
  'featured_media___guid____links___self' |
  'featured_media___guid____links___collection' |
  'featured_media___guid____links___about' |
  'featured_media___guid____links___author' |
  'featured_media___guid____links___replies' |
  'featured_media___guid___localFile___sourceInstanceName' |
  'featured_media___guid___localFile___absolutePath' |
  'featured_media___guid___localFile___relativePath' |
  'featured_media___guid___localFile___extension' |
  'featured_media___guid___localFile___size' |
  'featured_media___guid___localFile___prettySize' |
  'featured_media___guid___localFile___modifiedTime' |
  'featured_media___guid___localFile___accessTime' |
  'featured_media___guid___localFile___changeTime' |
  'featured_media___guid___localFile___birthTime' |
  'featured_media___guid___localFile___root' |
  'featured_media___guid___localFile___dir' |
  'featured_media___guid___localFile___base' |
  'featured_media___guid___localFile___ext' |
  'featured_media___guid___localFile___name' |
  'featured_media___guid___localFile___relativeDirectory' |
  'featured_media___guid___localFile___dev' |
  'featured_media___guid___localFile___mode' |
  'featured_media___guid___localFile___nlink' |
  'featured_media___guid___localFile___uid' |
  'featured_media___guid___localFile___gid' |
  'featured_media___guid___localFile___rdev' |
  'featured_media___guid___localFile___ino' |
  'featured_media___guid___localFile___atimeMs' |
  'featured_media___guid___localFile___mtimeMs' |
  'featured_media___guid___localFile___ctimeMs' |
  'featured_media___guid___localFile___atime' |
  'featured_media___guid___localFile___mtime' |
  'featured_media___guid___localFile___ctime' |
  'featured_media___guid___localFile___birthtime' |
  'featured_media___guid___localFile___birthtimeMs' |
  'featured_media___guid___localFile___blksize' |
  'featured_media___guid___localFile___blocks' |
  'featured_media___guid___localFile___url' |
  'featured_media___guid___localFile___publicURL' |
  'featured_media___guid___localFile___id' |
  'featured_media___guid___localFile___children' |
  'featured_media___guid___localFile___childrenTestimonialsJson' |
  'featured_media___guid___localFile___childrenTeamJson' |
  'featured_media___guid___path' |
  'featured_media___modified' |
  'featured_media___slug' |
  'featured_media___status' |
  'featured_media___type' |
  'featured_media___link' |
  'featured_media___title' |
  'featured_media___author' |
  'featured_media___comment_status' |
  'featured_media___ping_status' |
  'featured_media___template' |
  'featured_media___meta___lbn_published_stage' |
  'featured_media___meta___lbn_published_production' |
  'featured_media___description' |
  'featured_media___caption' |
  'featured_media___alt_text' |
  'featured_media___media_type' |
  'featured_media___mime_type' |
  'featured_media___media_details___width' |
  'featured_media___media_details___height' |
  'featured_media___media_details___file' |
  'featured_media___media_details___image_meta___aperture' |
  'featured_media___media_details___image_meta___credit' |
  'featured_media___media_details___image_meta___camera' |
  'featured_media___media_details___image_meta___caption' |
  'featured_media___media_details___image_meta___created_timestamp' |
  'featured_media___media_details___image_meta___copyright' |
  'featured_media___media_details___image_meta___focal_length' |
  'featured_media___media_details___image_meta___iso' |
  'featured_media___media_details___image_meta___shutter_speed' |
  'featured_media___media_details___image_meta___title' |
  'featured_media___media_details___image_meta___orientation' |
  'featured_media___media_details___dummy' |
  'featured_media___post' |
  'featured_media___source_url' |
  'featured_media____links___self' |
  'featured_media____links___self___href' |
  'featured_media____links___collection' |
  'featured_media____links___collection___href' |
  'featured_media____links___about' |
  'featured_media____links___about___href' |
  'featured_media____links___author' |
  'featured_media____links___author___embeddable' |
  'featured_media____links___author___href' |
  'featured_media____links___replies' |
  'featured_media____links___replies___embeddable' |
  'featured_media____links___replies___href' |
  'featured_media___localFile___sourceInstanceName' |
  'featured_media___localFile___absolutePath' |
  'featured_media___localFile___relativePath' |
  'featured_media___localFile___extension' |
  'featured_media___localFile___size' |
  'featured_media___localFile___prettySize' |
  'featured_media___localFile___modifiedTime' |
  'featured_media___localFile___accessTime' |
  'featured_media___localFile___changeTime' |
  'featured_media___localFile___birthTime' |
  'featured_media___localFile___root' |
  'featured_media___localFile___dir' |
  'featured_media___localFile___base' |
  'featured_media___localFile___ext' |
  'featured_media___localFile___name' |
  'featured_media___localFile___relativeDirectory' |
  'featured_media___localFile___dev' |
  'featured_media___localFile___mode' |
  'featured_media___localFile___nlink' |
  'featured_media___localFile___uid' |
  'featured_media___localFile___gid' |
  'featured_media___localFile___rdev' |
  'featured_media___localFile___ino' |
  'featured_media___localFile___atimeMs' |
  'featured_media___localFile___mtimeMs' |
  'featured_media___localFile___ctimeMs' |
  'featured_media___localFile___atime' |
  'featured_media___localFile___mtime' |
  'featured_media___localFile___ctime' |
  'featured_media___localFile___birthtime' |
  'featured_media___localFile___birthtimeMs' |
  'featured_media___localFile___blksize' |
  'featured_media___localFile___blocks' |
  'featured_media___localFile___url' |
  'featured_media___localFile___publicURL' |
  'featured_media___localFile___childImageSharp___id' |
  'featured_media___localFile___childImageSharp___children' |
  'featured_media___localFile___id' |
  'featured_media___localFile___parent___id' |
  'featured_media___localFile___parent___children' |
  'featured_media___localFile___children' |
  'featured_media___localFile___children___id' |
  'featured_media___localFile___children___children' |
  'featured_media___localFile___internal___content' |
  'featured_media___localFile___internal___contentDigest' |
  'featured_media___localFile___internal___description' |
  'featured_media___localFile___internal___fieldOwners' |
  'featured_media___localFile___internal___ignoreType' |
  'featured_media___localFile___internal___mediaType' |
  'featured_media___localFile___internal___owner' |
  'featured_media___localFile___internal___type' |
  'featured_media___localFile___childrenTestimonialsJson' |
  'featured_media___localFile___childrenTestimonialsJson___id' |
  'featured_media___localFile___childrenTestimonialsJson___children' |
  'featured_media___localFile___childrenTestimonialsJson___body' |
  'featured_media___localFile___childrenTestimonialsJson___rating' |
  'featured_media___localFile___childrenTestimonialsJson___author' |
  'featured_media___localFile___childrenTeamJson' |
  'featured_media___localFile___childrenTeamJson___id' |
  'featured_media___localFile___childrenTeamJson___children' |
  'featured_media___localFile___childrenTeamJson___name' |
  'featured_media___localFile___childrenTeamJson___title' |
  'featured_media___localFile___childrenTeamJson___bio' |
  'featured_media___path' |
  'path';

export type Wordpress__Wp_Page_ContentFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  guid?: Maybe<StringQueryOperatorInput>,
  modified?: Maybe<DateQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  status?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  content?: Maybe<StringQueryOperatorInput>,
  template?: Maybe<StringQueryOperatorInput>,
  acf?: Maybe<Wordpress__Wp_Page_ContentAcfFilterInput>,
  _links?: Maybe<Wordpress__Wp_Page_Content_LinksFilterInput>,
  featured_media?: Maybe<Wordpress__Wp_MediaFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Page_ContentGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Wp_Page_ContentEdge>,
  nodes: Array<Wordpress__Wp_Page_Content>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Page_ContentSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_Page_ContentFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Wp_Post_Tag = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<Scalars['String']>,
  _links?: Maybe<Wordpress__Wp_Post_Tag_Links>,
  path?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Post_Tag_Links = {
  self?: Maybe<Array<Maybe<Wordpress__Wp_Post_Tag_LinksSelf>>>,
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Post_Tag_LinksCollection>>>,
  about?: Maybe<Array<Maybe<Wordpress__Wp_Post_Tag_LinksAbout>>>,
  wp_post_type?: Maybe<Array<Maybe<Wordpress__Wp_Post_Tag_LinksWp_Post_Type>>>,
  curies?: Maybe<Array<Maybe<Wordpress__Wp_Post_Tag_LinksCuries>>>,
};

export type Wordpress__Wp_Post_Tag_LinksAbout = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Post_Tag_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Post_Tag_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Post_Tag_LinksAboutFilterInput>,
};

export type Wordpress__Wp_Post_Tag_LinksCollection = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Post_Tag_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Post_Tag_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Post_Tag_LinksCollectionFilterInput>,
};

export type Wordpress__Wp_Post_Tag_LinksCuries = {
  name?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  templated?: Maybe<Scalars['Boolean']>,
};

export type Wordpress__Wp_Post_Tag_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  href?: Maybe<StringQueryOperatorInput>,
  templated?: Maybe<BooleanQueryOperatorInput>,
};

export type Wordpress__Wp_Post_Tag_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Post_Tag_LinksCuriesFilterInput>,
};

export type Wordpress__Wp_Post_Tag_LinksFilterInput = {
  self?: Maybe<Wordpress__Wp_Post_Tag_LinksSelfFilterListInput>,
  collection?: Maybe<Wordpress__Wp_Post_Tag_LinksCollectionFilterListInput>,
  about?: Maybe<Wordpress__Wp_Post_Tag_LinksAboutFilterListInput>,
  wp_post_type?: Maybe<Wordpress__Wp_Post_Tag_LinksWp_Post_TypeFilterListInput>,
  curies?: Maybe<Wordpress__Wp_Post_Tag_LinksCuriesFilterListInput>,
};

export type Wordpress__Wp_Post_Tag_LinksSelf = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Post_Tag_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Post_Tag_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Post_Tag_LinksSelfFilterInput>,
};

export type Wordpress__Wp_Post_Tag_LinksWp_Post_Type = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Post_Tag_LinksWp_Post_TypeFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Post_Tag_LinksWp_Post_TypeFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Post_Tag_LinksWp_Post_TypeFilterInput>,
};

export type Wordpress__Wp_Post_TagConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Wp_Post_TagEdge>,
  nodes: Array<Wordpress__Wp_Post_Tag>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Wp_Post_TagGroupConnection>,
};


export type Wordpress__Wp_Post_TagConnectionDistinctArgs = {
  field: Wordpress__Wp_Post_TagFieldsEnum
};


export type Wordpress__Wp_Post_TagConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Wp_Post_TagFieldsEnum
};

export type Wordpress__Wp_Post_TagEdge = {
  next?: Maybe<Wordpress__Wp_Post_Tag>,
  node: Wordpress__Wp_Post_Tag,
  previous?: Maybe<Wordpress__Wp_Post_Tag>,
};

export type Wordpress__Wp_Post_TagFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id' |
  'count' |
  'description' |
  'link' |
  'name' |
  'slug' |
  'taxonomy' |
  '_links___self' |
  '_links___self___href' |
  '_links___collection' |
  '_links___collection___href' |
  '_links___about' |
  '_links___about___href' |
  '_links___wp_post_type' |
  '_links___wp_post_type___href' |
  '_links___curies' |
  '_links___curies___name' |
  '_links___curies___href' |
  '_links___curies___templated' |
  'path';

export type Wordpress__Wp_Post_TagFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  count?: Maybe<IntQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  taxonomy?: Maybe<StringQueryOperatorInput>,
  _links?: Maybe<Wordpress__Wp_Post_Tag_LinksFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Post_TagFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Post_TagFilterInput>,
};

export type Wordpress__Wp_Post_TagGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Wp_Post_TagEdge>,
  nodes: Array<Wordpress__Wp_Post_Tag>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Post_TagSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_Post_TagFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Wp_Property = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
  date?: Maybe<Scalars['Date']>,
  guid?: Maybe<Scalars['String']>,
  modified?: Maybe<Scalars['Date']>,
  slug?: Maybe<Scalars['String']>,
  status?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  excerpt?: Maybe<Scalars['String']>,
  comment_status?: Maybe<Scalars['String']>,
  ping_status?: Maybe<Scalars['String']>,
  template?: Maybe<Scalars['String']>,
  property_city?: Maybe<Array<Maybe<Scalars['Int']>>>,
  property_area?: Maybe<Array<Maybe<Scalars['Int']>>>,
  property_features?: Maybe<Array<Maybe<Scalars['Int']>>>,
  lake?: Maybe<Array<Maybe<Scalars['Int']>>>,
  suitability?: Maybe<Array<Maybe<Scalars['String']>>>,
  size?: Maybe<Scalars['String']>,
  bathrooms?: Maybe<Scalars['String']>,
  bedrooms?: Maybe<Scalars['String']>,
  latitude?: Maybe<Scalars['String']>,
  longitude?: Maybe<Scalars['String']>,
  houseRules?: Maybe<Scalars['String']>,
  guests?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['String']>,
  pricePerWeek?: Maybe<Scalars['String']>,
  pricePerMonth?: Maybe<Scalars['String']>,
  rooms?: Maybe<Scalars['String']>,
  address?: Maybe<Scalars['String']>,
  order?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['String']>,
  acf?: Maybe<Wordpress__Wp_PropertyAcf>,
  bookedDates?: Maybe<Array<Maybe<Scalars['Int']>>>,
  property_images?: Maybe<Array<Maybe<Scalars['Int']>>>,
  _links?: Maybe<Wordpress__Wp_Property_Links>,
  featured_media?: Maybe<Wordpress__Wp_Media>,
  path?: Maybe<Scalars['String']>,
  category?: Maybe<Wordpress__Wp_Property_Category>,
};


export type Wordpress__Wp_PropertyDateArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type Wordpress__Wp_PropertyModifiedArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type Wordpress__Wp_Property_Category = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<Scalars['String']>,
  wordpress_parent?: Maybe<Scalars['Int']>,
  _links?: Maybe<Wordpress__Wp_Property_Category_Links>,
  path?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_Category_Links = {
  self?: Maybe<Array<Maybe<Wordpress__Wp_Property_Category_LinksSelf>>>,
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Property_Category_LinksCollection>>>,
  about?: Maybe<Array<Maybe<Wordpress__Wp_Property_Category_LinksAbout>>>,
  wp_post_type?: Maybe<Array<Maybe<Wordpress__Wp_Property_Category_LinksWp_Post_Type>>>,
  curies?: Maybe<Array<Maybe<Wordpress__Wp_Property_Category_LinksCuries>>>,
};

export type Wordpress__Wp_Property_Category_LinksAbout = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_Category_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Property_Category_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Property_Category_LinksAboutFilterInput>,
};

export type Wordpress__Wp_Property_Category_LinksCollection = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_Category_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Property_Category_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Property_Category_LinksCollectionFilterInput>,
};

export type Wordpress__Wp_Property_Category_LinksCuries = {
  name?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  templated?: Maybe<Scalars['Boolean']>,
};

export type Wordpress__Wp_Property_Category_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  href?: Maybe<StringQueryOperatorInput>,
  templated?: Maybe<BooleanQueryOperatorInput>,
};

export type Wordpress__Wp_Property_Category_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Property_Category_LinksCuriesFilterInput>,
};

export type Wordpress__Wp_Property_Category_LinksFilterInput = {
  self?: Maybe<Wordpress__Wp_Property_Category_LinksSelfFilterListInput>,
  collection?: Maybe<Wordpress__Wp_Property_Category_LinksCollectionFilterListInput>,
  about?: Maybe<Wordpress__Wp_Property_Category_LinksAboutFilterListInput>,
  wp_post_type?: Maybe<Wordpress__Wp_Property_Category_LinksWp_Post_TypeFilterListInput>,
  curies?: Maybe<Wordpress__Wp_Property_Category_LinksCuriesFilterListInput>,
};

export type Wordpress__Wp_Property_Category_LinksSelf = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_Category_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Property_Category_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Property_Category_LinksSelfFilterInput>,
};

export type Wordpress__Wp_Property_Category_LinksWp_Post_Type = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_Category_LinksWp_Post_TypeFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Property_Category_LinksWp_Post_TypeFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Property_Category_LinksWp_Post_TypeFilterInput>,
};

export type Wordpress__Wp_Property_CategoryConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Wp_Property_CategoryEdge>,
  nodes: Array<Wordpress__Wp_Property_Category>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Wp_Property_CategoryGroupConnection>,
};


export type Wordpress__Wp_Property_CategoryConnectionDistinctArgs = {
  field: Wordpress__Wp_Property_CategoryFieldsEnum
};


export type Wordpress__Wp_Property_CategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Wp_Property_CategoryFieldsEnum
};

export type Wordpress__Wp_Property_CategoryEdge = {
  next?: Maybe<Wordpress__Wp_Property_Category>,
  node: Wordpress__Wp_Property_Category,
  previous?: Maybe<Wordpress__Wp_Property_Category>,
};

export type Wordpress__Wp_Property_CategoryFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id' |
  'count' |
  'description' |
  'link' |
  'name' |
  'slug' |
  'taxonomy' |
  'wordpress_parent' |
  '_links___self' |
  '_links___self___href' |
  '_links___collection' |
  '_links___collection___href' |
  '_links___about' |
  '_links___about___href' |
  '_links___wp_post_type' |
  '_links___wp_post_type___href' |
  '_links___curies' |
  '_links___curies___name' |
  '_links___curies___href' |
  '_links___curies___templated' |
  'path';

export type Wordpress__Wp_Property_CategoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  count?: Maybe<IntQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  taxonomy?: Maybe<StringQueryOperatorInput>,
  wordpress_parent?: Maybe<IntQueryOperatorInput>,
  _links?: Maybe<Wordpress__Wp_Property_Category_LinksFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Property_CategoryGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Wp_Property_CategoryEdge>,
  nodes: Array<Wordpress__Wp_Property_Category>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_CategorySortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_Property_CategoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Wp_Property_Features = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  wordpress_id?: Maybe<Scalars['Int']>,
  count?: Maybe<Scalars['Int']>,
  description?: Maybe<Scalars['String']>,
  link?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  taxonomy?: Maybe<Scalars['String']>,
  wordpress_parent?: Maybe<Scalars['Int']>,
  _links?: Maybe<Wordpress__Wp_Property_Features_Links>,
  parent_element?: Maybe<Wordpress__Wp_Property_Features>,
  path?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_Features_Links = {
  self?: Maybe<Array<Maybe<Wordpress__Wp_Property_Features_LinksSelf>>>,
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Property_Features_LinksCollection>>>,
  about?: Maybe<Array<Maybe<Wordpress__Wp_Property_Features_LinksAbout>>>,
  up?: Maybe<Array<Maybe<Wordpress__Wp_Property_Features_LinksUp>>>,
  wp_post_type?: Maybe<Array<Maybe<Wordpress__Wp_Property_Features_LinksWp_Post_Type>>>,
  curies?: Maybe<Array<Maybe<Wordpress__Wp_Property_Features_LinksCuries>>>,
};

export type Wordpress__Wp_Property_Features_LinksAbout = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_Features_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Property_Features_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Property_Features_LinksAboutFilterInput>,
};

export type Wordpress__Wp_Property_Features_LinksCollection = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_Features_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Property_Features_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Property_Features_LinksCollectionFilterInput>,
};

export type Wordpress__Wp_Property_Features_LinksCuries = {
  name?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  templated?: Maybe<Scalars['Boolean']>,
};

export type Wordpress__Wp_Property_Features_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  href?: Maybe<StringQueryOperatorInput>,
  templated?: Maybe<BooleanQueryOperatorInput>,
};

export type Wordpress__Wp_Property_Features_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Property_Features_LinksCuriesFilterInput>,
};

export type Wordpress__Wp_Property_Features_LinksFilterInput = {
  self?: Maybe<Wordpress__Wp_Property_Features_LinksSelfFilterListInput>,
  collection?: Maybe<Wordpress__Wp_Property_Features_LinksCollectionFilterListInput>,
  about?: Maybe<Wordpress__Wp_Property_Features_LinksAboutFilterListInput>,
  up?: Maybe<Wordpress__Wp_Property_Features_LinksUpFilterListInput>,
  wp_post_type?: Maybe<Wordpress__Wp_Property_Features_LinksWp_Post_TypeFilterListInput>,
  curies?: Maybe<Wordpress__Wp_Property_Features_LinksCuriesFilterListInput>,
};

export type Wordpress__Wp_Property_Features_LinksSelf = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_Features_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Property_Features_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Property_Features_LinksSelfFilterInput>,
};

export type Wordpress__Wp_Property_Features_LinksUp = {
  embeddable?: Maybe<Scalars['Boolean']>,
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_Features_LinksUpFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>,
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Property_Features_LinksUpFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Property_Features_LinksUpFilterInput>,
};

export type Wordpress__Wp_Property_Features_LinksWp_Post_Type = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_Features_LinksWp_Post_TypeFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Property_Features_LinksWp_Post_TypeFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Property_Features_LinksWp_Post_TypeFilterInput>,
};

export type Wordpress__Wp_Property_FeaturesConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Wp_Property_FeaturesEdge>,
  nodes: Array<Wordpress__Wp_Property_Features>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Wp_Property_FeaturesGroupConnection>,
};


export type Wordpress__Wp_Property_FeaturesConnectionDistinctArgs = {
  field: Wordpress__Wp_Property_FeaturesFieldsEnum
};


export type Wordpress__Wp_Property_FeaturesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Wp_Property_FeaturesFieldsEnum
};

export type Wordpress__Wp_Property_FeaturesEdge = {
  next?: Maybe<Wordpress__Wp_Property_Features>,
  node: Wordpress__Wp_Property_Features,
  previous?: Maybe<Wordpress__Wp_Property_Features>,
};

export type Wordpress__Wp_Property_FeaturesFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id' |
  'count' |
  'description' |
  'link' |
  'name' |
  'slug' |
  'taxonomy' |
  'wordpress_parent' |
  '_links___self' |
  '_links___self___href' |
  '_links___collection' |
  '_links___collection___href' |
  '_links___about' |
  '_links___about___href' |
  '_links___up' |
  '_links___up___embeddable' |
  '_links___up___href' |
  '_links___wp_post_type' |
  '_links___wp_post_type___href' |
  '_links___curies' |
  '_links___curies___name' |
  '_links___curies___href' |
  '_links___curies___templated' |
  'parent_element___id' |
  'parent_element___parent___id' |
  'parent_element___parent___parent___id' |
  'parent_element___parent___parent___children' |
  'parent_element___parent___children' |
  'parent_element___parent___children___id' |
  'parent_element___parent___children___children' |
  'parent_element___parent___internal___content' |
  'parent_element___parent___internal___contentDigest' |
  'parent_element___parent___internal___description' |
  'parent_element___parent___internal___fieldOwners' |
  'parent_element___parent___internal___ignoreType' |
  'parent_element___parent___internal___mediaType' |
  'parent_element___parent___internal___owner' |
  'parent_element___parent___internal___type' |
  'parent_element___children' |
  'parent_element___children___id' |
  'parent_element___children___parent___id' |
  'parent_element___children___parent___children' |
  'parent_element___children___children' |
  'parent_element___children___children___id' |
  'parent_element___children___children___children' |
  'parent_element___children___internal___content' |
  'parent_element___children___internal___contentDigest' |
  'parent_element___children___internal___description' |
  'parent_element___children___internal___fieldOwners' |
  'parent_element___children___internal___ignoreType' |
  'parent_element___children___internal___mediaType' |
  'parent_element___children___internal___owner' |
  'parent_element___children___internal___type' |
  'parent_element___internal___content' |
  'parent_element___internal___contentDigest' |
  'parent_element___internal___description' |
  'parent_element___internal___fieldOwners' |
  'parent_element___internal___ignoreType' |
  'parent_element___internal___mediaType' |
  'parent_element___internal___owner' |
  'parent_element___internal___type' |
  'parent_element___wordpress_id' |
  'parent_element___count' |
  'parent_element___description' |
  'parent_element___link' |
  'parent_element___name' |
  'parent_element___slug' |
  'parent_element___taxonomy' |
  'parent_element___wordpress_parent' |
  'parent_element____links___self' |
  'parent_element____links___self___href' |
  'parent_element____links___collection' |
  'parent_element____links___collection___href' |
  'parent_element____links___about' |
  'parent_element____links___about___href' |
  'parent_element____links___up' |
  'parent_element____links___up___embeddable' |
  'parent_element____links___up___href' |
  'parent_element____links___wp_post_type' |
  'parent_element____links___wp_post_type___href' |
  'parent_element____links___curies' |
  'parent_element____links___curies___name' |
  'parent_element____links___curies___href' |
  'parent_element____links___curies___templated' |
  'parent_element___parent_element___id' |
  'parent_element___parent_element___parent___id' |
  'parent_element___parent_element___parent___children' |
  'parent_element___parent_element___children' |
  'parent_element___parent_element___children___id' |
  'parent_element___parent_element___children___children' |
  'parent_element___parent_element___internal___content' |
  'parent_element___parent_element___internal___contentDigest' |
  'parent_element___parent_element___internal___description' |
  'parent_element___parent_element___internal___fieldOwners' |
  'parent_element___parent_element___internal___ignoreType' |
  'parent_element___parent_element___internal___mediaType' |
  'parent_element___parent_element___internal___owner' |
  'parent_element___parent_element___internal___type' |
  'parent_element___parent_element___wordpress_id' |
  'parent_element___parent_element___count' |
  'parent_element___parent_element___description' |
  'parent_element___parent_element___link' |
  'parent_element___parent_element___name' |
  'parent_element___parent_element___slug' |
  'parent_element___parent_element___taxonomy' |
  'parent_element___parent_element___wordpress_parent' |
  'parent_element___parent_element____links___self' |
  'parent_element___parent_element____links___collection' |
  'parent_element___parent_element____links___about' |
  'parent_element___parent_element____links___up' |
  'parent_element___parent_element____links___wp_post_type' |
  'parent_element___parent_element____links___curies' |
  'parent_element___parent_element___parent_element___id' |
  'parent_element___parent_element___parent_element___children' |
  'parent_element___parent_element___parent_element___wordpress_id' |
  'parent_element___parent_element___parent_element___count' |
  'parent_element___parent_element___parent_element___description' |
  'parent_element___parent_element___parent_element___link' |
  'parent_element___parent_element___parent_element___name' |
  'parent_element___parent_element___parent_element___slug' |
  'parent_element___parent_element___parent_element___taxonomy' |
  'parent_element___parent_element___parent_element___wordpress_parent' |
  'parent_element___parent_element___parent_element___path' |
  'parent_element___parent_element___path' |
  'parent_element___path' |
  'path';

export type Wordpress__Wp_Property_FeaturesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  count?: Maybe<IntQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  taxonomy?: Maybe<StringQueryOperatorInput>,
  wordpress_parent?: Maybe<IntQueryOperatorInput>,
  _links?: Maybe<Wordpress__Wp_Property_Features_LinksFilterInput>,
  parent_element?: Maybe<Wordpress__Wp_Property_FeaturesFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Property_FeaturesGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Wp_Property_FeaturesEdge>,
  nodes: Array<Wordpress__Wp_Property_Features>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_FeaturesSortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_Property_FeaturesFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Wordpress__Wp_Property_Links = {
  self?: Maybe<Array<Maybe<Wordpress__Wp_Property_LinksSelf>>>,
  collection?: Maybe<Array<Maybe<Wordpress__Wp_Property_LinksCollection>>>,
  about?: Maybe<Array<Maybe<Wordpress__Wp_Property_LinksAbout>>>,
  replies?: Maybe<Array<Maybe<Wordpress__Wp_Property_LinksReplies>>>,
  wp_featuredmedia?: Maybe<Array<Maybe<Wordpress__Wp_Property_LinksWp_Featuredmedia>>>,
  wp_attachment?: Maybe<Array<Maybe<Wordpress__Wp_Property_LinksWp_Attachment>>>,
  wp_term?: Maybe<Array<Maybe<Wordpress__Wp_Property_LinksWp_Term>>>,
  curies?: Maybe<Array<Maybe<Wordpress__Wp_Property_LinksCuries>>>,
};

export type Wordpress__Wp_Property_LinksAbout = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_LinksAboutFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Property_LinksAboutFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Property_LinksAboutFilterInput>,
};

export type Wordpress__Wp_Property_LinksCollection = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_LinksCollectionFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Property_LinksCollectionFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Property_LinksCollectionFilterInput>,
};

export type Wordpress__Wp_Property_LinksCuries = {
  name?: Maybe<Scalars['String']>,
  href?: Maybe<Scalars['String']>,
  templated?: Maybe<Scalars['Boolean']>,
};

export type Wordpress__Wp_Property_LinksCuriesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  href?: Maybe<StringQueryOperatorInput>,
  templated?: Maybe<BooleanQueryOperatorInput>,
};

export type Wordpress__Wp_Property_LinksCuriesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Property_LinksCuriesFilterInput>,
};

export type Wordpress__Wp_Property_LinksFilterInput = {
  self?: Maybe<Wordpress__Wp_Property_LinksSelfFilterListInput>,
  collection?: Maybe<Wordpress__Wp_Property_LinksCollectionFilterListInput>,
  about?: Maybe<Wordpress__Wp_Property_LinksAboutFilterListInput>,
  replies?: Maybe<Wordpress__Wp_Property_LinksRepliesFilterListInput>,
  wp_featuredmedia?: Maybe<Wordpress__Wp_Property_LinksWp_FeaturedmediaFilterListInput>,
  wp_attachment?: Maybe<Wordpress__Wp_Property_LinksWp_AttachmentFilterListInput>,
  wp_term?: Maybe<Wordpress__Wp_Property_LinksWp_TermFilterListInput>,
  curies?: Maybe<Wordpress__Wp_Property_LinksCuriesFilterListInput>,
};

export type Wordpress__Wp_Property_LinksReplies = {
  embeddable?: Maybe<Scalars['Boolean']>,
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_LinksRepliesFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>,
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Property_LinksRepliesFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Property_LinksRepliesFilterInput>,
};

export type Wordpress__Wp_Property_LinksSelf = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_LinksSelfFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Property_LinksSelfFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Property_LinksSelfFilterInput>,
};

export type Wordpress__Wp_Property_LinksWp_Attachment = {
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_LinksWp_AttachmentFilterInput = {
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Property_LinksWp_AttachmentFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Property_LinksWp_AttachmentFilterInput>,
};

export type Wordpress__Wp_Property_LinksWp_Featuredmedia = {
  embeddable?: Maybe<Scalars['Boolean']>,
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_LinksWp_FeaturedmediaFilterInput = {
  embeddable?: Maybe<BooleanQueryOperatorInput>,
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Property_LinksWp_FeaturedmediaFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Property_LinksWp_FeaturedmediaFilterInput>,
};

export type Wordpress__Wp_Property_LinksWp_Term = {
  taxonomy?: Maybe<Scalars['String']>,
  embeddable?: Maybe<Scalars['Boolean']>,
  href?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_Property_LinksWp_TermFilterInput = {
  taxonomy?: Maybe<StringQueryOperatorInput>,
  embeddable?: Maybe<BooleanQueryOperatorInput>,
  href?: Maybe<StringQueryOperatorInput>,
};

export type Wordpress__Wp_Property_LinksWp_TermFilterListInput = {
  elemMatch?: Maybe<Wordpress__Wp_Property_LinksWp_TermFilterInput>,
};

export type Wordpress__Wp_PropertyAcf = {
  order?: Maybe<Scalars['String']>,
  featured?: Maybe<Scalars['Boolean']>,
};

export type Wordpress__Wp_PropertyAcfFilterInput = {
  order?: Maybe<StringQueryOperatorInput>,
  featured?: Maybe<BooleanQueryOperatorInput>,
};

export type Wordpress__Wp_PropertyConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Wp_PropertyEdge>,
  nodes: Array<Wordpress__Wp_Property>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<Wordpress__Wp_PropertyGroupConnection>,
};


export type Wordpress__Wp_PropertyConnectionDistinctArgs = {
  field: Wordpress__Wp_PropertyFieldsEnum
};


export type Wordpress__Wp_PropertyConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: Wordpress__Wp_PropertyFieldsEnum
};

export type Wordpress__Wp_PropertyEdge = {
  next?: Maybe<Wordpress__Wp_Property>,
  node: Wordpress__Wp_Property,
  previous?: Maybe<Wordpress__Wp_Property>,
};

export type Wordpress__Wp_PropertyFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'wordpress_id' |
  'date' |
  'guid' |
  'modified' |
  'slug' |
  'status' |
  'type' |
  'link' |
  'title' |
  'content' |
  'excerpt' |
  'comment_status' |
  'ping_status' |
  'template' |
  'property_city' |
  'property_area' |
  'property_features' |
  'lake' |
  'suitability' |
  'size' |
  'bathrooms' |
  'bedrooms' |
  'latitude' |
  'longitude' |
  'houseRules' |
  'guests' |
  'price' |
  'pricePerWeek' |
  'pricePerMonth' |
  'rooms' |
  'address' |
  'order' |
  'featured' |
  'acf___order' |
  'acf___featured' |
  'bookedDates' |
  'property_images' |
  '_links___self' |
  '_links___self___href' |
  '_links___collection' |
  '_links___collection___href' |
  '_links___about' |
  '_links___about___href' |
  '_links___replies' |
  '_links___replies___embeddable' |
  '_links___replies___href' |
  '_links___wp_featuredmedia' |
  '_links___wp_featuredmedia___embeddable' |
  '_links___wp_featuredmedia___href' |
  '_links___wp_attachment' |
  '_links___wp_attachment___href' |
  '_links___wp_term' |
  '_links___wp_term___taxonomy' |
  '_links___wp_term___embeddable' |
  '_links___wp_term___href' |
  '_links___curies' |
  '_links___curies___name' |
  '_links___curies___href' |
  '_links___curies___templated' |
  'featured_media___id' |
  'featured_media___parent___id' |
  'featured_media___parent___parent___id' |
  'featured_media___parent___parent___children' |
  'featured_media___parent___children' |
  'featured_media___parent___children___id' |
  'featured_media___parent___children___children' |
  'featured_media___parent___internal___content' |
  'featured_media___parent___internal___contentDigest' |
  'featured_media___parent___internal___description' |
  'featured_media___parent___internal___fieldOwners' |
  'featured_media___parent___internal___ignoreType' |
  'featured_media___parent___internal___mediaType' |
  'featured_media___parent___internal___owner' |
  'featured_media___parent___internal___type' |
  'featured_media___children' |
  'featured_media___children___id' |
  'featured_media___children___parent___id' |
  'featured_media___children___parent___children' |
  'featured_media___children___children' |
  'featured_media___children___children___id' |
  'featured_media___children___children___children' |
  'featured_media___children___internal___content' |
  'featured_media___children___internal___contentDigest' |
  'featured_media___children___internal___description' |
  'featured_media___children___internal___fieldOwners' |
  'featured_media___children___internal___ignoreType' |
  'featured_media___children___internal___mediaType' |
  'featured_media___children___internal___owner' |
  'featured_media___children___internal___type' |
  'featured_media___internal___content' |
  'featured_media___internal___contentDigest' |
  'featured_media___internal___description' |
  'featured_media___internal___fieldOwners' |
  'featured_media___internal___ignoreType' |
  'featured_media___internal___mediaType' |
  'featured_media___internal___owner' |
  'featured_media___internal___type' |
  'featured_media___wordpress_id' |
  'featured_media___date' |
  'featured_media___guid___id' |
  'featured_media___guid___parent___id' |
  'featured_media___guid___parent___children' |
  'featured_media___guid___children' |
  'featured_media___guid___children___id' |
  'featured_media___guid___children___children' |
  'featured_media___guid___internal___content' |
  'featured_media___guid___internal___contentDigest' |
  'featured_media___guid___internal___description' |
  'featured_media___guid___internal___fieldOwners' |
  'featured_media___guid___internal___ignoreType' |
  'featured_media___guid___internal___mediaType' |
  'featured_media___guid___internal___owner' |
  'featured_media___guid___internal___type' |
  'featured_media___guid___wordpress_id' |
  'featured_media___guid___date' |
  'featured_media___guid___guid___id' |
  'featured_media___guid___guid___children' |
  'featured_media___guid___guid___wordpress_id' |
  'featured_media___guid___guid___date' |
  'featured_media___guid___guid___modified' |
  'featured_media___guid___guid___slug' |
  'featured_media___guid___guid___status' |
  'featured_media___guid___guid___type' |
  'featured_media___guid___guid___link' |
  'featured_media___guid___guid___title' |
  'featured_media___guid___guid___author' |
  'featured_media___guid___guid___comment_status' |
  'featured_media___guid___guid___ping_status' |
  'featured_media___guid___guid___template' |
  'featured_media___guid___guid___description' |
  'featured_media___guid___guid___caption' |
  'featured_media___guid___guid___alt_text' |
  'featured_media___guid___guid___media_type' |
  'featured_media___guid___guid___mime_type' |
  'featured_media___guid___guid___post' |
  'featured_media___guid___guid___source_url' |
  'featured_media___guid___guid___path' |
  'featured_media___guid___modified' |
  'featured_media___guid___slug' |
  'featured_media___guid___status' |
  'featured_media___guid___type' |
  'featured_media___guid___link' |
  'featured_media___guid___title' |
  'featured_media___guid___author' |
  'featured_media___guid___comment_status' |
  'featured_media___guid___ping_status' |
  'featured_media___guid___template' |
  'featured_media___guid___meta___lbn_published_stage' |
  'featured_media___guid___meta___lbn_published_production' |
  'featured_media___guid___description' |
  'featured_media___guid___caption' |
  'featured_media___guid___alt_text' |
  'featured_media___guid___media_type' |
  'featured_media___guid___mime_type' |
  'featured_media___guid___media_details___width' |
  'featured_media___guid___media_details___height' |
  'featured_media___guid___media_details___file' |
  'featured_media___guid___media_details___dummy' |
  'featured_media___guid___post' |
  'featured_media___guid___source_url' |
  'featured_media___guid____links___self' |
  'featured_media___guid____links___collection' |
  'featured_media___guid____links___about' |
  'featured_media___guid____links___author' |
  'featured_media___guid____links___replies' |
  'featured_media___guid___localFile___sourceInstanceName' |
  'featured_media___guid___localFile___absolutePath' |
  'featured_media___guid___localFile___relativePath' |
  'featured_media___guid___localFile___extension' |
  'featured_media___guid___localFile___size' |
  'featured_media___guid___localFile___prettySize' |
  'featured_media___guid___localFile___modifiedTime' |
  'featured_media___guid___localFile___accessTime' |
  'featured_media___guid___localFile___changeTime' |
  'featured_media___guid___localFile___birthTime' |
  'featured_media___guid___localFile___root' |
  'featured_media___guid___localFile___dir' |
  'featured_media___guid___localFile___base' |
  'featured_media___guid___localFile___ext' |
  'featured_media___guid___localFile___name' |
  'featured_media___guid___localFile___relativeDirectory' |
  'featured_media___guid___localFile___dev' |
  'featured_media___guid___localFile___mode' |
  'featured_media___guid___localFile___nlink' |
  'featured_media___guid___localFile___uid' |
  'featured_media___guid___localFile___gid' |
  'featured_media___guid___localFile___rdev' |
  'featured_media___guid___localFile___ino' |
  'featured_media___guid___localFile___atimeMs' |
  'featured_media___guid___localFile___mtimeMs' |
  'featured_media___guid___localFile___ctimeMs' |
  'featured_media___guid___localFile___atime' |
  'featured_media___guid___localFile___mtime' |
  'featured_media___guid___localFile___ctime' |
  'featured_media___guid___localFile___birthtime' |
  'featured_media___guid___localFile___birthtimeMs' |
  'featured_media___guid___localFile___blksize' |
  'featured_media___guid___localFile___blocks' |
  'featured_media___guid___localFile___url' |
  'featured_media___guid___localFile___publicURL' |
  'featured_media___guid___localFile___id' |
  'featured_media___guid___localFile___children' |
  'featured_media___guid___localFile___childrenTestimonialsJson' |
  'featured_media___guid___localFile___childrenTeamJson' |
  'featured_media___guid___path' |
  'featured_media___modified' |
  'featured_media___slug' |
  'featured_media___status' |
  'featured_media___type' |
  'featured_media___link' |
  'featured_media___title' |
  'featured_media___author' |
  'featured_media___comment_status' |
  'featured_media___ping_status' |
  'featured_media___template' |
  'featured_media___meta___lbn_published_stage' |
  'featured_media___meta___lbn_published_production' |
  'featured_media___description' |
  'featured_media___caption' |
  'featured_media___alt_text' |
  'featured_media___media_type' |
  'featured_media___mime_type' |
  'featured_media___media_details___width' |
  'featured_media___media_details___height' |
  'featured_media___media_details___file' |
  'featured_media___media_details___image_meta___aperture' |
  'featured_media___media_details___image_meta___credit' |
  'featured_media___media_details___image_meta___camera' |
  'featured_media___media_details___image_meta___caption' |
  'featured_media___media_details___image_meta___created_timestamp' |
  'featured_media___media_details___image_meta___copyright' |
  'featured_media___media_details___image_meta___focal_length' |
  'featured_media___media_details___image_meta___iso' |
  'featured_media___media_details___image_meta___shutter_speed' |
  'featured_media___media_details___image_meta___title' |
  'featured_media___media_details___image_meta___orientation' |
  'featured_media___media_details___dummy' |
  'featured_media___post' |
  'featured_media___source_url' |
  'featured_media____links___self' |
  'featured_media____links___self___href' |
  'featured_media____links___collection' |
  'featured_media____links___collection___href' |
  'featured_media____links___about' |
  'featured_media____links___about___href' |
  'featured_media____links___author' |
  'featured_media____links___author___embeddable' |
  'featured_media____links___author___href' |
  'featured_media____links___replies' |
  'featured_media____links___replies___embeddable' |
  'featured_media____links___replies___href' |
  'featured_media___localFile___sourceInstanceName' |
  'featured_media___localFile___absolutePath' |
  'featured_media___localFile___relativePath' |
  'featured_media___localFile___extension' |
  'featured_media___localFile___size' |
  'featured_media___localFile___prettySize' |
  'featured_media___localFile___modifiedTime' |
  'featured_media___localFile___accessTime' |
  'featured_media___localFile___changeTime' |
  'featured_media___localFile___birthTime' |
  'featured_media___localFile___root' |
  'featured_media___localFile___dir' |
  'featured_media___localFile___base' |
  'featured_media___localFile___ext' |
  'featured_media___localFile___name' |
  'featured_media___localFile___relativeDirectory' |
  'featured_media___localFile___dev' |
  'featured_media___localFile___mode' |
  'featured_media___localFile___nlink' |
  'featured_media___localFile___uid' |
  'featured_media___localFile___gid' |
  'featured_media___localFile___rdev' |
  'featured_media___localFile___ino' |
  'featured_media___localFile___atimeMs' |
  'featured_media___localFile___mtimeMs' |
  'featured_media___localFile___ctimeMs' |
  'featured_media___localFile___atime' |
  'featured_media___localFile___mtime' |
  'featured_media___localFile___ctime' |
  'featured_media___localFile___birthtime' |
  'featured_media___localFile___birthtimeMs' |
  'featured_media___localFile___blksize' |
  'featured_media___localFile___blocks' |
  'featured_media___localFile___url' |
  'featured_media___localFile___publicURL' |
  'featured_media___localFile___childImageSharp___id' |
  'featured_media___localFile___childImageSharp___children' |
  'featured_media___localFile___id' |
  'featured_media___localFile___parent___id' |
  'featured_media___localFile___parent___children' |
  'featured_media___localFile___children' |
  'featured_media___localFile___children___id' |
  'featured_media___localFile___children___children' |
  'featured_media___localFile___internal___content' |
  'featured_media___localFile___internal___contentDigest' |
  'featured_media___localFile___internal___description' |
  'featured_media___localFile___internal___fieldOwners' |
  'featured_media___localFile___internal___ignoreType' |
  'featured_media___localFile___internal___mediaType' |
  'featured_media___localFile___internal___owner' |
  'featured_media___localFile___internal___type' |
  'featured_media___localFile___childrenTestimonialsJson' |
  'featured_media___localFile___childrenTestimonialsJson___id' |
  'featured_media___localFile___childrenTestimonialsJson___children' |
  'featured_media___localFile___childrenTestimonialsJson___body' |
  'featured_media___localFile___childrenTestimonialsJson___rating' |
  'featured_media___localFile___childrenTestimonialsJson___author' |
  'featured_media___localFile___childrenTeamJson' |
  'featured_media___localFile___childrenTeamJson___id' |
  'featured_media___localFile___childrenTeamJson___children' |
  'featured_media___localFile___childrenTeamJson___name' |
  'featured_media___localFile___childrenTeamJson___title' |
  'featured_media___localFile___childrenTeamJson___bio' |
  'featured_media___path' |
  'path' |
  'category___id' |
  'category___parent___id' |
  'category___parent___parent___id' |
  'category___parent___parent___children' |
  'category___parent___children' |
  'category___parent___children___id' |
  'category___parent___children___children' |
  'category___parent___internal___content' |
  'category___parent___internal___contentDigest' |
  'category___parent___internal___description' |
  'category___parent___internal___fieldOwners' |
  'category___parent___internal___ignoreType' |
  'category___parent___internal___mediaType' |
  'category___parent___internal___owner' |
  'category___parent___internal___type' |
  'category___children' |
  'category___children___id' |
  'category___children___parent___id' |
  'category___children___parent___children' |
  'category___children___children' |
  'category___children___children___id' |
  'category___children___children___children' |
  'category___children___internal___content' |
  'category___children___internal___contentDigest' |
  'category___children___internal___description' |
  'category___children___internal___fieldOwners' |
  'category___children___internal___ignoreType' |
  'category___children___internal___mediaType' |
  'category___children___internal___owner' |
  'category___children___internal___type' |
  'category___internal___content' |
  'category___internal___contentDigest' |
  'category___internal___description' |
  'category___internal___fieldOwners' |
  'category___internal___ignoreType' |
  'category___internal___mediaType' |
  'category___internal___owner' |
  'category___internal___type' |
  'category___wordpress_id' |
  'category___count' |
  'category___description' |
  'category___link' |
  'category___name' |
  'category___slug' |
  'category___taxonomy' |
  'category___wordpress_parent' |
  'category____links___self' |
  'category____links___self___href' |
  'category____links___collection' |
  'category____links___collection___href' |
  'category____links___about' |
  'category____links___about___href' |
  'category____links___wp_post_type' |
  'category____links___wp_post_type___href' |
  'category____links___curies' |
  'category____links___curies___name' |
  'category____links___curies___href' |
  'category____links___curies___templated' |
  'category___path';

export type Wordpress__Wp_PropertyFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  wordpress_id?: Maybe<IntQueryOperatorInput>,
  date?: Maybe<DateQueryOperatorInput>,
  guid?: Maybe<StringQueryOperatorInput>,
  modified?: Maybe<DateQueryOperatorInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  status?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
  link?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  content?: Maybe<StringQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  comment_status?: Maybe<StringQueryOperatorInput>,
  ping_status?: Maybe<StringQueryOperatorInput>,
  template?: Maybe<StringQueryOperatorInput>,
  property_city?: Maybe<IntQueryOperatorInput>,
  property_area?: Maybe<IntQueryOperatorInput>,
  property_features?: Maybe<IntQueryOperatorInput>,
  lake?: Maybe<IntQueryOperatorInput>,
  suitability?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<StringQueryOperatorInput>,
  bathrooms?: Maybe<StringQueryOperatorInput>,
  bedrooms?: Maybe<StringQueryOperatorInput>,
  latitude?: Maybe<StringQueryOperatorInput>,
  longitude?: Maybe<StringQueryOperatorInput>,
  houseRules?: Maybe<StringQueryOperatorInput>,
  guests?: Maybe<StringQueryOperatorInput>,
  price?: Maybe<StringQueryOperatorInput>,
  pricePerWeek?: Maybe<StringQueryOperatorInput>,
  pricePerMonth?: Maybe<StringQueryOperatorInput>,
  rooms?: Maybe<StringQueryOperatorInput>,
  address?: Maybe<StringQueryOperatorInput>,
  order?: Maybe<StringQueryOperatorInput>,
  featured?: Maybe<StringQueryOperatorInput>,
  acf?: Maybe<Wordpress__Wp_PropertyAcfFilterInput>,
  bookedDates?: Maybe<IntQueryOperatorInput>,
  property_images?: Maybe<IntQueryOperatorInput>,
  _links?: Maybe<Wordpress__Wp_Property_LinksFilterInput>,
  featured_media?: Maybe<Wordpress__Wp_MediaFilterInput>,
  path?: Maybe<StringQueryOperatorInput>,
  category?: Maybe<Wordpress__Wp_Property_CategoryFilterInput>,
};

export type Wordpress__Wp_PropertyGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<Wordpress__Wp_PropertyEdge>,
  nodes: Array<Wordpress__Wp_Property>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type Wordpress__Wp_PropertySortInput = {
  fields?: Maybe<Array<Maybe<Wordpress__Wp_PropertyFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type CategoriesQueryVariables = {};


export type CategoriesQuery = { allWordpressWpCategory: { nodes: Array<Pick<Wordpress__Wp_Category, 'id' | 'name' | 'slug'>> } };

export type ConciergeServiceFragment = (
  Pick<Wordpress__Wp_Page_ContentAcfConcierge_Services, 'service'>
  & { image: Maybe<{ localFile: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }> }> }
);

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = { wordpressWpPageContent: Maybe<{ acf: Maybe<{ concierge_services: Maybe<Array<Maybe<ConciergeServiceFragment>>> }> }> };

export type Unnamed_2_QueryVariables = {};


export type Unnamed_2_Query = { post: Maybe<(
    Pick<Wordpress__Wp_Page_Content, 'content'>
    & { featured_media: Maybe<{ localFile: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }> }> }
  )> };

export type CottageCardFragment = (
  Pick<Wordpress__Wp_Property, 'id' | 'bedrooms' | 'price' | 'guests' | 'slug' | 'title'>
  & { category: Maybe<Pick<Wordpress__Wp_Property_Category, 'name'>>, featured_media: Maybe<{ localFile: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }> }> }
);

export type CottageInfoFragment = (
  Pick<Wordpress__Wp_Property, 'bedrooms' | 'guests' | 'size'>
  & { category: Maybe<Pick<Wordpress__Wp_Property_Category, 'name'>> }
);

export type CottageFragment = (
  Pick<Wordpress__Wp_Property, 'id' | 'content' | 'suitability' | 'price' | 'slug' | 'title'>
  & { featured_media: Maybe<{ localFile: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }> }> }
  & CottageInfoFragment
);

export type Unnamed_3_QueryVariables = {};


export type Unnamed_3_Query = { logo: Maybe<{ childImageSharp: Maybe<{ fixed: Maybe<> }> }>, links: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'footerLinks'>> }> };

export type Unnamed_4_QueryVariables = {};


export type Unnamed_4_Query = { logo: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }>, icon: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }> };

export type Unnamed_5_QueryVariables = {};


export type Unnamed_5_Query = { site: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'headerLinks'>> }> };

export type Unnamed_6_QueryVariables = {};


export type Unnamed_6_Query = { allTeamJson: { nodes: Array<(
      Pick<TeamJson, 'id' | 'name' | 'title' | 'bio'>
      & { picture: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }> }
    )> } };

export type PageFragment = (
  Pick<Wordpress__Wp_Page_Content, 'title' | 'content'>
  & { featured_media: Maybe<{ localFile: Maybe<PageImageFragment> }> }
);

export type PageImageFragment = { childImageSharp: Maybe<{ fluid: Maybe<> }> };

export type PostCardFragment = (
  Pick<Wordpress__Wp_Blog_Post, 'id' | 'slug' | 'title' | 'date'>
  & { featured_media: Maybe<{ localFile: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }> }> }
);

export type Unnamed_7_QueryVariables = {};


export type Unnamed_7_Query = { site: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'productionUrl'>> }> };

export type Unnamed_8_QueryVariables = {};


export type Unnamed_8_Query = { roomTypes: { nodes: Array<CottageCardFragment> } };

export type Unnamed_9_QueryVariables = {};


export type Unnamed_9_Query = { site: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>> }> };

export type Unnamed_10_QueryVariables = {};


export type Unnamed_10_Query = { swirl: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }> };

export type TestimonialFragment = (
  Pick<TestimonialsJson, 'author' | 'body' | 'rating'>
  & { property: Maybe<Pick<TestimonialsJsonProperty, 'name' | 'location'>> }
);

export type Unnamed_11_QueryVariables = {};


export type Unnamed_11_Query = { testimonials: { nodes: Array<TestimonialFragment> }, image: Maybe<PageImageFragment> };

export type BlogPageQueryVariables = {};


export type BlogPageQuery = { allWordpressWpBlogPost: { nodes: Array<PostCardFragment> } };

export type BuyOrSellPageQueryVariables = {};


export type BuyOrSellPageQuery = { page: Maybe<PageFragment> };

export type Unnamed_12_QueryVariables = {};


export type Unnamed_12_Query = { image: Maybe<PageImageFragment> };

export type Unnamed_13_QueryVariables = {};


export type Unnamed_13_Query = { image: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }>, lakes: { nodes: Array<Pick<Wordpress__Wp_Lake, 'wordpress_id' | 'name'>> }, cottages: { nodes: Array<(
      Pick<Wordpress__Wp_Property, 'id' | 'lake' | 'bookedDates'>
      & CottageFragment
    )> }, site: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'productionUrl'>> }> };

export type Unnamed_14_QueryVariables = {};


export type Unnamed_14_Query = { page: Maybe<PageFragment> };

export type Unnamed_15_QueryVariables = {};


export type Unnamed_15_Query = { logoImg: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }>, headerImg: Maybe<PageImageFragment>, aboutImg: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }>, testimonials: { nodes: Array<TestimonialFragment> }, blogPosts: { edges: Array<{ node: PostCardFragment }> } };

export type Unnamed_16_QueryVariables = {};


export type Unnamed_16_Query = { page: Maybe<PageFragment> };

export type Unnamed_17_QueryVariables = {};


export type Unnamed_17_Query = { page: Maybe<PageFragment> };
