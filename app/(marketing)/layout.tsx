import { Footer } from "./_components/footer";
import {Navbar} from "./_components/navbar";

const MarketingLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className = "h-screen bg-slate-900 text-stone-400">
            <div className="sm:h-screen flex flex-col">
                <Navbar/>
                <main className="pt-40 pb-20">
                    {children}
                </main>
            </div>
            <Footer/>
        </div>
    )
}

export default MarketingLayout;