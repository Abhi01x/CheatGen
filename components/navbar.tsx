import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { FileText } from "lucide-react"

export function Navbar() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <FileText className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl text-slate-800 dark:text-slate-100">CheatGen</span>
        </Link>

        <div className="flex items-center space-x-4">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/my-sheets"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                >
                  My Sheets
                </Link>
              </li>
              <li>
                <Link
                  href="/examples"
                  className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                >
                  Examples
                </Link>
              </li>
            </ul>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

