import React from "react";
import { ErrorBoundary } from "src/common/ErrorBoundary";
import {
  CollectionData,
  getCollection,
  getNFTs,
  NFTItem,
  NFTsResponse,
} from "src/common/OpenSeaApi";
import NFTCard from "./nftcard/NftCard";

interface PageData {
  nfts: NFTItem[];
  nextCursor: string;
}

const AppPage: React.FC = () => {
  const [collection, setCollection] = React.useState<CollectionData | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [pages, setPages] = React.useState<PageData[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = React.useState(0);

  React.useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const [collectionInfo, firstPage] = await Promise.all([
          getCollection(),
          getNFTs(20, ""),
        ]);

        if (collectionInfo) {
          setCollection(collectionInfo);
        }

        setPages([
          {
            nfts: firstPage.nfts,
            nextCursor: firstPage.next,
          },
        ]);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  const fetchNextPage = async (nextCursor: string): Promise<PageData> => {
    setLoading(true);
    try {
      const nextPageData: NFTsResponse = await getNFTs(20, nextCursor);
      return {
        nfts: nextPageData.nfts,
        nextCursor: nextPageData.next,
      };
    } catch (error) {
      console.error("Error fetching next page:", error);
      return { nfts: [], nextCursor: "" };
    } finally {
      setLoading(false);
    }
  };

  const handleNext = async () => {
    if (currentPageIndex === pages.length - 1) {
      const { nextCursor } = pages[pages.length - 1];
      if (!nextCursor) {
        return;
      }

      const newPage = await fetchNextPage(nextCursor);
      setPages((prevPages) => [...prevPages, newPage]);
      setCurrentPageIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentPageIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex((prevIndex) => prevIndex - 1);
    }
  };

  const currentPage = pages[currentPageIndex] ?? { nfts: [], nextCursor: "" };
  const nftsToDisplay = currentPage.nfts ?? [];

  return (
    <ErrorBoundary type={"Main-Landing"}>
      <div className="container py-4">
        {/* COLLECTION HEADER */}
        {collection && (
          <div className="mb-4 text-center">
            <h1>{collection.name}</h1>
            {collection.banner_image_url && (
              <img
                src={collection.banner_image_url}
                alt="collection-banner"
                className="img-fluid mb-3"
                style={{ maxHeight: 300, objectFit: "cover" }}
              />
            )}
            <p className="text-muted">{collection.description}</p>
          </div>
        )}

        {/* LOADING INDICATOR */}
        {loading && <div className="text-center mb-3">Loading...</div>}

        {/* NFT GALLERY */}
        <div className="row">
          {nftsToDisplay.map((nft: NFTItem) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={nft.identifier}>
              {/* Render our reusable NFTCard for each NFT */}
              <NFTCard nft={nft} />
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-secondary"
            onClick={handlePrevious}
            disabled={currentPageIndex === 0 || loading}
          >
            Previous
          </button>
          <button
            className="btn btn-primary"
            onClick={handleNext}
            disabled={!currentPage.nextCursor || loading}
          >
            Next
          </button>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default AppPage;
