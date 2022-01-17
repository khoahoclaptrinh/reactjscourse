const AddPost = () => {


  const submitForm = (e) => {
    e.preventDefault();
    console.log('ss')
  }

  return (
    <form className="mb-3">
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Tên bài viết</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" name="name" id="name" />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Nội dung</label>
        <div className="col-sm-10">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>
      <button onClick={(e) => submitForm(e)} className="btn btn-primary">Thêm mới</button>
    </form>
  );
}

export default AddPost;