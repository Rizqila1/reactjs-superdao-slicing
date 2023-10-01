import Card from "../Card";

import AllianceLogo from "../../assets/images/ALLIANCE.png";
import DigitalLogo from "../../assets/images/DIGITAL.png";
import OneblockLogo from "../../assets/images/ONE-BLOCK.png";
import PearLogo from "../../assets/images/PEAR.png";
import ShimaLogo from "../../assets/images/SHIMA.png";
import GreatoaksLogo from "../../assets/images/GREATOAKS.png";
import NorwestLogo from "../../assets/images/NORWEST.png";
import FiftyYearsLogo from "../../assets/images/50YEARS.png";
import CircleLogo from "../../assets/images/CIRCLE.png";
import ProtocollabLogo from "../../assets/images/PROTOCOLLABS.png";
import VenturesLogo from "../../assets/images/VENTURE.png";

import BlueYellowParticlesSVG from "../../utils/svg/BlueYellowParticles";

export default function BackedBySection() {
  return (
    <>
      <section className="relative flex justify-center items-center mb-14">
        <div className="relative px-28">
          <h1 className="lg:text-5xl text-4xl font-bold">Backed By</h1>
          <div className="absolute right-0 -top-10">
            <BlueYellowParticlesSVG />
          </div>
        </div>
      </section>

      <section className="flex flex-wrap justify-center items-center gap-4 mb-10">
        <Card className="flex justify-center items-center w-fit py-11 px-12">
          <img
            src={AllianceLogo}
            alt="logo-brand"
            className="w-[236px] h-[44px] object-contain"
          />
        </Card>

        <Card className="relative flex justify-center items-center w-fit py-11 px-12">
          <img
            src={DigitalLogo}
            alt="logo-brand"
            className="w-[236px] h-[44px] object-contain"
          />
        </Card>

        <Card className="relative flex justify-center items-center w-fit py-11 px-12">
          <img
            src={OneblockLogo}
            alt="logo-brand"
            className="w-[236px] h-[44px] object-contain"
          />
        </Card>

        <Card className="relative flex justify-center items-center w-fit py-11 px-12">
          <img
            src={PearLogo}
            alt="logo-brand"
            className="w-[236px] h-[44px] object-contain"
          />
        </Card>

        <Card className="relative flex justify-center items-center w-fit py-11 px-12">
          <img
            src={ShimaLogo}
            alt="logo-brand"
            className="w-[236px] h-[44px] object-contain"
          />
        </Card>
      </section>

      <section className="flex flex-wrap justify-center items-center gap-4">
        <Card className="flex justify-center items-center w-fit py-11 px-12">
          <img
            src={GreatoaksLogo}
            alt="logo-brand"
            className="w-[236px] h-[44px] object-contain"
          />
        </Card>

        <Card className="flex justify-center items-center w-fit py-11 px-12">
          <img
            src={NorwestLogo}
            alt="logo-brand"
            className="w-[236px] h-[44px] object-contain"
          />
        </Card>

        <Card className="flex justify-center items-center w-fit py-11 px-12">
          <img
            src={FiftyYearsLogo}
            alt="logo-brand"
            className="w-[236px] h-[44px] object-contain"
          />
        </Card>

        <Card className="justify-center items-center inline-block py-11 px-12">
          <img
            src={CircleLogo}
            alt="logo-brand"
            className="w-[236px] h-[44px] object-contain"
          />
        </Card>

        <Card className="flex justify-center items-center w-fit py-11 px-12">
          <img
            src={ProtocollabLogo}
            alt="logo-brand"
            className="w-[236px] h-[44px] object-contain"
          />
        </Card>

        <Card className="flex justify-center items-center w-fit py-11 px-12">
          <img
            src={VenturesLogo}
            alt="logo-brand"
            className="w-[236px] h-[44px] object-contain"
          />
        </Card>
      </section>
    </>
  );
}
