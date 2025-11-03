import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function WordCounter() {
  const [text, setText] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const charNoSpaces = text.replace(/\s/g, "").length;
  const sentenceCount = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  const paragraphCount = text.split(/\n\n+/).filter(p => p.trim().length > 0).length;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Word Counter</h1>
            <p className="text-muted-foreground">
              Count words, characters, sentences, and paragraphs in your text
            </p>
          </div>

          <Card className="p-6 md:p-8 mb-6">
            <Textarea
              placeholder="Start typing or paste your text here..."
              className="min-h-[300px] text-base resize-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
              data-testid="input-text-area"
            />
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Card className="p-6 text-center">
              <p className="text-3xl font-bold font-mono text-primary" data-testid="text-word-count">
                {wordCount}
              </p>
              <p className="text-sm text-muted-foreground mt-2">Words</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-3xl font-bold font-mono text-primary" data-testid="text-char-count">
                {charCount}
              </p>
              <p className="text-sm text-muted-foreground mt-2">Characters</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-3xl font-bold font-mono text-primary" data-testid="text-char-no-spaces">
                {charNoSpaces}
              </p>
              <p className="text-sm text-muted-foreground mt-2">No Spaces</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-3xl font-bold font-mono text-primary" data-testid="text-sentence-count">
                {sentenceCount}
              </p>
              <p className="text-sm text-muted-foreground mt-2">Sentences</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-3xl font-bold font-mono text-primary" data-testid="text-paragraph-count">
                {paragraphCount}
              </p>
              <p className="text-sm text-muted-foreground mt-2">Paragraphs</p>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
