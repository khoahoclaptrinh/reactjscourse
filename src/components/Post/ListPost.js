export default function ListPost({ dataPost }) {
  return (
    <div>
      {dataPost &&
        dataPost.map((item) => (
          <div key={item.id}>
            <div className="alert alert-primary" role="alert">
              {item.name}
            </div>
          </div>
        ))}
    </div>
  );
}
