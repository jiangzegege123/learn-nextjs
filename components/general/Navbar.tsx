import Link from "next/link";

export default function Navbar() {
  return (
    <div className="py-5 lfex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Blog <span className="text-blue-500">Marshal</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-500 transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
