"use client";
import Quiz from "../quiz-components/Quiz";
import React, { useState, useEffect } from "react";


export default function Page() {
  return (
    <main className="min-h-dvh bg-white">
      <div className="mx-auto max-w-5xl p-6" style={{ fontFamily: '"Quicksand", sans-serif' }}>
        <Quiz />
      </div>
    </main>
  );
}