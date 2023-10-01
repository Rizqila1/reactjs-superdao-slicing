import Image1 from "../../assets/images/All-the-tools-image.png";

import BlueYellowParticlesSVG from "../../utils/svg/BlueYellowParticles";
import YoutubeLogoSVG from "../../utils/svg/YoutubeLogo";
import Button from "../Button";

export default function AllTheToolsSection() {
  return (
    <>
      <section className="relative flex justify-center items-center mb-11">
        <div className="relative lg:px-36 px-20">
          <h1 className="lg:text-5xl text-4xl font-bold text-center">
            All the tools in one app
          </h1>
          <div className="absolute left-0 -top-7">
            <BlueYellowParticlesSVG />
          </div>
        </div>
      </section>

      <section className="mb-11 px-40">
        <div className="flex flex-wrap justify-center gap-10">
          <h4 className="text-lg font-semibold text-[#FFC803] text-center">
            NFT membership
          </h4>
          <h4 className="text-lg font-semibold text-customgrey text-center">
            Member directory
          </h4>
          <h4 className="text-lg font-semibold text-customgrey text-center">
            Treasury
          </h4>
          <h4 className="text-lg font-semibold text-customgrey text-center">
            Feed
          </h4>
          <h4 className="text-lg font-semibold text-customgrey text-center">
            Governance
          </h4>
          <h4 className="text-lg font-semibold text-customgrey text-center">
            App Store
          </h4>
        </div>
      </section>

      <section className="mb-11">
        <div className="flex justify-center">
          <img src={Image1} alt="all-the-tools" className="mb-11" />
        </div>
        <div className="flex justify-center">
          <Button className="inline-flex items-center bg-customyellow/[.15] hover:bg-customyellow/[.1] rounded-[16px] py-4 px-12 text-customyellow font-bold">
            <YoutubeLogoSVG /> &nbsp; Watch Video
          </Button>
        </div>
      </section>
    </>
  );
}
