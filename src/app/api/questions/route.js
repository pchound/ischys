// src/app/questions/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    title: "Is Your Nervous System in Survival Mode?",
    intro:
      "Answer these 6 quick questions to learn your state—and get free tools to shift toward calm.",
    questions: [
      {
        id: "q1",
        text: "Do you feel “on edge” even when nothing is wrong?",
        options: [
          { label: "Yes", value: "yes", score: 2 },
          { label: "Sometimes", value: "sometimes", score: 1 },
          { label: "No", value: "no", score: 0 }
        ]
      },
      {
        id: "q2",
        text: "Do you often zone out or lose track of time?",
        options: [
          { label: "Yes", value: "yes", score: 2 },
          { label: "Sometimes", value: "sometimes", score: 1 },
          { label: "No", value: "no", score: 0 }
        ]
      },
      {
        id: "q3",
        text: "Is your sleep restless or interrupted?",
        options: [
          { label: "Yes", value: "yes", score: 2 },
          { label: "Sometimes", value: "sometimes", score: 1 },
          { label: "No", value: "no", score: 0 }
        ]
      },
      {
        id: "q4",
        text: "Do you get headaches, stomach issues, or muscle tension?",
        options: [
          { label: "Yes", value: "yes", score: 2 },
          { label: "Sometimes", value: "sometimes", score: 1 },
          { label: "No", value: "no", score: 0 }
        ]
      },
      {
        id: "q5",
        text: "Do you avoid certain situations without knowing why?",
        options: [
          { label: "Yes", value: "yes", score: 2 },
          { label: "Sometimes", value: "sometimes", score: 1 },
          { label: "No", value: "no", score: 0 }
        ]
      },
      {
        id: "q6",
        text: "Do you feel tired but wired?",
        options: [
          { label: "Yes", value: "yes", score: 2 },
          { label: "Sometimes", value: "sometimes", score: 1 },
          { label: "No", value: "no", score: 0 }
        ]
      }
    ],
    results: {
      yes: "You may be stuck in fight/flight mode → Here’s a 5-minute breathing technique to start calming today.",
      sometimes: "You may be shifting between survival and regulation → Download my 5 Rituals to Calm Anxiety.",
      no: "Your system is generally regulated—keep it that way → Join my list for weekly nervous system tips."
    }
  };

  return NextResponse.json(data, { status: 200 });
}