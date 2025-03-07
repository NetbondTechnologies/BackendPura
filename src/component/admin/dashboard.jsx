import {
  AlignCenter,
  FilePlus,
  MonitorCog,
  PersonStanding,
  TicketPercent,
  UserPen,
  UserRoundSearch,
  View,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      <div className="w-full h-screen flex">
        <div className="w-[20%] text-lg h-screen font-semibold bg-black text-white">
          <div className="flex flex-col gap-4 py-10 px-4">
            <h1 className="text-xl flex gap-2 font-bold">
              <MonitorCog />
              Admin Control
            </h1>
            <Link className="flex gap-2">
              <FilePlus />
              Add Product
            </Link>
            <Link className="flex gap-2 items-center">
              <View />
              View Order
            </Link>
            <Link className="flex gap-2 items-center">
              <UserRoundSearch />
              View User
            </Link>
            <Link className="flex gap-2 items-center">
              <AlignCenter />
              Category
            </Link>
            <Link className="flex gap-2 items-center">
              <TicketPercent />
              Coupons
            </Link>
            <Link className="flex gap-2 items-center">
              <PersonStanding />
              Our Staff
            </Link>
            <Link className="flex gap-2 items-center">
              <UserPen />
              Manage Account
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
