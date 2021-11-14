import { TraitType } from './trait-type.enum';

export interface Nft {
  attributes: { trait_type: TraitType | string; value: string }[];
  description: string;
  image: string;
  name: string;
}
