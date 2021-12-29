import ReactPaginate from "react-paginate";
const Pagination = (props) => {
  const pageCount = props.totalPage;
  const pageOffset = props.pageOffset;
  const onPageChange = (event) => {
    props.handlePageChange(event);
  };

  return (
    <ReactPaginate
      previousLabel="Previous"
      nextLabel="Next"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={onPageChange}
      containerClassName="pagination"
      activeClassName="active"
      forcePage={pageOffset}
    />
  );
};

export default Pagination;
