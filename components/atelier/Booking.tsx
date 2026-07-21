import { INSTAGRAM_URL } from "@/lib/utils";
import { SESSIONS } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Booking() {
  return (
    <section id="i3-book" className="bg-atelier-ink px-6 py-24 text-atelier-paper sm:px-10 md:px-[60px]">
      <div className="mx-auto max-w-[1120px]">
        <div className="mb-14 text-center">
          <div className="mb-3.5 text-xs uppercase tracking-[0.28em] text-atelier-gold2">
            Reserve
          </div>
          <h2 className="font-cormorant m-0 text-[clamp(36px,4.5vw,62px)] font-light">
            Choose your session
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {SESSIONS.map((session, i) => (
            <Reveal
              key={session.title}
              delay={i * 0.08}
              className={
                i === 0
                  ? "px-[34px] py-[38px]"
                  : "border-t border-[rgba(246,243,236,0.16)] px-[34px] py-[38px] md:border-l md:border-t-0"
              }
            >
              <div className="font-cormorant mb-3.5 text-[30px]">{session.title}</div>
              <p className="m-0 text-[15px] font-light leading-[1.7] text-[#cfc6b8]">
                {session.desc}
              </p>
            </Reveal>
          ))}
        </div>
        <div className="mt-[52px] text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[rgba(246,243,236,0.5)] px-[42px] py-4 text-xs uppercase tracking-[0.24em] text-atelier-paper no-underline transition-colors hover:border-atelier-gold2 hover:bg-atelier-gold2 hover:text-atelier-ink"
          >
            Enquire to book
          </a>
        </div>
      </div>
    </section>
  );
}
