export default function CallToAction() {
    return (
        <section className="py024">
            <div className="overflow-x-clip p-4 flex">
                <div className="flex flex-none gap-16 text-7xl font-medium md:text-8xl">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className="flex items-center gap-16">
                            <span className="text-lime-400">&#10038;</span>
                            <span>Try it for free</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
