import { Button } from "@/components/ui/button";
import { jobs } from "@/data";
import { db } from "@/db";
import { jobsTable } from "@/db/schema";
import Link from "next/link";

export default function Home() {
  async function Action() {
    "use server";

    await db.insert(jobsTable).values(jobs);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* <form action={Action}>
        <Button type="submit">Submit</Button>
      </form> */}

      <Button>
        <Link href="/dashboard/pejuang">Pejuang</Link>
      </Button>
    </div>
  );
}
