"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Search, Printer, Share2, Bookmark, Loader2 } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"

interface CheatSheet {
  id: string
  topic: string
  content: string
  createdAt: string
}

export default function CheatSheetPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get("id")

  const [cheatSheet, setCheatSheet] = useState<CheatSheet | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")

  useEffect(() => {
    if (!id) return

    async function fetchCheatSheet() {
      try {
        const response = await fetch(`/api/generate?id=${id}`)

        if (!response.ok) {
          throw new Error("Failed to fetch cheat sheet")
        }

        const data = await response.json()
        setCheatSheet(data)
      } catch (error) {
        console.error("Error fetching cheat sheet:", error)
        setError("Failed to load the cheat sheet. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    fetchCheatSheet()
  }, [id])

  const downloadAsPDF = async () => {
    if (!cheatSheet) return

    const contentElement = document.getElementById("cheat-sheet-content")
    if (!contentElement) return

    try {
      const canvas = await html2canvas(contentElement, {
        scale: 2,
        useCORS: true,
        logging: false,
      })

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      const imgWidth = 210 // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)
      pdf.save(`${cheatSheet.topic.replace(/\s+/g, "-").toLowerCase()}-cheat-sheet.pdf`)
    } catch (error) {
      console.error("Error generating PDF:", error)
    }
  }

  const filteredContent = () => {
    if (!cheatSheet) return ""

    // Apply search filter
    if (searchTerm) {
      const regex = new RegExp(searchTerm, "gi")
      return cheatSheet.content.replace(
        regex,
        (match) => `<mark class="bg-yellow-200 dark:bg-yellow-800">${match}</mark>`,
      )
    }

    // Apply category filter (simplified implementation)
    if (activeFilter !== "all") {
      const sections = cheatSheet.content.split(/#{1,3} /)
      const filteredSections = sections.filter((section) => section.toLowerCase().includes(activeFilter.toLowerCase()))
      return filteredSections.join("# ")
    }

    return cheatSheet.content
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary mb-4" />
          <p className="text-slate-600 dark:text-slate-300">Loading your cheat sheet...</p>
        </div>
      </div>
    )
  }

  if (error || !cheatSheet) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">{error || "Cheat sheet not found"}</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">We couldn't find the cheat sheet you're looking for.</p>
        <Button onClick={() => (window.location.href = "/")}>Go Back Home</Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">{cheatSheet.topic} Cheat Sheet</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Created on {new Date(cheatSheet.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={downloadAsPDF}>
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
          <Button variant="outline" size="sm" onClick={() => window.print()}>
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Bookmark className="h-4 w-4 mr-2" />
            Save
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card className="p-4">
            <h3 className="font-medium mb-3 text-slate-800 dark:text-slate-100">Search</h3>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search in cheat sheet..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="font-medium mb-3 text-slate-800 dark:text-slate-100">Filter by Category</h3>
            <Tabs defaultValue="all" value={activeFilter} onValueChange={setActiveFilter}>
              <TabsList className="grid grid-cols-2 mb-2">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="concept">Concepts</TabsTrigger>
              </TabsList>
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="command">Commands</TabsTrigger>
                <TabsTrigger value="example">Examples</TabsTrigger>
              </TabsList>
            </Tabs>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <Card className="p-6">
            <div
              id="cheat-sheet-content"
              className="prose dark:prose-invert max-w-none prose-headings:mb-3 prose-headings:mt-6 prose-p:my-2 prose-pre:bg-slate-100 dark:prose-pre:bg-slate-800 prose-pre:p-3 prose-pre:rounded"
            >
              <ReactMarkdown>{cheatSheet.content}</ReactMarkdown>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

