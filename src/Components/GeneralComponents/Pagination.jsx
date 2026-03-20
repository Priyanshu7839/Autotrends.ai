import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center pl-[21px]  space-x-4">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-10 h-10 flex items-center justify-center rounded-md ${
          currentPage === 1
            ? "border border-[rgba(36,39,44,0.7)] text-[rgba(36,39,44)] cursor-not-allowed"
            : " bg-[white] text-[rgba(36,39,44,0.3)] border border-[rgba(36,39,44,0.2)] hover:bg-[rgba(36,39,44,0.3)]"
        }`}
      >
        &lt;
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-2">
        {[...Array(totalPages).keys()].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-10 h-10 flex items-center justify-center rounded-md ${
                currentPage === page
                  ? "bg-[rgba(36,39,44,0.1)] text-[rgba(36,39,44)] border border-[rgba(36,39,44,0.7)]"
                  : "bg-[white] text-[rgba(36,39,44,0.3)] border border-[rgba(36,39,44,0.1)] hover:bg-[rgba(36,39,44,0.3)]"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 flex items-center justify-center rounded-md ${
            currentPage === totalPages
            ? "border border-[rgba(36,39,44,0.7)] text-[rgba(36,39,44)] cursor-not-allowed"
            : " bg-[white] text-[rgba(36,39,44,0.3)] border border-[rgba(36,39,44,0.2)] hover:bg-[rgba(36,39,44,0.3)]"
        }`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
