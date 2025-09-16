import { fetchAdsServer } from "@/lib/utils/fetcher";
import AdCard from "@/components/AdCard";
import Pagination from "@/components/Pagination";
import NoAds from "@/components/NoAds";

const AdsPage = async ({ params }: { params: Promise<{ page: string }> }) => {
  const { page } = await params;   
  const pageNum = Number(page) || 1;
  const limit = 21;
  const { items, totalPages, currentPage } = await fetchAdsServer(pageNum, limit);

  if (!items.length) {
    return <NoAds />;
  }
  
  return (
    <div className="p-6 d-flex justify-center align-middle ">
     <div className="w-full max-w-7xl mx-auto">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((ad) => (
          <AdCard key={ad.id} ad={ad} />
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} />      
     </div>
    </div>
  );
};
export default AdsPage;