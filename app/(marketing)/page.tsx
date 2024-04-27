import { Award, Medal } from "lucide-react";
import localFont from "next/font/local"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {Poppins} from "next/font/google"


const headingFont = localFont({
    src: "../../public/fonts/font.woff2"
})

const textFont = Poppins ({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ]
})

const MarketingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className={cn( "flex items-center justify-center flex-col",
                headingFont.className,
            )}>
                <div className="flex flex-col gap-0 sm:flex-row sm:gap-4 m-2 ">
                    <div className="mb-4 flex items-center p-4 bg-amber-400  text-amber-700 rounded-full uppercase font-bold">
                        <Medal className="h-6 w-6 mr-2" />
                        No. 1 task management
                    </div>
                    <div className="mb-4 flex items-start p-4 bg-blue-700  text-amber-200 rounded-full uppercase font-bold">
                        <Award className="h-6 w-6 mr-2" />
                        <div className="h-6 flex flex-col justify-center">
                        <p className="text-sm py-0 my-0">Product Hunt</p>

                        #2 Product of the Day 
                        </div>
                    </div>
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-neutral-100 mb-7 sm:mb-10">
                    Mosiac helps teams move 
                </h1>
                <div className="text-3xl text-black md:text-6xl bg-gradient-to-l from-green-600 to-green-300 px-4 py-2 rounded-md pb-2 pt-2 w-fit mb-7 sm:mb-10">
                10x faster.
                </div>
                
            </div>
            <div className={cn(
                "text-sm md:text-xl lg:text-2xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
                textFont.className,    
            )}>
                Unleash teamwork, shatter productivity barriers.  From high-rises to home offices, it adapts to your flow. Get sh*t done with Mosiac.
            </div>
            <Button className="mt-6 bg-green-600 hover:bg-green-500" size="lg"  asChild>
                <Link href="/sign-up">
                    Use Mosiac for free
                </Link>
            </Button>
        </div>
    )
}

export default MarketingPage;