// src/app/questions/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    title: "Are you experiencing depression?",
    intro:
      "Answer these quick questions to learn your state—and get free tools to shift toward calm.",
    disclaimer: "Disclaimer: This quiz is not a medical diagnosis. It's only a tool for general information. If you're feeling overwhelmed, please reach out to a healthcare professional. If you're in crisis, dial 988 or 911 immediately.", 
    questions: [
      {
        id: "q1",
        text: "Little interest or pleasure in doing things",
        options: [
          { label: "Not at all", value: "Not at all", score: 0 },
          { label: "Several days", value: "Several days", score: 1 },
          { label: "More than half the days", value: "More than half the days", score: 2 },
          { label: "Nearly every day", value: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "q2",
        text: "Feeling down, depressed, or hopeless",
        options: [
          { label: "Not at all", value: "Not at all", score: 0 },
          { label: "Several days", value: "Several days", score: 1 },
          { label: "More than half the days", value: "More than half the days", score: 2 },
          { label: "Nearly every day", value: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "q3",
        text: "Trouble falling or staying asleep, or sleeping too much",
        options: [
          { label: "Not at all", value: "Not at all", score: 0 },
          { label: "Several days", value: "Several days", score: 1 },
          { label: "More than half the days", value: "More than half the days", score: 2 },
          { label: "Nearly every day", value: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "q4",
        text: "Feeling tired or having little energy",
        options: [
          { label: "Not at all", value: "Not at all", score: 0 },
          { label: "Several days", value: "Several days", score: 1 },
          { label: "More than half the days", value: "More than half the days", score: 2 },
          { label: "Nearly every day", value: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "q5",
        text: "Poor appetite or overeating",
        options: [
          { label: "Not at all", value: "Not at all", score: 0 },
          { label: "Several days", value: "Several days", score: 1 },
          { label: "More than half the days", value: "More than half the days", score: 2 },
          { label: "Nearly every day", value: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "q6",
        text: "Feeling bad about yourself — or that you’re a failure or have let yourself or your family down",
        options: [
          { label: "Not at all", value: "Not at all", score: 0 },
          { label: "Several days", value: "Several days", score: 1 },
          { label: "More than half the days", value: "More than half the days", score: 2 },
          { label: "Nearly every day", value: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "q7",
        text: "Trouble concentrating on things, such as schoolwork, reading, or watching TV",
        options: [
          { label: "Not at all", value: "Not at all", score: 0 },
          { label: "Several days", value: "Several days", score: 1 },
          { label: "More than half the days", value: "More than half the days", score: 2 },
          { label: "Nearly every day", value: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "q8",
        text: "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you were moving around a lot more than usual",
        options: [
          { label: "Not at all", value: "Not at all", score: 0 },
          { label: "Several days", value: "Several days", score: 1 },
          { label: "More than half the days", value: "More than half the days", score: 2 },
          { label: "Nearly every day", value: "Nearly every day", score: 3 }
        ]
      },
      {
        id: "q9",
        text: "Thoughts that you would be better off dead, or of hurting yourself in some way",
        options: [
          { label: "Not at all", value: "Not at all", score: 0 },
          { label: "Several days", value: "Several days", score: 1 },
          { label: "More than half the days", value: "More than half the days", score: 2 },
          { label: "Nearly every day", value: "Nearly every day", score: 3 }
        ]
      }

      
    ],
    results: {
      /*Not at all: "Minimal",
      Several days: "Mild",
      More than half the days: "Moderate",
      Nearly every day: "Moderately Severe",
      always: "Severe"*/
      
     
    }
  };

  return NextResponse.json(data, { status: 200 });
}