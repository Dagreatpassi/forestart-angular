import { TraitType } from './trait-type.enum';

export interface Nft {
  id?: number;
  attributes: { trait_type: TraitType | string; value: string }[];
  description: string;
  image: string;
  blobImage?: Blob;
  name: string;
}
