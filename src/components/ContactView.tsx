import React, { useState } from 'react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    inquiryType: 'Full-time Opportunity',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('avantika.tiwari2000@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="flex flex-col w-full relative pb-16 pt-4 md:pt-8 animate-fade-in">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-0 w-full">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[1.5px] bg-blue-400"></span>
            <span className="font-mono-tech text-[12px] text-blue-400 tracking-[0.2em] uppercase font-semibold">
              Get in Touch
            </span>
          </div>
          <h1 className="font-headline text-[36px] md:text-[44px] font-bold text-[#ededed] tracking-tight mb-3">
            Let's build intelligent systems together.
          </h1>
          <p className="font-body text-[18px] text-neutral-400 leading-[1.6]">
            Whether you are discussing open machine learning engineering roles, research collaborations in Generative AI, or data architecture consulting, I'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Minimalist Bento Contact Form */}
          <div className="lg:col-span-7 bg-[#121212] p-8 md:p-10 rounded-2xl border border-[#27272a] shadow-xl">
            {submitted ? (
              <div className="py-12 text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-800/50 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-[32px]">
                    check_circle
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-[#ededed] mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="font-body text-neutral-400 max-w-md mx-auto mb-6">
                  Thank you for reaching out, {formData.name}. I have received your note regarding{' '}
                  <strong className="text-white">{formData.subject || formData.inquiryType}</strong> and will get back to you promptly.
                </p>
                <button
                  id="send-another-message-btn"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      subject: '',
                      inquiryType: 'Full-time Opportunity',
                      message: ''
                    });
                  }}
                  className="bg-white text-black px-6 py-2.5 rounded-xl font-mono-tech text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="contact-name"
                      className="font-mono-tech text-[12px] uppercase tracking-wider text-neutral-400 mb-2 font-semibold"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Dr. Alex Morgan"
                      className="w-full py-2.5 px-3 bg-[#18181b] border border-[#27272a] rounded-xl font-body text-[16px] text-[#ededed] placeholder-neutral-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="contact-email"
                      className="font-mono-tech text-[12px] uppercase tracking-wider text-neutral-400 mb-2 font-semibold"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex.morgan@company.com"
                      className="w-full py-2.5 px-3 bg-[#18181b] border border-[#27272a] rounded-xl font-body text-[16px] text-[#ededed] placeholder-neutral-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Inquiry Type */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="contact-inquiry"
                      className="font-mono-tech text-[12px] uppercase tracking-wider text-neutral-400 mb-2 font-semibold"
                    >
                      Inquiry Nature
                    </label>
                    <select
                      id="contact-inquiry"
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({ ...formData, inquiryType: e.target.value })
                      }
                      className="w-full py-2.5 px-3 bg-[#18181b] border border-[#27272a] rounded-xl font-body text-[15px] text-[#ededed] focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors cursor-pointer"
                    >
                      <option value="Full-time Opportunity">Full-time Opportunity</option>
                      <option value="Research Collaboration">Research Collaboration</option>
                      <option value="Consulting / Advisory">Data Engineering Consulting</option>
                      <option value="Networking / Coffee Chat">Networking & Mentorship</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="contact-subject"
                      className="font-mono-tech text-[12px] uppercase tracking-wider text-neutral-400 mb-2 font-semibold"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. AI Research Role @ Labs"
                      className="w-full py-2.5 px-3 bg-[#18181b] border border-[#27272a] rounded-xl font-body text-[16px] text-[#ededed] placeholder-neutral-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col mt-2">
                  <label
                    htmlFor="contact-message"
                    className="font-mono-tech text-[12px] uppercase tracking-wider text-neutral-400 mb-2 font-semibold"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Provide details regarding the role, timeline, or collaborative idea..."
                    className="w-full py-2.5 px-3 bg-[#18181b] border border-[#27272a] rounded-xl font-body text-[16px] text-[#ededed] placeholder-neutral-500 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-xl font-mono-tech text-[13px] uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Transmit Message</span>
                    <span className="material-symbols-outlined text-[18px]">
                      send
                    </span>
                  </button>
                  <span className="font-mono-tech text-[11px] text-neutral-400">
                    Guaranteed response within 24 hours
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Location */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Direct Email Card */}
            <div className="bg-[#121212] p-6 rounded-2xl border border-[#27272a] shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-950/80 border border-blue-800/50 text-blue-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    alternate_email
                  </span>
                </div>
                <div>
                  <h3 className="font-headline text-[17px] font-bold text-[#ededed]">
                    Direct Email
                  </h3>
                  <span className="font-mono-tech text-[12px] text-neutral-400">
                    avantika.tiwari2000@gmail.com
                  </span>
                </div>
              </div>
              <button
                id="copy-email-direct-btn"
                onClick={handleCopyEmail}
                className="w-full mt-3 py-2.5 px-4 bg-[#18181b] hover:bg-[#27272a] border border-[#27272a] rounded-xl font-mono-tech text-[12px] text-[#ededed] font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {copiedEmail ? 'done' : 'content_copy'}
                </span>
                <span>{copiedEmail ? 'Email Copied!' : 'Copy to Clipboard'}</span>
              </button>
            </div>

            {/* Profiles & Repos */}
            <div className="bg-[#121212] p-6 rounded-2xl border border-[#27272a] shadow-xl flex flex-col gap-3">
              <h3 className="font-headline text-[17px] font-bold text-[#ededed] mb-1">
                Verified Profiles
              </h3>

              <a
                href="https://www.linkedin.com/in/avantika-tiwari-1bb6091a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#18181b] hover:bg-[#27272a] border border-[#27272a] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue-400">
                    link
                  </span>
                  <div>
                    <p className="font-mono-tech text-xs font-bold text-[#ededed]">
                      LinkedIn
                    </p>
                    <p className="font-body text-xs text-neutral-400">
                      in/avantika-tiwari-1bb6091a4
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform text-[18px]">
                  open_in_new
                </span>
              </a>

              <a
                href="https://github.com/avantika-27"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#18181b] hover:bg-[#27272a] border border-[#27272a] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue-400">
                    code
                  </span>
                  <div>
                    <p className="font-mono-tech text-xs font-bold text-[#ededed]">
                      GitHub
                    </p>
                    <p className="font-body text-xs text-neutral-400">
                      github.com/avantika-27
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform text-[18px]">
                  open_in_new
                </span>
              </a>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#18181b] border border-[#27272a]">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-emerald-400">
                    location_on
                  </span>
                  <div>
                    <p className="font-mono-tech text-xs font-bold text-[#ededed]">
                      Current Location
                    </p>
                    <p className="font-body text-xs text-neutral-400">
                      San Francisco Bay Area, California, USA
                    </p>
                  </div>
                </div>
                <span className="font-mono-tech text-[10px] bg-emerald-950/80 border border-emerald-800/50 text-emerald-300 font-bold px-2 py-0.5 rounded">
                  PT / UTC-7
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
