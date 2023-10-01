import Card from "../Card";

import BluePurpleParticlesSVG from "../../utils/svg/BluePurpleParticles";
import EthereumLogoSVG from "../../utils/svg/EthereumLogo";
import PolygonLogoSVG from "../../utils/svg/PolygonLogo";
import GnosisSafeLogoSVG from "../../utils/svg/GnosisSafeLogo";
import SnapshotLogoSVG from "../../utils/svg/SnapshotLogo";
import ENSLogoSVG from "../../utils/svg/ENSLogo";
import OpenSeaLogoSVG from "../../utils/svg/OpenSeaLogo";

export default function WorkWithSection() {
  return (
    <>
      <section className="relative flex justify-center items-center mb-11">
        <div className="relative lg:px-36 px-20">
          <h1 className="lg:text-5xl text-4xl font-bold text-center">
            Works With
          </h1>
          <div className="absolute left-0 -top-8">
            <BluePurpleParticlesSVG />
          </div>
        </div>
      </section>

      <div align="center" className="mb-11">
        <section className="grid lg:grid-cols-6 grid-cols-3 gap-6 w-fit">
          <div className="flex flex-col justify-center items-center">
            <Card className="flex justify-center items-center bg-cardbg border-2 border-cardborder lg:rounded-[40px] lg:w-40 lg:h-40 rounded-[20px] w-32 h-32">
              <Card.Body>
                <EthereumLogoSVG />
              </Card.Body>
            </Card>
            <h5 className="text-xl font-semibold mt-4">Ethereum</h5>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Card className="flex justify-center items-center bg-cardbg border-2 border-cardborder lg:rounded-[40px] lg:w-40 lg:h-40 rounded-[20px] w-32 h-32">
              <Card.Body>
                <PolygonLogoSVG />
              </Card.Body>
            </Card>
            <h5 className="text-xl font-semibold mt-4">Polygon</h5>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Card className="flex justify-center items-center bg-cardbg border-2 border-cardborder lg:rounded-[40px] lg:w-40 lg:h-40 rounded-[20px] w-32 h-32">
              <Card.Body>
                <GnosisSafeLogoSVG />
              </Card.Body>
            </Card>
            <h5 className="text-xl font-semibold mt-4">Gnosis Safe</h5>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Card className="flex justify-center items-center bg-cardbg border-2 border-cardborder lg:rounded-[40px] lg:w-40 lg:h-40 rounded-[20px] w-32 h-32">
              <Card.Body>
                <SnapshotLogoSVG />
              </Card.Body>
            </Card>
            <h5 className="text-xl font-semibold mt-4">Snapshot</h5>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Card className="flex justify-center items-center bg-cardbg border-2 border-cardborder lg:rounded-[40px] lg:w-40 lg:h-40 rounded-[20px] w-32 h-32">
              <Card.Body>
                <ENSLogoSVG />
              </Card.Body>
            </Card>
            <h5 className="text-xl font-semibold mt-4">ENS</h5>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Card className="flex justify-center items-center bg-cardbg border-2 border-cardborder lg:rounded-[40px] lg:w-40 lg:h-40 rounded-[20px] w-32 h-32">
              <Card.Body>
                <OpenSeaLogoSVG />
              </Card.Body>
            </Card>
            <h5 className="text-xl font-semibold mt-4">OpenSea</h5>
          </div>
        </section>
      </div>
    </>
  );
}
