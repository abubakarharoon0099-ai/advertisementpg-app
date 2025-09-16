import Link from "next/link";
import type { PaginationProps } from "@/lib/types/pagination";
import { getVisiblePages } from "@/funtions/getVisiblePages";
const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  if (totalPages <= 1) return null;
  const visiblePages = getVisiblePages(totalPages, currentPage);
  return (
    <nav className="flex justify-center mt-8">
      <ul className="inline-flex items-center space-x-1 text-sm font-medium">
        {currentPage > 1 && (
          <li>
            <Link
              href={`/ads/page/1`}
              className="px-3 py-2 border rounded-lg bg-white text-indigo-600 border-gray-300 hover:bg-indigo-50"
              title="First page"
            >
              «
            </Link>
          </li>
        )}
        {currentPage > 1 && (
          <li>
            <Link
              href={`/ads/page/${currentPage - 1}`}
              className="px-3 py-2 border rounded-lg bg-white text-indigo-600 border-gray-300 hover:bg-indigo-50"
              title="Previous page"
            >
              ‹
            </Link>
          </li>
        )}
        {visiblePages.map((page) => (
          <li key={page}>
            <Link
              href={`/ads/page/${page}`}
              className={`px-3 py-2 rounded-lg border transition-colors duration-200 ${
                currentPage === page
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-indigo-600 border-gray-300 hover:bg-indigo-50"
              }`}
            >
              {page}
            </Link>
          </li>
        ))}
        {currentPage < totalPages && (
          <li>
            <Link
              href={`/ads/page/${currentPage + 1}`}
              className="px-3 py-2 border rounded-lg bg-white text-indigo-600 border-gray-300 hover:bg-indigo-50"
              title="Next page"
            >
              ›
            </Link>
          </li>
        )}
        {currentPage < totalPages && (
          <li>
            <Link
              href={`/ads/page/${totalPages}`}
              className="px-3 py-2 border rounded-lg bg-white text-indigo-600 border-gray-300 hover:bg-indigo-50"
              title="Last page"
            >
              »
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Pagination;