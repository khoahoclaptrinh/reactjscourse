import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <Skeleton height={5} count={5} width={600} />
        </div>
      </div>
    </section>
  );
};
export default Loading;
