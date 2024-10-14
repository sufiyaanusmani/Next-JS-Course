const Docs = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug?.length === 2) {
    return (
      <div>
        <h1>Docs for {params.slug[0]}</h1>
        <h2>{params.slug[1]}</h2>
      </div>
    );
  } else if (params.slug?.length === 1) {
    return (
      <div>
        <h1>Docs for {params.slug[0]}</h1>
      </div>
    );
  }else{
    return <h1>Docs</h1>;
  }
};

export default Docs;
