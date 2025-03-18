"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Sparkles } from "lucide-react"

export function CheatSheetForm() {
  const [topic, setTopic] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!topic.trim()) return

    setLoading(true)

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate cheat sheet")
      }

      const data = await response.json()

      // Navigate to the result page with the generated content
      router.push(`/cheat-sheet?id=${data.id}`)
    } catch (error) {
      console.error("Error generating cheat sheet:", error)
      setLoading(false)
    }
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-medium text-slate-800 dark:text-slate-100">
              What topic do you need a cheat sheet for?
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Enter any technical topic like "Linux commands", "React hooks", "CSS Grid", etc.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., Git commands, Python data structures"
              className="flex-1"
              disabled={loading}
            />
            <Button type="submit" disabled={loading || !topic.trim()} className="bg-primary hover:bg-primary/90">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Cheat Sheet
                </>
              )}
            </Button>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 italic">
            Generation typically takes 15-30 seconds depending on the complexity of the topic.
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

