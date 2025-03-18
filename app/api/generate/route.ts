import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"

// In-memory storage (would use a database in production)
const cheatSheets = new Map()

export async function POST(req: Request) {
  try {
    const { topic } = await req.json()

    if (!topic) {
      return NextResponse.json({ error: "Topic is required" }, { status: 400 })
    }

    const prompt = `
      Create a comprehensive cheat sheet for "${topic}".
      
      Structure the cheat sheet with the following sections:
      1. Overview - A brief explanation of what ${topic} is and its importance
      2. Core Concepts - Key concepts and terminology
      3. Common Commands/Patterns - The most frequently used commands or patterns
      4. Examples - Practical examples with explanations
      5. Tips & Best Practices - Professional advice for working with ${topic}
      6. Resources - Where to learn more
      
      Format the content with clear headings, subheadings, and bullet points.
      Include code examples where appropriate.
      Make the content concise but comprehensive.
      
      Return the content in markdown format.
    `

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt,
    })

    // Generate a unique ID for this cheat sheet
    const id = uuidv4()

    // Store the generated content (would use a database in production)
    cheatSheets.set(id, {
      id,
      topic,
      content: text,
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({ id, success: true })
  } catch (error) {
    console.error("Error generating cheat sheet:", error)
    return NextResponse.json({ error: "Failed to generate cheat sheet" }, { status: 500 })
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url)
  const id = url.searchParams.get("id")

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 })
  }

  const cheatSheet = cheatSheets.get(id)

  if (!cheatSheet) {
    return NextResponse.json({ error: "Cheat sheet not found" }, { status: 404 })
  }

  return NextResponse.json(cheatSheet)
}

