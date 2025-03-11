import { useTranslation } from "react-i18next";
import { BadgePercent, FastForward, Gem, RefreshCcw, Wallet } from "lucide-react";

export default function Service() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4">
      <div className="w-full py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
          <div className="flex flex-col gap-2 items-center">
            <Wallet className="text-background-sky w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
            <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">{t("COD")}</h1>
            <h1 className="font-bold text-sm md:text-base">{t("AVAILABLE")}</h1>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <RefreshCcw className="text-background-sky w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
            <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">{t("7 Days")}</h1>
            <h1 className="font-bold text-sm md:text-base">{t("Return")}</h1>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <FastForward className="text-background-sky w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
            <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">{t("FAST")}</h1>
            <h1 className="font-bold text-sm md:text-base">{t("Delivery")}</h1>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <BadgePercent className="text-background-sky w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
            <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">{t("Affordable")}</h1>
            <h1 className="font-bold text-sm md:text-base">{t("Price")}</h1>
          </div>
          <div className="flex-col gap-2 items-center hidden lg:flex">
            <Gem className="text-background-sky w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
            <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">{t("Exclusive")}</h1>
            <h1 className=" font-bold text-sm md:text-base">{t("Collection")}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
