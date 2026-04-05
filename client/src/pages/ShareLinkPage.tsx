import { BookOpen, User } from "lucide-react";
import { Link } from "react-router-dom";
import ShareModal from "../components/quiz/ShareModal";


export default function ShareLinkPage() {
    return (
        <div className="min-h-screen bg-[#0D1511] flex flex-col font-sans">

            <header className="w-full px-6 md:px-12 py-6 flex items-center justify-between bg-[#0D1511] z-10 sticky top-0 border-b border-[#1f3329]">
                <Link to="/" className="flex items-center gap-3 font-serif hover:opacity-80 transition-opacity">
                    <BookOpen className="text-[#C69B35]" size={24} opacity={0.8} />
                    <span className="text-xl font-bold italic text-[#F2EBD9] opacity-90">Quizly</span>
                </Link>

                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#1f3329] bg-[#111C16] text-[#C69B35] cursor-pointer hover:bg-[#15221c] transition-colors">
                    <User size={18} />
                </div>
            </header>


            <main className="flex-1 w-full flex flex-col items-center justify-center p-6 md:p-12 pb-24">
                <ShareModal />
            </main>

        </div>
    )
}