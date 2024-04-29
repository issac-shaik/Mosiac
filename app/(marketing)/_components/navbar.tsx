import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-14 px-4 bg-slate-950 flex items-center bg-transparent backdrop-blur-lg z-50">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo />
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <Button className="text-green-700 border-none hover:bg-green-600 hover:text-white hover:border-none" size="sm" variant="outline" asChild>
                        <Link href="/sign-in">
                            Login                       
                        </Link>
                    </Button> 
                    <Button variant="green_button" size="sm" asChild>
                    <Link href="/sign-up">
                        Try Mosiac for free!                      
                    </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}