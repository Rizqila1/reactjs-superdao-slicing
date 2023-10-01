import Button from "../Button";

import Artworks from "../../assets/images/Artworks.png";

import DownArrowSVG from "../../utils/svg/DownArrowSVG";
import ParticlesSVG from "../../utils/svg/Particles";

export default function DaoMenuSection() {
  return (
    <>
      {/* TITLE */}
      <div className="flex justify-center mb-28">
        <DownArrowSVG />
      </div>

      <section className="relative flex justify-center items-center mb-14">
        <div className="relative lg:px-36 px-32">
          <div className="absolute lg:left-0 left-12 -top-8">
            <ParticlesSVG />
          </div>
          <h1 className="lg:text-5xl text-4xl font-bold text-center">
            Ready for every project
          </h1>
        </div>
      </section>

      {/* BUTTONS MENU */}
      <section className="mb-8 lg:px-[120px] px-10">
        <div className="flex flex-wrap justify-center gap-5">
          <Button
            variant="dark"
            className="text-palmpink text-xl font-semibold rounded-full py-2 px-6 mb-1"
          >
            Investment DAO
          </Button>

          <Button
            variant="dark"
            className="text-darkyellow text-xl font-semibold rounded-full py-2 px-6 mb-1"
          >
            Startup DAO
          </Button>

          <Button
            variant="dark"
            className="text-custompurple text-xl font-semibold rounded-full py-2 px-6 mb-1"
          >
            Service DAO
          </Button>

          <Button
            variant="dark"
            className="text-lightblue text-xl font-semibold rounded-full py-2 px-6 mb-1"
          >
            Community DAO
          </Button>

          <Button
            variant="dark"
            className="text-customblue text-xl font-semibold rounded-full py-2 px-6 mb-1"
          >
            Impact DAO
          </Button>

          <Button
            variant="dark"
            className="text-palmpink text-xl font-semibold rounded-full py-2 px-6 mb-1"
          >
            DeFi DAO
          </Button>

          <Button
            variant="dark"
            className="text-customgrey text-xl font-semibold rounded-full py-2 px-6 mb-1"
          >
            + More
          </Button>
        </div>
      </section>

      <div className="flex justify-center ">
        <div
          align="center"
          className="relative bg-black rounded-[40px] w-full lg:w-[80%]"
        >
          <img
            src={Artworks}
            alt="Artworks"
            className="w-full rounded-[40px] object-cover"
          />
          <div className="absolute -bottom-6 h-12 w-full">
            <div className="bg-customorange w-fit text-black font-bold text-lg py-2 px-6 rounded-full border-4 border-black">
              1000+ projects launched on Superdao
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
