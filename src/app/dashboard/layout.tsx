import { ReactNode } from "react";
import Link from "next/link";
import { getUser } from "@/utils/data";

interface DashboardLayoutProps {
    children: ReactNode;
    orders: ReactNode;
    profit: ReactNode;
    sales: ReactNode;
}

const DashboardLayout = ({children, orders, profit, sales}: DashboardLayoutProps) => {
  const user = getUser();
  return (
    <main className="p-10">
      <nav>
        <Link href={`/dashboard/details`} className="underline text-xl">
          {">> "} Go to Order Details
        </Link>
      </nav>
      <div className="flex justify-center items-center gap-7">
        {orders}
        {sales}
        {user.isManager && profit}
      </div>
        {children}
    </main>
  )
}

export default DashboardLayout