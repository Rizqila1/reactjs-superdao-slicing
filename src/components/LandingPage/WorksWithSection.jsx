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
      <section className="relative flex justify-center mb-11">
        <h1 className="text-5xl font-bold">Works With</h1>
        <div className="absolute right-[490px] bottom-8">
          <BluePurpleParticlesSVG />
        </div>
      </section>

      <div align="center" className="mb-11">
        <section className="grid lg:grid-cols-6 grid-cols-3 gap-6 w-fit">
          <div className="flex flex-col justify-center items-center">
            <Card className="flex justify-center items-center bg-cardbg border-2 border-cardborder rounded-[40px] w-40 h-40">
              <Card.Body>
                <EthereumLogoSVG />
              </Card.Body>
            </Card>
            <h5 className="text-xl font-semibold mt-4">Ethereum</h5>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Card className="flex justify-center items-center bg-cardbg border-2 border-cardborder rounded-[40px] w-40 h-40">
              <Card.Body>
                <PolygonLogoSVG />
              </Card.Body>
            </Card>
            <h5 className="text-xl font-semibold mt-4">Polygon</h5>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Card className="flex justify-center items-center bg-cardbg border-2 border-cardborder rounded-[40px] w-40 h-40">
              <Card.Body>
                <GnosisSafeLogoSVG />
              </Card.Body>
            </Card>
            <h5 className="text-xl font-semibold mt-4">Gnosis Safe</h5>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Card className="flex justify-center items-center bg-cardbg border-2 border-cardborder rounded-[40px] w-40 h-40">
              <Card.Body>
                <SnapshotLogoSVG />
              </Card.Body>
            </Card>
            <h5 className="text-xl font-semibold mt-4">Snapshot</h5>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Card className="flex justify-center items-center bg-cardbg border-2 border-cardborder rounded-[40px] w-40 h-40">
              <Card.Body>
                <ENSLogoSVG />
              </Card.Body>
            </Card>
            <h5 className="text-xl font-semibold mt-4">ENS</h5>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Card className="flex justify-center items-center bg-cardbg border-2 border-cardborder rounded-[40px] w-40 h-40">
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
