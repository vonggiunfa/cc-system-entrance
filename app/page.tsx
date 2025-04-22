import { Card } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"
import Image from "next/image"
import type React from "react"

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar - Fixed position on desktop, horizontal bar on mobile */}
      <aside className="w-full md:w-1/4 bg-black text-white md:fixed md:h-screen z-10 h-auto">
        <div className="flex flex-row md:flex-col items-center justify-center p-4 md:p-6 md:h-full">
          <div className="flex-1 flex justify-center items-center md:mb-12 md:w-full max-w-[180px] md:max-w-full">
            <Image src="/logo-top.jpeg" alt="TOP Logo" width={500} height={500} className="w-full h-auto" />
          </div>
          <div className="flex-1 flex justify-center items-center md:w-full max-w-[180px] md:max-w-full">
            <Image
              src="/logo-chester.jpeg"
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
            <h2 className="text-xl font-bold p-4 border-b border-gray-100 bg-gray-50/50">人事协同</h2>
            <div className="p-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                <ModuleCard title="CC-OA" description="业务流程管理，办公协同" bgColor="bg-black" />
                <ModuleCard title="TOP2-OA" description="业务流程管理，办公协同" bgColor="bg-purple-900" />
                <ModuleCard title="CC-EHR" description="人力资源管理系统" bgColor="bg-black" />
                <ModuleCard title="TOP2-EHR" description="人力资源管理系统、企业员工管理平台" bgColor="bg-purple-900" />
                <ModuleCard
                  title="..."
                  description="敬请期待"
                  bgColor="bg-black"
                  icon={<MoreHorizontal className="w-8 h-8" />}
                />
                {/* <AddModuleCard /> */}
              </div>
            </div>
          </section>

          {/* Store Sales Section */}
          <section className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow transition-shadow">
            <h2 className="text-xl font-bold p-4 border-b border-gray-100 bg-gray-50/50">店铺销售</h2>
            <div className="p-5">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                <ModuleCard title="导购通" description="门店导购通" bgColor="bg-black" />
                <ModuleCard title="CRM" description="客户关系管理系统" bgColor="bg-black" />
                <ModuleCard title="小程序" description="小程序商城" bgColor="bg-black" />
                <ModuleCard
                  title="..."
                  description="敬请期待"
                  bgColor="bg-black"
                  icon={<MoreHorizontal className="w-8 h-8" />}
                />
                {/* <AddModuleCard /> */}
              </div>
            </div>
          </section>

          {/* Bottom Sections */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Procurement Section */}
            <section className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow transition-shadow">
              <h2 className="text-xl font-bold p-4 border-b border-gray-100 bg-gray-50/50">采购合作</h2>
              <div className="p-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                  <ModuleCard title="SCM" description="供应链系统" bgColor="bg-black" />
                  <ModuleCard title="WMS" description="仓库管理WMS" bgColor="bg-black" />
                  <ModuleCard
                    title="..."
                    description="敬请期待"
                    bgColor="bg-black"
                    icon={<MoreHorizontal className="w-8 h-8" />}
                  />
                </div>
              </div>
            </section>

            {/* Data Platform Section */}
            <section className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow transition-shadow">
              <h2 className="text-xl font-bold p-4 border-b border-gray-100 bg-gray-50/50">数据中台</h2>
              <div className="p-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                  <ModuleCard title="中台" description="订单、库存、商品" bgColor="bg-black" />
                  <ModuleCard title="BI" description="商业智能数据报表" bgColor="bg-black" />
                  <ModuleCard
                    title="..."
                    description="敬请期待"
                    bgColor="bg-black"
                    icon={<MoreHorizontal className="w-8 h-8" />}
                  />
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
}

function ModuleCard({ title, description, bgColor, icon }: ModuleCardProps) {
  return (
    <Card className="flex flex-col items-center transition-all hover:shadow-md hover:translate-y-[-2px] cursor-pointer overflow-hidden group">
      <div
        className={`${bgColor} text-white w-full aspect-square flex items-center justify-center text-xl font-bold relative`}
      >
        {icon || title}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
      </div>
      <div className="p-3 text-center w-full border-t">
        <p className="text-sm font-medium truncate">{description}</p>
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
//         <p className="text-sm text-gray-500 truncate">添加模块</p>
//       </div>
//     </Card>
//   )
// }
