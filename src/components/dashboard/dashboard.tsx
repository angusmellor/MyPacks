import ItemsByCatTable from "@/components/dashboard/itemsByCatTable";
import PackStats from "@/components/dashboard/packStats";
import PackImage from "@/components/packImage";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Pack } from "@/types/types";
import AddItemForm from "./addItemForm";
import { baseUrl } from "@/config/site";


async function getDashboardData() {

  const res = await fetch(baseUrl + '/api/packs', { cache: 'no-store' })
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Dashboard() {

  const packs: Pack[] = await getDashboardData()
  const pack = packs[0]

  console.log(pack)


  return (
    <section className=" flex space-x-5 p-5 bg-inherit relative">
        <Card>
          <ItemsByCatTable className=" min-w-[40%]" categories={pack.categories}/>
        </Card>
        <div className=" flex flex-1 flex-col space-y-5">
          <Card>
            <h1 className="text-3xl font-bold">{pack.name}</h1>
            <div className="flex items-center space-x-2">
              <Icons.compass className=" h-6 w-6 " />
              <h2 className="text-xl font-medium">{pack.trail}</h2>
            </div>
          </Card>
          <Card className="flex w-full justify-around ">
            <Icons.share className=" h-6 w-6 " strokeWidth={1.5}/>
            <Icons.scale className=" h-6 w-6 " strokeWidth={1.5} />
          </Card>
          <PackStats className=" min-w-[25%] [filter:drop-shadow(var(--shadow))] " categories={pack.categories}/>
        </div>
        <Card className="flex-1 h-fit flex flex-col space-y-2">
          <PackImage height={400} catWeights={[1,5,2,1,1]}/>
        </Card>
        <AddItemForm/>
      </section>
  )

}