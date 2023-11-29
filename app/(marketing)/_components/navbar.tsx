import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Navbar = () => {

  return (
    <div className="fixed top-0 flex items-center w-full h-14 px-4 border-b shadow-sm">
        <div 
          className="flex items-center justify-between w-full md:max-w-screen-2xl mx-auto"
        >
            <Logo/>

            <div className="flex items-center justify-between w-full md:block md:w-auto space-x-4">

                <Button variant="outline" size='sm' asChild>
                    <Link href='/sign-in'>
                     Login
                    </Link>
                </Button>

                <Button size='sm' asChild>
                    <Link href='/sign-un'>
                        Get Taskify for free
                    </Link>
                </Button>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar