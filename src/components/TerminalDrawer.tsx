import React, { useState, useEffect, useRef } from 'react';
import { TabType } from '../types';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: TabType) => void;
  onOpenResume: () => void;
  onSelectRole?: (roleId: string) => void;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
  onOpenResume,
  onSelectRole
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([]);
  const [cmdIndex, setCmdIndex] = useState<number>(-1);
  const [pastCommands, setPastCommands] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus input when drawer opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Scroll to bottom on output change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Initial welcome message
  useEffect(() => {
    if (history.length === 0) {
      setHistory([
        {
          id: 'init-1',
          command: 'avantika --status',
          output: (
            <div className="space-y-1 text-neutral-300 text-xs sm:text-[13px] font-mono-tech">
              <p className="text-emerald-400 font-bold">
                ✓ Avantika Tiwari — Interactive Portfolio CLI v2.4
              </p>
              <p className="text-neutral-400">
                Current Role: Junior SDE @ Meta (Contract) | M.S. Data Science @ ASU
              </p>
              <p className="text-neutral-400">
                Location: San Francisco Bay Area / Tempe | Available for Full-Time (2026)
              </p>
              <p className="text-blue-300 pt-1">
                Type <span className="text-yellow-300 font-bold">help</span> to view available commands or press <span className="text-yellow-300 font-bold">Esc</span> to close.
              </p>
            </div>
          )
        }
      ]);
    }
  }, []);

  const handleCommandRun = (cmdRaw: string) => {
    const trimmed = cmdRaw.trim();
    if (!trimmed) return;

    // Track command history for Up/Down arrow navigation
    setPastCommands((prev) => [...prev, trimmed]);
    setCmdIndex(-1);

    const parts = trimmed.toLowerCase().split(' ');
    const mainCmd = parts[0];
    const arg = parts.slice(1).join(' ');

    let outputNode: React.ReactNode = null;

    switch (mainCmd) {
      case 'help':
        outputNode = (
          <div className="space-y-1.5 text-xs sm:text-[13px] font-mono-tech">
            <p className="text-neutral-300 font-semibold mb-1">Available System Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-neutral-400">
              <div><span className="text-emerald-400 font-bold">about</span> - Background & executive bio</div>
              <div><span className="text-emerald-400 font-bold">skills</span> - Core technical competencies</div>
              <div><span className="text-emerald-400 font-bold">experience</span> - Work history & impact stats</div>
              <div><span className="text-emerald-400 font-bold">projects</span> - Shipped systems & live links</div>
              <div><span className="text-emerald-400 font-bold">contact</span> - Email, GitHub & LinkedIn</div>
              <div><span className="text-emerald-400 font-bold">resume</span> - Open complete PDF resume modal</div>
              <div><span className="text-emerald-400 font-bold">role &lt;name&gt;</span> - Filter portfolio (ai, data, ml)</div>
              <div><span className="text-emerald-400 font-bold">meta</span> - Spotlight Meta CUA Agent work</div>
              <div><span className="text-emerald-400 font-bold">metrics</span> - Key quantifiable career impact</div>
              <div><span className="text-emerald-400 font-bold">clear</span> - Clear terminal screen</div>
              <div><span className="text-emerald-400 font-bold">exit</span> - Close terminal drawer</div>
            </div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        setInputVal('');
        return;

      case 'about':
      case 'whoami':
        outputNode = (
          <div className="space-y-1.5 text-xs sm:text-[13px] font-mono-tech text-neutral-300">
            <p className="text-white font-semibold">
              &gt; Avantika Tiwari | Data Scientist, ML & Big Data Engineer
            </p>
            <p className="text-neutral-400">
              "I turn messy data into intelligent systems people actually use."
            </p>
            <p className="text-neutral-400">
              Pursuing M.S. in Data Science at Arizona State University (4.0 GPA). Previously 2+ years Big Data Engineer at Jio Platforms (10+ TB/day). Currently Junior SDE at Meta evaluating Computer-Use Agents (CUA).
            </p>
            <div className="pt-1 flex gap-2">
              <button
                onClick={() => {
                  onNavigateTab('home');
                  onClose();
                }}
                className="text-blue-400 underline hover:text-blue-300 cursor-pointer"
              >
                Go to Home View →
              </button>
            </div>
          </div>
        );
        break;

      case 'meta':
      case 'cua':
        outputNode = (
          <div className="space-y-2 text-xs sm:text-[13px] font-mono-tech text-neutral-300">
            <p className="text-blue-400 font-bold">
              [Meta] Junior SDE — Computer-Use Agent (CUA) Work
            </p>
            <ul className="list-disc list-inside space-y-1 text-neutral-400">
              <li>Designed CUA task scenarios evaluating AI agent multi-step UI navigation (+28% reliability).</li>
              <li>Audited 500+ agent trajectory logs for failure patterns and mis-clicks (+35% task accuracy).</li>
              <li>Cut evaluation turnaround from 14h to under 3h with 99.8% data integrity assertions.</li>
              <li>Engineered modular Python data pipelines and annotation validation suites.</li>
            </ul>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-xs sm:text-[13px] font-mono-tech">
            <div className="text-emerald-400 font-bold">Core Technical Stack:</div>
            <div className="space-y-1 text-neutral-300">
              <p><span className="text-neutral-500">Languages:</span> Python, SQL, Rust, C++, R</p>
              <p><span className="text-neutral-500">Big Data:</span> Apache Airflow, Apache NiFi, Spark (PySpark), Kafka, Hive</p>
              <p><span className="text-neutral-500">AI / ML / RAG:</span> LangChain, ChromaDB, Hugging Face, PyTorch, Scikit-learn, GIS Spatial ML</p>
              <p><span className="text-neutral-500">Agents & Eval:</span> Computer-Use Agents (CUA), Trajectory Auditing, Prompt Optimization</p>
            </div>
            <button
              onClick={() => {
                onNavigateTab('skills');
                onClose();
              }}
              className="text-blue-400 underline hover:text-blue-300 pt-1 cursor-pointer"
            >
              Open Interactive Skills Matrix →
            </button>
          </div>
        );
        break;

      case 'experience':
        outputNode = (
          <div className="space-y-2 text-xs sm:text-[13px] font-mono-tech text-neutral-300">
            <p className="text-white font-bold">&gt; Work Experience Timeline:</p>
            <div className="space-y-1.5">
              <p><span className="text-blue-400 font-semibold">1. Meta</span> (Aug 2026 - Present) — Junior SDE (Contract)</p>
              <p><span className="text-blue-400 font-semibold">2. Arizona State University</span> (Jan 2025 - Present) — Graduate Research Assistant</p>
              <p><span className="text-blue-400 font-semibold">3. ASU SolarSPELL Initiative</span> (May 2025 - Aug 2025) — Rust Developer Intern</p>
              <p><span className="text-blue-400 font-semibold">4. Jio Platforms Limited</span> (Nov 2022 - Jul 2024) — Big Data Engineer</p>
              <p><span className="text-blue-400 font-semibold">5. Jio Platforms Limited</span> (Feb 2022 - Aug 2022) — Data Science Intern</p>
            </div>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs sm:text-[13px] font-mono-tech text-neutral-300">
            <p className="text-white font-bold">&gt; Featured Projects:</p>
            <div className="space-y-1">
              <p>• <span className="text-emerald-400 font-semibold">SafetySignal</span> — Public Safety Risk Detection System (GIS + ML)</p>
              <p className="text-neutral-500 pl-3">Repo: github.com/avantika-27/SafetySignal</p>
              <p>• <span className="text-emerald-400 font-semibold">SolarSPELL Telemetry</span> — Parallelized Rust Telemetry Engine</p>
              <p>• <span className="text-emerald-400 font-semibold">RAG Research Assistant</span> — LangChain + ChromaDB Knowledge Engine</p>
            </div>
            <button
              onClick={() => {
                onNavigateTab('projects');
                onClose();
              }}
              className="text-blue-400 underline hover:text-blue-300 pt-1 cursor-pointer"
            >
              Browse All Projects with Deep Dives →
            </button>
          </div>
        );
        break;

      case 'metrics':
        outputNode = (
          <div className="space-y-1.5 text-xs sm:text-[13px] font-mono-tech text-neutral-300">
            <p className="text-yellow-400 font-bold">&gt; High-Impact Career Metrics:</p>
            <p>• <span className="text-white font-semibold">10+ TB/Day:</span> Scaled enterprise ETL with 99.9% accuracy at Jio</p>
            <p>• <span className="text-white font-semibold">90% Latency Reduction:</span> High-concurrency Rust database telemetry</p>
            <p>• <span className="text-white font-semibold">4.0 / 4.0:</span> ASU Graduate GPA in Data Science & Analytics</p>
            <p>• <span className="text-white font-semibold">14h → &lt;3h:</span> AI Agent regression turnaround optimization at Meta</p>
          </div>
        );
        break;

      case 'role':
        if (arg.includes('agent') || arg.includes('ai') || arg.includes('genai')) {
          onSelectRole?.('ai-agents');
          outputNode = (
            <p className="text-blue-300 font-mono-tech text-xs">
              🎯 Recruiter Role set to: <strong className="text-white">AI Agent / GenAI Engineer</strong>. Home page customized!
            </p>
          );
        } else if (arg.includes('data') || arg.includes('eng') || arg.includes('platform')) {
          onSelectRole?.('data-eng');
          outputNode = (
            <p className="text-blue-300 font-mono-tech text-xs">
              🎯 Recruiter Role set to: <strong className="text-white">Big Data / Data Platform Engineer</strong>. Home page customized!
            </p>
          );
        } else if (arg.includes('science') || arg.includes('analytics') || arg.includes('ds')) {
          onSelectRole?.('data-science');
          outputNode = (
            <p className="text-blue-300 font-mono-tech text-xs">
              🎯 Recruiter Role set to: <strong className="text-white">Data Scientist & Applied ML</strong>. Home page customized!
            </p>
          );
        } else {
          onSelectRole?.('all');
          outputNode = (
            <p className="text-neutral-400 font-mono-tech text-xs">
              Reset recruiter role to full portfolio view. Valid options: role ai | role data | role science
            </p>
          );
        }
        break;

      case 'resume':
        onOpenResume();
        outputNode = (
          <p className="text-emerald-400 font-mono-tech text-xs">
            📄 Opening PDF resume viewer modal...
          </p>
        );
        break;

      case 'contact':
      case 'email':
        outputNode = (
          <div className="space-y-1 text-xs sm:text-[13px] font-mono-tech text-neutral-300">
            <p className="text-white font-semibold">&gt; Contact Information:</p>
            <p>Email: <a href="mailto:avantika.tiwari2000@gmail.com" className="text-blue-400 hover:underline">avantika.tiwari2000@gmail.com</a></p>
            <p>GitHub: <a href="https://github.com/avantika-27" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">github.com/avantika-27</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/avantika-tiwari" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/avantika-tiwari</a></p>
          </div>
        );
        break;

      default:
        outputNode = (
          <p className="text-red-400 text-xs sm:text-[13px] font-mono-tech">
            Command not recognized: <span className="text-white font-bold">{trimmed}</span>. Type <span className="text-yellow-300 font-bold">help</span> to view supported commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: trimmed,
        output: outputNode
      }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommandRun(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastCommands.length > 0) {
        const nextIdx = cmdIndex === -1 ? pastCommands.length - 1 : Math.max(0, cmdIndex - 1);
        setCmdIndex(nextIdx);
        setInputVal(pastCommands[nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdIndex !== -1) {
        const nextIdx = cmdIndex + 1;
        if (nextIdx >= pastCommands.length) {
          setCmdIndex(-1);
          setInputVal('');
        } else {
          setCmdIndex(nextIdx);
          setInputVal(pastCommands[nextIdx] || '');
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center pointer-events-none animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm pointer-events-auto transition-opacity"
        onClick={onClose}
      />

      {/* Terminal Drawer Bottom Sheet */}
      <div className="relative pointer-events-auto w-full max-w-4xl max-h-[80vh] h-[520px] bg-[#0c0d11] border-t sm:border border-[#27272a] sm:rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.8)] flex flex-col z-10 overflow-hidden">
        {/* Terminal Header Bar */}
        <div className="bg-[#14151b] border-b border-[#27272a] px-4 py-2.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 cursor-pointer inline-block transition-colors"
                title="Close"
              ></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>
            <span className="font-mono-tech text-xs text-neutral-300 ml-2 font-semibold">
              avantika@portfolio: ~ (bash)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-mono-tech text-[11px] text-neutral-400">
              Shortcut: <kbd className="bg-[#22232a] px-1.5 py-0.5 rounded text-neutral-300">Ctrl + K</kbd>
            </span>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* Terminal Quick Hint Bar */}
        <div className="bg-[#101116] border-b border-[#1f2026] px-4 py-1.5 flex items-center gap-2 overflow-x-auto text-[11px] font-mono-tech text-neutral-400 scrollbar-none">
          <span className="text-neutral-400 shrink-0">Quick run:</span>
          {['help', 'meta', 'role ai', 'role data', 'skills', 'projects', 'resume', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommandRun(cmd)}
              className="bg-[#181920] hover:bg-[#23242e] hover:text-blue-300 text-neutral-300 px-2 py-0.5 rounded border border-[#27272a] shrink-0 transition-colors cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono-tech">
          {history.map((item) => (
            <div key={item.id} className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs sm:text-[13px]">
                <span className="text-emerald-400 font-bold">avantika@portfolio</span>
                <span className="text-neutral-500">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-neutral-500">$</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="pl-4 border-l border-[#23242e] py-0.5">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <div className="bg-[#101116] border-t border-[#23242e] p-3 flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs sm:text-[13px] font-mono-tech shrink-0">
            <span className="text-emerald-400 font-bold hidden sm:inline">avantika@portfolio</span>
            <span className="text-neutral-500 hidden sm:inline">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-neutral-400 font-bold">$</span>
          </div>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command (try 'help', 'meta', 'role ai', or 'skills')..."
            className="flex-1 bg-transparent text-white font-mono-tech text-xs sm:text-[13px] outline-none placeholder-neutral-600 focus:placeholder-neutral-700"
            autoFocus
          />
          <button
            onClick={() => handleCommandRun(inputVal)}
            className="text-xs font-mono-tech px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded transition-colors cursor-pointer"
          >
            Run
          </button>
        </div>
      </div>
    </div>
  );
};
