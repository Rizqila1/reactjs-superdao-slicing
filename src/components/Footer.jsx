import SuperdaoLogo from "./SuperdaoLogo";

import TwitterLogoSVG from "../utils/svg/TwitterLogo";
import TelegramLogoSVG from "../utils/svg/FooterTelegramLogo";
import FooterYoutubeLogo from "../utils/svg/FooterYoutubeLogo";
import FooterDiscordLogo from "../utils/svg/FooterDiscordLogo";

export default function Footer() {
  return (
    <div className="flex justify-around items-center bg-cardbg border-2 border-cardborder w-full py-8">
      <div>
        <SuperdaoLogo />
      </div>

      <div className="md:hidden flex justify-center items-center gap-10">
        <h3 className="text-xl font-semibold">About</h3>
        <h3 className="text-xl font-semibold mx-3">Job</h3>
        <h3 className="text-xl font-semibold">Legal</h3>
      </div>

      <section className="flex items-center justify-end">
        <div
          className="w-[56px] h-[56px] flex justify-center items-center rounded-full me-5"
          style={{ background: "rgba(119, 230, 255, 0.15)" }}
        >
          <TwitterLogoSVG />
        </div>

        <div
          className="w-[56px] h-[56px] flex justify-center items-center rounded-full me-5"
          style={{ background: "rgba(119, 230, 255, 0.15)" }}
        >
          <TelegramLogoSVG />
        </div>

        <div
          className="w-[56px] h-[56px] flex justify-center items-center rounded-full me-5"
          style={{ background: "rgba(119, 230, 255, 0.15)" }}
        >
          <FooterYoutubeLogo />
        </div>

        <div
          className="w-[56px] h-[56px] flex justify-center items-center rounded-full"
          style={{ background: "rgba(119, 230, 255, 0.15)" }}
        >
          <FooterDiscordLogo />
        </div>
      </section>
    </div>
  );
}
