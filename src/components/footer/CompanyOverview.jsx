import Logo from "../Logo";

const CompanyOverview = () => {
  return (
    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-2">
      <div className="mb-2">
        <a href="#" alt="Home">
          <Logo fontSize={30} width={150} />
        </a>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate corrupti ratione quo doloribus voluptatem at quibusdam, totam deserunt, ad amet possimus labore neque minus suscipit ex perferendis? Iusto, quasi.
      </p>
    </div>

  );
};

export default CompanyOverview;
