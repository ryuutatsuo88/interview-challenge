/** Shape of data returned by getCollection() */
export interface CollectionData {
    collection: string;
    name: string;
    description: string;
    image_url: string;
    banner_image_url: string;
    owner: string;
    safelist_status: string;
    category: string;
    is_disabled: boolean;
    is_nsfw: boolean;
    trait_offers_enabled: boolean;
    collection_offers_enabled: boolean;
    opensea_url: string;
    project_url: string;
    wiki_url: string;
    discord_url: string;
    telegram_url: string;
    twitter_username: string;
    instagram_username: string;
    total_supply: number;
    created_date: string;
  }
  
  /** Shape of each NFT inside the 'nfts' array from getNFTs() */
  export interface NFTItem {
    identifier: string;
    collection: string;
    contract: string;
    token_standard: string;
    name: string;
    description: string;
    image_url: string;
    display_image_url: string;
    display_animation_url: string | null;
    metadata_url: string;
    opensea_url: string;
    updated_at: string;
    is_disabled: boolean;
    is_nsfw: boolean;
  }
  
  /** Shape of data returned by getNFTs() */
  export interface NFTsResponse {
    nfts: NFTItem[];
    next: string;
  }

  export interface NFTAttribute {
    trait_type: string;
    value: string;
    // Optionally add fields like "display_type", etc. if needed
  }
  
  export interface NFTMetadata {
    name: string;
    description: string;
    image: string;
    attributes?: NFTAttribute[];
    // Add other fields you expect from your metadata
  }
  


export const getCollection = async (): Promise<CollectionData | undefined> => {
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-api-key': '1def6064b6a84a13a2f6468b9c5f208d'}
    };
      
    try {
        const data = await fetch('https://api.opensea.io/api/v2/collections/pudgypenguins', options);
        return await data.json();
    } catch (error) { console.log('error getCollection', error); }

        // {
        //     "collection": "pudgypenguins",
        //     "name": "Pudgy Penguins",
        //     "description": "Pudgy Penguins is a collection of 8,888 NFT’s, accelerating Web3 innovation through IP utilization and community empowerment. Embodying love, empathy, & compassion, the Pudgy Penguins are a beacon of good vibes & positivity for everyone. Each holder receives exclusive access to experiences, events, IP licensing opportunities and more. Let’s break through the boundaries of Web3 together.\r\n\r\nPudgy Collections:\r\n[Lil Pudgys](https://opensea.io/collection/lilpudgys) | [Pudgy Rods](https://opensea.io/collection/pudgyrods)",
        //     "image_url": "https://i.seadn.io/s/raw/files/cdf489fb69fd11886b468c0f7ff1376c.png?w=500&auto=format",
        //     "banner_image_url": "https://i.seadn.io/s/primary-drops/0xbd3531da5cf5857e7cfaa92426877b022e612cf8/809912:about:media:a21a43b4-972a-4d72-a651-3bea2c285683.jpeg?w=500&auto=format",
        //     "owner": "0xf54c9a0e44a5f5afd27c7ac8a176a843b9114f1d",
        //     "safelist_status": "verified",
        //     "category": "pfps",
        //     "is_disabled": false,
        //     "is_nsfw": false,
        //     "trait_offers_enabled": true,
        //     "collection_offers_enabled": true,
        //     "opensea_url": "https://opensea.io/collection/pudgypenguins",
        //     "project_url": "https://www.pudgypenguins.com/",
        //     "wiki_url": "",
        //     "discord_url": "https://discord.gg/pudgypenguins",
        //     "telegram_url": "",
        //     "twitter_username": "pudgy_penguins",
        //     "instagram_username": "pudgypenguins",
        //     "total_supply": 8888,
        //     "created_date": "2021-07-22"
        //   }
};


export const getNFTs = async (limit = 20, next = ""): Promise<NFTsResponse> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": "1def6064b6a84a13a2f6468b9c5f208d",
    },
  };

  try {
    const response = await fetch(
      `https://api.opensea.io/api/v2/collection/pudgypenguins/nfts?limit=${limit}&next=${next}`,
      options
    );
    // (Optional) Check if response was OK
    if (!response.ok) {
      throw new Error(`Failed fetch: ${response.status} ${response.statusText}`);
    }
    // Convert to NFTsResponse
    const data: NFTsResponse = await response.json();
    return data;
  } catch (error) {
    console.log("error getNFTs", error);
    // Return a fallback object that matches NFTsResponse shape
    return {
      nfts: [],
      next: "",
    };
  }

  // {
        //     "nfts": [
        //       {
        //         "identifier": "8788",
        //         "collection": "pudgypenguins",
        //         "contract": "0xbd3531da5cf5857e7cfaa92426877b022e612cf8",
        //         "token_standard": "erc721",
        //         "name": "Pudgy Penguin #8788",
        //         "description": "A collection 8888 Cute Chubby Pudgy Penquins sliding around on the freezing ETH blockchain.",
        //         "image_url": "https://ipfs.io/ipfs/QmNf1UsmdGaMbpatQ6toXSkzDpizaGmC9zfunCyoz1enD5/penguin/8788.png",
        //         "display_image_url": "https://i.seadn.io/s/raw/files/becc8069619baede036a1f2f11336b57.png?w=500&auto=format",
        //         "display_animation_url": null,
        //         "metadata_url": "https://ipfs.io/ipfs/bafybeibc5sgo2plmjkq2tzmhrn54bk3crhnc23zd2msg4ea7a4pxrkgfna/8788",
        //         "opensea_url": "https://opensea.io/assets/ethereum/0xbd3531da5cf5857e7cfaa92426877b022e612cf8/8788",
        //         "updated_at": "2024-12-17T15:22:51.381226",
        //         "is_disabled": false,
        //         "is_nsfw": false
        //       }
        //     ],
        //     "next": "LXBrPTMyNDU5MTI3"
        //   }
};

export const getNFTMetadata = async (
    metadataUrl: string
  ): Promise<NFTMetadata | undefined> => {
    try {
      // IPFS or standard HTTP fetch
      const response = await fetch(metadataUrl);
      if (!response.ok) {
        // If response is not 200..299
        throw new Error(`Metadata fetch failed: ${response.status} ${response.statusText}`);
      }
      const json: NFTMetadata = await response.json();
      return json;
    } catch (error) {
      console.error("Error fetching NFT metadata:", error);
      // Return undefined or a fallback if you want
      return undefined;
    }
  };