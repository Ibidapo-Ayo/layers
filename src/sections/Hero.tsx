import Button from "@/components/Button";
import designExample1 from "@/assets/images/design-example-1.png"
import designExample2 from "@/assets/images/design-example-2.png"
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="sm:px-5 md:container relative">
                <div className="absolute -left-32 top-16 hidden lg:block">
                    <Image src={designExample1} className="" alt="Design example 1 image" />
                </div>
                <div className="absolute -right-64 -top-16  hidden lg:block">
                    <Image src={designExample2} className="" alt="Design example 1 image" />
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-900 font-semibold">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <div className="absolute md:left-56 top-96 hidden lg:block">
                    <Pointer name="Ayomi" color="blue" />
                </div>
                <div className="absolute md:right-80 md:-top-4 -top-16 hidden lg:block">
                    <Pointer name="Ayomi" color="red" />
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-center text-6xl md:text-7xl lg:text-8xl font-medium mt-6 max-w-4xl">
                        Impacful design, created effortlessly
                    </h1>
                    <p className="text-center text-md text-white/50 mt-8 max-w-2xl">
                        Design tools shouldn&apos;t slow you down. Layers
                        combine powerful features with an intuitive interface
                        that in your creative flow
                    </p>
                </div>
                <form className="flex border border-white/15 rounded-full p-1 mt-8 w-full lg:max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent border-none outline-none px-4 md:flex-1"
                    />
                    <Button
                        size="sm"
                        variant="primary"
                        type="submit"
                        className="whitespace-nowrap"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    );
}