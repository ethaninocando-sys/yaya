import { ASSETS } from "@/lib/data";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/utils";
import ImageSlot from "@/components/ImageSlot";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden px-6 py-[120px] text-center text-boutique-cream sm:px-10">
      <ImageSlot src={ASSETS.workshop} alt="" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(20,13,8,0.68)] to-[rgba(20,13,8,0.78)]" />
      <div className="relative">
        <h2 className="font-dm-serif m-0 mb-4 text-[clamp(38px,5vw,66px)]">
          Ready to design yours?
        </h2>
        <p className="mx-auto mb-[30px] max-w-[440px] text-[18px] leading-[1.5] text-[#e4d4b8]">
          We&apos;ll bring the felt — you bring the story.
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-boutique-teal px-[42px] py-[18px] text-base font-bold text-boutique-brown no-underline transition-colors hover:bg-boutique-cream"
        >
          DM {INSTAGRAM_HANDLE} to book
        </a>
      </div>
    </section>
  );
}
