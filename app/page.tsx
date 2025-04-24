import { Card } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type React from "react"

export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar - Smaller width on desktop for more content space */}
      <aside className="w-full md:w-[30%] bg-black text-white md:fixed md:h-screen z-10 h-auto">
        <div className="flex flex-row md:flex-col items-center justify-center p-4 md:p-6 md:h-full">
          <div className="flex-1 flex justify-center items-center md:mb-6 md:w-full max-w-[160px] md:max-w-full">
            <Image src="/cc-se/logo-top.jpeg" alt="TOP Logo" width={400} height={400} className="w-full h-auto" />
          </div>
          <div className="flex-1 flex justify-center items-center md:w-full max-w-[160px] md:max-w-full">
            <Image
              src="/cc-se/logo-chester.jpeg"
              alt="Chester Charles Logo"
              width={400} 
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </aside>

      {/* Main Content - More space with smaller sidebar */}
      <main className="flex-1 p-4 bg-gray-50 md:ml-[30%] mt-4 md:mt-0 flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full max-w-7xl mx-auto">
          {/* 人事協同 Section */}
          <SectionCard title="人事協同">
            <CardsGrid>
              <CardWrapper>
                <ModuleCard title="OA" description="業務流程管理，辦公協同" bgColor="bg-black" url="https://oa.top-2.com:1443/" />
              </CardWrapper>
              <CardWrapper>
                <ModuleCard title="" description="" bgColor="bg-black" type="coming-soon" />
              </CardWrapper>
              <CardWrapper>
                <ModuleCard title="" description="" bgColor="" type="placeholder" />
              </CardWrapper>
            </CardsGrid>
          </SectionCard>

          {/* 店鋪銷售 Section */}
          <SectionCard title="店鋪銷售">
            <CardsGrid>
              <CardWrapper>
                <ModuleCard title="官網" description="Top2官網" bgColor="bg-black" url="https://www.top-2.com/" />
              </CardWrapper>
              <CardWrapper>
                <ModuleCard title="" description="" bgColor="bg-black" type="coming-soon" />
              </CardWrapper>
              <CardWrapper>
                <ModuleCard title="" description="" bgColor="" type="placeholder" />
              </CardWrapper>
              <CardWrapper>
                <ModuleCard title="" description="" bgColor="" type="placeholder" />
              </CardWrapper>
            </CardsGrid>
          </SectionCard>

          {/* 採購倉儲 Section */}
          <SectionCard title="採購倉儲">
            <CardsGrid>
              <CardWrapper>
                <ModuleCard title="SCM" description="供應鏈系統" bgColor="bg-black" url="http://120.55.44.246:18001/Login" />
              </CardWrapper>
              <CardWrapper>
                <ModuleCard title="EZRpro" description="粉絲互動營銷平台" bgColor="bg-black" url="https://crm-tp.ezrpro.com/#/Vip/Info/Brand" />
              </CardWrapper>
              <CardWrapper>
              <ModuleCard title="" description="" bgColor="bg-black" type="coming-soon" />
              </CardWrapper>
            </CardsGrid>
          </SectionCard>

          {/* 數據中台 Section */}
          <SectionCard title="數據中台">
            <CardsGrid>
              <CardWrapper>
                <ModuleCard title="中台" description="訂單、庫存、商品" bgColor="bg-black" url="https://oms.top-2.com/" />
              </CardWrapper>
              <CardWrapper>
                <ModuleCard 
                  title="BI" 
                  description="商業智能數據報表" 
                  bgColor="bg-black" 
                  url="https://bi.top-2.com/webroot/decision/login?origin=cd97e378-7adb-4570-8b92-814d622ea095#/" 
                />
              </CardWrapper>
              <CardWrapper>
                <ModuleCard title="" description="" bgColor="bg-black" type="coming-soon" />
              </CardWrapper>
            </CardsGrid>
          </SectionCard>
        </div>
      </main>
    </div>
  )
}

// 封装Section组件
interface SectionCardProps {
  title: string
  children: React.ReactNode
}

function SectionCard({ title, children }: SectionCardProps) {
  return (
    <section className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow transition-shadow h-full flex flex-col">
      <h2 className="text-lg font-bold p-3 border-b border-gray-100 bg-gray-50/50">{title}</h2>
      <div className="p-4 flex-1 flex justify-center overflow-y-auto">
        {children}
      </div>
    </section>
  )
}

// 封装卡片网格组件
interface CardsGridProps {
  children: React.ReactNode
}

function CardsGrid({ children }: CardsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 w-full justify-items-center">
      {children}
    </div>
  )
}

// 封装卡片容器组件
interface CardWrapperProps {
  children: React.ReactNode
}

function CardWrapper({ children }: CardWrapperProps) {
  return (
    <div className="flex w-full max-w-[126px]">
      {children}
    </div>
  )
}

interface ModuleCardProps {
  title: string
  description: string
  bgColor: string
  icon?: React.ReactNode
  url?: string
  type?: "normal" | "coming-soon" | "placeholder"
}

function ModuleCard({ title, description, bgColor, icon, url, type = "normal" }: ModuleCardProps) {
  // 占位类型不显示任何内容
  if (type === "placeholder") {
    return (
      <div className="block w-full">
        <div className="aspect-square w-full invisible"></div>
        <div className="py-3 w-full">
          <p className="text-sm font-medium invisible h-5"></p>
        </div>
      </div>
    );
  }

  const displayContent = type === "coming-soon" 
    ? <MoreHorizontal className="w-8 h-8" />
    : (icon || title);
  
  const displayDescription = type === "coming-soon" ? "敬請期待" : description;
  
  const cardContent = (
    <>
      <div
        className={`${bgColor} text-white w-full aspect-square flex items-center justify-center text-xl font-bold relative`}
      >
        {displayContent}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
      </div>
    </>
  )

  return (
    <Link href={url || ''} className="block w-full">
      <Card className="flex flex-col items-center transition-all hover:shadow-md hover:translate-y-[-2px] cursor-pointer overflow-hidden group">
        {cardContent}
      </Card>
      <div className="py-3 text-center w-full">
        <p className="text-sm font-medium line-clamp-2">{displayDescription}</p>
      </div>
    </Link>
  )
}