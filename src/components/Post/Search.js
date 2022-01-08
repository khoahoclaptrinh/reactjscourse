import React, { useState } from "react";

const Search = (props) => {

  const [search, setSearch] = useState(props.keyword);

  /**
   * Thay đổi text khi nhập dữ liệu
   * @param {string} event
   */
  const changeSearch = (event) => {
    setSearch(event.target.value);
  };

  /**
   * Xử lý xự kiện khi click button Tìm kiếm
   */
  const searchHandle = () => {
    props.changeHandleSearch(search);
  };

  /**
   *  Bắt sự kiện Enter trong text input
   * @param {string} event
   */

  const searchKeyDown = (event) => {
    if (event.key === "Enter") {
      props.changeHandleSearch(search);
    }
  };

  return (
    <div className="input-group mb-3" >
      <input
        type="text"
        className="form-control"
        placeholder="Vui lòng nhập tên"
        aria-label="Recipient's username"
        onChange={changeSearch}
        onKeyDown={searchKeyDown}
        value={search}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={searchHandle}
      >
        Tìm kiếm
      </button>
    </div>
  );
};

export default Search;
