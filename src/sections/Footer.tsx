import logoImage from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col gap-6 items-center md:flex-row md:justify-between">
                    <div>
                        <Image src={logoImage} alt="Layers logo" />
                    </div>
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((link) => (
                                <Link
                                    className="text-white/50 text-sm"
                                    href={link.href}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
