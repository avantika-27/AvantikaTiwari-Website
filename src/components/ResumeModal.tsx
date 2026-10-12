import React, { useState } from 'react';
import { EXPERIENCES_DATA, EDUCATION_DATA, SKILL_CATEGORIES_DATA, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    setDownloading(true);
    setTimeout(() => {
      window.print();
      setDownloading(false);
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto print:p-0 print:bg-white">
      <div
        className="bg-[#121212] w-full max-w-4xl rounded-3xl shadow-2xl border border-[#27272a] overflow-hidden flex flex-col max-h-[92vh] my-auto animate-fade-in-up print:max-h-none print:shadow-none print:border-none print:rounded-none print:bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Bar (Hidden when printing) */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#18181b] text-white border-b border-[#27272a] print:hidden shrink-0">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px] text-blue-400">
              description
            </span>
            <div>
              <h3 className="font-headline text-lg font-bold text-[#ededed]">Curriculum Vitae</h3>
              <p className="font-mono-tech text-xs text-neutral-400">
                Avantika_Tiwari_Resume.pdf (Formatted Document)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="print-resume-btn"
              onClick={handlePrint}
              disabled={downloading}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-neutral-200 rounded-xl font-mono-tech text-xs font-bold transition-all shadow cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">
                print
              </span>
              <span>{downloading ? 'Preparing...' : 'Print / Export PDF'}</span>
            </button>

            <button
              id="close-resume-modal-btn"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-8 md:p-12 overflow-y-auto space-y-8 bg-[#0a0a0a] font-body text-neutral-200 print:bg-white print:text-black print:p-6" id="printable-resume">
          {/* Header */}
          <div className="border-b-2 border-[#27272a] print:border-black pb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <h1 className="font-headline text-3xl sm:text-4xl font-black tracking-tight text-white print:text-black">
                  AVANTIKA TIWARI
                </h1>
                <p className="font-mono-tech text-sm font-semibold text-blue-400 print:text-blue-600 uppercase tracking-wider mt-1">
                  Data Science & Analytics Professional
                </p>
              </div>
              <div className="font-mono-tech text-xs text-neutral-400 print:text-gray-700 text-left sm:text-right space-y-1">
                <p>San Francisco Bay Area, CA • (602) 877-1637</p>
                <p>astiwar1@asu.edu • avantika.tiwari2000@gmail.com</p>
                <p>
                  <a href="https://www.linkedin.com/in/avantika-tiwari-1bb6091a4/" target="_blank" rel="noopener noreferrer" className="hover:text-white print:text-gray-700 underline">linkedin.com/in/avantika-tiwari-1bb6091a4</a>
                  {' • '}
                  <a href="https://github.com/avantika-27" target="_blank" rel="noopener noreferrer" className="hover:text-white print:text-gray-700 underline">github.com/avantika-27</a>
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-headline text-lg font-bold text-white print:text-black border-b border-[#27272a] print:border-gray-300 pb-1 mb-3 uppercase tracking-wider">
              Education
            </h2>
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row justify-between items-start">
                  <div>
                    <h3 className="font-headline text-base font-bold text-[#ededed] print:text-black">
                      {edu.institution}
                    </h3>
                    <p className="font-body text-sm text-neutral-300 print:text-gray-800">
                      {edu.degree} {edu.gpa && <span className="font-mono-tech font-bold text-xs text-blue-400 print:text-black">({edu.gpa})</span>}
                    </p>
                    <p className="font-mono-tech text-xs text-neutral-400 print:text-gray-600 mt-0.5">
                      Coursework: {edu.coursework.join(', ')}
                    </p>
                  </div>
                  <div className="font-mono-tech text-xs text-neutral-400 print:text-gray-600 sm:text-right shrink-0 mt-1 sm:mt-0">
                    <p>{edu.location}</p>
                    <p>{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="font-headline text-lg font-bold text-white print:text-black border-b border-[#27272a] print:border-gray-300 pb-1 mb-3 uppercase tracking-wider">
              Experience
            </h2>
            <div className="space-y-5">
              {EXPERIENCES_DATA.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-col sm:flex-row justify-between items-baseline mb-1">
                    <h3 className="font-headline text-base font-bold text-[#ededed] print:text-black">
                      {exp.role} <span className="font-normal text-sm text-neutral-400 print:text-gray-600">| {exp.organization}</span>
                      {exp.employmentType && (
                        <span className="font-mono-tech text-xs font-normal text-neutral-400 print:text-gray-600 ml-1.5">
                          • {exp.employmentType}
                        </span>
                      )}
                    </h3>
                    <span className="font-mono-tech text-xs font-semibold text-blue-400 print:text-gray-600">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-outside pl-5 space-y-1.5 font-body text-sm text-neutral-300 print:text-gray-800">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>
                        {pt.highlight ? (
                          <>
                            {pt.text.split(pt.highlight)[0]}
                            <strong className="text-white print:text-black font-semibold">{pt.highlight}</strong>
                            {pt.text.split(pt.highlight)[1]}
                          </>
                        ) : (
                          pt.text
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="font-headline text-lg font-bold text-white print:text-black border-b border-[#27272a] print:border-gray-300 pb-1 mb-3 uppercase tracking-wider">
              Selected Projects & Research
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((p) => (
                <div key={p.id}>
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="font-headline text-sm font-bold text-[#ededed] print:text-black">
                      {p.title} <span className="font-mono-tech text-xs font-normal text-blue-400 print:text-blue-600">({p.badge})</span>
                    </h3>
                    <span className="font-mono-tech text-xs text-neutral-400 print:text-gray-600">
                      {p.highlightMetric.value} {p.highlightMetric.label}
                    </span>
                  </div>
                  <p className="font-body text-sm text-neutral-300 print:text-gray-800 leading-relaxed">
                    {p.description}
                  </p>
                  <p className="font-mono-tech text-xs text-neutral-400 print:text-gray-600 mt-1">
                    Tools: {p.tags.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div>
            <h2 className="font-headline text-lg font-bold text-white print:text-black border-b border-[#27272a] print:border-gray-300 pb-1 mb-3 uppercase tracking-wider">
              Technical Arsenal
            </h2>
            <div className="space-y-1.5 font-mono-tech text-xs">
              <p>
                <strong className="text-white print:text-black">Languages:</strong> Python, R, SQL, Java, Scala, Bash, C++
              </p>
              <p>
                <strong className="text-white print:text-black">ML & AI Frameworks:</strong> TensorFlow, PyTorch, Scikit-Learn, Keras, HuggingFace Transformers, OpenCV, NLTK, LangChain
              </p>
              <p>
                <strong className="text-white print:text-black">Cloud & DevOps:</strong> AWS (EC2, S3, SageMaker), GCP, Azure AI, Docker, Kubernetes, CI/CD Pipelines, Git
              </p>
              <p>
                <strong className="text-white print:text-black">Big Data & Databases:</strong> Apache Spark, Kafka, Hadoop, Snowflake, PostgreSQL, MySQL, MongoDB, Redis, Cassandra
              </p>
              <p>
                <strong className="text-white print:text-black">Analytics & Visualization:</strong> Tableau, Power BI, Matplotlib, Seaborn, Plotly, Grafana, Google Analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
