import { Nft } from '../../app/shared/models/nft.model';

export const DUMMY_NFT: Nft = {
  attributes: [
    {
      trait_type: 'Country',
      value: 'Peru',
    },
    {
      trait_type: 'Forest',
      value: 'Amazon rainforest',
    },
    {
      trait_type: 'Region',
      value: 'Pasco',
    },
    {
      trait_type: 'Coordinates',
      value: '-10.229601, -74.834303',
    },
    {
      trait_type: 'Area',
      value: '1 ha',
    },
  ],
  description: 'Description',
  image: 'assets/img/marketplaceimg2.png',
  name: 'Name',
};
