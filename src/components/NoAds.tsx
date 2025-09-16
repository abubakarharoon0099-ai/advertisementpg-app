import Link from "next/link";
const NoAds = () => (
  <div className="flex flex-col items-center justify-center h-[100vh] text-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16 text-gray-400 mb-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <p className="text-xl font-semibold text-gray-700">No ads available</p>
    <p className="text-sm text-gray-500 mt-2">
      Please check back later or try a different category.
    </p>
    <Link
      href="/ads/page/1"
      className="mt-6 px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
    >
      Go Back 
    </Link>
  </div>
);
export default NoAds;