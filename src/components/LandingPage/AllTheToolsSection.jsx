import Image1 from "../../assets/images/All-the-tools-image.png";

import BlueYellowParticlesSVG from "../../utils/svg/BlueYellowParticles";
import YoutubeLogoSVG from "../../utils/svg/YoutubeLogo";
import Button from "../Button";

export default function AllTheToolsSection() {
  return (
    <>
      <section className="relative flex justify-center items-center mb-10">
        <div className="absolute left-80 bottom-8">
          <BlueYellowParticlesSVG />
        </div>
        <h1 className=" text-5xl font-bold">All the tools in one app</h1>
      </section>

      <section className="mb-11 px-40">
        <div className="flex flex-wrap justify-center gap-10">
          <h4 className="text-lg font-semibold text-[#FFC803]">
            NFT membership
          </h4>
          <h4 className="text-lg font-semibold text-customgrey">
            Member directory
          </h4>
          <h4 className="text-lg font-semibold text-customgrey">Treasury</h4>
          <h4 className="text-lg font-semibold text-customgrey">Feed</h4>
          <h4 className="text-lg font-semibold text-customgrey">Governance</h4>
          <h4 className="text-lg font-semibold text-customgrey">App Store</h4>
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
