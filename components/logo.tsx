import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont = localFont ({
    src: "../public/fonts/font.woff2"
})

export const Logo = () => {
    return (
        <Link href="/">
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
                <Image 
                src="/logo.png"
                alt="Logo"
                height= {60}
                width={60}
                />
                <p className={cn("text-lg text-green-600 pb-1 text-center",
                    headingFont.className
                )}>
                    Mosiac
                </p>
            </div>
        </Link>
    );
}