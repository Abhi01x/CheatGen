# AI-Powered Cheat Sheet Generator

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black)
![License](https://img.shields.io/badge/license-MIT-green)

A modern web application that leverages AI to generate comprehensive, well-structured cheat sheets for any technical topic. Perfect for developers, students, and technical professionals who need quick reference guides.

![CheatGen Demo](https://raw.githubusercontent.com/Abhi01x/CheatGen/refs/heads/main/Screenshot%202025-03-18%20223331.png)
Live Link - https://v0-ai-powered-cheat-sheet.vercel.app/

## 🚀 Features

- **AI-Powered Generation**: Creates detailed cheat sheets using OpenAI's GPT-4o model
- **Topic Flexibility**: Generate cheat sheets for any technical topic (programming languages, frameworks, tools, etc.)
- **Well-Structured Format**: Automatically organizes information into logical sections with examples
- **PDF Export**: Download generated cheat sheets as PDF files for offline reference
- **Search Functionality**: Quickly find specific commands or concepts within your cheat sheet
- **Filter Options**: Filter content by categories (concepts, commands, examples)
- **Dark Mode Support**: Full dark mode implementation with system preference detection
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Print-Friendly**: Optimized layout for printing physical copies

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **UI Components**: shadcn/ui
- **AI Integration**: Vercel AI SDK, OpenAI API
- **PDF Generation**: jsPDF, html2canvas
- **Markdown Rendering**: ReactMarkdown
- **Styling**: Tailwind CSS with typography plugin
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn
- OpenAI API key

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abhi01x/CheatGen.git
   cd ai-cheat-sheet-generator

   Thought for 2 seconds```markdown project="AI-Powered Cheat Sheet Generator" file="README.md"
...
```

2. Install dependencies:

```shellscript
npm install
# or
yarn install
```


3. Create a `.env.local` file in the root directory and add your OpenAI API key:

```plaintext
OPENAI_API_KEY=your_openai_api_key_here
```


4. Start the development server:

```shellscript
npm run dev
# or
yarn dev
```


5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


## 🖥️ Usage

1. **Enter a Topic**: Type any technical topic in the input field (e.g., "React hooks", "Linux commands", "CSS Grid")
2. **Generate**: Click the "Generate Cheat Sheet" button and wait for the AI to create your cheat sheet
3. **View & Interact**: Browse the generated cheat sheet, use search and filters to find specific information
4. **Export**: Download as PDF, print, or save for later reference

5. Thought for 2 seconds```markdown project="AI-Powered Cheat Sheet Generator" file="README.md"
...
```

2. Install dependencies:

```shellscript
npm install
# or
yarn install
```


3. Create a `.env.local` file in the root directory and add your OpenAI API key:

```plaintext
OPENAI_API_KEY=your_openai_api_key_here
```


4. Start the development server:

```shellscript
npm run dev
# or
yarn dev
```


5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


## 🖥️ Usage

1. **Enter a Topic**: Type any technical topic in the input field (e.g., "React hooks", "Linux commands", "CSS Grid")
2. **Generate**: Click the "Generate Cheat Sheet" button and wait for the AI to create your cheat sheet
3. **View & Interact**: Browse the generated cheat sheet, use search and filters to find specific information
4. **Export**: Download as PDF, print, or save for later reference


## 🎨 Customization

### Modifying the AI Prompt

You can customize how the AI generates cheat sheets by modifying the prompt in `app/api/generate/route.ts`:

```typescript
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
`;
```

### Changing the Theme

The application uses Tailwind CSS for styling. You can modify the color scheme by editing the `tailwind.config.ts` file.

## 🔮 Future Enhancements

- User accounts for saving and managing cheat sheets
- Community sharing and rating of cheat sheets
- Custom templates for different types of cheat sheets
- Interactive elements within cheat sheets (e.g., runnable code examples)
- Integration with additional AI models
- Collaborative editing features
- Version history for cheat sheets


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [OpenAI](https://openai.com/) for providing the AI models
- [Vercel](https://vercel.com/) for the AI SDK and hosting platform
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Next.js](https://nextjs.org/) for the React framework


---

Built with ❤️ by ABHISHEK RAJ PATEL
