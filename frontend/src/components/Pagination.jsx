function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm disabled:opacity-50"
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          className={`rounded-lg px-4 py-2 text-sm ${currentPage === page ? "bg-gray-900 text-white" : "border border-gray-300"}`}
          key={page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
