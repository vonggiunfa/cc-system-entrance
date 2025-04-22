import { Card } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar - Fixed position on desktop, horizontal bar on mobile */}
      <aside className="w-full md:w-1/4 bg-black text-white md:fixed md:h-screen z-10 h-auto">
        <div className="flex flex-row md:flex-col items-center justify-center p-4 md:p-6 md:h-full">
          <div className="flex-1 flex justify-center items-center md:mb-12 md:w-full max-w-[180px] md:max-w-full">
            <Image src="/cc-se/logo-top.jpeg" alt="TOP Logo" width={500} height={500} className="w-full h-auto" />
          </div>
          <div className="flex-1 flex justify-center items-center md:w-full max-w-[180px] md:max-w-full">
            <Image
              src="/cc-se/logo-chester.jpeg"
              alt="Chester Charles Logo"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </aside>

      {/* Main Content - With padding to account for fixed sidebar on desktop, 
          and positioned below the header on mobile */}
      <main className="flex-1 p-6 bg-gray-50 md:ml-[25%] mt-4 md:mt-0">
        <div className="grid gap-6 max-w-6xl mx-auto">
          {/* HR Section */}
          <section className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow transition-shadow">
            <h2 className="text-xl font-bold p-4 border-b border-gray-100 bg-gray-50/50">人事協同</h2>
            <div className="p-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                <ModuleCard title="OA" description="業務流程管理，辦公協同" bgColor="bg-[#361176]" url="https://oa.top-2.com:1443/" />
                {/* <ModuleCard title="CC-OA" description="業務流程管理，辦公協同" bgColor="bg-black" url="/cc-oa" />
                <ModuleCard title="TOP2-OA" description="業務流程管理，辦公協同" bgColor="bg-purple-900" url="/top2-oa" />
                <ModuleCard title="CC-EHR" description="人力資源管理系統" bgColor="bg-black" url="/cc-ehr" />
                <ModuleCard title="TOP2-EHR" description="人力資源管理系統、企業員工管理平台" bgColor="bg-purple-900" url="/top2-ehr" /> */}
                <ComingSoonCard description="敬請期待" />
                {/* <AddModuleCard /> */}
              </div>
            </div>
          </section>

          {/* Store Sales Section */}
          <section className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow transition-shadow">
            <h2 className="text-xl font-bold p-4 border-b border-gray-100 bg-gray-50/50">店鋪銷售</h2>
            <div className="p-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                <ModuleCard title="Top2官網" description="Top2" bgColor="bg-black" url="https://www.top-2.com/" />
                {/* <ModuleCard title="CRM" description="客戶關係管理系統" bgColor="bg-black" url="/crm" />
                <ModuleCard title="小程序" description="小程序商城" bgColor="bg-black" url="/mini-program" /> */}
                <ComingSoonCard description="敬請期待" />
                {/* <AddModuleCard /> */}
              </div>
            </div>
          </section>

          {/* Bottom Sections */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Procurement Section */}
            <section className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow transition-shadow">
              <h2 className="text-xl font-bold p-4 border-b border-gray-100 bg-gray-50/50">採購倉儲</h2>
              <div className="p-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                  <ModuleCard title="SCM" description="供應鏈系統" bgColor="bg-black" url="http://120.55.44.246:18001/Login" />
                  {/* <ModuleCard title="WMS" description="倉庫管理WMS" bgColor="bg-black" url="/wms" /> */}
                  <ComingSoonCard description="敬請期待" />
                </div>
              </div>
            </section>

            {/* Data Platform Section */}
            <section className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow transition-shadow">
              <h2 className="text-xl font-bold p-4 border-b border-gray-100 bg-gray-50/50">數據中台</h2>
              <div className="p-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                  <ModuleCard title="中台" description="訂單、庫存、商品" bgColor="bg-black" url="https://oms.top-2.com/" />
                  <ModuleCard title="BI" description="商業智能數據報表" bgColor="bg-black" url="https://bi.top-2.com/webroot/decision/login?origin=cd97e378-7adb-4570-8b92-814d622ea095#/" />
                  <ComingSoonCard description="敬請期待" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

interface ModuleCardProps {
  title: string
  description: string
  bgColor: string
  icon?: React.ReactNode
  url?: string
}

function ModuleCard({ title, description, bgColor, icon, url }: ModuleCardProps) {
  const cardContent = (
    <>
      <div
        className={`${bgColor} text-white w-full aspect-square flex items-center justify-center text-xl font-bold relative`}
      >
        {icon || title}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
      </div>
      <div className="p-3 text-center w-full border-t">
        <p className="text-sm font-medium truncate">{description}</p>
      </div>
    </>
  )

  return url ? (
    <Link href={url} className="block w-full">
      <Card className="flex flex-col items-center transition-all hover:shadow-md hover:translate-y-[-2px] cursor-pointer overflow-hidden group">
        {cardContent}
      </Card>
    </Link>
  ) : (
    <Card className="flex flex-col items-center transition-all hover:shadow-md hover:translate-y-[-2px] cursor-pointer overflow-hidden group">
      {cardContent}
    </Card>
  )
}

// 新增敬請期待卡片组件，使用浅灰色系列
function ComingSoonCard({ description }: { description: string }) {
  return (
    <Card className="flex flex-col items-center overflow-hidden">
      <div className="bg-gray-200 text-gray-500 w-full aspect-square flex items-center justify-center text-xl font-bold relative">
        <MoreHorizontal className="w-8 h-8" />
      </div>
      <div className="p-3 text-center w-full border-t">
        <p className="text-sm font-medium text-gray-500 truncate">{description}</p>
      </div>
    </Card>
  )
}

// function AddModuleCard() {
//   return (
//     <Card className="flex flex-col items-center transition-all hover:shadow-md hover:translate-y-[-2px] cursor-pointer border border-dashed border-gray-300 overflow-hidden group bg-white/50">
//       <div className="w-full aspect-square flex items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-colors">
//         <Plus className="w-10 h-10 text-gray-400 group-hover:text-gray-600 transition-colors" />
//       </div>
//       <div className="p-3 text-center w-full border-t">
//         <p className="text-sm text-gray-500 truncate">添加模塊</p>
//       </div>
//     </Card>
//   )
// }
