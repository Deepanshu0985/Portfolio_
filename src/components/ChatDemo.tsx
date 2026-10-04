"use client";

import { useEffect, useState } from "react";

type Line = { from: "visitor" | "ai"; text: string };

// A scripted conversation that shows what an AI assistant does for a business.
const SCRIPT: Line[] = [
  { from: "visitor", text: "Hi! Do you have any slots this Saturday?" },
  { from: "ai", text: "We're open Saturday 9 AM – 1 PM. I can request a slot for you, which time suits you best?" },
  { from: "visitor", text: "Around 11 AM. How much is a cleaning?" },
  { from: "ai", text: "A check-up and cleaning is $149, or $199 for new patients. I've noted 11 AM, just add your name and number. ✅" },
];

export function ChatDemo() {
  const [shown, setShown] = useState<Line[]>([]);
  const [typing, setTyping] = useState("");
  const [thinking, setThinking] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancelled = false;
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function run() {
      if (reduce) {
        // Show the whole conversation at once instead of animating it.
        await wait(0);
        if (!cancelled) setShown(SCRIPT);
        return;
      }
      while (!cancelled) {
        setShown([]);
        await wait(800);
        for (const line of SCRIPT) {
          if (cancelled) return;
          if (line.from === "ai") {
            setThinking(true);
            await wait(900);
            setThinking(false);
            for (let i = 1; i <= line.text.length && !cancelled; i += 2) {
              setTyping(line.text.slice(0, i));
              await wait(18);
            }
            setTyping("");
          } else {
            await wait(700);
          }
          setShown((s) => [...s, line]);
          await wait(500);
        }
        await wait(4000);
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="float-slow relative w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-violet-900/40 backdrop-blur-xl">
      <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
        <div className="relative grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-bold text-white">
          AI
          <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-slate-900 bg-emerald-400" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">AI assistant</p>
          <p className="text-xs text-emerald-300">Online · replies instantly</p>
        </div>
      </div>
      <div className="flex h-80 flex-col justify-end gap-3 overflow-hidden px-5 py-5 text-sm" aria-hidden>
        {shown.map((line, i) => (
          <Bubble key={i} line={line} />
        ))}
        {typing && <Bubble line={{ from: "ai", text: typing }} />}
        {thinking && (
          <div className="flex w-fit gap-1 rounded-2xl rounded-bl-sm bg-white/10 px-4 py-3">
            {[0, 150, 300].map((d) => (
              <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-300" style={{ animationDelay: `${d}ms` }} />
            ))}
          </div>
        )}
      </div>
      <p className="sr-only">
        Example conversation: a visitor asks about Saturday slots and the price of a cleaning, and the AI assistant
        answers and takes an appointment request.
      </p>
    </div>
  );
}

function Bubble({ line }: { line: Line }) {
  return line.from === "visitor" ? (
    <p className="pop-in ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-violet-500 px-4 py-2.5 text-white">{line.text}</p>
  ) : (
    <p className="pop-in max-w-[85%] rounded-2xl rounded-bl-sm bg-white/10 px-4 py-2.5 text-slate-100">{line.text}</p>
  );
}
