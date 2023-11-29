import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";


const MarketingPage = () => {

  return (
    <div className="flex items-center justify-center flex-col">

      <div className="flex items-center justify-center flex-col">

        {/* Badge */}
        <div 
         className="
          flex items-center 
          rounded-full 
          mb-4 p-4 
          shadow-sm 
          uppercase 
          bg-amber-100 text-amber-700
         "
        >
          <Medal className="h-6 w-6 mr-2"/>
          No 1 task management Platform
        </div>
        {/* title label */}
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">Taskify helps teams move</h1>
        <div 
          className="
            text-3xl md:text-6xl text-white 
            p-2 pb-4 px-4 
            rounded-md 
            w-fit 
            bg-gradient-to-r from-fuchsia-600 to-pink-600
          "
        >
          Work forward.
          </div>
      </div>

      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
        Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the
        way your team works is unique -accomplish it all with Taskify.
      </div>

      <Button className="mt-6" size='lg' asChild>
        <Link href='/sign-up'>
          Get Taskify for Free
        </Link>
      </Button>
    </div>
  )
}

export default MarketingPage;