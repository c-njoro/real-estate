import Image from "next/image";
import { useRouter } from "next/router";

const Landing = () => {
  const router = useRouter();
  return (
    <div className="landing min-h-[calc(100vh)] w-screen flex flex-col justify-start gap-10 ">
      <div className="message w-screen h-[calc(30vh)] flex flex-col justify-end items-center ">
        <p className="sm:text-4xl text-3xl font-extralight font-body text-center capitalize tracking-wide leading-normal">
          The <span className="font-bold">safest way </span>to rent or <br />{" "}
          own a property in
          <span className="font-bold"> Kenya</span>
        </p>
      </div>
      <div className="actions w-screen sm:h-[calc(10vh)] h-max flex sm:flex-row flex-col justify-center items-center gap-10 px-6 sm:px-0">
        <button
          onClick={() => router.push("/properties")}
          className="w-full sm:w-fit capitalize font-body text-sm font-bold bg-header rounded-lg shadow-md py-5 px-8 hover:bg-foreground hover:text-background"
        >
          Explore Properties
        </button>
        <button
          onClick={() => router.push("/properties")}
          className="w-full sm:w-fit capitalize font-body text-sm font-bold bg-header rounded-lg shadow-md py-5 px-8 hover:bg-foreground hover:text-background"
        >
          Buy Properties
        </button>
        <button
          onClick={() => router.push("/properties")}
          className="w-full sm:w-fit capitalize font-body text-sm font-bold bg-header rounded-lg shadow-md py-5 px-8 hover:bg-foreground hover:text-background"
        >
          Rent Properties
        </button>
      </div>

      <div className="image w-screen h-[calc(60vh)] flex flex-row justify-center items-center">
        <Image
          src={`https://images.pexels.com/photos/8470841/pexels-photo-8470841.jpeg`}
          alt="image background of a property"
          width={1000}
          height={800}
          className="w-full h-full object-cover"
          loading="lazy"
        ></Image>
      </div>
    </div>
  );
};

export default Landing;
