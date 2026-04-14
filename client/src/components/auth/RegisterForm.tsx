import FormInput from "../shared/FormInput";
import GoogleAuthBtn from "./GoogleAuthBtn";

export default function RegisterForm() {

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
    };

    return (
        <form
            noValidate
            onSubmit={(e) => handleSubmit(e.nativeEvent)}
            className="flex flex-col gap-6 w-full max-w-md"
        >

            <FormInput
                label="FULL NAME"
                name="name"
                type="text"
                placeholder="Your Name"
                required
            />

            <FormInput
                label="EMAIL"
                name="email"
                type="email"
                placeholder="student@university.edu"
                required
            />

            <div className="flex gap-4">

                <FormInput
                    label="PASSWORD"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    required
                />

                <FormInput
                    label="CONFIRM"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    required
                />

            </div>

            <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-4 rounded-[3px] transition-colors mt-2"
            >
                Create Account ➔
            </button>

            <div className="relative flex items-center py-4">

                <div className="grow border-t border-[#dfd8c9]" />

                <span className="mx-4 text-xs tracking-widest uppercase text-[#A19D92] font-semibold italic">
                    or
                </span>

                <div className="grow border-t border-[#dfd8c9]" />

            </div>

            <GoogleAuthBtn />

            <p className="text-[9px] text-center text-[#A19D92] font-semibold uppercase tracking-wider mt-4 leading-[1.6] max-w-xs mx-auto">

                By signing up, you agree to our{" "}

                <a href="/terms" className="underline hover:text-gray-600">
                    Terms of Service
                </a>

                {" "} & {" "}

                <a href="/privacy" className="underline hover:text-gray-600">
                    Privacy Policy
                </a>

            </p>

        </form>
    );
}