import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { fightersSchema } from "./data/schema"
// import { fighters } from "@/data"

export const metadata: Metadata = {
  title: "Fighters",
  description: "Fighters Of SMAIQU Albahjah",
}

// Simulate a database read for tasks. 
async function getFighters() {
  const data = await fs.readFile(
    // path.join(process.cwd(), `src/${fileName}/data/${fileName}.json`)
    path.join(process.cwd(), `src/data/fighters.json`)
  );

  const fighters = JSON.parse(data.toString());

  return z.array(fightersSchema).parse(fighters);
}

export default async function FightersPage() {
  const Fighters = await getFighters()

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of fighters of SMAIQU Albahjah
            </p>
          </div>
        </div>
        <DataTable data={Fighters} columns={columns} />
      </div>
    </>
  )
}
