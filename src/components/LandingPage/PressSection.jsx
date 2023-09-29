import Card from "../Card";

import BluePurpleParticlesSVG from "../../utils/svg/BluePurpleParticles";
import DecryptSVG from "../../utils/svg/Decrypt";
import BlockworksSVG from "../../utils/svg/Blockworks";
import TextCrunchSVG from "../../utils/svg/Techcrunch";

export default function PressSection() {
  return (
    <>
      <section className="flex justify-between items-center mb-9 px-32">
        <div className="relative">
          <h1 className="text-5xl font-bold">Press</h1>
          <div className="absolute left-40 -top-10">
            <BluePurpleParticlesSVG />
          </div>
        </div>

        <h3 className="font-bold text-xl text-customgrey">See all &#8594;</h3>
      </section>

      <section className="px-32">
        <div className="flex flex-wrap lg:justify-between justify-center items-center gap-5">
          <Card className="bg-lightblue w-[361px] py-5">
            <Card.Title>
              <DecryptSVG />
              <Card.Body>
                <h3 className="font-bold text-xl text-black mt-5">
                  Superdao Raises $10.5 Million to Build an 'All-in-One' DAO
                  Platform
                </h3>
                <h6 className="text-base font-medium text-black mt-2 mb-12">
                  Superdao aims to make it easier for online communities to
                  build and launch DAOs
                </h6>
                <p className="text-black font-bold">Read &#8594;</p>
              </Card.Body>
            </Card.Title>
          </Card>

          <Card className="bg-softpurple w-[361px]">
            <Card.Title className="mt-5">
              <BlockworksSVG />
              <Card.Body>
                <h3 className="font-bold text-xl text-black mt-7">
                  The Y Combinator of Web3 Attracts Record Number of DAO
                  Startups
                </h3>
                <h6 className="text-base font-medium text-black mt-2 mb-12">
                  DAOs and related startups made up an “overwhelming number of
                  applicants” for a Web3 accelerator's cohort this year
                </h6>
                <p className="text-black font-bold">Read &#8594;</p>
              </Card.Body>
            </Card.Title>
          </Card>

          <Card className="bg-softyellow w-[361px] py-7">
            <Card.Title>
              <TextCrunchSVG />
              <Card.Body>
                <h3 className="font-bold text-xl text-black mt-5">
                  VC-backed DAO startups are racing to define what DAOs actually
                  are
                </h3>
                <h6 className="text-base font-medium text-black mt-2 mb-12">
                  Not all 'decentralized autonomous organizations' are
                  autonomous... or decentralized
                </h6>
                <p className="text-black font-bold">Read &#8594;</p>
              </Card.Body>
            </Card.Title>
          </Card>
        </div>
      </section>
    </>
  );
}
