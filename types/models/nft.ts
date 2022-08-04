import { DataList } from "./common";

export interface Attributes {
  key: string;
  imageIcon: string;
  type: string;
  value: string;
}

export interface Seller {
  role: string;
  _id: string;
  address: string;
  nonce: number;
  dateCreated: string;
  username: string;
  email: string;
  dateUpdated: string;
}

export interface CollectionItem {
  _id: string;
  collectionType: string;
  logoImage: string;
  collectionBanner: string;
  collectionName: string;
  collectionDescription: string;
  numberOfViews: number;
  categoryId: string;
  sellerId: string;
  dateCreated: string;
  dateUpdated: string;
  seller: Seller;
}

export interface NFTItem {
  unlockAbleContent: {
    mode: boolean;
    content: string;
  };
  nftInterface: string;
  numberOfView: number;
  attributes: Attributes[];
  displaySetting: boolean;
  unitPrice: string;
  _id: string;
  name: string;
  royaltyFee: number;
  description: string;
  price: number;
  seller: Seller;
  numberOfCopy: number;
  content: string;
  previewImage: string;
  typeContent: string;
  dateCreated: string;
  dateUpdated: string;
  categoryId: string;
  collectionId: string;
  collection: CollectionItem;
  verified?: boolean;
  category: Category;
  ipfsImage: string;
  tokenURI: string;
  totalMinted: number;
  totalOwner: number;
  totalSold: number;
  stage: string;
  tokenId: string;
  onSaleQuantity: number;
  pushItemOnSale: boolean;
  contractAddress: string;
  displayOnMarketplace: boolean;
  isSeller?: boolean;
  nftId: string;
  createdByAdmin: boolean;
  status?: string;
  hasListing?: boolean;
  totalOwnedQuantity?: number;
}

export interface Category {
  _id: string;
  name: string;
  dateCreated: string;
  dateUpdated: string;
}

export interface NFTModel {
  data: {
    data: NFTItem[];
    totalItem: number;
    page: number;
    pageSize: number;
    totalPage: number;
  };
}

export interface TopNFTRequestBody {
  name?: string;
  categoryId?: string;
  currency?: string;
  priceStart?: number;
  priceEnd?: number;
  nftType?: string;
  sort?: string;
  pageSize?: number;
  page?: number;
  select?: string;
  populations?: string;
  where?: string;
  pattern?: string;
}

export interface TopNFTResponse {
  data: {
    data: NFTItem[];
    totalItem: number;
    page: number;
    pageSize: number;
    totalPage: number;
  };
}

export interface NFTStore {
  nfts?: NFTList;
  loading: boolean;
  error: string;
}

export type NFTList = DataList<NFTModel>;
