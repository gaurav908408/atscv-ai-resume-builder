
import Link from "next/link";
import Logo from "@/app/components/ui/logo";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Resume Builder", href: "/builder" },
      { label: "Resume Optimizer", href: "/optimizer" },
      { label: "ATS Checker", href: "/ats-checker" },
      { label: "Templates & Features", href: "/#features" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "/help-center" },
      { label: "My Account", href: "/login" },
      { label: "Create Account", href: "/register" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookies Policy", href: "/cookies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 pt-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-4">

        <div>
          <Logo />

          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-500">
            Build your premium ATS-friendly resume with AI-powered
            precision. Your next career move starts here.
          </p>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-5 font-bold">{group.title}</h3>

            <div className="flex flex-col gap-4 text-sm text-slate-500">
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-sm transition-colors duration-300 ease-in-out hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 motion-reduce:transition-none"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

      </div>

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-slate-100 py-7 text-sm text-slate-400 sm:flex-row">
        <p>© {new Date().getFullYear()} ATScV. All rights reserved.</p>
        <p>Built for your next career opportunity. ✦</p>
      </div>
    </footer>
  );
}
