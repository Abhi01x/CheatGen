import { CheatSheetForm } from "@/components/cheat-sheet-form"
import { Features } from "@/components/features"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            AI-Powered Cheat Sheet Generator
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Create comprehensive, well-structured cheat sheets for any technical topic in seconds using AI.
          </p>
        </div>

        <CheatSheetForm />

        <div className="mt-24">
          <Features />
        </div>
      </div>
    </main>
  )
}

