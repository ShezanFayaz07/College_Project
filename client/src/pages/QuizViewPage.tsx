import OptionsCard from "../components/quiz/OptionsCard";
import { useState } from "react";
import { BookOpen, Timer, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function QuizViewPage() {
    const [selectedOption, setSelectedOption] = useState<string | null>("A");

    const options = [
        { letter: "A", text: "The Form of the Good" },
        { letter: "B", text: "The physical light of the visible world" },
        { letter: "C", text: "The source of human shadow perceptions" },
        { letter: "D", text: "The philosopher's return to the cave" },
    ];
    return (

        <div className="min-h-screen bg-[#0D1511] text-[#F2EBD9] flex flex-col font-sans selection:bg-[#C69B35]/30">

      <header className="w-full px-4 sm:px-6 md:px-12 py-3 sm:py-4 md:py-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-[#1f3329] bg-[#0D1511] z-10 sticky top-0">

        <Link
          to="/"
          className="flex items-center gap-2 font-serif hover:opacity-80 transition-opacity shrink-0"
        >
          <BookOpen className="text-[#C69B35]" size={22} />
          <span className="text-lg sm:text-2xl font-bold">Quizly</span>
        </Link>

        <div className="flex flex-col items-center order-3 sm:order-2 w-full sm:w-auto">
          <span className="text-[9px] sm:text-[10px] font-bold text-[#C69B35] uppercase tracking-[0.12em] sm:tracking-[0.15em] mb-1.5">
            Question 5 of 12
          </span>

          <div className="w-20 sm:w-24 h-0.5 bg-[#1f3329] rounded-full overflow-hidden">
            <div className="w-5/12 h-full bg-[#C69B35]" />
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[#C69B35] font-bold tracking-wider order-2 sm:order-3 shrink-0">
          <Timer size={16} />
          <span className="text-xs sm:text-sm">00:45:00</span>
        </div>

      </header>


            <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16 flex flex-col">

                <div className="bg-[#111C16] border border-[#1f3329] rounded-xl p-8 md:p-14 shadow-2xl flex flex-col gap-12 w-full">

                    <h2 className="text-3xl md:text-5xl font-serif leading-[1.3] text-[#F2EBD9]">
                        <span className="italic font-medium">
                            In Plato's Allegory of the Cave,
                        </span>{" "}
                        what does the sun represent in the realm of the intelligible?
                    </h2>





                    <div className="flex flex-col gap-4">

                        {options.map((opt) => (
                            <OptionsCard
                                key={opt.letter}
                                letter={opt.letter}
                                text={opt.text}
                                isSelected={selectedOption === opt.letter}
                                onClick={() => setSelectedOption(opt.letter)}
                            />
                        ))}

                    </div>

                </div>

            </main>



            <footer className="w-full px-6 md:px-12 py-6 flex items-center justify-between bg-[#0e1612] border-t border-[#1f3329]">

                <button className="flex items-center gap-3 text-[#8A9C94] hover:text-[#F2EBD9] transition-colors text-[11px] font-bold uppercase tracking-[0.15em]">
                    <ArrowLeft size={16} />
                    Previous
                </button>

                <button className="flex items-center gap-3 bg-[#C69B35] hover:bg-[#daa834] text-[#0D1511] text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-3.5 rounded-[3px] transition-colors shadow-lg">
                    Next Question
                    <ArrowRight size={16} />
                </button>

            </footer>




        </div>

    );
}