import React, { useEffect, useState } from "react";
import { getNFTMetadata, NFTItem } from "src/common/OpenSeaApi";

interface Props {
  nft: NFTItem;
}

const NFTCard: React.FC<Props> = ({ nft }) => {
  const [metadata, setMetadata] = useState<any>(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      if (!nft.metadata_url) {
        return;
      }
      const meta = await getNFTMetadata(nft.metadata_url);
      setMetadata(meta);
    };
    fetchMetadata();
  }, [nft.metadata_url]);

  return (
    <div className="card h-100">
      <img
        src={nft.display_image_url || nft.image_url}
        className="card-img-top"
        alt={nft.name}
        style={{ objectFit: "cover", height: 250 }}
      />
      <div className="card-body">
        <h5 className="card-title">{nft.name || `#${nft.identifier}`}</h5>
        <p>{nft.description}</p>

        {/* If metadata is loaded, show attributes */}
        {metadata?.attributes && (
          <ul>
            {metadata.attributes.map((attr: any, idx: number) => (
              <li key={idx}>
                <strong>{attr.trait_type}:</strong> {attr.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NFTCard;
