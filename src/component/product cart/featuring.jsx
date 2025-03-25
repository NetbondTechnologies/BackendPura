import { useTranslation } from "react-i18next";

export default function Featuring() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="w-full h-[70%] lg:h-96 my-14 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 m-2 lg:m-8 flex flex-col gap-8 items-center">
          <h1 className="text-2xl font-bold">{t("NEW DIAMOND RINGS")}</h1>
          <p className="text-lg text-gray-600 line-clamp-5 lg:line-clamp-none">
            {t(
              "At Puramente International, we are committed to delivering the finest diamond rings, crafted with precision and elegance. Our diamonds are carefully selected based on the 4Cs—Cut, Clarity, Color, and Carat Weight—to ensure exceptional brilliance and quality. Each diamond is expertly cut to maximize its sparkle, with various shapes available, including Round, Princess, and Oval. We offer diamonds with high clarity, ranging from Flawless (FL) to Slightly Included (SI), ensuring minimal imperfections."
            )}
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex items-center">
          <video autoPlay loop muted src="/ringvideo.mp4"></video>
        </div>
      </div>

      <div className="w-full h-[70%] lg:h-96 my-14 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex items-center">
          <video autoPlay loop muted src="/ring2.mp4"></video>
        </div>
        <div className="w-full lg:w-1/2 m-2 lg:m-8 flex flex-col gap-8 items-center">
          <h1 className="text-2xl font-bold">{t("Wedding Special Ring")}</h1>
          <p className="text-lg text-gray-600 line-clamp-5 lg:line-clamp-none">
            {t(
              "Our Wedding Special Ring is a timeless symbol of love and commitment, designed to make your special day even more memorable. Crafted with precision and elegance, this exquisite ring features a perfect blend of classic charm and modern sophistication. Adorned with dazzling diamonds or high-quality gemstones, its intricate detailing and flawless finish reflect the beauty of everlasting love."
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
