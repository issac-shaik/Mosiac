import { Button } from "@/components/ui/button"

export const Footer = () => {
    return (
        <div className="w-full p-4 bg-slate-900">
            <div className="md:max-w-screen-2xl mx-auto flex items-start w-full justify-start flex-col ">
                    <Button className="text-slate-200" size="lg" variant="ghost">
                        Privacy Policy  
                    </Button> 
                    <Button className="text-slate-200" size="lg" variant="ghost">
                    Terms of Service 
                    </Button>
                
            </div>
        </div>
    )
}