import Card from "../Card";

import Podcast1 from "../../assets/images/Podcast1.png";
import Podcast2 from "../../assets/images/Podcast2.png";
import Podcast3 from "../../assets/images/Podcast3.png";

import BlueYellowParticlesSVG from "../../utils/svg/BlueYellowParticles";
import ParticlesSVG from "../../utils/svg/Particles";

export default function PodcastSection() {
  return (
    <>
      <section className="flex justify-between items-center mb-9 px-32">
        <div className="relative">
          <h1 className="text-5xl font-bold">Podcast</h1>
          <div className="absolute -left-20 -top-10">
            <BlueYellowParticlesSVG />
          </div>
        </div>

        <h3 className="font-bold text-xl text-customgrey">See all &#8594;</h3>
      </section>

      <section className="px-32 mb-32">
        <div className="flex flex-wrap lg:justify-between justify-center items-center gap-5">
          <Card className="w-[361px] py-5">
            <Card.Body className="text-white p-3">
              <img
                src={Podcast1}
                alt="podcast1"
                className="w-12 h-12 object-contain rounded-xl border-2 border-cardborder"
              />
              <h3 className="font-bold text-xl mt-5">
                Understanding DAOs with Yury Lifshits
              </h3>

              <h6 className="text-base text-[#E2E2E2] font-medium mt-4">
                The Pomp Podcast
              </h6>

              <h6 className="text-base text-[#E2E2E2] font-medium mb-12">
                by Anthony Pompliano
              </h6>
              <p className="font-bold">Watch &#8594;</p>
            </Card.Body>
          </Card>

          <Card className="w-[361px] py-5">
            <Card.Body className="text-white p-3 ">
              <img
                src={Podcast2}
                alt="podcast2"
                className="w-12 h-12 object-contain rounded-xl border-2 border-cardborder"
              />
              <h3 className="font-bold text-xl mt-5">
                Everything You Need to Know About DAOs
              </h3>

              <h6 className="text-base text-[#E2E2E2] font-medium mt-4">
                The Unstoppable Podcast
              </h6>

              <h6 className="text-base text-[#E2E2E2] font-medium mb-12">
                by Josh Gordon
              </h6>
              <p className="font-bold">Watch &#8594;</p>
            </Card.Body>
          </Card>

          <Card className="w-[361px] py-5">
            <Card.Body className="text-white p-3">
              <img
                src={Podcast3}
                alt="podcast3"
                className="w-12 h-12 object-contain rounded-xl border-2 border-cardborder"
              />
              <h3 className="font-bold text-xl mt-5">
                Yury Lifshits - Superdao: The “Shopify” for DAOs
              </h3>

              <h6 className="text-base text-[#E2E2E2] font-medium mt-4">
                Zima Red
              </h6>

              <h6 className="text-base text-[#E2E2E2] font-medium mb-12">
                by Andrew Stainwold
              </h6>
              <p className="font-bold">Watch &#8594;</p>
            </Card.Body>
          </Card>
        </div>
      </section>

      <section className="flex justify-center">
        <ParticlesSVG />
      </section>
    </>
  );
}
