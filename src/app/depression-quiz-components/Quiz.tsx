"use client";

import React, { useEffect, useMemo, useState } from "react";
import type { QuestionsResponse, QuizQuestion } from "../depression-quiz-types/quiz";

import { jsPDF } from "jspdf";

type Answers = Record<string, "Not at all" | "Several days" | "More than half the days" | "Nearly every day" | undefined>;

export default function Quiz() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<Pick<QuestionsResponse, "title" | "intro" | "disclaimer">>({
    title: "",
    intro: "",
    disclaimer: "",
  });
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/depression-questions", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: QuestionsResponse = await res.json();
        if (!active) return;
        setMeta({ title: data.title, intro: data.intro, disclaimer: data.disclaimer });
        setQuestions(data.questions);
        // initialize answers as undefined
        const start: Answers = {};
        data.questions.forEach((q) => (start[q.id] = undefined));
        setAnswers(start);
        setError(null);
      } catch (e: any) {
        setError(e?.message || "Failed to load questions.");
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const totalScore = useMemo(() => {
    return questions.reduce((sum, q) => {
      const a = answers[q.id];
      if (a === "Nearly every day") return sum + 3;
      if (a === "More than half the days") return sum + 2;
      if (a === "Several days") return sum + 1;
      return sum; // not at all or unanswered = 0
    }, 0);
  }, [answers, questions]);

  const completion = useMemo(() => {
    const answered = Object.values(answers).filter((v) => v !== undefined).length;
    return {
      answered,
      total: questions.length,
      allAnswered: answered === questions.length && questions.length > 0,
    };
  }, [answers, questions.length]);

  const bucket = useMemo(() => {
    // Max score: 6 questions * 2 = 12
    if (!completion.allAnswered) return null;


    if (totalScore >= 19)
      return {
        label: "Severe",
        summary: ".",
        suggestion:
          "",
          cta: "Severe",
      };
    if (totalScore >= 14)
      return {
        label: "Moderately Severe",
        summary: ".",
        suggestion:
          "",
          cta: "Moderately Severe",
      };

      if (totalScore >= 9)
      return {
        label: "Moderate",
        summary: ".",
        suggestion:
          "",
          cta: "Moderate",
      };
      if (totalScore >= 4)
      return {
        label: "Mild",
        summary: ".",
        suggestion:
          "",
          cta: "Mild",
      };
    return {
      label: "Minimal",
      summary: "",
      suggestion:
        "",
        cta: "Minimal",
    };
  }, [completion.allAnswered, totalScore]);

  function updateAnswer(qid: string, val: "Not at all" | "Several days" | "More than half the days" | "Nearly every day" ) {
    setAnswers((prev) => ({ ...prev, [qid]: val }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    if (!completion.allAnswered) return;
  }

  function downloadPDF() {
    if (!bucket) return;
    const doc = new jsPDF();

    const marginX = 14;
    let y = 16;
    const line = (text: string, fontSize = 12, gap = 6, bold = false) => {
      doc.setFont("helvetica", bold ? "bold" : "normal");
      doc.setFontSize(fontSize);
      const split = doc.splitTextToSize(text, 182);
      doc.text(split, marginX, y);
      y += split.length * (fontSize * 0.5 + 2) + gap;
    };

    line(meta.title, 18, 8, true);
    line("Personalized Results", 14, 6, true);

    // Score summary
    line(`Total Score: ${totalScore} / ${questions.length * 3}`, 12, 4, true);
    line(`Result: ${bucket.label}`, 12, 6, true);
    //line(bucket.summary, 12, 6);

    // Suggestions
    line("Suggested Next Step:", 12, 4, true);
    line(bucket.suggestion, 12, 8);
    line(bucket.cta, 12, 10);

    // Answers table-ish
    line("Your Answers:", 12, 6, true);
    questions.forEach((q, idx) => {
      const val = answers[q.id] ?? "—";
      line(`${idx + 1}. ${q.text}`, 11, 2, true);
      line(`Answer: ${val}`, 11, 6);
      if (y > 270) {
        doc.addPage();
        y = 16;
      }
    });

    // Footer
    line("This quiz is informational and not a medical diagnosis.", 10, 0);

    doc.save("nervous-system-quiz-results.pdf");
  }

  return (
    
    <section className="mx-auto max-w-3xl w-full p-6" style={{ fontFamily: "var(--font-quicksand), sans-serif" }}>
      {loading && <p className="text-sm opacity-70">Loading questions…</p>}
      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 p-4 text-[#b3682b]">
          {error}
        </div>
      )}
      {!loading && !error && (
        <>
        
          <header className="mb-6">
            <h1 className="text-black text-2xl font-bold" >{meta.title}</h1>
            <p className="text-black mt-1">{meta.intro}</p>
            <p className="text-black mt-1 text-sm italic">{meta.disclaimer}</p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {questions.map((q) => (
              <fieldset key={q.id} className="rounded-xl border p-4 text-black">
                <legend className="font-medium">{q.text}</legend>
                <div className="mt-3 flex flex-wrap gap-3">
                  {q.options.map((opt) => (
                    <label
                      key={opt.value}
                      className={`cursor-pointer rounded-lg border px-3 py-2 ${
                        answers[q.id] === opt.value
                          ? "border-black"
                          : "border-neutral-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={opt.value}
                        className={`mr-2 h-4 w-4 rounded-full border-1 border-[#4e3924]
                        appearance-none 
                        checked:border-[#ca894d] checked:bg-[#ca894d]
                        focus:outline-none focus:ring-1 focus:ring-[#4e3924] focus:ring-offset-1`}
                        checked={answers[q.id] === opt.value}
                        onChange={() => updateAnswer(q.id, opt.value)}
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}

            <div className="flex items-center justify-between">
              <div className="text-sm text-black">
                Answered {completion.answered}/{completion.total}
              </div>
              <button
                type="submit"
                className="rounded-lg bg-black px-4 py-2 text-white disabled:opacity-40"
                disabled={questions.length === 0}
              >
                See results
              </button>
            </div>
          </form>

          {submitted && !completion.allAnswered && (
            <p className="mt-4 text-sm text-amber-700">
              Please answer all questions to view your results.
            </p>
          )}

          {submitted && completion.allAnswered && bucket && (
            <div className="mt-8 rounded-xl border p-5 text-black">
              <h2 className="text-xl font-semibold mb-2 ">Your result</h2>
              <p className="mb-1">
                <span className="font-medium">{bucket.label}</span> — {bucket.summary}
              </p>
              <p className="text-black mt-2">{bucket.suggestion}</p>
              <p className="text-black mt-1 italic">{bucket.cta}</p>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={downloadPDF}
                  className="rounded-lg border px-4 py-2"
                >
                  Download PDF
                </button>
                <button
                  onClick={() => {
                    setAnswers((prev) => {
                      const reset: Answers = {};
                      Object.keys(prev).forEach((k) => (reset[k] = undefined));
                      return reset;
                    });
                    setSubmitted(false);
                  }}
                  className="rounded-lg border px-4 py-2"
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}
