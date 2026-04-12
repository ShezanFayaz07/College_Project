import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, Clock, Minus, Plus } from "lucide-react";

export default function QuizConfigPage() {

    const [selectedTheme, setSelectedTheme] = useState("dark-academic")
    const [isTimerEnabled, setIsTimerEnabled] = useState(false)
    const [duration, setDuration] = useState(5)
    const [passingScore, setPassingScore] = useState(80)
    const [quizTitle, setQuizTitle] = useState("");



    const themes = [
        { id: "light", name: "Light", color: "#E2E8F0" },
        { id: "dark-academic", name: "Dark Academic", color: "#0D1511" },
        { id: "amber-glow", name: "Amber Glow", color: "linear-gradient(to bottom right, #B28228, #452b02)" },
    ];
    return (
        <div className="flex-1 w-full bg-[#0a100d] flex flex-col items-center pt-10 pb-36 overflow-y-auto px-4 z-0 font-sans">
            <div className="w-full max-w-3xl mb-12 text-center md:text-left transition-all duration-300">
                <h1 className="text-3xl md:text-4xl font-serif text-[#F2EBD9] mb-4">Configure your <span className="italic px-1">Quiz</span></h1>
                <p className="text-[#8A9C94] text-[15px]">Set your rules and branding before publishing your manuscript.</p>
            </div>

            <div className="w-full max-w-3xl flex flex-col gap-6">

                {/* Theme Settings */}


                <div className="w-full bg-[#111C16]/40 backdrop-blur-sm border border-[#1f3329] rounded-xl p-8 shadow-xl transition-all duration-300">
                    <h2 className="text-lg font-serif italic text-[#F2EBD9] mb-8 flex items-center gap-2">
                        <span className="w-6 h-px bg-[#C69B35]"></span>
                        Visual Theme
                    </h2>
                    <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
                        {themes.map((theme) => (
                            <div
                                key={theme.id}
                                onClick={() => setSelectedTheme(theme.id)}
                                className="flex flex-col items-center gap-4 w-full cursor-pointer group"
                            >
                                <div
                                    className={`w-full h-30 rounded-xl border-2 transition-all duration-300 relative overflow-hidden flex items-center justify-center
                                    ${selectedTheme === theme.id
                                            ? "border-[#C69B35] shadow-[0_0_15px_rgba(198,155,53,0.15)] scale-[1.02]"
                                            : "border-[#1f3329] opacity-30 hover:opacity-60"}`}
                                    style={{ background: theme.color }}
                                >
                                    {selectedTheme === theme.id && (
                                        <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-[#C69B35] flex items-center justify-center shadow-lg z-10">
                                            <Check size={14} strokeWidth={4} className="text-[#0D1511]" />
                                        </div>
                                    )}

                                    {selectedTheme === theme.id && (
                                        <div className="w-3/4 h-20 border border-[#1f3329] bg-[#111C16] opacity-80 rounded-md flex flex-col p-2 gap-1.5 pointer-events-none">
                                            <div className="w-1/3 h-1 bg-[#C69B35]/40 rounded-full mx-auto" />
                                            <div className="w-full h-0.5 bg-[#1f3329]" />
                                            <div className="w-full h-1 bg-[#8A9C94]/20 rounded-full mt-2" />
                                            <div className="w-2/3 h-1 bg-[#8A9C94]/20 rounded-full" />
                                        </div>
                                    )}


                                </div>
                                <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300
                                ${selectedTheme === theme.id ? "text-[#C69B35]" : "text-[#8A9C94] group-hover:text-[#F2EBD9]"}`}>
                                    {theme.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timer Control */}



                <div className={`w-full bg-[#111C16]/40 backdrop-blur-sm border rounded-xl p-8 shadow-xl transition-all duration-500
          ${isTimerEnabled ? "border-[#1f3329]" : "border-[#1f3329]/50 opacity-80"}`}>
                    <div className="flex items-start justify-between mb-8">
                        <div>
                            <h2 className="text-lg font-serif italic text-[#F2EBD9] mb-1">Time Constraints</h2>
                            <p className="text-[#8A9C94] text-[13px]">Enable or disable the global quiz timer</p>
                        </div>
                        <button
                            onClick={() => setIsTimerEnabled(!isTimerEnabled)}
                            className={`w-12 h-6 rounded-full relative transition-all duration-300 flex items-center px-1
                            ${isTimerEnabled ? "bg-[#C69B35]" : "bg-[#1f3329]"}`}
                        >
                            <div className={`w-4 h-4 bg-[#F2EBD9] rounded-full shadow-md transition-all duration-300 transform
                            ${isTimerEnabled ? "translate-x-6" : "translate-x-0"}`}
                            />
                        </button>
                    </div>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isTimerEnabled ? "max-h-75 opacity-100" : "max-h-0 opacity-0 invisible"}`}>
                        <div className="flex flex-col md:flex-row items-center gap-8 bg-[#0D1511]/60 p-6 rounded-xl border border-[#1f3329]">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-lg border transition-colors ${isTimerEnabled ? "bg-[#111C16] border-[#C69B35]/50 text-[#C69B35]" : "bg-[#111C16] border-[#1f3329] text-[#8A9C94]"}`}>
                                    <Clock size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#8A9C94] text-[10px] font-bold uppercase tracking-widest">Duration</span>
                                    <span className="text-[#F2EBD9] text-2xl font-serif">{duration} <span className="text-sm font-sans italic opacity-60">minutes</span></span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 flex-1 justify-end w-full md:w-auto">
                                <button
                                    onClick={() => setDuration(Math.max(1, duration - 1))}
                                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#111C16] border border-[#1f3329] text-[#8A9C94] hover:text-[#C69B35] hover:border-[#C69B35]/50 transition-all active:scale-90"
                                    title="Decrease time"
                                >
                                    <Minus size={20} />
                                </button>

                                <div className="flex bg-[#0a100d] p-1 rounded-lg border border-[#1f3329] gap-1">
                                    {[5, 15, 30, 45, 60].map((preset) => (
                                        <button
                                            key={preset}
                                            onClick={() => setDuration(preset)}
                                            className={`px-3 py-1.5 rounded-md text-[10px] font-bold transition-all
                                            ${duration === preset
                                                    ? "bg-[#C69B35] text-[#0D1511]"
                                                    : "text-[#8A9C94] hover:bg-[#111C16] hover:text-[#F2EBD9]"}`}
                                        >
                                            {preset}m
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setDuration(duration + 1)}
                                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#111C16] border border-[#1f3329] text-[#8A9C94] hover:text-[#C69B35] hover:border-[#C69B35]/50 transition-all active:scale-90"
                                    title="Increase time"
                                >
                                    <Plus size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Passing Score */}
                <div className="w-full bg-[#111C16]/40 backdrop-blur-sm border border-[#1f3329] rounded-xl p-8 shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-serif italic text-[#F2EBD9]">Academic Standard</h2>
                        <div className="text-[#C69B35] text-xs font-bold uppercase tracking-widest px-3 py-1.5 bg-[#C69B35]/5 rounded-md border border-[#C69B35]/20">
                            {passingScore}% Required
                        </div>
                    </div>
                    <p className="text-[#8A9C94] text-[13px] mb-8">Define the minimum threshold to pass this manuscript</p>

                    <div className="relative pt-6 pb-2 cursor-pointer group">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="5"
                            value={passingScore}
                            onChange={(e) => setPassingScore(parseInt(e.target.value))}
                            className="w-full h-1.5 bg-[#1f3329] rounded-full appearance-none cursor-pointer accent-[#C69B35]"
                            style={{
                                background: `linear-gradient(to right, #C69B35 ${passingScore}%, #1f3329 ${passingScore}%)`
                            }}
                        />
                        <div className="flex justify-between w-full mt-4 text-[#8A9C94] text-[10px] font-bold uppercase tracking-widest opacity-40">
                            <span>Novice (0%)</span>
                            <span>Scholar (50%)</span>
                            <span>Master (100%)</span>
                        </div>
                    </div>
                </div>

                {/* Identification */}
                <div className="w-full bg-[#111C16]/40 backdrop-blur-sm border border-[#1f3329] rounded-xl p-8 shadow-xl transition-all duration-300">
                    <h2 className="text-lg font-serif italic text-[#F2EBD9] mb-8 flex items-center gap-2">
                        <span className="w-6 h-px bg-[#C69B35]"></span>
                        Manuscript Details
                    </h2>

                    <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-bold tracking-widest text-[#8A9C94] uppercase pl-1">Manuscript Title</label>
                        <input
                            value={quizTitle}
                            onChange={(e) => setQuizTitle(e.target.value)}
                            className="w-full bg-[#0a100d] border border-[#1f3329] p-4 rounded-lg text-[#F2EBD9] text-sm outline-none focus:border-[#C69B35]/50 transition-all placeholder:text-[#8A9C94]/20"
                            placeholder="Your Quiz Title"
                        />
                    </div>
                </div>
            </div>

            {/* Controls */}
      <div className="fixed bottom-0 right-0 z-20 w-full bg-[#0D1511]/90 backdrop-blur-md border-t border-[#1f3329] flex items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 md:px-12 md:py-5">
        <Link to="/create/edit" className="flex items-center gap-1.5 sm:gap-2 text-[#8A9C94] hover:text-[#F2EBD9] transition-all text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.08em] sm:tracking-widest group shrink-0">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform sm:w-4 sm:h-4" />
          <span className="hidden xs:inline">Back to </span>Editor
        </Link>
        <Link
          to="/create/share"
          className="flex items-center gap-2 bg-[#B28228] hover:bg-[#C69B35] text-[#0D1511] font-bold uppercase rounded-sm transition-all shadow-lg active:scale-95 whitespace-nowrap
            text-[9px] tracking-[0.06em] px-3.5 py-2.5
            sm:text-[10px] sm:tracking-widest sm:px-6 sm:py-3
            md:text-[11px] md:tracking-[0.15em] md:px-8 md:py-3.5"
        >
          Publish Manuscript
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4 md:w-4.5 md:h-4.5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        </Link>
      </div>
        </div>

    )
}