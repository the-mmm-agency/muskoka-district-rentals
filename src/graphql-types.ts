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

export type ConciergeServicesJson = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  name?: Maybe<Scalars['String']>,
  image?: Maybe<File>,
};

export type ConciergeServicesJsonConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ConciergeServicesJsonEdge>,
  nodes: Array<ConciergeServicesJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ConciergeServicesJsonGroupConnection>,
};


export type ConciergeServicesJsonConnectionDistinctArgs = {
  field: ConciergeServicesJsonFieldsEnum
};


export type ConciergeServicesJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ConciergeServicesJsonFieldsEnum
};

export type ConciergeServicesJsonEdge = {
  next?: Maybe<ConciergeServicesJson>,
  node: ConciergeServicesJson,
  previous?: Maybe<ConciergeServicesJson>,
};

export type ConciergeServicesJsonFieldsEnum = 
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
  'image___sourceInstanceName' |
  'image___absolutePath' |
  'image___relativePath' |
  'image___extension' |
  'image___size' |
  'image___prettySize' |
  'image___modifiedTime' |
  'image___accessTime' |
  'image___changeTime' |
  'image___birthTime' |
  'image___root' |
  'image___dir' |
  'image___base' |
  'image___ext' |
  'image___name' |
  'image___relativeDirectory' |
  'image___dev' |
  'image___mode' |
  'image___nlink' |
  'image___uid' |
  'image___gid' |
  'image___rdev' |
  'image___ino' |
  'image___atimeMs' |
  'image___mtimeMs' |
  'image___ctimeMs' |
  'image___atime' |
  'image___mtime' |
  'image___ctime' |
  'image___birthtime' |
  'image___birthtimeMs' |
  'image___blksize' |
  'image___blocks' |
  'image___publicURL' |
  'image___childImageSharp___fixed___base64' |
  'image___childImageSharp___fixed___tracedSVG' |
  'image___childImageSharp___fixed___aspectRatio' |
  'image___childImageSharp___fixed___width' |
  'image___childImageSharp___fixed___height' |
  'image___childImageSharp___fixed___src' |
  'image___childImageSharp___fixed___srcSet' |
  'image___childImageSharp___fixed___srcWebp' |
  'image___childImageSharp___fixed___srcSetWebp' |
  'image___childImageSharp___fixed___originalName' |
  'image___childImageSharp___resolutions___base64' |
  'image___childImageSharp___resolutions___tracedSVG' |
  'image___childImageSharp___resolutions___aspectRatio' |
  'image___childImageSharp___resolutions___width' |
  'image___childImageSharp___resolutions___height' |
  'image___childImageSharp___resolutions___src' |
  'image___childImageSharp___resolutions___srcSet' |
  'image___childImageSharp___resolutions___srcWebp' |
  'image___childImageSharp___resolutions___srcSetWebp' |
  'image___childImageSharp___resolutions___originalName' |
  'image___childImageSharp___fluid___base64' |
  'image___childImageSharp___fluid___tracedSVG' |
  'image___childImageSharp___fluid___aspectRatio' |
  'image___childImageSharp___fluid___src' |
  'image___childImageSharp___fluid___srcSet' |
  'image___childImageSharp___fluid___srcWebp' |
  'image___childImageSharp___fluid___srcSetWebp' |
  'image___childImageSharp___fluid___sizes' |
  'image___childImageSharp___fluid___originalImg' |
  'image___childImageSharp___fluid___originalName' |
  'image___childImageSharp___fluid___presentationWidth' |
  'image___childImageSharp___fluid___presentationHeight' |
  'image___childImageSharp___sizes___base64' |
  'image___childImageSharp___sizes___tracedSVG' |
  'image___childImageSharp___sizes___aspectRatio' |
  'image___childImageSharp___sizes___src' |
  'image___childImageSharp___sizes___srcSet' |
  'image___childImageSharp___sizes___srcWebp' |
  'image___childImageSharp___sizes___srcSetWebp' |
  'image___childImageSharp___sizes___sizes' |
  'image___childImageSharp___sizes___originalImg' |
  'image___childImageSharp___sizes___originalName' |
  'image___childImageSharp___sizes___presentationWidth' |
  'image___childImageSharp___sizes___presentationHeight' |
  'image___childImageSharp___original___width' |
  'image___childImageSharp___original___height' |
  'image___childImageSharp___original___src' |
  'image___childImageSharp___resize___src' |
  'image___childImageSharp___resize___tracedSVG' |
  'image___childImageSharp___resize___width' |
  'image___childImageSharp___resize___height' |
  'image___childImageSharp___resize___aspectRatio' |
  'image___childImageSharp___resize___originalName' |
  'image___childImageSharp___id' |
  'image___childImageSharp___parent___id' |
  'image___childImageSharp___parent___children' |
  'image___childImageSharp___children' |
  'image___childImageSharp___children___id' |
  'image___childImageSharp___children___children' |
  'image___childImageSharp___internal___content' |
  'image___childImageSharp___internal___contentDigest' |
  'image___childImageSharp___internal___description' |
  'image___childImageSharp___internal___fieldOwners' |
  'image___childImageSharp___internal___ignoreType' |
  'image___childImageSharp___internal___mediaType' |
  'image___childImageSharp___internal___owner' |
  'image___childImageSharp___internal___type' |
  'image___id' |
  'image___parent___id' |
  'image___parent___parent___id' |
  'image___parent___parent___children' |
  'image___parent___children' |
  'image___parent___children___id' |
  'image___parent___children___children' |
  'image___parent___internal___content' |
  'image___parent___internal___contentDigest' |
  'image___parent___internal___description' |
  'image___parent___internal___fieldOwners' |
  'image___parent___internal___ignoreType' |
  'image___parent___internal___mediaType' |
  'image___parent___internal___owner' |
  'image___parent___internal___type' |
  'image___children' |
  'image___children___id' |
  'image___children___parent___id' |
  'image___children___parent___children' |
  'image___children___children' |
  'image___children___children___id' |
  'image___children___children___children' |
  'image___children___internal___content' |
  'image___children___internal___contentDigest' |
  'image___children___internal___description' |
  'image___children___internal___fieldOwners' |
  'image___children___internal___ignoreType' |
  'image___children___internal___mediaType' |
  'image___children___internal___owner' |
  'image___children___internal___type' |
  'image___internal___content' |
  'image___internal___contentDigest' |
  'image___internal___description' |
  'image___internal___fieldOwners' |
  'image___internal___ignoreType' |
  'image___internal___mediaType' |
  'image___internal___owner' |
  'image___internal___type' |
  'image___childrenConciergeServicesJson' |
  'image___childrenConciergeServicesJson___id' |
  'image___childrenConciergeServicesJson___parent___id' |
  'image___childrenConciergeServicesJson___parent___children' |
  'image___childrenConciergeServicesJson___children' |
  'image___childrenConciergeServicesJson___children___id' |
  'image___childrenConciergeServicesJson___children___children' |
  'image___childrenConciergeServicesJson___internal___content' |
  'image___childrenConciergeServicesJson___internal___contentDigest' |
  'image___childrenConciergeServicesJson___internal___description' |
  'image___childrenConciergeServicesJson___internal___fieldOwners' |
  'image___childrenConciergeServicesJson___internal___ignoreType' |
  'image___childrenConciergeServicesJson___internal___mediaType' |
  'image___childrenConciergeServicesJson___internal___owner' |
  'image___childrenConciergeServicesJson___internal___type' |
  'image___childrenConciergeServicesJson___name' |
  'image___childrenConciergeServicesJson___image___sourceInstanceName' |
  'image___childrenConciergeServicesJson___image___absolutePath' |
  'image___childrenConciergeServicesJson___image___relativePath' |
  'image___childrenConciergeServicesJson___image___extension' |
  'image___childrenConciergeServicesJson___image___size' |
  'image___childrenConciergeServicesJson___image___prettySize' |
  'image___childrenConciergeServicesJson___image___modifiedTime' |
  'image___childrenConciergeServicesJson___image___accessTime' |
  'image___childrenConciergeServicesJson___image___changeTime' |
  'image___childrenConciergeServicesJson___image___birthTime' |
  'image___childrenConciergeServicesJson___image___root' |
  'image___childrenConciergeServicesJson___image___dir' |
  'image___childrenConciergeServicesJson___image___base' |
  'image___childrenConciergeServicesJson___image___ext' |
  'image___childrenConciergeServicesJson___image___name' |
  'image___childrenConciergeServicesJson___image___relativeDirectory' |
  'image___childrenConciergeServicesJson___image___dev' |
  'image___childrenConciergeServicesJson___image___mode' |
  'image___childrenConciergeServicesJson___image___nlink' |
  'image___childrenConciergeServicesJson___image___uid' |
  'image___childrenConciergeServicesJson___image___gid' |
  'image___childrenConciergeServicesJson___image___rdev' |
  'image___childrenConciergeServicesJson___image___ino' |
  'image___childrenConciergeServicesJson___image___atimeMs' |
  'image___childrenConciergeServicesJson___image___mtimeMs' |
  'image___childrenConciergeServicesJson___image___ctimeMs' |
  'image___childrenConciergeServicesJson___image___atime' |
  'image___childrenConciergeServicesJson___image___mtime' |
  'image___childrenConciergeServicesJson___image___ctime' |
  'image___childrenConciergeServicesJson___image___birthtime' |
  'image___childrenConciergeServicesJson___image___birthtimeMs' |
  'image___childrenConciergeServicesJson___image___blksize' |
  'image___childrenConciergeServicesJson___image___blocks' |
  'image___childrenConciergeServicesJson___image___publicURL' |
  'image___childrenConciergeServicesJson___image___id' |
  'image___childrenConciergeServicesJson___image___children' |
  'image___childrenConciergeServicesJson___image___childrenConciergeServicesJson' |
  'image___childrenConciergeServicesJson___image___childrenGuestServicesJson' |
  'image___childrenConciergeServicesJson___image___childrenRentalsJson' |
  'image___childrenConciergeServicesJson___image___childrenTeamJson' |
  'image___childrenConciergeServicesJson___image___childrenTestimonialsJson' |
  'image___childrenGuestServicesJson' |
  'image___childrenGuestServicesJson___id' |
  'image___childrenGuestServicesJson___parent___id' |
  'image___childrenGuestServicesJson___parent___children' |
  'image___childrenGuestServicesJson___children' |
  'image___childrenGuestServicesJson___children___id' |
  'image___childrenGuestServicesJson___children___children' |
  'image___childrenGuestServicesJson___internal___content' |
  'image___childrenGuestServicesJson___internal___contentDigest' |
  'image___childrenGuestServicesJson___internal___description' |
  'image___childrenGuestServicesJson___internal___fieldOwners' |
  'image___childrenGuestServicesJson___internal___ignoreType' |
  'image___childrenGuestServicesJson___internal___mediaType' |
  'image___childrenGuestServicesJson___internal___owner' |
  'image___childrenGuestServicesJson___internal___type' |
  'image___childrenGuestServicesJson___name' |
  'image___childrenGuestServicesJson___description' |
  'image___childrenGuestServicesJson___icon___sourceInstanceName' |
  'image___childrenGuestServicesJson___icon___absolutePath' |
  'image___childrenGuestServicesJson___icon___relativePath' |
  'image___childrenGuestServicesJson___icon___extension' |
  'image___childrenGuestServicesJson___icon___size' |
  'image___childrenGuestServicesJson___icon___prettySize' |
  'image___childrenGuestServicesJson___icon___modifiedTime' |
  'image___childrenGuestServicesJson___icon___accessTime' |
  'image___childrenGuestServicesJson___icon___changeTime' |
  'image___childrenGuestServicesJson___icon___birthTime' |
  'image___childrenGuestServicesJson___icon___root' |
  'image___childrenGuestServicesJson___icon___dir' |
  'image___childrenGuestServicesJson___icon___base' |
  'image___childrenGuestServicesJson___icon___ext' |
  'image___childrenGuestServicesJson___icon___name' |
  'image___childrenGuestServicesJson___icon___relativeDirectory' |
  'image___childrenGuestServicesJson___icon___dev' |
  'image___childrenGuestServicesJson___icon___mode' |
  'image___childrenGuestServicesJson___icon___nlink' |
  'image___childrenGuestServicesJson___icon___uid' |
  'image___childrenGuestServicesJson___icon___gid' |
  'image___childrenGuestServicesJson___icon___rdev' |
  'image___childrenGuestServicesJson___icon___ino' |
  'image___childrenGuestServicesJson___icon___atimeMs' |
  'image___childrenGuestServicesJson___icon___mtimeMs' |
  'image___childrenGuestServicesJson___icon___ctimeMs' |
  'image___childrenGuestServicesJson___icon___atime' |
  'image___childrenGuestServicesJson___icon___mtime' |
  'image___childrenGuestServicesJson___icon___ctime' |
  'image___childrenGuestServicesJson___icon___birthtime' |
  'image___childrenGuestServicesJson___icon___birthtimeMs' |
  'image___childrenGuestServicesJson___icon___blksize' |
  'image___childrenGuestServicesJson___icon___blocks' |
  'image___childrenGuestServicesJson___icon___publicURL' |
  'image___childrenGuestServicesJson___icon___id' |
  'image___childrenGuestServicesJson___icon___children' |
  'image___childrenGuestServicesJson___icon___childrenConciergeServicesJson' |
  'image___childrenGuestServicesJson___icon___childrenGuestServicesJson' |
  'image___childrenGuestServicesJson___icon___childrenRentalsJson' |
  'image___childrenGuestServicesJson___icon___childrenTeamJson' |
  'image___childrenGuestServicesJson___icon___childrenTestimonialsJson' |
  'image___childrenRentalsJson' |
  'image___childrenRentalsJson___id' |
  'image___childrenRentalsJson___parent___id' |
  'image___childrenRentalsJson___parent___children' |
  'image___childrenRentalsJson___children' |
  'image___childrenRentalsJson___children___id' |
  'image___childrenRentalsJson___children___children' |
  'image___childrenRentalsJson___internal___content' |
  'image___childrenRentalsJson___internal___contentDigest' |
  'image___childrenRentalsJson___internal___description' |
  'image___childrenRentalsJson___internal___fieldOwners' |
  'image___childrenRentalsJson___internal___ignoreType' |
  'image___childrenRentalsJson___internal___mediaType' |
  'image___childrenRentalsJson___internal___owner' |
  'image___childrenRentalsJson___internal___type' |
  'image___childrenRentalsJson___bedrooms' |
  'image___childrenRentalsJson___price' |
  'image___childrenRentalsJson___guests' |
  'image___childrenRentalsJson___title' |
  'image___childrenRentalsJson___picture___sourceInstanceName' |
  'image___childrenRentalsJson___picture___absolutePath' |
  'image___childrenRentalsJson___picture___relativePath' |
  'image___childrenRentalsJson___picture___extension' |
  'image___childrenRentalsJson___picture___size' |
  'image___childrenRentalsJson___picture___prettySize' |
  'image___childrenRentalsJson___picture___modifiedTime' |
  'image___childrenRentalsJson___picture___accessTime' |
  'image___childrenRentalsJson___picture___changeTime' |
  'image___childrenRentalsJson___picture___birthTime' |
  'image___childrenRentalsJson___picture___root' |
  'image___childrenRentalsJson___picture___dir' |
  'image___childrenRentalsJson___picture___base' |
  'image___childrenRentalsJson___picture___ext' |
  'image___childrenRentalsJson___picture___name' |
  'image___childrenRentalsJson___picture___relativeDirectory' |
  'image___childrenRentalsJson___picture___dev' |
  'image___childrenRentalsJson___picture___mode' |
  'image___childrenRentalsJson___picture___nlink' |
  'image___childrenRentalsJson___picture___uid' |
  'image___childrenRentalsJson___picture___gid' |
  'image___childrenRentalsJson___picture___rdev' |
  'image___childrenRentalsJson___picture___ino' |
  'image___childrenRentalsJson___picture___atimeMs' |
  'image___childrenRentalsJson___picture___mtimeMs' |
  'image___childrenRentalsJson___picture___ctimeMs' |
  'image___childrenRentalsJson___picture___atime' |
  'image___childrenRentalsJson___picture___mtime' |
  'image___childrenRentalsJson___picture___ctime' |
  'image___childrenRentalsJson___picture___birthtime' |
  'image___childrenRentalsJson___picture___birthtimeMs' |
  'image___childrenRentalsJson___picture___blksize' |
  'image___childrenRentalsJson___picture___blocks' |
  'image___childrenRentalsJson___picture___publicURL' |
  'image___childrenRentalsJson___picture___id' |
  'image___childrenRentalsJson___picture___children' |
  'image___childrenRentalsJson___picture___childrenConciergeServicesJson' |
  'image___childrenRentalsJson___picture___childrenGuestServicesJson' |
  'image___childrenRentalsJson___picture___childrenRentalsJson' |
  'image___childrenRentalsJson___picture___childrenTeamJson' |
  'image___childrenRentalsJson___picture___childrenTestimonialsJson' |
  'image___childrenRentalsJson___slug' |
  'image___childrenRentalsJson___category' |
  'image___childrenTeamJson' |
  'image___childrenTeamJson___id' |
  'image___childrenTeamJson___parent___id' |
  'image___childrenTeamJson___parent___children' |
  'image___childrenTeamJson___children' |
  'image___childrenTeamJson___children___id' |
  'image___childrenTeamJson___children___children' |
  'image___childrenTeamJson___internal___content' |
  'image___childrenTeamJson___internal___contentDigest' |
  'image___childrenTeamJson___internal___description' |
  'image___childrenTeamJson___internal___fieldOwners' |
  'image___childrenTeamJson___internal___ignoreType' |
  'image___childrenTeamJson___internal___mediaType' |
  'image___childrenTeamJson___internal___owner' |
  'image___childrenTeamJson___internal___type' |
  'image___childrenTeamJson___name' |
  'image___childrenTeamJson___title' |
  'image___childrenTeamJson___picture___sourceInstanceName' |
  'image___childrenTeamJson___picture___absolutePath' |
  'image___childrenTeamJson___picture___relativePath' |
  'image___childrenTeamJson___picture___extension' |
  'image___childrenTeamJson___picture___size' |
  'image___childrenTeamJson___picture___prettySize' |
  'image___childrenTeamJson___picture___modifiedTime' |
  'image___childrenTeamJson___picture___accessTime' |
  'image___childrenTeamJson___picture___changeTime' |
  'image___childrenTeamJson___picture___birthTime' |
  'image___childrenTeamJson___picture___root' |
  'image___childrenTeamJson___picture___dir' |
  'image___childrenTeamJson___picture___base' |
  'image___childrenTeamJson___picture___ext' |
  'image___childrenTeamJson___picture___name' |
  'image___childrenTeamJson___picture___relativeDirectory' |
  'image___childrenTeamJson___picture___dev' |
  'image___childrenTeamJson___picture___mode' |
  'image___childrenTeamJson___picture___nlink' |
  'image___childrenTeamJson___picture___uid' |
  'image___childrenTeamJson___picture___gid' |
  'image___childrenTeamJson___picture___rdev' |
  'image___childrenTeamJson___picture___ino' |
  'image___childrenTeamJson___picture___atimeMs' |
  'image___childrenTeamJson___picture___mtimeMs' |
  'image___childrenTeamJson___picture___ctimeMs' |
  'image___childrenTeamJson___picture___atime' |
  'image___childrenTeamJson___picture___mtime' |
  'image___childrenTeamJson___picture___ctime' |
  'image___childrenTeamJson___picture___birthtime' |
  'image___childrenTeamJson___picture___birthtimeMs' |
  'image___childrenTeamJson___picture___blksize' |
  'image___childrenTeamJson___picture___blocks' |
  'image___childrenTeamJson___picture___publicURL' |
  'image___childrenTeamJson___picture___id' |
  'image___childrenTeamJson___picture___children' |
  'image___childrenTeamJson___picture___childrenConciergeServicesJson' |
  'image___childrenTeamJson___picture___childrenGuestServicesJson' |
  'image___childrenTeamJson___picture___childrenRentalsJson' |
  'image___childrenTeamJson___picture___childrenTeamJson' |
  'image___childrenTeamJson___picture___childrenTestimonialsJson' |
  'image___childrenTeamJson___bio' |
  'image___childrenTestimonialsJson' |
  'image___childrenTestimonialsJson___id' |
  'image___childrenTestimonialsJson___parent___id' |
  'image___childrenTestimonialsJson___parent___children' |
  'image___childrenTestimonialsJson___children' |
  'image___childrenTestimonialsJson___children___id' |
  'image___childrenTestimonialsJson___children___children' |
  'image___childrenTestimonialsJson___internal___content' |
  'image___childrenTestimonialsJson___internal___contentDigest' |
  'image___childrenTestimonialsJson___internal___description' |
  'image___childrenTestimonialsJson___internal___fieldOwners' |
  'image___childrenTestimonialsJson___internal___ignoreType' |
  'image___childrenTestimonialsJson___internal___mediaType' |
  'image___childrenTestimonialsJson___internal___owner' |
  'image___childrenTestimonialsJson___internal___type' |
  'image___childrenTestimonialsJson___body' |
  'image___childrenTestimonialsJson___rating' |
  'image___childrenTestimonialsJson___author' |
  'image___childrenTestimonialsJson___property___name' |
  'image___childrenTestimonialsJson___property___location' |
  'image___childMdx___rawBody' |
  'image___childMdx___fileAbsolutePath' |
  'image___childMdx___frontmatter___title' |
  'image___childMdx___frontmatter___slug' |
  'image___childMdx___frontmatter___contactForm' |
  'image___childMdx___body' |
  'image___childMdx___excerpt' |
  'image___childMdx___headings' |
  'image___childMdx___headings___value' |
  'image___childMdx___headings___depth' |
  'image___childMdx___html' |
  'image___childMdx___mdxAST' |
  'image___childMdx___tableOfContents' |
  'image___childMdx___timeToRead' |
  'image___childMdx___wordCount___paragraphs' |
  'image___childMdx___wordCount___sentences' |
  'image___childMdx___wordCount___words' |
  'image___childMdx___id' |
  'image___childMdx___parent___id' |
  'image___childMdx___parent___children' |
  'image___childMdx___children' |
  'image___childMdx___children___id' |
  'image___childMdx___children___children' |
  'image___childMdx___internal___content' |
  'image___childMdx___internal___contentDigest' |
  'image___childMdx___internal___description' |
  'image___childMdx___internal___fieldOwners' |
  'image___childMdx___internal___ignoreType' |
  'image___childMdx___internal___mediaType' |
  'image___childMdx___internal___owner' |
  'image___childMdx___internal___type';

export type ConciergeServicesJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<FileFilterInput>,
};

export type ConciergeServicesJsonFilterListInput = {
  elemMatch?: Maybe<ConciergeServicesJsonFilterInput>,
};

export type ConciergeServicesJsonGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ConciergeServicesJsonEdge>,
  nodes: Array<ConciergeServicesJson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ConciergeServicesJsonSortInput = {
  fields?: Maybe<Array<Maybe<ConciergeServicesJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
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
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>,
  childImageSharp?: Maybe<ImageSharp>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childrenConciergeServicesJson?: Maybe<Array<Maybe<ConciergeServicesJson>>>,
  childrenGuestServicesJson?: Maybe<Array<Maybe<GuestServicesJson>>>,
  childrenRentalsJson?: Maybe<Array<Maybe<RentalsJson>>>,
  childrenTeamJson?: Maybe<Array<Maybe<TeamJson>>>,
  childrenTestimonialsJson?: Maybe<Array<Maybe<TestimonialsJson>>>,
  childMdx?: Maybe<Mdx>,
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
  'childrenConciergeServicesJson' |
  'childrenConciergeServicesJson___id' |
  'childrenConciergeServicesJson___parent___id' |
  'childrenConciergeServicesJson___parent___parent___id' |
  'childrenConciergeServicesJson___parent___parent___children' |
  'childrenConciergeServicesJson___parent___children' |
  'childrenConciergeServicesJson___parent___children___id' |
  'childrenConciergeServicesJson___parent___children___children' |
  'childrenConciergeServicesJson___parent___internal___content' |
  'childrenConciergeServicesJson___parent___internal___contentDigest' |
  'childrenConciergeServicesJson___parent___internal___description' |
  'childrenConciergeServicesJson___parent___internal___fieldOwners' |
  'childrenConciergeServicesJson___parent___internal___ignoreType' |
  'childrenConciergeServicesJson___parent___internal___mediaType' |
  'childrenConciergeServicesJson___parent___internal___owner' |
  'childrenConciergeServicesJson___parent___internal___type' |
  'childrenConciergeServicesJson___children' |
  'childrenConciergeServicesJson___children___id' |
  'childrenConciergeServicesJson___children___parent___id' |
  'childrenConciergeServicesJson___children___parent___children' |
  'childrenConciergeServicesJson___children___children' |
  'childrenConciergeServicesJson___children___children___id' |
  'childrenConciergeServicesJson___children___children___children' |
  'childrenConciergeServicesJson___children___internal___content' |
  'childrenConciergeServicesJson___children___internal___contentDigest' |
  'childrenConciergeServicesJson___children___internal___description' |
  'childrenConciergeServicesJson___children___internal___fieldOwners' |
  'childrenConciergeServicesJson___children___internal___ignoreType' |
  'childrenConciergeServicesJson___children___internal___mediaType' |
  'childrenConciergeServicesJson___children___internal___owner' |
  'childrenConciergeServicesJson___children___internal___type' |
  'childrenConciergeServicesJson___internal___content' |
  'childrenConciergeServicesJson___internal___contentDigest' |
  'childrenConciergeServicesJson___internal___description' |
  'childrenConciergeServicesJson___internal___fieldOwners' |
  'childrenConciergeServicesJson___internal___ignoreType' |
  'childrenConciergeServicesJson___internal___mediaType' |
  'childrenConciergeServicesJson___internal___owner' |
  'childrenConciergeServicesJson___internal___type' |
  'childrenConciergeServicesJson___name' |
  'childrenConciergeServicesJson___image___sourceInstanceName' |
  'childrenConciergeServicesJson___image___absolutePath' |
  'childrenConciergeServicesJson___image___relativePath' |
  'childrenConciergeServicesJson___image___extension' |
  'childrenConciergeServicesJson___image___size' |
  'childrenConciergeServicesJson___image___prettySize' |
  'childrenConciergeServicesJson___image___modifiedTime' |
  'childrenConciergeServicesJson___image___accessTime' |
  'childrenConciergeServicesJson___image___changeTime' |
  'childrenConciergeServicesJson___image___birthTime' |
  'childrenConciergeServicesJson___image___root' |
  'childrenConciergeServicesJson___image___dir' |
  'childrenConciergeServicesJson___image___base' |
  'childrenConciergeServicesJson___image___ext' |
  'childrenConciergeServicesJson___image___name' |
  'childrenConciergeServicesJson___image___relativeDirectory' |
  'childrenConciergeServicesJson___image___dev' |
  'childrenConciergeServicesJson___image___mode' |
  'childrenConciergeServicesJson___image___nlink' |
  'childrenConciergeServicesJson___image___uid' |
  'childrenConciergeServicesJson___image___gid' |
  'childrenConciergeServicesJson___image___rdev' |
  'childrenConciergeServicesJson___image___ino' |
  'childrenConciergeServicesJson___image___atimeMs' |
  'childrenConciergeServicesJson___image___mtimeMs' |
  'childrenConciergeServicesJson___image___ctimeMs' |
  'childrenConciergeServicesJson___image___atime' |
  'childrenConciergeServicesJson___image___mtime' |
  'childrenConciergeServicesJson___image___ctime' |
  'childrenConciergeServicesJson___image___birthtime' |
  'childrenConciergeServicesJson___image___birthtimeMs' |
  'childrenConciergeServicesJson___image___blksize' |
  'childrenConciergeServicesJson___image___blocks' |
  'childrenConciergeServicesJson___image___publicURL' |
  'childrenConciergeServicesJson___image___childImageSharp___id' |
  'childrenConciergeServicesJson___image___childImageSharp___children' |
  'childrenConciergeServicesJson___image___id' |
  'childrenConciergeServicesJson___image___parent___id' |
  'childrenConciergeServicesJson___image___parent___children' |
  'childrenConciergeServicesJson___image___children' |
  'childrenConciergeServicesJson___image___children___id' |
  'childrenConciergeServicesJson___image___children___children' |
  'childrenConciergeServicesJson___image___internal___content' |
  'childrenConciergeServicesJson___image___internal___contentDigest' |
  'childrenConciergeServicesJson___image___internal___description' |
  'childrenConciergeServicesJson___image___internal___fieldOwners' |
  'childrenConciergeServicesJson___image___internal___ignoreType' |
  'childrenConciergeServicesJson___image___internal___mediaType' |
  'childrenConciergeServicesJson___image___internal___owner' |
  'childrenConciergeServicesJson___image___internal___type' |
  'childrenConciergeServicesJson___image___childrenConciergeServicesJson' |
  'childrenConciergeServicesJson___image___childrenConciergeServicesJson___id' |
  'childrenConciergeServicesJson___image___childrenConciergeServicesJson___children' |
  'childrenConciergeServicesJson___image___childrenConciergeServicesJson___name' |
  'childrenConciergeServicesJson___image___childrenGuestServicesJson' |
  'childrenConciergeServicesJson___image___childrenGuestServicesJson___id' |
  'childrenConciergeServicesJson___image___childrenGuestServicesJson___children' |
  'childrenConciergeServicesJson___image___childrenGuestServicesJson___name' |
  'childrenConciergeServicesJson___image___childrenGuestServicesJson___description' |
  'childrenConciergeServicesJson___image___childrenRentalsJson' |
  'childrenConciergeServicesJson___image___childrenRentalsJson___id' |
  'childrenConciergeServicesJson___image___childrenRentalsJson___children' |
  'childrenConciergeServicesJson___image___childrenRentalsJson___bedrooms' |
  'childrenConciergeServicesJson___image___childrenRentalsJson___price' |
  'childrenConciergeServicesJson___image___childrenRentalsJson___guests' |
  'childrenConciergeServicesJson___image___childrenRentalsJson___title' |
  'childrenConciergeServicesJson___image___childrenRentalsJson___slug' |
  'childrenConciergeServicesJson___image___childrenRentalsJson___category' |
  'childrenConciergeServicesJson___image___childrenTeamJson' |
  'childrenConciergeServicesJson___image___childrenTeamJson___id' |
  'childrenConciergeServicesJson___image___childrenTeamJson___children' |
  'childrenConciergeServicesJson___image___childrenTeamJson___name' |
  'childrenConciergeServicesJson___image___childrenTeamJson___title' |
  'childrenConciergeServicesJson___image___childrenTeamJson___bio' |
  'childrenConciergeServicesJson___image___childrenTestimonialsJson' |
  'childrenConciergeServicesJson___image___childrenTestimonialsJson___id' |
  'childrenConciergeServicesJson___image___childrenTestimonialsJson___children' |
  'childrenConciergeServicesJson___image___childrenTestimonialsJson___body' |
  'childrenConciergeServicesJson___image___childrenTestimonialsJson___rating' |
  'childrenConciergeServicesJson___image___childrenTestimonialsJson___author' |
  'childrenConciergeServicesJson___image___childMdx___rawBody' |
  'childrenConciergeServicesJson___image___childMdx___fileAbsolutePath' |
  'childrenConciergeServicesJson___image___childMdx___body' |
  'childrenConciergeServicesJson___image___childMdx___excerpt' |
  'childrenConciergeServicesJson___image___childMdx___headings' |
  'childrenConciergeServicesJson___image___childMdx___html' |
  'childrenConciergeServicesJson___image___childMdx___mdxAST' |
  'childrenConciergeServicesJson___image___childMdx___tableOfContents' |
  'childrenConciergeServicesJson___image___childMdx___timeToRead' |
  'childrenConciergeServicesJson___image___childMdx___id' |
  'childrenConciergeServicesJson___image___childMdx___children' |
  'childrenGuestServicesJson' |
  'childrenGuestServicesJson___id' |
  'childrenGuestServicesJson___parent___id' |
  'childrenGuestServicesJson___parent___parent___id' |
  'childrenGuestServicesJson___parent___parent___children' |
  'childrenGuestServicesJson___parent___children' |
  'childrenGuestServicesJson___parent___children___id' |
  'childrenGuestServicesJson___parent___children___children' |
  'childrenGuestServicesJson___parent___internal___content' |
  'childrenGuestServicesJson___parent___internal___contentDigest' |
  'childrenGuestServicesJson___parent___internal___description' |
  'childrenGuestServicesJson___parent___internal___fieldOwners' |
  'childrenGuestServicesJson___parent___internal___ignoreType' |
  'childrenGuestServicesJson___parent___internal___mediaType' |
  'childrenGuestServicesJson___parent___internal___owner' |
  'childrenGuestServicesJson___parent___internal___type' |
  'childrenGuestServicesJson___children' |
  'childrenGuestServicesJson___children___id' |
  'childrenGuestServicesJson___children___parent___id' |
  'childrenGuestServicesJson___children___parent___children' |
  'childrenGuestServicesJson___children___children' |
  'childrenGuestServicesJson___children___children___id' |
  'childrenGuestServicesJson___children___children___children' |
  'childrenGuestServicesJson___children___internal___content' |
  'childrenGuestServicesJson___children___internal___contentDigest' |
  'childrenGuestServicesJson___children___internal___description' |
  'childrenGuestServicesJson___children___internal___fieldOwners' |
  'childrenGuestServicesJson___children___internal___ignoreType' |
  'childrenGuestServicesJson___children___internal___mediaType' |
  'childrenGuestServicesJson___children___internal___owner' |
  'childrenGuestServicesJson___children___internal___type' |
  'childrenGuestServicesJson___internal___content' |
  'childrenGuestServicesJson___internal___contentDigest' |
  'childrenGuestServicesJson___internal___description' |
  'childrenGuestServicesJson___internal___fieldOwners' |
  'childrenGuestServicesJson___internal___ignoreType' |
  'childrenGuestServicesJson___internal___mediaType' |
  'childrenGuestServicesJson___internal___owner' |
  'childrenGuestServicesJson___internal___type' |
  'childrenGuestServicesJson___name' |
  'childrenGuestServicesJson___description' |
  'childrenGuestServicesJson___icon___sourceInstanceName' |
  'childrenGuestServicesJson___icon___absolutePath' |
  'childrenGuestServicesJson___icon___relativePath' |
  'childrenGuestServicesJson___icon___extension' |
  'childrenGuestServicesJson___icon___size' |
  'childrenGuestServicesJson___icon___prettySize' |
  'childrenGuestServicesJson___icon___modifiedTime' |
  'childrenGuestServicesJson___icon___accessTime' |
  'childrenGuestServicesJson___icon___changeTime' |
  'childrenGuestServicesJson___icon___birthTime' |
  'childrenGuestServicesJson___icon___root' |
  'childrenGuestServicesJson___icon___dir' |
  'childrenGuestServicesJson___icon___base' |
  'childrenGuestServicesJson___icon___ext' |
  'childrenGuestServicesJson___icon___name' |
  'childrenGuestServicesJson___icon___relativeDirectory' |
  'childrenGuestServicesJson___icon___dev' |
  'childrenGuestServicesJson___icon___mode' |
  'childrenGuestServicesJson___icon___nlink' |
  'childrenGuestServicesJson___icon___uid' |
  'childrenGuestServicesJson___icon___gid' |
  'childrenGuestServicesJson___icon___rdev' |
  'childrenGuestServicesJson___icon___ino' |
  'childrenGuestServicesJson___icon___atimeMs' |
  'childrenGuestServicesJson___icon___mtimeMs' |
  'childrenGuestServicesJson___icon___ctimeMs' |
  'childrenGuestServicesJson___icon___atime' |
  'childrenGuestServicesJson___icon___mtime' |
  'childrenGuestServicesJson___icon___ctime' |
  'childrenGuestServicesJson___icon___birthtime' |
  'childrenGuestServicesJson___icon___birthtimeMs' |
  'childrenGuestServicesJson___icon___blksize' |
  'childrenGuestServicesJson___icon___blocks' |
  'childrenGuestServicesJson___icon___publicURL' |
  'childrenGuestServicesJson___icon___childImageSharp___id' |
  'childrenGuestServicesJson___icon___childImageSharp___children' |
  'childrenGuestServicesJson___icon___id' |
  'childrenGuestServicesJson___icon___parent___id' |
  'childrenGuestServicesJson___icon___parent___children' |
  'childrenGuestServicesJson___icon___children' |
  'childrenGuestServicesJson___icon___children___id' |
  'childrenGuestServicesJson___icon___children___children' |
  'childrenGuestServicesJson___icon___internal___content' |
  'childrenGuestServicesJson___icon___internal___contentDigest' |
  'childrenGuestServicesJson___icon___internal___description' |
  'childrenGuestServicesJson___icon___internal___fieldOwners' |
  'childrenGuestServicesJson___icon___internal___ignoreType' |
  'childrenGuestServicesJson___icon___internal___mediaType' |
  'childrenGuestServicesJson___icon___internal___owner' |
  'childrenGuestServicesJson___icon___internal___type' |
  'childrenGuestServicesJson___icon___childrenConciergeServicesJson' |
  'childrenGuestServicesJson___icon___childrenConciergeServicesJson___id' |
  'childrenGuestServicesJson___icon___childrenConciergeServicesJson___children' |
  'childrenGuestServicesJson___icon___childrenConciergeServicesJson___name' |
  'childrenGuestServicesJson___icon___childrenGuestServicesJson' |
  'childrenGuestServicesJson___icon___childrenGuestServicesJson___id' |
  'childrenGuestServicesJson___icon___childrenGuestServicesJson___children' |
  'childrenGuestServicesJson___icon___childrenGuestServicesJson___name' |
  'childrenGuestServicesJson___icon___childrenGuestServicesJson___description' |
  'childrenGuestServicesJson___icon___childrenRentalsJson' |
  'childrenGuestServicesJson___icon___childrenRentalsJson___id' |
  'childrenGuestServicesJson___icon___childrenRentalsJson___children' |
  'childrenGuestServicesJson___icon___childrenRentalsJson___bedrooms' |
  'childrenGuestServicesJson___icon___childrenRentalsJson___price' |
  'childrenGuestServicesJson___icon___childrenRentalsJson___guests' |
  'childrenGuestServicesJson___icon___childrenRentalsJson___title' |
  'childrenGuestServicesJson___icon___childrenRentalsJson___slug' |
  'childrenGuestServicesJson___icon___childrenRentalsJson___category' |
  'childrenGuestServicesJson___icon___childrenTeamJson' |
  'childrenGuestServicesJson___icon___childrenTeamJson___id' |
  'childrenGuestServicesJson___icon___childrenTeamJson___children' |
  'childrenGuestServicesJson___icon___childrenTeamJson___name' |
  'childrenGuestServicesJson___icon___childrenTeamJson___title' |
  'childrenGuestServicesJson___icon___childrenTeamJson___bio' |
  'childrenGuestServicesJson___icon___childrenTestimonialsJson' |
  'childrenGuestServicesJson___icon___childrenTestimonialsJson___id' |
  'childrenGuestServicesJson___icon___childrenTestimonialsJson___children' |
  'childrenGuestServicesJson___icon___childrenTestimonialsJson___body' |
  'childrenGuestServicesJson___icon___childrenTestimonialsJson___rating' |
  'childrenGuestServicesJson___icon___childrenTestimonialsJson___author' |
  'childrenGuestServicesJson___icon___childMdx___rawBody' |
  'childrenGuestServicesJson___icon___childMdx___fileAbsolutePath' |
  'childrenGuestServicesJson___icon___childMdx___body' |
  'childrenGuestServicesJson___icon___childMdx___excerpt' |
  'childrenGuestServicesJson___icon___childMdx___headings' |
  'childrenGuestServicesJson___icon___childMdx___html' |
  'childrenGuestServicesJson___icon___childMdx___mdxAST' |
  'childrenGuestServicesJson___icon___childMdx___tableOfContents' |
  'childrenGuestServicesJson___icon___childMdx___timeToRead' |
  'childrenGuestServicesJson___icon___childMdx___id' |
  'childrenGuestServicesJson___icon___childMdx___children' |
  'childrenRentalsJson' |
  'childrenRentalsJson___id' |
  'childrenRentalsJson___parent___id' |
  'childrenRentalsJson___parent___parent___id' |
  'childrenRentalsJson___parent___parent___children' |
  'childrenRentalsJson___parent___children' |
  'childrenRentalsJson___parent___children___id' |
  'childrenRentalsJson___parent___children___children' |
  'childrenRentalsJson___parent___internal___content' |
  'childrenRentalsJson___parent___internal___contentDigest' |
  'childrenRentalsJson___parent___internal___description' |
  'childrenRentalsJson___parent___internal___fieldOwners' |
  'childrenRentalsJson___parent___internal___ignoreType' |
  'childrenRentalsJson___parent___internal___mediaType' |
  'childrenRentalsJson___parent___internal___owner' |
  'childrenRentalsJson___parent___internal___type' |
  'childrenRentalsJson___children' |
  'childrenRentalsJson___children___id' |
  'childrenRentalsJson___children___parent___id' |
  'childrenRentalsJson___children___parent___children' |
  'childrenRentalsJson___children___children' |
  'childrenRentalsJson___children___children___id' |
  'childrenRentalsJson___children___children___children' |
  'childrenRentalsJson___children___internal___content' |
  'childrenRentalsJson___children___internal___contentDigest' |
  'childrenRentalsJson___children___internal___description' |
  'childrenRentalsJson___children___internal___fieldOwners' |
  'childrenRentalsJson___children___internal___ignoreType' |
  'childrenRentalsJson___children___internal___mediaType' |
  'childrenRentalsJson___children___internal___owner' |
  'childrenRentalsJson___children___internal___type' |
  'childrenRentalsJson___internal___content' |
  'childrenRentalsJson___internal___contentDigest' |
  'childrenRentalsJson___internal___description' |
  'childrenRentalsJson___internal___fieldOwners' |
  'childrenRentalsJson___internal___ignoreType' |
  'childrenRentalsJson___internal___mediaType' |
  'childrenRentalsJson___internal___owner' |
  'childrenRentalsJson___internal___type' |
  'childrenRentalsJson___bedrooms' |
  'childrenRentalsJson___price' |
  'childrenRentalsJson___guests' |
  'childrenRentalsJson___title' |
  'childrenRentalsJson___picture___sourceInstanceName' |
  'childrenRentalsJson___picture___absolutePath' |
  'childrenRentalsJson___picture___relativePath' |
  'childrenRentalsJson___picture___extension' |
  'childrenRentalsJson___picture___size' |
  'childrenRentalsJson___picture___prettySize' |
  'childrenRentalsJson___picture___modifiedTime' |
  'childrenRentalsJson___picture___accessTime' |
  'childrenRentalsJson___picture___changeTime' |
  'childrenRentalsJson___picture___birthTime' |
  'childrenRentalsJson___picture___root' |
  'childrenRentalsJson___picture___dir' |
  'childrenRentalsJson___picture___base' |
  'childrenRentalsJson___picture___ext' |
  'childrenRentalsJson___picture___name' |
  'childrenRentalsJson___picture___relativeDirectory' |
  'childrenRentalsJson___picture___dev' |
  'childrenRentalsJson___picture___mode' |
  'childrenRentalsJson___picture___nlink' |
  'childrenRentalsJson___picture___uid' |
  'childrenRentalsJson___picture___gid' |
  'childrenRentalsJson___picture___rdev' |
  'childrenRentalsJson___picture___ino' |
  'childrenRentalsJson___picture___atimeMs' |
  'childrenRentalsJson___picture___mtimeMs' |
  'childrenRentalsJson___picture___ctimeMs' |
  'childrenRentalsJson___picture___atime' |
  'childrenRentalsJson___picture___mtime' |
  'childrenRentalsJson___picture___ctime' |
  'childrenRentalsJson___picture___birthtime' |
  'childrenRentalsJson___picture___birthtimeMs' |
  'childrenRentalsJson___picture___blksize' |
  'childrenRentalsJson___picture___blocks' |
  'childrenRentalsJson___picture___publicURL' |
  'childrenRentalsJson___picture___childImageSharp___id' |
  'childrenRentalsJson___picture___childImageSharp___children' |
  'childrenRentalsJson___picture___id' |
  'childrenRentalsJson___picture___parent___id' |
  'childrenRentalsJson___picture___parent___children' |
  'childrenRentalsJson___picture___children' |
  'childrenRentalsJson___picture___children___id' |
  'childrenRentalsJson___picture___children___children' |
  'childrenRentalsJson___picture___internal___content' |
  'childrenRentalsJson___picture___internal___contentDigest' |
  'childrenRentalsJson___picture___internal___description' |
  'childrenRentalsJson___picture___internal___fieldOwners' |
  'childrenRentalsJson___picture___internal___ignoreType' |
  'childrenRentalsJson___picture___internal___mediaType' |
  'childrenRentalsJson___picture___internal___owner' |
  'childrenRentalsJson___picture___internal___type' |
  'childrenRentalsJson___picture___childrenConciergeServicesJson' |
  'childrenRentalsJson___picture___childrenConciergeServicesJson___id' |
  'childrenRentalsJson___picture___childrenConciergeServicesJson___children' |
  'childrenRentalsJson___picture___childrenConciergeServicesJson___name' |
  'childrenRentalsJson___picture___childrenGuestServicesJson' |
  'childrenRentalsJson___picture___childrenGuestServicesJson___id' |
  'childrenRentalsJson___picture___childrenGuestServicesJson___children' |
  'childrenRentalsJson___picture___childrenGuestServicesJson___name' |
  'childrenRentalsJson___picture___childrenGuestServicesJson___description' |
  'childrenRentalsJson___picture___childrenRentalsJson' |
  'childrenRentalsJson___picture___childrenRentalsJson___id' |
  'childrenRentalsJson___picture___childrenRentalsJson___children' |
  'childrenRentalsJson___picture___childrenRentalsJson___bedrooms' |
  'childrenRentalsJson___picture___childrenRentalsJson___price' |
  'childrenRentalsJson___picture___childrenRentalsJson___guests' |
  'childrenRentalsJson___picture___childrenRentalsJson___title' |
  'childrenRentalsJson___picture___childrenRentalsJson___slug' |
  'childrenRentalsJson___picture___childrenRentalsJson___category' |
  'childrenRentalsJson___picture___childrenTeamJson' |
  'childrenRentalsJson___picture___childrenTeamJson___id' |
  'childrenRentalsJson___picture___childrenTeamJson___children' |
  'childrenRentalsJson___picture___childrenTeamJson___name' |
  'childrenRentalsJson___picture___childrenTeamJson___title' |
  'childrenRentalsJson___picture___childrenTeamJson___bio' |
  'childrenRentalsJson___picture___childrenTestimonialsJson' |
  'childrenRentalsJson___picture___childrenTestimonialsJson___id' |
  'childrenRentalsJson___picture___childrenTestimonialsJson___children' |
  'childrenRentalsJson___picture___childrenTestimonialsJson___body' |
  'childrenRentalsJson___picture___childrenTestimonialsJson___rating' |
  'childrenRentalsJson___picture___childrenTestimonialsJson___author' |
  'childrenRentalsJson___picture___childMdx___rawBody' |
  'childrenRentalsJson___picture___childMdx___fileAbsolutePath' |
  'childrenRentalsJson___picture___childMdx___body' |
  'childrenRentalsJson___picture___childMdx___excerpt' |
  'childrenRentalsJson___picture___childMdx___headings' |
  'childrenRentalsJson___picture___childMdx___html' |
  'childrenRentalsJson___picture___childMdx___mdxAST' |
  'childrenRentalsJson___picture___childMdx___tableOfContents' |
  'childrenRentalsJson___picture___childMdx___timeToRead' |
  'childrenRentalsJson___picture___childMdx___id' |
  'childrenRentalsJson___picture___childMdx___children' |
  'childrenRentalsJson___slug' |
  'childrenRentalsJson___category' |
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
  'childrenTeamJson___picture___childrenConciergeServicesJson' |
  'childrenTeamJson___picture___childrenConciergeServicesJson___id' |
  'childrenTeamJson___picture___childrenConciergeServicesJson___children' |
  'childrenTeamJson___picture___childrenConciergeServicesJson___name' |
  'childrenTeamJson___picture___childrenGuestServicesJson' |
  'childrenTeamJson___picture___childrenGuestServicesJson___id' |
  'childrenTeamJson___picture___childrenGuestServicesJson___children' |
  'childrenTeamJson___picture___childrenGuestServicesJson___name' |
  'childrenTeamJson___picture___childrenGuestServicesJson___description' |
  'childrenTeamJson___picture___childrenRentalsJson' |
  'childrenTeamJson___picture___childrenRentalsJson___id' |
  'childrenTeamJson___picture___childrenRentalsJson___children' |
  'childrenTeamJson___picture___childrenRentalsJson___bedrooms' |
  'childrenTeamJson___picture___childrenRentalsJson___price' |
  'childrenTeamJson___picture___childrenRentalsJson___guests' |
  'childrenTeamJson___picture___childrenRentalsJson___title' |
  'childrenTeamJson___picture___childrenRentalsJson___slug' |
  'childrenTeamJson___picture___childrenRentalsJson___category' |
  'childrenTeamJson___picture___childrenTeamJson' |
  'childrenTeamJson___picture___childrenTeamJson___id' |
  'childrenTeamJson___picture___childrenTeamJson___children' |
  'childrenTeamJson___picture___childrenTeamJson___name' |
  'childrenTeamJson___picture___childrenTeamJson___title' |
  'childrenTeamJson___picture___childrenTeamJson___bio' |
  'childrenTeamJson___picture___childrenTestimonialsJson' |
  'childrenTeamJson___picture___childrenTestimonialsJson___id' |
  'childrenTeamJson___picture___childrenTestimonialsJson___children' |
  'childrenTeamJson___picture___childrenTestimonialsJson___body' |
  'childrenTeamJson___picture___childrenTestimonialsJson___rating' |
  'childrenTeamJson___picture___childrenTestimonialsJson___author' |
  'childrenTeamJson___picture___childMdx___rawBody' |
  'childrenTeamJson___picture___childMdx___fileAbsolutePath' |
  'childrenTeamJson___picture___childMdx___body' |
  'childrenTeamJson___picture___childMdx___excerpt' |
  'childrenTeamJson___picture___childMdx___headings' |
  'childrenTeamJson___picture___childMdx___html' |
  'childrenTeamJson___picture___childMdx___mdxAST' |
  'childrenTeamJson___picture___childMdx___tableOfContents' |
  'childrenTeamJson___picture___childMdx___timeToRead' |
  'childrenTeamJson___picture___childMdx___id' |
  'childrenTeamJson___picture___childMdx___children' |
  'childrenTeamJson___bio' |
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
  'childMdx___rawBody' |
  'childMdx___fileAbsolutePath' |
  'childMdx___frontmatter___title' |
  'childMdx___frontmatter___hero___sourceInstanceName' |
  'childMdx___frontmatter___hero___absolutePath' |
  'childMdx___frontmatter___hero___relativePath' |
  'childMdx___frontmatter___hero___extension' |
  'childMdx___frontmatter___hero___size' |
  'childMdx___frontmatter___hero___prettySize' |
  'childMdx___frontmatter___hero___modifiedTime' |
  'childMdx___frontmatter___hero___accessTime' |
  'childMdx___frontmatter___hero___changeTime' |
  'childMdx___frontmatter___hero___birthTime' |
  'childMdx___frontmatter___hero___root' |
  'childMdx___frontmatter___hero___dir' |
  'childMdx___frontmatter___hero___base' |
  'childMdx___frontmatter___hero___ext' |
  'childMdx___frontmatter___hero___name' |
  'childMdx___frontmatter___hero___relativeDirectory' |
  'childMdx___frontmatter___hero___dev' |
  'childMdx___frontmatter___hero___mode' |
  'childMdx___frontmatter___hero___nlink' |
  'childMdx___frontmatter___hero___uid' |
  'childMdx___frontmatter___hero___gid' |
  'childMdx___frontmatter___hero___rdev' |
  'childMdx___frontmatter___hero___ino' |
  'childMdx___frontmatter___hero___atimeMs' |
  'childMdx___frontmatter___hero___mtimeMs' |
  'childMdx___frontmatter___hero___ctimeMs' |
  'childMdx___frontmatter___hero___atime' |
  'childMdx___frontmatter___hero___mtime' |
  'childMdx___frontmatter___hero___ctime' |
  'childMdx___frontmatter___hero___birthtime' |
  'childMdx___frontmatter___hero___birthtimeMs' |
  'childMdx___frontmatter___hero___blksize' |
  'childMdx___frontmatter___hero___blocks' |
  'childMdx___frontmatter___hero___publicURL' |
  'childMdx___frontmatter___hero___id' |
  'childMdx___frontmatter___hero___children' |
  'childMdx___frontmatter___hero___childrenConciergeServicesJson' |
  'childMdx___frontmatter___hero___childrenGuestServicesJson' |
  'childMdx___frontmatter___hero___childrenRentalsJson' |
  'childMdx___frontmatter___hero___childrenTeamJson' |
  'childMdx___frontmatter___hero___childrenTestimonialsJson' |
  'childMdx___frontmatter___slug' |
  'childMdx___frontmatter___contactForm' |
  'childMdx___body' |
  'childMdx___excerpt' |
  'childMdx___headings' |
  'childMdx___headings___value' |
  'childMdx___headings___depth' |
  'childMdx___html' |
  'childMdx___mdxAST' |
  'childMdx___tableOfContents' |
  'childMdx___timeToRead' |
  'childMdx___wordCount___paragraphs' |
  'childMdx___wordCount___sentences' |
  'childMdx___wordCount___words' |
  'childMdx___id' |
  'childMdx___parent___id' |
  'childMdx___parent___parent___id' |
  'childMdx___parent___parent___children' |
  'childMdx___parent___children' |
  'childMdx___parent___children___id' |
  'childMdx___parent___children___children' |
  'childMdx___parent___internal___content' |
  'childMdx___parent___internal___contentDigest' |
  'childMdx___parent___internal___description' |
  'childMdx___parent___internal___fieldOwners' |
  'childMdx___parent___internal___ignoreType' |
  'childMdx___parent___internal___mediaType' |
  'childMdx___parent___internal___owner' |
  'childMdx___parent___internal___type' |
  'childMdx___children' |
  'childMdx___children___id' |
  'childMdx___children___parent___id' |
  'childMdx___children___parent___children' |
  'childMdx___children___children' |
  'childMdx___children___children___id' |
  'childMdx___children___children___children' |
  'childMdx___children___internal___content' |
  'childMdx___children___internal___contentDigest' |
  'childMdx___children___internal___description' |
  'childMdx___children___internal___fieldOwners' |
  'childMdx___children___internal___ignoreType' |
  'childMdx___children___internal___mediaType' |
  'childMdx___children___internal___owner' |
  'childMdx___children___internal___type' |
  'childMdx___internal___content' |
  'childMdx___internal___contentDigest' |
  'childMdx___internal___description' |
  'childMdx___internal___fieldOwners' |
  'childMdx___internal___ignoreType' |
  'childMdx___internal___mediaType' |
  'childMdx___internal___owner' |
  'childMdx___internal___type';

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
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childrenConciergeServicesJson?: Maybe<ConciergeServicesJsonFilterListInput>,
  childrenGuestServicesJson?: Maybe<GuestServicesJsonFilterListInput>,
  childrenRentalsJson?: Maybe<RentalsJsonFilterListInput>,
  childrenTeamJson?: Maybe<TeamJsonFilterListInput>,
  childrenTestimonialsJson?: Maybe<TestimonialsJsonFilterListInput>,
  childMdx?: Maybe<MdxFilterInput>,
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

export type GuestServicesJson = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  icon?: Maybe<File>,
};

export type GuestServicesJsonConnection = {
  totalCount: Scalars['Int'],
  edges: Array<GuestServicesJsonEdge>,
  nodes: Array<GuestServicesJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<GuestServicesJsonGroupConnection>,
};


export type GuestServicesJsonConnectionDistinctArgs = {
  field: GuestServicesJsonFieldsEnum
};


export type GuestServicesJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: GuestServicesJsonFieldsEnum
};

export type GuestServicesJsonEdge = {
  next?: Maybe<GuestServicesJson>,
  node: GuestServicesJson,
  previous?: Maybe<GuestServicesJson>,
};

export type GuestServicesJsonFieldsEnum = 
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
  'icon___sourceInstanceName' |
  'icon___absolutePath' |
  'icon___relativePath' |
  'icon___extension' |
  'icon___size' |
  'icon___prettySize' |
  'icon___modifiedTime' |
  'icon___accessTime' |
  'icon___changeTime' |
  'icon___birthTime' |
  'icon___root' |
  'icon___dir' |
  'icon___base' |
  'icon___ext' |
  'icon___name' |
  'icon___relativeDirectory' |
  'icon___dev' |
  'icon___mode' |
  'icon___nlink' |
  'icon___uid' |
  'icon___gid' |
  'icon___rdev' |
  'icon___ino' |
  'icon___atimeMs' |
  'icon___mtimeMs' |
  'icon___ctimeMs' |
  'icon___atime' |
  'icon___mtime' |
  'icon___ctime' |
  'icon___birthtime' |
  'icon___birthtimeMs' |
  'icon___blksize' |
  'icon___blocks' |
  'icon___publicURL' |
  'icon___childImageSharp___fixed___base64' |
  'icon___childImageSharp___fixed___tracedSVG' |
  'icon___childImageSharp___fixed___aspectRatio' |
  'icon___childImageSharp___fixed___width' |
  'icon___childImageSharp___fixed___height' |
  'icon___childImageSharp___fixed___src' |
  'icon___childImageSharp___fixed___srcSet' |
  'icon___childImageSharp___fixed___srcWebp' |
  'icon___childImageSharp___fixed___srcSetWebp' |
  'icon___childImageSharp___fixed___originalName' |
  'icon___childImageSharp___resolutions___base64' |
  'icon___childImageSharp___resolutions___tracedSVG' |
  'icon___childImageSharp___resolutions___aspectRatio' |
  'icon___childImageSharp___resolutions___width' |
  'icon___childImageSharp___resolutions___height' |
  'icon___childImageSharp___resolutions___src' |
  'icon___childImageSharp___resolutions___srcSet' |
  'icon___childImageSharp___resolutions___srcWebp' |
  'icon___childImageSharp___resolutions___srcSetWebp' |
  'icon___childImageSharp___resolutions___originalName' |
  'icon___childImageSharp___fluid___base64' |
  'icon___childImageSharp___fluid___tracedSVG' |
  'icon___childImageSharp___fluid___aspectRatio' |
  'icon___childImageSharp___fluid___src' |
  'icon___childImageSharp___fluid___srcSet' |
  'icon___childImageSharp___fluid___srcWebp' |
  'icon___childImageSharp___fluid___srcSetWebp' |
  'icon___childImageSharp___fluid___sizes' |
  'icon___childImageSharp___fluid___originalImg' |
  'icon___childImageSharp___fluid___originalName' |
  'icon___childImageSharp___fluid___presentationWidth' |
  'icon___childImageSharp___fluid___presentationHeight' |
  'icon___childImageSharp___sizes___base64' |
  'icon___childImageSharp___sizes___tracedSVG' |
  'icon___childImageSharp___sizes___aspectRatio' |
  'icon___childImageSharp___sizes___src' |
  'icon___childImageSharp___sizes___srcSet' |
  'icon___childImageSharp___sizes___srcWebp' |
  'icon___childImageSharp___sizes___srcSetWebp' |
  'icon___childImageSharp___sizes___sizes' |
  'icon___childImageSharp___sizes___originalImg' |
  'icon___childImageSharp___sizes___originalName' |
  'icon___childImageSharp___sizes___presentationWidth' |
  'icon___childImageSharp___sizes___presentationHeight' |
  'icon___childImageSharp___original___width' |
  'icon___childImageSharp___original___height' |
  'icon___childImageSharp___original___src' |
  'icon___childImageSharp___resize___src' |
  'icon___childImageSharp___resize___tracedSVG' |
  'icon___childImageSharp___resize___width' |
  'icon___childImageSharp___resize___height' |
  'icon___childImageSharp___resize___aspectRatio' |
  'icon___childImageSharp___resize___originalName' |
  'icon___childImageSharp___id' |
  'icon___childImageSharp___parent___id' |
  'icon___childImageSharp___parent___children' |
  'icon___childImageSharp___children' |
  'icon___childImageSharp___children___id' |
  'icon___childImageSharp___children___children' |
  'icon___childImageSharp___internal___content' |
  'icon___childImageSharp___internal___contentDigest' |
  'icon___childImageSharp___internal___description' |
  'icon___childImageSharp___internal___fieldOwners' |
  'icon___childImageSharp___internal___ignoreType' |
  'icon___childImageSharp___internal___mediaType' |
  'icon___childImageSharp___internal___owner' |
  'icon___childImageSharp___internal___type' |
  'icon___id' |
  'icon___parent___id' |
  'icon___parent___parent___id' |
  'icon___parent___parent___children' |
  'icon___parent___children' |
  'icon___parent___children___id' |
  'icon___parent___children___children' |
  'icon___parent___internal___content' |
  'icon___parent___internal___contentDigest' |
  'icon___parent___internal___description' |
  'icon___parent___internal___fieldOwners' |
  'icon___parent___internal___ignoreType' |
  'icon___parent___internal___mediaType' |
  'icon___parent___internal___owner' |
  'icon___parent___internal___type' |
  'icon___children' |
  'icon___children___id' |
  'icon___children___parent___id' |
  'icon___children___parent___children' |
  'icon___children___children' |
  'icon___children___children___id' |
  'icon___children___children___children' |
  'icon___children___internal___content' |
  'icon___children___internal___contentDigest' |
  'icon___children___internal___description' |
  'icon___children___internal___fieldOwners' |
  'icon___children___internal___ignoreType' |
  'icon___children___internal___mediaType' |
  'icon___children___internal___owner' |
  'icon___children___internal___type' |
  'icon___internal___content' |
  'icon___internal___contentDigest' |
  'icon___internal___description' |
  'icon___internal___fieldOwners' |
  'icon___internal___ignoreType' |
  'icon___internal___mediaType' |
  'icon___internal___owner' |
  'icon___internal___type' |
  'icon___childrenConciergeServicesJson' |
  'icon___childrenConciergeServicesJson___id' |
  'icon___childrenConciergeServicesJson___parent___id' |
  'icon___childrenConciergeServicesJson___parent___children' |
  'icon___childrenConciergeServicesJson___children' |
  'icon___childrenConciergeServicesJson___children___id' |
  'icon___childrenConciergeServicesJson___children___children' |
  'icon___childrenConciergeServicesJson___internal___content' |
  'icon___childrenConciergeServicesJson___internal___contentDigest' |
  'icon___childrenConciergeServicesJson___internal___description' |
  'icon___childrenConciergeServicesJson___internal___fieldOwners' |
  'icon___childrenConciergeServicesJson___internal___ignoreType' |
  'icon___childrenConciergeServicesJson___internal___mediaType' |
  'icon___childrenConciergeServicesJson___internal___owner' |
  'icon___childrenConciergeServicesJson___internal___type' |
  'icon___childrenConciergeServicesJson___name' |
  'icon___childrenConciergeServicesJson___image___sourceInstanceName' |
  'icon___childrenConciergeServicesJson___image___absolutePath' |
  'icon___childrenConciergeServicesJson___image___relativePath' |
  'icon___childrenConciergeServicesJson___image___extension' |
  'icon___childrenConciergeServicesJson___image___size' |
  'icon___childrenConciergeServicesJson___image___prettySize' |
  'icon___childrenConciergeServicesJson___image___modifiedTime' |
  'icon___childrenConciergeServicesJson___image___accessTime' |
  'icon___childrenConciergeServicesJson___image___changeTime' |
  'icon___childrenConciergeServicesJson___image___birthTime' |
  'icon___childrenConciergeServicesJson___image___root' |
  'icon___childrenConciergeServicesJson___image___dir' |
  'icon___childrenConciergeServicesJson___image___base' |
  'icon___childrenConciergeServicesJson___image___ext' |
  'icon___childrenConciergeServicesJson___image___name' |
  'icon___childrenConciergeServicesJson___image___relativeDirectory' |
  'icon___childrenConciergeServicesJson___image___dev' |
  'icon___childrenConciergeServicesJson___image___mode' |
  'icon___childrenConciergeServicesJson___image___nlink' |
  'icon___childrenConciergeServicesJson___image___uid' |
  'icon___childrenConciergeServicesJson___image___gid' |
  'icon___childrenConciergeServicesJson___image___rdev' |
  'icon___childrenConciergeServicesJson___image___ino' |
  'icon___childrenConciergeServicesJson___image___atimeMs' |
  'icon___childrenConciergeServicesJson___image___mtimeMs' |
  'icon___childrenConciergeServicesJson___image___ctimeMs' |
  'icon___childrenConciergeServicesJson___image___atime' |
  'icon___childrenConciergeServicesJson___image___mtime' |
  'icon___childrenConciergeServicesJson___image___ctime' |
  'icon___childrenConciergeServicesJson___image___birthtime' |
  'icon___childrenConciergeServicesJson___image___birthtimeMs' |
  'icon___childrenConciergeServicesJson___image___blksize' |
  'icon___childrenConciergeServicesJson___image___blocks' |
  'icon___childrenConciergeServicesJson___image___publicURL' |
  'icon___childrenConciergeServicesJson___image___id' |
  'icon___childrenConciergeServicesJson___image___children' |
  'icon___childrenConciergeServicesJson___image___childrenConciergeServicesJson' |
  'icon___childrenConciergeServicesJson___image___childrenGuestServicesJson' |
  'icon___childrenConciergeServicesJson___image___childrenRentalsJson' |
  'icon___childrenConciergeServicesJson___image___childrenTeamJson' |
  'icon___childrenConciergeServicesJson___image___childrenTestimonialsJson' |
  'icon___childrenGuestServicesJson' |
  'icon___childrenGuestServicesJson___id' |
  'icon___childrenGuestServicesJson___parent___id' |
  'icon___childrenGuestServicesJson___parent___children' |
  'icon___childrenGuestServicesJson___children' |
  'icon___childrenGuestServicesJson___children___id' |
  'icon___childrenGuestServicesJson___children___children' |
  'icon___childrenGuestServicesJson___internal___content' |
  'icon___childrenGuestServicesJson___internal___contentDigest' |
  'icon___childrenGuestServicesJson___internal___description' |
  'icon___childrenGuestServicesJson___internal___fieldOwners' |
  'icon___childrenGuestServicesJson___internal___ignoreType' |
  'icon___childrenGuestServicesJson___internal___mediaType' |
  'icon___childrenGuestServicesJson___internal___owner' |
  'icon___childrenGuestServicesJson___internal___type' |
  'icon___childrenGuestServicesJson___name' |
  'icon___childrenGuestServicesJson___description' |
  'icon___childrenGuestServicesJson___icon___sourceInstanceName' |
  'icon___childrenGuestServicesJson___icon___absolutePath' |
  'icon___childrenGuestServicesJson___icon___relativePath' |
  'icon___childrenGuestServicesJson___icon___extension' |
  'icon___childrenGuestServicesJson___icon___size' |
  'icon___childrenGuestServicesJson___icon___prettySize' |
  'icon___childrenGuestServicesJson___icon___modifiedTime' |
  'icon___childrenGuestServicesJson___icon___accessTime' |
  'icon___childrenGuestServicesJson___icon___changeTime' |
  'icon___childrenGuestServicesJson___icon___birthTime' |
  'icon___childrenGuestServicesJson___icon___root' |
  'icon___childrenGuestServicesJson___icon___dir' |
  'icon___childrenGuestServicesJson___icon___base' |
  'icon___childrenGuestServicesJson___icon___ext' |
  'icon___childrenGuestServicesJson___icon___name' |
  'icon___childrenGuestServicesJson___icon___relativeDirectory' |
  'icon___childrenGuestServicesJson___icon___dev' |
  'icon___childrenGuestServicesJson___icon___mode' |
  'icon___childrenGuestServicesJson___icon___nlink' |
  'icon___childrenGuestServicesJson___icon___uid' |
  'icon___childrenGuestServicesJson___icon___gid' |
  'icon___childrenGuestServicesJson___icon___rdev' |
  'icon___childrenGuestServicesJson___icon___ino' |
  'icon___childrenGuestServicesJson___icon___atimeMs' |
  'icon___childrenGuestServicesJson___icon___mtimeMs' |
  'icon___childrenGuestServicesJson___icon___ctimeMs' |
  'icon___childrenGuestServicesJson___icon___atime' |
  'icon___childrenGuestServicesJson___icon___mtime' |
  'icon___childrenGuestServicesJson___icon___ctime' |
  'icon___childrenGuestServicesJson___icon___birthtime' |
  'icon___childrenGuestServicesJson___icon___birthtimeMs' |
  'icon___childrenGuestServicesJson___icon___blksize' |
  'icon___childrenGuestServicesJson___icon___blocks' |
  'icon___childrenGuestServicesJson___icon___publicURL' |
  'icon___childrenGuestServicesJson___icon___id' |
  'icon___childrenGuestServicesJson___icon___children' |
  'icon___childrenGuestServicesJson___icon___childrenConciergeServicesJson' |
  'icon___childrenGuestServicesJson___icon___childrenGuestServicesJson' |
  'icon___childrenGuestServicesJson___icon___childrenRentalsJson' |
  'icon___childrenGuestServicesJson___icon___childrenTeamJson' |
  'icon___childrenGuestServicesJson___icon___childrenTestimonialsJson' |
  'icon___childrenRentalsJson' |
  'icon___childrenRentalsJson___id' |
  'icon___childrenRentalsJson___parent___id' |
  'icon___childrenRentalsJson___parent___children' |
  'icon___childrenRentalsJson___children' |
  'icon___childrenRentalsJson___children___id' |
  'icon___childrenRentalsJson___children___children' |
  'icon___childrenRentalsJson___internal___content' |
  'icon___childrenRentalsJson___internal___contentDigest' |
  'icon___childrenRentalsJson___internal___description' |
  'icon___childrenRentalsJson___internal___fieldOwners' |
  'icon___childrenRentalsJson___internal___ignoreType' |
  'icon___childrenRentalsJson___internal___mediaType' |
  'icon___childrenRentalsJson___internal___owner' |
  'icon___childrenRentalsJson___internal___type' |
  'icon___childrenRentalsJson___bedrooms' |
  'icon___childrenRentalsJson___price' |
  'icon___childrenRentalsJson___guests' |
  'icon___childrenRentalsJson___title' |
  'icon___childrenRentalsJson___picture___sourceInstanceName' |
  'icon___childrenRentalsJson___picture___absolutePath' |
  'icon___childrenRentalsJson___picture___relativePath' |
  'icon___childrenRentalsJson___picture___extension' |
  'icon___childrenRentalsJson___picture___size' |
  'icon___childrenRentalsJson___picture___prettySize' |
  'icon___childrenRentalsJson___picture___modifiedTime' |
  'icon___childrenRentalsJson___picture___accessTime' |
  'icon___childrenRentalsJson___picture___changeTime' |
  'icon___childrenRentalsJson___picture___birthTime' |
  'icon___childrenRentalsJson___picture___root' |
  'icon___childrenRentalsJson___picture___dir' |
  'icon___childrenRentalsJson___picture___base' |
  'icon___childrenRentalsJson___picture___ext' |
  'icon___childrenRentalsJson___picture___name' |
  'icon___childrenRentalsJson___picture___relativeDirectory' |
  'icon___childrenRentalsJson___picture___dev' |
  'icon___childrenRentalsJson___picture___mode' |
  'icon___childrenRentalsJson___picture___nlink' |
  'icon___childrenRentalsJson___picture___uid' |
  'icon___childrenRentalsJson___picture___gid' |
  'icon___childrenRentalsJson___picture___rdev' |
  'icon___childrenRentalsJson___picture___ino' |
  'icon___childrenRentalsJson___picture___atimeMs' |
  'icon___childrenRentalsJson___picture___mtimeMs' |
  'icon___childrenRentalsJson___picture___ctimeMs' |
  'icon___childrenRentalsJson___picture___atime' |
  'icon___childrenRentalsJson___picture___mtime' |
  'icon___childrenRentalsJson___picture___ctime' |
  'icon___childrenRentalsJson___picture___birthtime' |
  'icon___childrenRentalsJson___picture___birthtimeMs' |
  'icon___childrenRentalsJson___picture___blksize' |
  'icon___childrenRentalsJson___picture___blocks' |
  'icon___childrenRentalsJson___picture___publicURL' |
  'icon___childrenRentalsJson___picture___id' |
  'icon___childrenRentalsJson___picture___children' |
  'icon___childrenRentalsJson___picture___childrenConciergeServicesJson' |
  'icon___childrenRentalsJson___picture___childrenGuestServicesJson' |
  'icon___childrenRentalsJson___picture___childrenRentalsJson' |
  'icon___childrenRentalsJson___picture___childrenTeamJson' |
  'icon___childrenRentalsJson___picture___childrenTestimonialsJson' |
  'icon___childrenRentalsJson___slug' |
  'icon___childrenRentalsJson___category' |
  'icon___childrenTeamJson' |
  'icon___childrenTeamJson___id' |
  'icon___childrenTeamJson___parent___id' |
  'icon___childrenTeamJson___parent___children' |
  'icon___childrenTeamJson___children' |
  'icon___childrenTeamJson___children___id' |
  'icon___childrenTeamJson___children___children' |
  'icon___childrenTeamJson___internal___content' |
  'icon___childrenTeamJson___internal___contentDigest' |
  'icon___childrenTeamJson___internal___description' |
  'icon___childrenTeamJson___internal___fieldOwners' |
  'icon___childrenTeamJson___internal___ignoreType' |
  'icon___childrenTeamJson___internal___mediaType' |
  'icon___childrenTeamJson___internal___owner' |
  'icon___childrenTeamJson___internal___type' |
  'icon___childrenTeamJson___name' |
  'icon___childrenTeamJson___title' |
  'icon___childrenTeamJson___picture___sourceInstanceName' |
  'icon___childrenTeamJson___picture___absolutePath' |
  'icon___childrenTeamJson___picture___relativePath' |
  'icon___childrenTeamJson___picture___extension' |
  'icon___childrenTeamJson___picture___size' |
  'icon___childrenTeamJson___picture___prettySize' |
  'icon___childrenTeamJson___picture___modifiedTime' |
  'icon___childrenTeamJson___picture___accessTime' |
  'icon___childrenTeamJson___picture___changeTime' |
  'icon___childrenTeamJson___picture___birthTime' |
  'icon___childrenTeamJson___picture___root' |
  'icon___childrenTeamJson___picture___dir' |
  'icon___childrenTeamJson___picture___base' |
  'icon___childrenTeamJson___picture___ext' |
  'icon___childrenTeamJson___picture___name' |
  'icon___childrenTeamJson___picture___relativeDirectory' |
  'icon___childrenTeamJson___picture___dev' |
  'icon___childrenTeamJson___picture___mode' |
  'icon___childrenTeamJson___picture___nlink' |
  'icon___childrenTeamJson___picture___uid' |
  'icon___childrenTeamJson___picture___gid' |
  'icon___childrenTeamJson___picture___rdev' |
  'icon___childrenTeamJson___picture___ino' |
  'icon___childrenTeamJson___picture___atimeMs' |
  'icon___childrenTeamJson___picture___mtimeMs' |
  'icon___childrenTeamJson___picture___ctimeMs' |
  'icon___childrenTeamJson___picture___atime' |
  'icon___childrenTeamJson___picture___mtime' |
  'icon___childrenTeamJson___picture___ctime' |
  'icon___childrenTeamJson___picture___birthtime' |
  'icon___childrenTeamJson___picture___birthtimeMs' |
  'icon___childrenTeamJson___picture___blksize' |
  'icon___childrenTeamJson___picture___blocks' |
  'icon___childrenTeamJson___picture___publicURL' |
  'icon___childrenTeamJson___picture___id' |
  'icon___childrenTeamJson___picture___children' |
  'icon___childrenTeamJson___picture___childrenConciergeServicesJson' |
  'icon___childrenTeamJson___picture___childrenGuestServicesJson' |
  'icon___childrenTeamJson___picture___childrenRentalsJson' |
  'icon___childrenTeamJson___picture___childrenTeamJson' |
  'icon___childrenTeamJson___picture___childrenTestimonialsJson' |
  'icon___childrenTeamJson___bio' |
  'icon___childrenTestimonialsJson' |
  'icon___childrenTestimonialsJson___id' |
  'icon___childrenTestimonialsJson___parent___id' |
  'icon___childrenTestimonialsJson___parent___children' |
  'icon___childrenTestimonialsJson___children' |
  'icon___childrenTestimonialsJson___children___id' |
  'icon___childrenTestimonialsJson___children___children' |
  'icon___childrenTestimonialsJson___internal___content' |
  'icon___childrenTestimonialsJson___internal___contentDigest' |
  'icon___childrenTestimonialsJson___internal___description' |
  'icon___childrenTestimonialsJson___internal___fieldOwners' |
  'icon___childrenTestimonialsJson___internal___ignoreType' |
  'icon___childrenTestimonialsJson___internal___mediaType' |
  'icon___childrenTestimonialsJson___internal___owner' |
  'icon___childrenTestimonialsJson___internal___type' |
  'icon___childrenTestimonialsJson___body' |
  'icon___childrenTestimonialsJson___rating' |
  'icon___childrenTestimonialsJson___author' |
  'icon___childrenTestimonialsJson___property___name' |
  'icon___childrenTestimonialsJson___property___location' |
  'icon___childMdx___rawBody' |
  'icon___childMdx___fileAbsolutePath' |
  'icon___childMdx___frontmatter___title' |
  'icon___childMdx___frontmatter___slug' |
  'icon___childMdx___frontmatter___contactForm' |
  'icon___childMdx___body' |
  'icon___childMdx___excerpt' |
  'icon___childMdx___headings' |
  'icon___childMdx___headings___value' |
  'icon___childMdx___headings___depth' |
  'icon___childMdx___html' |
  'icon___childMdx___mdxAST' |
  'icon___childMdx___tableOfContents' |
  'icon___childMdx___timeToRead' |
  'icon___childMdx___wordCount___paragraphs' |
  'icon___childMdx___wordCount___sentences' |
  'icon___childMdx___wordCount___words' |
  'icon___childMdx___id' |
  'icon___childMdx___parent___id' |
  'icon___childMdx___parent___children' |
  'icon___childMdx___children' |
  'icon___childMdx___children___id' |
  'icon___childMdx___children___children' |
  'icon___childMdx___internal___content' |
  'icon___childMdx___internal___contentDigest' |
  'icon___childMdx___internal___description' |
  'icon___childMdx___internal___fieldOwners' |
  'icon___childMdx___internal___ignoreType' |
  'icon___childMdx___internal___mediaType' |
  'icon___childMdx___internal___owner' |
  'icon___childMdx___internal___type';

export type GuestServicesJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<FileFilterInput>,
};

export type GuestServicesJsonFilterListInput = {
  elemMatch?: Maybe<GuestServicesJsonFilterInput>,
};

export type GuestServicesJsonGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<GuestServicesJsonEdge>,
  nodes: Array<GuestServicesJson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type GuestServicesJsonSortInput = {
  fields?: Maybe<Array<Maybe<GuestServicesJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type HeadingsMdx = 
  'h1' |
  'h2' |
  'h3' |
  'h4' |
  'h5' |
  'h6';

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
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
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
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
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
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
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
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
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


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>,
  ne?: Maybe<Scalars['JSON']>,
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex?: Maybe<Scalars['JSON']>,
  glob?: Maybe<Scalars['JSON']>,
};

export type Mdx = Node & {
  rawBody: Scalars['String'],
  fileAbsolutePath: Scalars['String'],
  frontmatter?: Maybe<MdxFrontmatter>,
  body: Scalars['String'],
  excerpt: Scalars['String'],
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>,
  html?: Maybe<Scalars['String']>,
  mdxAST?: Maybe<Scalars['JSON']>,
  tableOfContents?: Maybe<Scalars['JSON']>,
  timeToRead?: Maybe<Scalars['Int']>,
  wordCount?: Maybe<MdxWordCount>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>
};


export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>
};


export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>
};

export type MdxConnection = {
  totalCount: Scalars['Int'],
  edges: Array<MdxEdge>,
  nodes: Array<Mdx>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<MdxGroupConnection>,
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum
};


export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: MdxFieldsEnum
};

export type MdxEdge = {
  next?: Maybe<Mdx>,
  node: Mdx,
  previous?: Maybe<Mdx>,
};

export type MdxFieldsEnum = 
  'rawBody' |
  'fileAbsolutePath' |
  'frontmatter___title' |
  'frontmatter___hero___sourceInstanceName' |
  'frontmatter___hero___absolutePath' |
  'frontmatter___hero___relativePath' |
  'frontmatter___hero___extension' |
  'frontmatter___hero___size' |
  'frontmatter___hero___prettySize' |
  'frontmatter___hero___modifiedTime' |
  'frontmatter___hero___accessTime' |
  'frontmatter___hero___changeTime' |
  'frontmatter___hero___birthTime' |
  'frontmatter___hero___root' |
  'frontmatter___hero___dir' |
  'frontmatter___hero___base' |
  'frontmatter___hero___ext' |
  'frontmatter___hero___name' |
  'frontmatter___hero___relativeDirectory' |
  'frontmatter___hero___dev' |
  'frontmatter___hero___mode' |
  'frontmatter___hero___nlink' |
  'frontmatter___hero___uid' |
  'frontmatter___hero___gid' |
  'frontmatter___hero___rdev' |
  'frontmatter___hero___ino' |
  'frontmatter___hero___atimeMs' |
  'frontmatter___hero___mtimeMs' |
  'frontmatter___hero___ctimeMs' |
  'frontmatter___hero___atime' |
  'frontmatter___hero___mtime' |
  'frontmatter___hero___ctime' |
  'frontmatter___hero___birthtime' |
  'frontmatter___hero___birthtimeMs' |
  'frontmatter___hero___blksize' |
  'frontmatter___hero___blocks' |
  'frontmatter___hero___publicURL' |
  'frontmatter___hero___childImageSharp___id' |
  'frontmatter___hero___childImageSharp___children' |
  'frontmatter___hero___id' |
  'frontmatter___hero___parent___id' |
  'frontmatter___hero___parent___children' |
  'frontmatter___hero___children' |
  'frontmatter___hero___children___id' |
  'frontmatter___hero___children___children' |
  'frontmatter___hero___internal___content' |
  'frontmatter___hero___internal___contentDigest' |
  'frontmatter___hero___internal___description' |
  'frontmatter___hero___internal___fieldOwners' |
  'frontmatter___hero___internal___ignoreType' |
  'frontmatter___hero___internal___mediaType' |
  'frontmatter___hero___internal___owner' |
  'frontmatter___hero___internal___type' |
  'frontmatter___hero___childrenConciergeServicesJson' |
  'frontmatter___hero___childrenConciergeServicesJson___id' |
  'frontmatter___hero___childrenConciergeServicesJson___children' |
  'frontmatter___hero___childrenConciergeServicesJson___name' |
  'frontmatter___hero___childrenGuestServicesJson' |
  'frontmatter___hero___childrenGuestServicesJson___id' |
  'frontmatter___hero___childrenGuestServicesJson___children' |
  'frontmatter___hero___childrenGuestServicesJson___name' |
  'frontmatter___hero___childrenGuestServicesJson___description' |
  'frontmatter___hero___childrenRentalsJson' |
  'frontmatter___hero___childrenRentalsJson___id' |
  'frontmatter___hero___childrenRentalsJson___children' |
  'frontmatter___hero___childrenRentalsJson___bedrooms' |
  'frontmatter___hero___childrenRentalsJson___price' |
  'frontmatter___hero___childrenRentalsJson___guests' |
  'frontmatter___hero___childrenRentalsJson___title' |
  'frontmatter___hero___childrenRentalsJson___slug' |
  'frontmatter___hero___childrenRentalsJson___category' |
  'frontmatter___hero___childrenTeamJson' |
  'frontmatter___hero___childrenTeamJson___id' |
  'frontmatter___hero___childrenTeamJson___children' |
  'frontmatter___hero___childrenTeamJson___name' |
  'frontmatter___hero___childrenTeamJson___title' |
  'frontmatter___hero___childrenTeamJson___bio' |
  'frontmatter___hero___childrenTestimonialsJson' |
  'frontmatter___hero___childrenTestimonialsJson___id' |
  'frontmatter___hero___childrenTestimonialsJson___children' |
  'frontmatter___hero___childrenTestimonialsJson___body' |
  'frontmatter___hero___childrenTestimonialsJson___rating' |
  'frontmatter___hero___childrenTestimonialsJson___author' |
  'frontmatter___hero___childMdx___rawBody' |
  'frontmatter___hero___childMdx___fileAbsolutePath' |
  'frontmatter___hero___childMdx___body' |
  'frontmatter___hero___childMdx___excerpt' |
  'frontmatter___hero___childMdx___headings' |
  'frontmatter___hero___childMdx___html' |
  'frontmatter___hero___childMdx___mdxAST' |
  'frontmatter___hero___childMdx___tableOfContents' |
  'frontmatter___hero___childMdx___timeToRead' |
  'frontmatter___hero___childMdx___id' |
  'frontmatter___hero___childMdx___children' |
  'frontmatter___slug' |
  'frontmatter___contactForm' |
  'body' |
  'excerpt' |
  'headings' |
  'headings___value' |
  'headings___depth' |
  'html' |
  'mdxAST' |
  'tableOfContents' |
  'timeToRead' |
  'wordCount___paragraphs' |
  'wordCount___sentences' |
  'wordCount___words' |
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

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MdxFrontmatterFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  headings?: Maybe<MdxHeadingMdxFilterListInput>,
  html?: Maybe<StringQueryOperatorInput>,
  mdxAST?: Maybe<JsonQueryOperatorInput>,
  tableOfContents?: Maybe<JsonQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  wordCount?: Maybe<MdxWordCountFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type MdxFrontmatter = {
  title: Scalars['String'],
  hero?: Maybe<File>,
  slug?: Maybe<Scalars['String']>,
  contactForm?: Maybe<Scalars['Boolean']>,
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  hero?: Maybe<FileFilterInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  contactForm?: Maybe<BooleanQueryOperatorInput>,
};

export type MdxGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<MdxEdge>,
  nodes: Array<Mdx>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type MdxHeadingMdx = {
  value?: Maybe<Scalars['String']>,
  depth?: Maybe<Scalars['Int']>,
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>,
  depth?: Maybe<IntQueryOperatorInput>,
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>,
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type MdxWordCount = {
  paragraphs?: Maybe<Scalars['Int']>,
  sentences?: Maybe<Scalars['Int']>,
  words?: Maybe<Scalars['Int']>,
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>,
  sentences?: Maybe<IntQueryOperatorInput>,
  words?: Maybe<IntQueryOperatorInput>,
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
  mdx?: Maybe<Mdx>,
  allMdx: MdxConnection,
  testimonialsJson?: Maybe<TestimonialsJson>,
  allTestimonialsJson: TestimonialsJsonConnection,
  teamJson?: Maybe<TeamJson>,
  allTeamJson: TeamJsonConnection,
  rentalsJson?: Maybe<RentalsJson>,
  allRentalsJson: RentalsJsonConnection,
  guestServicesJson?: Maybe<GuestServicesJson>,
  allGuestServicesJson: GuestServicesJsonConnection,
  conciergeServicesJson?: Maybe<ConciergeServicesJson>,
  allConciergeServicesJson: ConciergeServicesJsonConnection,
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
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childrenConciergeServicesJson?: Maybe<ConciergeServicesJsonFilterListInput>,
  childrenGuestServicesJson?: Maybe<GuestServicesJsonFilterListInput>,
  childrenRentalsJson?: Maybe<RentalsJsonFilterListInput>,
  childrenTeamJson?: Maybe<TeamJsonFilterListInput>,
  childrenTestimonialsJson?: Maybe<TestimonialsJsonFilterListInput>,
  childMdx?: Maybe<MdxFilterInput>
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


export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>,
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>,
  frontmatter?: Maybe<MdxFrontmatterFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
  excerpt?: Maybe<StringQueryOperatorInput>,
  headings?: Maybe<MdxHeadingMdxFilterListInput>,
  html?: Maybe<StringQueryOperatorInput>,
  mdxAST?: Maybe<JsonQueryOperatorInput>,
  tableOfContents?: Maybe<JsonQueryOperatorInput>,
  timeToRead?: Maybe<IntQueryOperatorInput>,
  wordCount?: Maybe<MdxWordCountFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>,
  sort?: Maybe<MdxSortInput>,
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


export type QueryRentalsJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  bedrooms?: Maybe<IntQueryOperatorInput>,
  price?: Maybe<IntQueryOperatorInput>,
  guests?: Maybe<IntQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  picture?: Maybe<FileFilterInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  category?: Maybe<StringQueryOperatorInput>
};


export type QueryAllRentalsJsonArgs = {
  filter?: Maybe<RentalsJsonFilterInput>,
  sort?: Maybe<RentalsJsonSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryGuestServicesJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<FileFilterInput>
};


export type QueryAllGuestServicesJsonArgs = {
  filter?: Maybe<GuestServicesJsonFilterInput>,
  sort?: Maybe<GuestServicesJsonSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryConciergeServicesJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  name?: Maybe<StringQueryOperatorInput>,
  image?: Maybe<FileFilterInput>
};


export type QueryAllConciergeServicesJsonArgs = {
  filter?: Maybe<ConciergeServicesJsonFilterInput>,
  sort?: Maybe<ConciergeServicesJsonSortInput>,
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

export type RentalsJson = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  bedrooms?: Maybe<Scalars['Int']>,
  price?: Maybe<Scalars['Int']>,
  guests?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  picture?: Maybe<File>,
  slug?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
};

export type RentalsJsonConnection = {
  totalCount: Scalars['Int'],
  edges: Array<RentalsJsonEdge>,
  nodes: Array<RentalsJson>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<RentalsJsonGroupConnection>,
};


export type RentalsJsonConnectionDistinctArgs = {
  field: RentalsJsonFieldsEnum
};


export type RentalsJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: RentalsJsonFieldsEnum
};

export type RentalsJsonEdge = {
  next?: Maybe<RentalsJson>,
  node: RentalsJson,
  previous?: Maybe<RentalsJson>,
};

export type RentalsJsonFieldsEnum = 
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
  'bedrooms' |
  'price' |
  'guests' |
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
  'picture___childrenConciergeServicesJson' |
  'picture___childrenConciergeServicesJson___id' |
  'picture___childrenConciergeServicesJson___parent___id' |
  'picture___childrenConciergeServicesJson___parent___children' |
  'picture___childrenConciergeServicesJson___children' |
  'picture___childrenConciergeServicesJson___children___id' |
  'picture___childrenConciergeServicesJson___children___children' |
  'picture___childrenConciergeServicesJson___internal___content' |
  'picture___childrenConciergeServicesJson___internal___contentDigest' |
  'picture___childrenConciergeServicesJson___internal___description' |
  'picture___childrenConciergeServicesJson___internal___fieldOwners' |
  'picture___childrenConciergeServicesJson___internal___ignoreType' |
  'picture___childrenConciergeServicesJson___internal___mediaType' |
  'picture___childrenConciergeServicesJson___internal___owner' |
  'picture___childrenConciergeServicesJson___internal___type' |
  'picture___childrenConciergeServicesJson___name' |
  'picture___childrenConciergeServicesJson___image___sourceInstanceName' |
  'picture___childrenConciergeServicesJson___image___absolutePath' |
  'picture___childrenConciergeServicesJson___image___relativePath' |
  'picture___childrenConciergeServicesJson___image___extension' |
  'picture___childrenConciergeServicesJson___image___size' |
  'picture___childrenConciergeServicesJson___image___prettySize' |
  'picture___childrenConciergeServicesJson___image___modifiedTime' |
  'picture___childrenConciergeServicesJson___image___accessTime' |
  'picture___childrenConciergeServicesJson___image___changeTime' |
  'picture___childrenConciergeServicesJson___image___birthTime' |
  'picture___childrenConciergeServicesJson___image___root' |
  'picture___childrenConciergeServicesJson___image___dir' |
  'picture___childrenConciergeServicesJson___image___base' |
  'picture___childrenConciergeServicesJson___image___ext' |
  'picture___childrenConciergeServicesJson___image___name' |
  'picture___childrenConciergeServicesJson___image___relativeDirectory' |
  'picture___childrenConciergeServicesJson___image___dev' |
  'picture___childrenConciergeServicesJson___image___mode' |
  'picture___childrenConciergeServicesJson___image___nlink' |
  'picture___childrenConciergeServicesJson___image___uid' |
  'picture___childrenConciergeServicesJson___image___gid' |
  'picture___childrenConciergeServicesJson___image___rdev' |
  'picture___childrenConciergeServicesJson___image___ino' |
  'picture___childrenConciergeServicesJson___image___atimeMs' |
  'picture___childrenConciergeServicesJson___image___mtimeMs' |
  'picture___childrenConciergeServicesJson___image___ctimeMs' |
  'picture___childrenConciergeServicesJson___image___atime' |
  'picture___childrenConciergeServicesJson___image___mtime' |
  'picture___childrenConciergeServicesJson___image___ctime' |
  'picture___childrenConciergeServicesJson___image___birthtime' |
  'picture___childrenConciergeServicesJson___image___birthtimeMs' |
  'picture___childrenConciergeServicesJson___image___blksize' |
  'picture___childrenConciergeServicesJson___image___blocks' |
  'picture___childrenConciergeServicesJson___image___publicURL' |
  'picture___childrenConciergeServicesJson___image___id' |
  'picture___childrenConciergeServicesJson___image___children' |
  'picture___childrenConciergeServicesJson___image___childrenConciergeServicesJson' |
  'picture___childrenConciergeServicesJson___image___childrenGuestServicesJson' |
  'picture___childrenConciergeServicesJson___image___childrenRentalsJson' |
  'picture___childrenConciergeServicesJson___image___childrenTeamJson' |
  'picture___childrenConciergeServicesJson___image___childrenTestimonialsJson' |
  'picture___childrenGuestServicesJson' |
  'picture___childrenGuestServicesJson___id' |
  'picture___childrenGuestServicesJson___parent___id' |
  'picture___childrenGuestServicesJson___parent___children' |
  'picture___childrenGuestServicesJson___children' |
  'picture___childrenGuestServicesJson___children___id' |
  'picture___childrenGuestServicesJson___children___children' |
  'picture___childrenGuestServicesJson___internal___content' |
  'picture___childrenGuestServicesJson___internal___contentDigest' |
  'picture___childrenGuestServicesJson___internal___description' |
  'picture___childrenGuestServicesJson___internal___fieldOwners' |
  'picture___childrenGuestServicesJson___internal___ignoreType' |
  'picture___childrenGuestServicesJson___internal___mediaType' |
  'picture___childrenGuestServicesJson___internal___owner' |
  'picture___childrenGuestServicesJson___internal___type' |
  'picture___childrenGuestServicesJson___name' |
  'picture___childrenGuestServicesJson___description' |
  'picture___childrenGuestServicesJson___icon___sourceInstanceName' |
  'picture___childrenGuestServicesJson___icon___absolutePath' |
  'picture___childrenGuestServicesJson___icon___relativePath' |
  'picture___childrenGuestServicesJson___icon___extension' |
  'picture___childrenGuestServicesJson___icon___size' |
  'picture___childrenGuestServicesJson___icon___prettySize' |
  'picture___childrenGuestServicesJson___icon___modifiedTime' |
  'picture___childrenGuestServicesJson___icon___accessTime' |
  'picture___childrenGuestServicesJson___icon___changeTime' |
  'picture___childrenGuestServicesJson___icon___birthTime' |
  'picture___childrenGuestServicesJson___icon___root' |
  'picture___childrenGuestServicesJson___icon___dir' |
  'picture___childrenGuestServicesJson___icon___base' |
  'picture___childrenGuestServicesJson___icon___ext' |
  'picture___childrenGuestServicesJson___icon___name' |
  'picture___childrenGuestServicesJson___icon___relativeDirectory' |
  'picture___childrenGuestServicesJson___icon___dev' |
  'picture___childrenGuestServicesJson___icon___mode' |
  'picture___childrenGuestServicesJson___icon___nlink' |
  'picture___childrenGuestServicesJson___icon___uid' |
  'picture___childrenGuestServicesJson___icon___gid' |
  'picture___childrenGuestServicesJson___icon___rdev' |
  'picture___childrenGuestServicesJson___icon___ino' |
  'picture___childrenGuestServicesJson___icon___atimeMs' |
  'picture___childrenGuestServicesJson___icon___mtimeMs' |
  'picture___childrenGuestServicesJson___icon___ctimeMs' |
  'picture___childrenGuestServicesJson___icon___atime' |
  'picture___childrenGuestServicesJson___icon___mtime' |
  'picture___childrenGuestServicesJson___icon___ctime' |
  'picture___childrenGuestServicesJson___icon___birthtime' |
  'picture___childrenGuestServicesJson___icon___birthtimeMs' |
  'picture___childrenGuestServicesJson___icon___blksize' |
  'picture___childrenGuestServicesJson___icon___blocks' |
  'picture___childrenGuestServicesJson___icon___publicURL' |
  'picture___childrenGuestServicesJson___icon___id' |
  'picture___childrenGuestServicesJson___icon___children' |
  'picture___childrenGuestServicesJson___icon___childrenConciergeServicesJson' |
  'picture___childrenGuestServicesJson___icon___childrenGuestServicesJson' |
  'picture___childrenGuestServicesJson___icon___childrenRentalsJson' |
  'picture___childrenGuestServicesJson___icon___childrenTeamJson' |
  'picture___childrenGuestServicesJson___icon___childrenTestimonialsJson' |
  'picture___childrenRentalsJson' |
  'picture___childrenRentalsJson___id' |
  'picture___childrenRentalsJson___parent___id' |
  'picture___childrenRentalsJson___parent___children' |
  'picture___childrenRentalsJson___children' |
  'picture___childrenRentalsJson___children___id' |
  'picture___childrenRentalsJson___children___children' |
  'picture___childrenRentalsJson___internal___content' |
  'picture___childrenRentalsJson___internal___contentDigest' |
  'picture___childrenRentalsJson___internal___description' |
  'picture___childrenRentalsJson___internal___fieldOwners' |
  'picture___childrenRentalsJson___internal___ignoreType' |
  'picture___childrenRentalsJson___internal___mediaType' |
  'picture___childrenRentalsJson___internal___owner' |
  'picture___childrenRentalsJson___internal___type' |
  'picture___childrenRentalsJson___bedrooms' |
  'picture___childrenRentalsJson___price' |
  'picture___childrenRentalsJson___guests' |
  'picture___childrenRentalsJson___title' |
  'picture___childrenRentalsJson___picture___sourceInstanceName' |
  'picture___childrenRentalsJson___picture___absolutePath' |
  'picture___childrenRentalsJson___picture___relativePath' |
  'picture___childrenRentalsJson___picture___extension' |
  'picture___childrenRentalsJson___picture___size' |
  'picture___childrenRentalsJson___picture___prettySize' |
  'picture___childrenRentalsJson___picture___modifiedTime' |
  'picture___childrenRentalsJson___picture___accessTime' |
  'picture___childrenRentalsJson___picture___changeTime' |
  'picture___childrenRentalsJson___picture___birthTime' |
  'picture___childrenRentalsJson___picture___root' |
  'picture___childrenRentalsJson___picture___dir' |
  'picture___childrenRentalsJson___picture___base' |
  'picture___childrenRentalsJson___picture___ext' |
  'picture___childrenRentalsJson___picture___name' |
  'picture___childrenRentalsJson___picture___relativeDirectory' |
  'picture___childrenRentalsJson___picture___dev' |
  'picture___childrenRentalsJson___picture___mode' |
  'picture___childrenRentalsJson___picture___nlink' |
  'picture___childrenRentalsJson___picture___uid' |
  'picture___childrenRentalsJson___picture___gid' |
  'picture___childrenRentalsJson___picture___rdev' |
  'picture___childrenRentalsJson___picture___ino' |
  'picture___childrenRentalsJson___picture___atimeMs' |
  'picture___childrenRentalsJson___picture___mtimeMs' |
  'picture___childrenRentalsJson___picture___ctimeMs' |
  'picture___childrenRentalsJson___picture___atime' |
  'picture___childrenRentalsJson___picture___mtime' |
  'picture___childrenRentalsJson___picture___ctime' |
  'picture___childrenRentalsJson___picture___birthtime' |
  'picture___childrenRentalsJson___picture___birthtimeMs' |
  'picture___childrenRentalsJson___picture___blksize' |
  'picture___childrenRentalsJson___picture___blocks' |
  'picture___childrenRentalsJson___picture___publicURL' |
  'picture___childrenRentalsJson___picture___id' |
  'picture___childrenRentalsJson___picture___children' |
  'picture___childrenRentalsJson___picture___childrenConciergeServicesJson' |
  'picture___childrenRentalsJson___picture___childrenGuestServicesJson' |
  'picture___childrenRentalsJson___picture___childrenRentalsJson' |
  'picture___childrenRentalsJson___picture___childrenTeamJson' |
  'picture___childrenRentalsJson___picture___childrenTestimonialsJson' |
  'picture___childrenRentalsJson___slug' |
  'picture___childrenRentalsJson___category' |
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
  'picture___childrenTeamJson___picture___publicURL' |
  'picture___childrenTeamJson___picture___id' |
  'picture___childrenTeamJson___picture___children' |
  'picture___childrenTeamJson___picture___childrenConciergeServicesJson' |
  'picture___childrenTeamJson___picture___childrenGuestServicesJson' |
  'picture___childrenTeamJson___picture___childrenRentalsJson' |
  'picture___childrenTeamJson___picture___childrenTeamJson' |
  'picture___childrenTeamJson___picture___childrenTestimonialsJson' |
  'picture___childrenTeamJson___bio' |
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
  'picture___childMdx___rawBody' |
  'picture___childMdx___fileAbsolutePath' |
  'picture___childMdx___frontmatter___title' |
  'picture___childMdx___frontmatter___slug' |
  'picture___childMdx___frontmatter___contactForm' |
  'picture___childMdx___body' |
  'picture___childMdx___excerpt' |
  'picture___childMdx___headings' |
  'picture___childMdx___headings___value' |
  'picture___childMdx___headings___depth' |
  'picture___childMdx___html' |
  'picture___childMdx___mdxAST' |
  'picture___childMdx___tableOfContents' |
  'picture___childMdx___timeToRead' |
  'picture___childMdx___wordCount___paragraphs' |
  'picture___childMdx___wordCount___sentences' |
  'picture___childMdx___wordCount___words' |
  'picture___childMdx___id' |
  'picture___childMdx___parent___id' |
  'picture___childMdx___parent___children' |
  'picture___childMdx___children' |
  'picture___childMdx___children___id' |
  'picture___childMdx___children___children' |
  'picture___childMdx___internal___content' |
  'picture___childMdx___internal___contentDigest' |
  'picture___childMdx___internal___description' |
  'picture___childMdx___internal___fieldOwners' |
  'picture___childMdx___internal___ignoreType' |
  'picture___childMdx___internal___mediaType' |
  'picture___childMdx___internal___owner' |
  'picture___childMdx___internal___type' |
  'slug' |
  'category';

export type RentalsJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  bedrooms?: Maybe<IntQueryOperatorInput>,
  price?: Maybe<IntQueryOperatorInput>,
  guests?: Maybe<IntQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  picture?: Maybe<FileFilterInput>,
  slug?: Maybe<StringQueryOperatorInput>,
  category?: Maybe<StringQueryOperatorInput>,
};

export type RentalsJsonFilterListInput = {
  elemMatch?: Maybe<RentalsJsonFilterInput>,
};

export type RentalsJsonGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<RentalsJsonEdge>,
  nodes: Array<RentalsJson>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type RentalsJsonSortInput = {
  fields?: Maybe<Array<Maybe<RentalsJsonFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
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
  title?: Maybe<Scalars['String']>,
  hero?: Maybe<SitePageContextHero>,
  body?: Maybe<Scalars['String']>,
};

export type SitePageContextFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  hero?: Maybe<SitePageContextHeroFilterInput>,
  body?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextHero = {
  childImageSharp?: Maybe<SitePageContextHeroChildImageSharp>,
};

export type SitePageContextHeroChildImageSharp = {
  fluid?: Maybe<SitePageContextHeroChildImageSharpFluid>,
};

export type SitePageContextHeroChildImageSharpFilterInput = {
  fluid?: Maybe<SitePageContextHeroChildImageSharpFluidFilterInput>,
};

export type SitePageContextHeroChildImageSharpFluid = {
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SitePageContextHeroChildImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type SitePageContextHeroFilterInput = {
  childImageSharp?: Maybe<SitePageContextHeroChildImageSharpFilterInput>,
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
  'context___title' |
  'context___body' |
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
  'pluginCreator___pluginOptions___gatsbyRemarkPlugins' |
  'pluginCreator___pluginOptions___gatsbyRemarkPlugins___resolve' |
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
  'pluginCreator___pluginOptions___allPageHeaders' |
  'pluginCreator___pluginOptions___functionsSrc' |
  'pluginCreator___pluginOptions___functionsOutput' |
  'pluginCreator___pluginOptions___fileName' |
  'pluginCreator___pluginOptions___codegen' |
  'pluginCreator___pluginOptions___codegenDelay' |
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
  'pluginOptions___gatsbyRemarkPlugins' |
  'pluginOptions___gatsbyRemarkPlugins___resolve' |
  'pluginOptions___gatsbyRemarkPlugins___options___wrapperStyle' |
  'pluginOptions___gatsbyRemarkPlugins___options___disableBgImage' |
  'pluginOptions___gatsbyRemarkPlugins___options___withWebp' |
  'pluginOptions___gatsbyRemarkPlugins___options___pathPrefix' |
  'pluginOptions___gatsbyRemarkPlugins___options___maxWidth' |
  'pluginOptions___gatsbyRemarkPlugins___options___backgroundColor' |
  'pluginOptions___gatsbyRemarkPlugins___options___linkImagesToOriginal' |
  'pluginOptions___gatsbyRemarkPlugins___options___showCaptions' |
  'pluginOptions___gatsbyRemarkPlugins___options___markdownCaptions' |
  'pluginOptions___gatsbyRemarkPlugins___options___tracedSVG' |
  'pluginOptions___gatsbyRemarkPlugins___options___loading' |
  'pluginOptions___gatsbyRemarkPlugins___options___disableBgImageOnAlpha' |
  'pluginOptions___gatsbyRemarkPlugins___options___ratio' |
  'pluginOptions___gatsbyRemarkPlugins___options___related' |
  'pluginOptions___gatsbyRemarkPlugins___options___noIframeBorder' |
  'pluginOptions___gatsbyRemarkPlugins___options___urlOverrides' |
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
  'pluginOptions___allPageHeaders' |
  'pluginOptions___functionsSrc' |
  'pluginOptions___functionsOutput' |
  'pluginOptions___fileName' |
  'pluginOptions___codegen' |
  'pluginOptions___codegenDelay' |
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
  gatsbyRemarkPlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsGatsbyRemarkPlugins>>>,
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
  allPageHeaders?: Maybe<Array<Maybe<Scalars['String']>>>,
  functionsSrc?: Maybe<Scalars['String']>,
  functionsOutput?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  codegen?: Maybe<Scalars['Boolean']>,
  codegenDelay?: Maybe<Scalars['Int']>,
  pathCheck?: Maybe<Scalars['Boolean']>,
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
  gatsbyRemarkPlugins?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput>,
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
  allPageHeaders?: Maybe<StringQueryOperatorInput>,
  functionsSrc?: Maybe<StringQueryOperatorInput>,
  functionsOutput?: Maybe<StringQueryOperatorInput>,
  fileName?: Maybe<StringQueryOperatorInput>,
  codegen?: Maybe<BooleanQueryOperatorInput>,
  codegenDelay?: Maybe<IntQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginPluginOptionsGatsbyRemarkPlugins = {
  resolve?: Maybe<Scalars['String']>,
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptions>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>,
  options?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsFilterInput>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptions = {
  wrapperStyle?: Maybe<Scalars['String']>,
  disableBgImage?: Maybe<Scalars['Boolean']>,
  withWebp?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  maxWidth?: Maybe<Scalars['Int']>,
  backgroundColor?: Maybe<Scalars['String']>,
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>,
  showCaptions?: Maybe<Scalars['Boolean']>,
  markdownCaptions?: Maybe<Scalars['Boolean']>,
  tracedSVG?: Maybe<Scalars['Boolean']>,
  loading?: Maybe<Scalars['String']>,
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>,
  ratio?: Maybe<Scalars['Float']>,
  related?: Maybe<Scalars['Boolean']>,
  noIframeBorder?: Maybe<Scalars['Boolean']>,
  urlOverrides?: Maybe<Array<Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsUrlOverrides>>>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsFilterInput = {
  wrapperStyle?: Maybe<StringQueryOperatorInput>,
  disableBgImage?: Maybe<BooleanQueryOperatorInput>,
  withWebp?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  maxWidth?: Maybe<IntQueryOperatorInput>,
  backgroundColor?: Maybe<StringQueryOperatorInput>,
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>,
  showCaptions?: Maybe<BooleanQueryOperatorInput>,
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>,
  tracedSVG?: Maybe<BooleanQueryOperatorInput>,
  loading?: Maybe<StringQueryOperatorInput>,
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>,
  ratio?: Maybe<FloatQueryOperatorInput>,
  related?: Maybe<BooleanQueryOperatorInput>,
  noIframeBorder?: Maybe<BooleanQueryOperatorInput>,
  urlOverrides?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsUrlOverridesFilterListInput>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsUrlOverrides = {
  id?: Maybe<Scalars['String']>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsUrlOverridesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPluginOptionsGatsbyRemarkPluginsOptionsUrlOverridesFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsGatsbyRemarkPluginsOptionsUrlOverridesFilterInput>,
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
  'picture___childrenConciergeServicesJson' |
  'picture___childrenConciergeServicesJson___id' |
  'picture___childrenConciergeServicesJson___parent___id' |
  'picture___childrenConciergeServicesJson___parent___children' |
  'picture___childrenConciergeServicesJson___children' |
  'picture___childrenConciergeServicesJson___children___id' |
  'picture___childrenConciergeServicesJson___children___children' |
  'picture___childrenConciergeServicesJson___internal___content' |
  'picture___childrenConciergeServicesJson___internal___contentDigest' |
  'picture___childrenConciergeServicesJson___internal___description' |
  'picture___childrenConciergeServicesJson___internal___fieldOwners' |
  'picture___childrenConciergeServicesJson___internal___ignoreType' |
  'picture___childrenConciergeServicesJson___internal___mediaType' |
  'picture___childrenConciergeServicesJson___internal___owner' |
  'picture___childrenConciergeServicesJson___internal___type' |
  'picture___childrenConciergeServicesJson___name' |
  'picture___childrenConciergeServicesJson___image___sourceInstanceName' |
  'picture___childrenConciergeServicesJson___image___absolutePath' |
  'picture___childrenConciergeServicesJson___image___relativePath' |
  'picture___childrenConciergeServicesJson___image___extension' |
  'picture___childrenConciergeServicesJson___image___size' |
  'picture___childrenConciergeServicesJson___image___prettySize' |
  'picture___childrenConciergeServicesJson___image___modifiedTime' |
  'picture___childrenConciergeServicesJson___image___accessTime' |
  'picture___childrenConciergeServicesJson___image___changeTime' |
  'picture___childrenConciergeServicesJson___image___birthTime' |
  'picture___childrenConciergeServicesJson___image___root' |
  'picture___childrenConciergeServicesJson___image___dir' |
  'picture___childrenConciergeServicesJson___image___base' |
  'picture___childrenConciergeServicesJson___image___ext' |
  'picture___childrenConciergeServicesJson___image___name' |
  'picture___childrenConciergeServicesJson___image___relativeDirectory' |
  'picture___childrenConciergeServicesJson___image___dev' |
  'picture___childrenConciergeServicesJson___image___mode' |
  'picture___childrenConciergeServicesJson___image___nlink' |
  'picture___childrenConciergeServicesJson___image___uid' |
  'picture___childrenConciergeServicesJson___image___gid' |
  'picture___childrenConciergeServicesJson___image___rdev' |
  'picture___childrenConciergeServicesJson___image___ino' |
  'picture___childrenConciergeServicesJson___image___atimeMs' |
  'picture___childrenConciergeServicesJson___image___mtimeMs' |
  'picture___childrenConciergeServicesJson___image___ctimeMs' |
  'picture___childrenConciergeServicesJson___image___atime' |
  'picture___childrenConciergeServicesJson___image___mtime' |
  'picture___childrenConciergeServicesJson___image___ctime' |
  'picture___childrenConciergeServicesJson___image___birthtime' |
  'picture___childrenConciergeServicesJson___image___birthtimeMs' |
  'picture___childrenConciergeServicesJson___image___blksize' |
  'picture___childrenConciergeServicesJson___image___blocks' |
  'picture___childrenConciergeServicesJson___image___publicURL' |
  'picture___childrenConciergeServicesJson___image___id' |
  'picture___childrenConciergeServicesJson___image___children' |
  'picture___childrenConciergeServicesJson___image___childrenConciergeServicesJson' |
  'picture___childrenConciergeServicesJson___image___childrenGuestServicesJson' |
  'picture___childrenConciergeServicesJson___image___childrenRentalsJson' |
  'picture___childrenConciergeServicesJson___image___childrenTeamJson' |
  'picture___childrenConciergeServicesJson___image___childrenTestimonialsJson' |
  'picture___childrenGuestServicesJson' |
  'picture___childrenGuestServicesJson___id' |
  'picture___childrenGuestServicesJson___parent___id' |
  'picture___childrenGuestServicesJson___parent___children' |
  'picture___childrenGuestServicesJson___children' |
  'picture___childrenGuestServicesJson___children___id' |
  'picture___childrenGuestServicesJson___children___children' |
  'picture___childrenGuestServicesJson___internal___content' |
  'picture___childrenGuestServicesJson___internal___contentDigest' |
  'picture___childrenGuestServicesJson___internal___description' |
  'picture___childrenGuestServicesJson___internal___fieldOwners' |
  'picture___childrenGuestServicesJson___internal___ignoreType' |
  'picture___childrenGuestServicesJson___internal___mediaType' |
  'picture___childrenGuestServicesJson___internal___owner' |
  'picture___childrenGuestServicesJson___internal___type' |
  'picture___childrenGuestServicesJson___name' |
  'picture___childrenGuestServicesJson___description' |
  'picture___childrenGuestServicesJson___icon___sourceInstanceName' |
  'picture___childrenGuestServicesJson___icon___absolutePath' |
  'picture___childrenGuestServicesJson___icon___relativePath' |
  'picture___childrenGuestServicesJson___icon___extension' |
  'picture___childrenGuestServicesJson___icon___size' |
  'picture___childrenGuestServicesJson___icon___prettySize' |
  'picture___childrenGuestServicesJson___icon___modifiedTime' |
  'picture___childrenGuestServicesJson___icon___accessTime' |
  'picture___childrenGuestServicesJson___icon___changeTime' |
  'picture___childrenGuestServicesJson___icon___birthTime' |
  'picture___childrenGuestServicesJson___icon___root' |
  'picture___childrenGuestServicesJson___icon___dir' |
  'picture___childrenGuestServicesJson___icon___base' |
  'picture___childrenGuestServicesJson___icon___ext' |
  'picture___childrenGuestServicesJson___icon___name' |
  'picture___childrenGuestServicesJson___icon___relativeDirectory' |
  'picture___childrenGuestServicesJson___icon___dev' |
  'picture___childrenGuestServicesJson___icon___mode' |
  'picture___childrenGuestServicesJson___icon___nlink' |
  'picture___childrenGuestServicesJson___icon___uid' |
  'picture___childrenGuestServicesJson___icon___gid' |
  'picture___childrenGuestServicesJson___icon___rdev' |
  'picture___childrenGuestServicesJson___icon___ino' |
  'picture___childrenGuestServicesJson___icon___atimeMs' |
  'picture___childrenGuestServicesJson___icon___mtimeMs' |
  'picture___childrenGuestServicesJson___icon___ctimeMs' |
  'picture___childrenGuestServicesJson___icon___atime' |
  'picture___childrenGuestServicesJson___icon___mtime' |
  'picture___childrenGuestServicesJson___icon___ctime' |
  'picture___childrenGuestServicesJson___icon___birthtime' |
  'picture___childrenGuestServicesJson___icon___birthtimeMs' |
  'picture___childrenGuestServicesJson___icon___blksize' |
  'picture___childrenGuestServicesJson___icon___blocks' |
  'picture___childrenGuestServicesJson___icon___publicURL' |
  'picture___childrenGuestServicesJson___icon___id' |
  'picture___childrenGuestServicesJson___icon___children' |
  'picture___childrenGuestServicesJson___icon___childrenConciergeServicesJson' |
  'picture___childrenGuestServicesJson___icon___childrenGuestServicesJson' |
  'picture___childrenGuestServicesJson___icon___childrenRentalsJson' |
  'picture___childrenGuestServicesJson___icon___childrenTeamJson' |
  'picture___childrenGuestServicesJson___icon___childrenTestimonialsJson' |
  'picture___childrenRentalsJson' |
  'picture___childrenRentalsJson___id' |
  'picture___childrenRentalsJson___parent___id' |
  'picture___childrenRentalsJson___parent___children' |
  'picture___childrenRentalsJson___children' |
  'picture___childrenRentalsJson___children___id' |
  'picture___childrenRentalsJson___children___children' |
  'picture___childrenRentalsJson___internal___content' |
  'picture___childrenRentalsJson___internal___contentDigest' |
  'picture___childrenRentalsJson___internal___description' |
  'picture___childrenRentalsJson___internal___fieldOwners' |
  'picture___childrenRentalsJson___internal___ignoreType' |
  'picture___childrenRentalsJson___internal___mediaType' |
  'picture___childrenRentalsJson___internal___owner' |
  'picture___childrenRentalsJson___internal___type' |
  'picture___childrenRentalsJson___bedrooms' |
  'picture___childrenRentalsJson___price' |
  'picture___childrenRentalsJson___guests' |
  'picture___childrenRentalsJson___title' |
  'picture___childrenRentalsJson___picture___sourceInstanceName' |
  'picture___childrenRentalsJson___picture___absolutePath' |
  'picture___childrenRentalsJson___picture___relativePath' |
  'picture___childrenRentalsJson___picture___extension' |
  'picture___childrenRentalsJson___picture___size' |
  'picture___childrenRentalsJson___picture___prettySize' |
  'picture___childrenRentalsJson___picture___modifiedTime' |
  'picture___childrenRentalsJson___picture___accessTime' |
  'picture___childrenRentalsJson___picture___changeTime' |
  'picture___childrenRentalsJson___picture___birthTime' |
  'picture___childrenRentalsJson___picture___root' |
  'picture___childrenRentalsJson___picture___dir' |
  'picture___childrenRentalsJson___picture___base' |
  'picture___childrenRentalsJson___picture___ext' |
  'picture___childrenRentalsJson___picture___name' |
  'picture___childrenRentalsJson___picture___relativeDirectory' |
  'picture___childrenRentalsJson___picture___dev' |
  'picture___childrenRentalsJson___picture___mode' |
  'picture___childrenRentalsJson___picture___nlink' |
  'picture___childrenRentalsJson___picture___uid' |
  'picture___childrenRentalsJson___picture___gid' |
  'picture___childrenRentalsJson___picture___rdev' |
  'picture___childrenRentalsJson___picture___ino' |
  'picture___childrenRentalsJson___picture___atimeMs' |
  'picture___childrenRentalsJson___picture___mtimeMs' |
  'picture___childrenRentalsJson___picture___ctimeMs' |
  'picture___childrenRentalsJson___picture___atime' |
  'picture___childrenRentalsJson___picture___mtime' |
  'picture___childrenRentalsJson___picture___ctime' |
  'picture___childrenRentalsJson___picture___birthtime' |
  'picture___childrenRentalsJson___picture___birthtimeMs' |
  'picture___childrenRentalsJson___picture___blksize' |
  'picture___childrenRentalsJson___picture___blocks' |
  'picture___childrenRentalsJson___picture___publicURL' |
  'picture___childrenRentalsJson___picture___id' |
  'picture___childrenRentalsJson___picture___children' |
  'picture___childrenRentalsJson___picture___childrenConciergeServicesJson' |
  'picture___childrenRentalsJson___picture___childrenGuestServicesJson' |
  'picture___childrenRentalsJson___picture___childrenRentalsJson' |
  'picture___childrenRentalsJson___picture___childrenTeamJson' |
  'picture___childrenRentalsJson___picture___childrenTestimonialsJson' |
  'picture___childrenRentalsJson___slug' |
  'picture___childrenRentalsJson___category' |
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
  'picture___childrenTeamJson___picture___publicURL' |
  'picture___childrenTeamJson___picture___id' |
  'picture___childrenTeamJson___picture___children' |
  'picture___childrenTeamJson___picture___childrenConciergeServicesJson' |
  'picture___childrenTeamJson___picture___childrenGuestServicesJson' |
  'picture___childrenTeamJson___picture___childrenRentalsJson' |
  'picture___childrenTeamJson___picture___childrenTeamJson' |
  'picture___childrenTeamJson___picture___childrenTestimonialsJson' |
  'picture___childrenTeamJson___bio' |
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
  'picture___childMdx___rawBody' |
  'picture___childMdx___fileAbsolutePath' |
  'picture___childMdx___frontmatter___title' |
  'picture___childMdx___frontmatter___slug' |
  'picture___childMdx___frontmatter___contactForm' |
  'picture___childMdx___body' |
  'picture___childMdx___excerpt' |
  'picture___childMdx___headings' |
  'picture___childMdx___headings___value' |
  'picture___childMdx___headings___depth' |
  'picture___childMdx___html' |
  'picture___childMdx___mdxAST' |
  'picture___childMdx___tableOfContents' |
  'picture___childMdx___timeToRead' |
  'picture___childMdx___wordCount___paragraphs' |
  'picture___childMdx___wordCount___sentences' |
  'picture___childMdx___wordCount___words' |
  'picture___childMdx___id' |
  'picture___childMdx___parent___id' |
  'picture___childMdx___parent___children' |
  'picture___childMdx___children' |
  'picture___childMdx___children___id' |
  'picture___childMdx___children___children' |
  'picture___childMdx___internal___content' |
  'picture___childMdx___internal___contentDigest' |
  'picture___childMdx___internal___description' |
  'picture___childMdx___internal___fieldOwners' |
  'picture___childMdx___internal___ignoreType' |
  'picture___childMdx___internal___mediaType' |
  'picture___childMdx___internal___owner' |
  'picture___childMdx___internal___type' |
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

export type ConciergeServiceFragment = (
  Pick<ConciergeServicesJson, 'name'>
  & { image: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }> }
);

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = { allConciergeServicesJson: { nodes: Array<ConciergeServiceFragment> } };

export type CottageCardFragment = (
  Pick<RentalsJson, 'id' | 'bedrooms' | 'price' | 'guests' | 'slug' | 'title' | 'category'>
  & { picture: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }> }
);

export type GuestServiceFragment = (
  Pick<GuestServicesJson, 'name' | 'description'>
  & { icon: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }> }
);

export type GuestServicesQueryVariables = {};


export type GuestServicesQuery = { allGuestServicesJson: { nodes: Array<(
      Pick<GuestServicesJson, 'id'>
      & GuestServiceFragment
    )> } };

export type Unnamed_2_QueryVariables = {};


export type Unnamed_2_Query = { logo: Maybe<{ childImageSharp: Maybe<{ fixed: Maybe<> }> }>, links: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'footerLinks'>> }> };

export type Unnamed_3_QueryVariables = {};


export type Unnamed_3_Query = { logo: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }>, icon: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }> };

export type Unnamed_4_QueryVariables = {};


export type Unnamed_4_Query = { site: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'headerLinks'>> }> };

export type TeamQueryVariables = {};


export type TeamQuery = { allTeamJson: { nodes: Array<(
      Pick<TeamJson, 'id' | 'name' | 'title' | 'bio'>
      & { picture: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }> }
    )> } };

export type PageImageFragment = { childImageSharp: Maybe<{ fluid: Maybe<> }> };

export type Unnamed_5_QueryVariables = {};


export type Unnamed_5_Query = { site: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'productionUrl'>> }> };

export type RentalsQueryVariables = {};


export type RentalsQuery = { allRentalsJson: { nodes: Array<CottageCardFragment> } };

export type Unnamed_6_QueryVariables = {};


export type Unnamed_6_Query = { site: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>> }> };

export type Unnamed_7_QueryVariables = {};


export type Unnamed_7_Query = { swirl: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }> };

export type TestimonialFragment = (
  Pick<TestimonialsJson, 'author' | 'body' | 'rating'>
  & { property: Maybe<Pick<TestimonialsJsonProperty, 'name' | 'location'>> }
);

export type Unnamed_8_QueryVariables = {};


export type Unnamed_8_Query = { testimonials: { nodes: Array<TestimonialFragment> }, image: Maybe<PageImageFragment> };

export type Unnamed_9_QueryVariables = {};


export type Unnamed_9_Query = { image: Maybe<PageImageFragment> };

export type HomePageQueryVariables = {};


export type HomePageQuery = { logoImg: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }>, headerImg: Maybe<PageImageFragment>, aboutImg: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<> }> }>, testimonials: { nodes: Array<TestimonialFragment> } };
