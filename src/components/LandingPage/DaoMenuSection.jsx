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
      <section className="relative flex justify-center items-center text-center leading-[82px] mb-11">
        <div className="absolute left-60 bottom-3">
          <ParticlesSVG />
        </div>
        <h3 className="text-5xl font-extrabold">Ready for every project</h3>
      </section>

      {/* BUTTONS MENU */}
      <section className="mb-8 px-52">
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
