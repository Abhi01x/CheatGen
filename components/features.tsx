import { Download, Search, Moon, Zap, FileText, Filter } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      title: "AI-Powered Generation",
      description: "Leverages advanced AI to create comprehensive, accurate cheat sheets on any technical topic.",
    },
    {
      icon: <FileText className="h-6 w-6 text-emerald-500" />,
      title: "Well-Structured Format",
      description: "Automatically organizes information into logical sections with examples and explanations.",
    },
    {
      icon: <Download className="h-6 w-6 text-blue-500" />,
      title: "PDF Download",
      description: "Save your generated cheat sheets as PDF files for offline reference or sharing.",
    },
    {
      icon: <Search className="h-6 w-6 text-purple-500" />,
      title: "Search Functionality",
      description: "Quickly find specific commands or concepts within your cheat sheet.",
    },
    {
      icon: <Filter className="h-6 w-6 text-rose-500" />,
      title: "Filter Options",
      description: "Filter content by categories, difficulty level, or usage frequency.",
    },
    {
      icon: <Moon className="h-6 w-6 text-slate-500" />,
      title: "Dark Mode Support",
      description: "Easy on the eyes with full dark mode support for late-night coding sessions.",
    },
  ]

  return (
    <div className="py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 dark:text-slate-100 mb-12">Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              {feature.icon}
              <h3 className="ml-3 text-lg font-semibold text-slate-800 dark:text-slate-100">{feature.title}</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

