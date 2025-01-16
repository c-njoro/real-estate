const Temp = () => {
  return (
    <div className="p-6 bg-background text-foreground grid grid-cols-2 gap-12">
      <div>
        <Slider images={currentData.imagePaths} />
      </div>
      <div className="info w-full h-max flex flex-col justify-start items-start p-3 gap-8">
        <div className="name w-full h-max flex flex-row justify-start items-center mb-5">
          <p className="font-semibold font-body text-5xl tracking-wider">
            {currentData.name}
          </p>
        </div>
        <div className="desc w-full h-max flex flex-col justify-start items-start">
          <p className="font-extralight font-body text-sm">
            {currentData.description}
          </p>
        </div>
        <div className="specs w-full h-max">
          <h1 className="font-semibold font-heading text-xl tracking-widest">
            Specifications:{" "}
          </h1>
        </div>
        <div className="location w-full grid grid-cols-1 gap-2 border-b border-t border-background py-1">
          <p className="font-bold font-heading">Location: {currentData.city}</p>
          <p className="font-bold font-heading">
            Address: {currentData.exactAddress}
          </p>
        </div>
        <div className="size w-full grid grid-cols-1 gap-2 border-b  border-background pb-1 text-sm">
          <p className="font-bold font-heading">
            Bedrooms: {currentData.bedrooms}
          </p>
          <p className="font-bold font-heading">
            Bathrooms: {currentData.bathrooms}
          </p>
          <p className="font-bold font-heading">{currentData.size}</p>
        </div>
        <div className="more w-full h-max grid grid-cols-2 gap-2 place-items-center mt-4">
          <Link
            href={`/properties`}
            className="w-full h-max py-2 bg-green-500 text-background font-bold gap-3  text-sm uppercase tracking-wide flex flex-row justify-center items-center rounded-md"
          >
            <BsWhatsapp />
            <p>Enquire Via Whatsapp</p>
          </Link>
          <Link
            href={`/properties`}
            className="w-full h-max py-2 border-2 border-blue-500 gap-5 text-foreground font-bold  text-sm uppercase tracking-wide flex flex-row justify-center items-center rounded-md"
          >
            <FaPhone />
            <p>Call now</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Temp;
