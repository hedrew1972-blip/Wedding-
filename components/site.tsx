"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChangeEvent, FormEvent, ReactNode, useState } from "react";

const inquiryEmail = "hello@nolaweddingpainter.com";

const gallery = [
  { src: "/images/wedding-painting-01.png", alt: "First dance live wedding painting in warm reception light", category: "First Dance" },
  { src: "/images/wedding-painting-02.png", alt: "Elegant reception scene painted live at a wedding", category: "Reception" },
  { src: "/images/wedding-painting-03.png", alt: "New Orleans wedding celebration with movement and joy", category: "New Orleans Weddings" },
  { src: "/images/wedding-painting-04.png", alt: "Atmospheric destination wedding painting with fine art detail", category: "Destination Weddings" },
  { src: "/images/andrew-live-01.png", alt: "Andrew Wilkie painting live as guests watch", category: "Ceremony" },
  { src: "/images/andrew-live-02.png", alt: "Live wedding painter setup with artwork unfolding onsite", category: "Reception" }
] as const;

const galleryCategories = ["First Dance", "Ceremony", "Reception", "New Orleans Weddings", "Destination Weddings"] as const;

const whyLivePainting = [
  ["✦", "Live Entertainment", "Guests enjoy watching the painting evolve throughout the celebration."],
  ["◊", "Fine Art Heirloom", "A lasting keepsake created during your wedding day and finished with gallery-level care."],
  ["⚜", "New Orleans Artist", "Local experience with weddings, celebrations, and culture throughout New Orleans and beyond."]
] as const;

const processSteps = [
  ["01", "Consultation", "Share your date, venue, planner details, guest count, and the moment you imagine becoming art."],
  ["02", "Planning", "Andrew coordinates the composition, canvas, arrival time, sight lines, lighting, and venue logistics."],
  ["03", "Live Painting During Wedding", "The painting begins onsite while guests watch the memory emerge brushstroke by brushstroke."],
  ["04", "Final Presentation", "The nearly finished artwork is revealed during the celebration whenever the timeline allows."],
  ["05", "Heirloom Artwork", "Final refinements preserve the movement, atmosphere, and emotion of the day for your home."]
] as const;

const testimonials = [
  "Our guests kept walking back to the easel all night. The painting became part of the reception.",
  "It captured the feeling of the room in a way photos never could. Warm, alive, and completely personal.",
  "Andrew was calm, fast, professional, and so engaging. It felt like having a fine artist and a guest experience in one."
] as const;

const experienceQuestions = [
  ["Where does the artist set up?", "Andrew typically sets up where guests can enjoy the process without interrupting service, dancing, photography, or planner flow."],
  ["How long does it take?", "Most of the artwork is created during the event, beginning with the setting and building toward the people, movement, and final atmosphere."],
  ["Will guests interact?", "Yes. Guest engagement is part of the magic, and Andrew is known for making the easel feel welcoming without becoming distracting."],
  ["When is the painting delivered?", "A presentation can happen onsite, with any final polish handled afterward so the piece feels ready to display."],
  ["How does planning work?", "The planning process is simple: key contacts, timeline, setup location, selected moment, and any meaningful family details are confirmed in advance."]
] as const;

const plannerPoints = [
  "Clear communication before the wedding week",
  "Early arrival and professional setup",
  "Coordination with venue, photo, video, band, and catering flow",
  "Flexible logistics for ceremony, cocktail hour, reception, or destination timelines",
  "Reliable execution that adds beauty without adding planner stress",
  "A guest-facing experience that feels elevated, warm, and controlled"
] as const;

const faqs = [
  ["How long does the painting take?", "Andrew paints throughout the event, usually developing the background, atmosphere, figures, and key details over several hours onsite."],
  ["Can guests watch?", "Absolutely. Watching the painting unfold in real time is central to the experience."],
  ["Do you travel?", "Yes. New Orleans and Louisiana weddings are the home base, with travel available for destination weddings."],
  ["What size paintings are available?", "Canvas size is selected around the venue, guest experience, timeline, and where the finished heirloom will live."],
  ["Can family members be included?", "Yes. Important family members, pets, floral details, architecture, and meaningful heirlooms can often be woven into the composition."],
  ["Do you work from photos afterward?", "Andrew creates the painting onsite and may use photos afterward for final refinement, accuracy, and polish."],
  ["How far in advance should we book?", "As soon as your wedding date and venue are confirmed. Popular New Orleans spring and fall weekends can be limited." ]
] as const;

const initialForm = {
  name: "",
  partner: "",
  email: "",
  phone: "",
  date: "",
  venue: "",
  planner: "",
  guests: "",
  vision: ""
};

type InquiryForm = typeof initialForm;

type LightboxProps = {
  modal: number | null;
  setModal: (index: number | null) => void;
};

export function HomePage() {
  const [modal, setModal] = useState<number | null>(null);

  return (
    <Shell>
      <Hero />
      <WhyLivePainting />
      <FeaturedGallery setModal={setModal} />
      <ExperienceTimeline />
      <AboutAndrew />
      <Testimonials />
      <FeaturedVideo />
      <FinalCTA />
      <Lightbox modal={modal} setModal={setModal} />
    </Shell>
  );
}

export function GalleryPage() {
  const [modal, setModal] = useState<number | null>(null);

  return (
    <Shell>
      <PageHero eyebrow="Gallery" title="Paintings that hold the room, the movement, and the feeling." body="Explore the visual language of live wedding painting: first dances, ceremonies, receptions, New Orleans celebrations, and destination wedding scenes." />
      <GalleryCategories />
      <GalleryGrid setModal={setModal} showCategories />
      <FinalCTA />
      <Lightbox modal={modal} setModal={setModal} />
    </Shell>
  );
}

export function ExperiencePage() {
  return (
    <Shell>
      <PageHero eyebrow="The Experience" title="What It’s Like To Have A Live Wedding Painter" body="A live wedding painting is both fine art and a shared experience. Guests gather, the canvas changes throughout the night, and the finished piece becomes a family heirloom with a story attached to every brushstroke." />
      <ExperienceTimeline />
      <QuestionGrid items={experienceQuestions} />
      <FinalCTA />
    </Shell>
  );
}

export function PlannerPage() {
  return (
    <Shell>
      <PageHero eyebrow="For Wedding Planners" title="A Seamless Experience For Planners" body="Andrew brings the polish, responsiveness, and calm execution planners need from a creative partner working inside a luxury wedding timeline." />
      <section className="section-wrap py-16 md:py-24">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {plannerPoints.map((point) => (
            <article key={point} className="card p-6">
              <span className="text-2xl text-gold">⚜</span>
              <p className="mt-4 leading-7 text-charcoal/75">{point}</p>
            </article>
          ))}
        </div>
      </section>
      <InquirySection planner />
    </Shell>
  );
}

export function FAQPage() {
  return (
    <Shell>
      <PageHero eyebrow="FAQ" title="Questions couples and planners ask most often." body="The live painting experience is designed to feel elegant, easy, and memorable from the first inquiry through the finished artwork." />
      <QuestionGrid items={faqs} />
      <FinalCTA />
    </Shell>
  );
}

export function ContactPage() {
  return (
    <Shell>
      <PageHero eyebrow="Contact" title="Reserve Your Wedding Date" body="Dates are limited each season. Share what you know so the conversation can begin with care and clarity." />
      <InquirySection />
    </Shell>
  );
}

const Shell = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
    <Link href="/contact" className="fixed bottom-4 right-4 z-50 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ivory shadow-soft md:hidden">
      Check Availability
    </Link>
  </>
);

const Header = () => (
  <header className="fixed top-0 z-50 w-full border-b border-charcoal/10 bg-ivory/90 backdrop-blur-xl">
    <div className="section-wrap flex items-center justify-between py-4">
      <Link href="/" className="flex items-center gap-3 text-charcoal" aria-label="NOLA Wedding Painter home">
        <FleurDeLis />
        <span className="serif text-base leading-tight md:text-lg">NOLA Wedding Painter</span>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium text-charcoal/70 lg:flex">
        <Link href="/gallery">Gallery</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/planners">Planners</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Link href="/contact" className="rounded-full bg-charcoal px-4 py-2 text-sm font-semibold text-ivory transition hover:bg-payne">
        Check Availability
      </Link>
    </div>
  </header>
);

const FleurDeLis = () => (
  <svg className="h-10 w-8 text-gold" viewBox="0 0 80 100" fill="none" aria-hidden="true">
    <path d="M40 6C28 24 31 39 40 51C49 39 52 24 40 6Z" fill="currentColor" opacity="0.9" />
    <path d="M34 55C17 37 8 43 7 58C21 56 27 64 32 78C34 70 36 63 40 56" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M46 55C63 37 72 43 73 58C59 56 53 64 48 78C46 70 44 63 40 56" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M25 86H55" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
    <path d="M40 52V91" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
  </svg>
);

const Hero = () => (
  <section className="relative flex min-h-screen items-end overflow-hidden pt-28">
    <Image src="/images/wedding-painting-01.png" alt="Live wedding painting that becomes a family heirloom" fill priority className="-z-20 object-cover" sizes="100vw" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/15" />
    <div className="section-wrap pb-20 text-ivory md:pb-28">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[.28em] text-gold">Live Wedding Paintings by Andrew Wilkie</p>
      <h1 className="serif max-w-5xl text-5xl leading-[1.02] md:text-7xl">Live Wedding Paintings That Become Family Heirlooms</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-ivory/88 md:text-xl">
        Watch your wedding day transformed into a timeless work of art while your guests experience the creative process in real time.
      </p>
      <div className="mt-9 flex flex-wrap gap-4">
        <Link href="/contact" className="rounded-full bg-gold px-7 py-3 font-semibold text-charcoal shadow-soft transition hover:bg-[#c5a968]">Check Availability</Link>
        <Link href="/gallery" className="rounded-full border border-ivory/35 px-7 py-3 font-semibold text-ivory transition hover:bg-ivory hover:text-charcoal">View Gallery</Link>
      </div>
    </div>
  </section>
);

const PageHero = ({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) => (
  <section className="section-wrap pt-32 md:pt-40 pb-14 md:pb-20">
    <p className="text-sm font-semibold uppercase tracking-[.28em] text-gold">{eyebrow}</p>
    <h1 className="serif mt-5 max-w-5xl text-4xl leading-tight text-charcoal md:text-6xl">{title}</h1>
    <p className="mt-6 max-w-3xl text-lg leading-8 text-charcoal/72">{body}</p>
  </section>
);

const WhyLivePainting = () => (
  <section className="section-wrap py-16 md:py-24">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[.24em] text-gold">Why live wedding painting</p>
      <h2 className="serif mt-4 text-4xl text-charcoal md:text-5xl">Fine art, live performance, and a memory your guests help witness.</h2>
    </div>
    <div className="mt-10 grid gap-5 md:grid-cols-3">
      {whyLivePainting.map(([icon, title, body]) => (
        <article className="card p-7" key={title}>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-2xl text-gold">{icon}</div>
          <h3 className="serif mt-6 text-2xl text-charcoal">{title}</h3>
          <p className="mt-3 leading-7 text-charcoal/70">{body}</p>
        </article>
      ))}
    </div>
  </section>
);

const FeaturedGallery = ({ setModal }: { setModal: (n: number) => void }) => (
  <section className="bg-payne py-16 text-ivory md:py-24">
    <div className="section-wrap">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.24em] text-gold">Featured gallery</p>
          <h2 className="serif mt-4 text-4xl md:text-5xl">Paintings should feel important.</h2>
        </div>
        <Link href="/gallery" className="text-sm font-semibold uppercase tracking-[.18em] text-gold">View full gallery</Link>
      </div>
      <GalleryGrid setModal={setModal} dark />
    </div>
  </section>
);

const GalleryCategories = () => (
  <section className="section-wrap pb-8">
    <div className="flex flex-wrap gap-3">
      {galleryCategories.map((category) => (
        <span key={category} className="rounded-full border border-charcoal/15 px-4 py-2 text-sm font-semibold text-charcoal/75">
          {category}
        </span>
      ))}
    </div>
  </section>
);

const GalleryGrid = ({ setModal, dark = false, showCategories = false }: { setModal: (n: number) => void; dark?: boolean; showCategories?: boolean }) => (
  <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
    {gallery.map((item, index) => (
      <button key={`${item.src}-${item.category}`} onClick={() => setModal(index)} className="group mb-5 block w-full break-inside-avoid text-left" type="button">
        <span className="card relative block overflow-hidden">
          <Image src={item.src} alt={item.alt} width={900} height={720} className="h-auto w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
        </span>
        <span className={`mt-3 block text-sm ${dark ? "text-ivory/78" : "text-charcoal/72"}`}>{showCategories ? item.category : item.alt}</span>
      </button>
    ))}
  </div>
);

const ExperienceTimeline = () => (
  <section className="section-wrap py-16 md:py-24">
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[.24em] text-gold">The experience</p>
      <h2 className="serif mt-4 text-4xl text-charcoal md:text-5xl">From consultation to heirloom artwork.</h2>
    </div>
    <div className="mt-12 grid gap-6 lg:grid-cols-5">
      {processSteps.map(([number, title, body]) => (
        <article key={number} className="relative border-l border-gold/50 pl-6 lg:border-l-0 lg:border-t lg:pt-7">
          <div className="serif text-3xl text-gold">{number}</div>
          <h3 className="serif mt-4 text-2xl text-charcoal">{title}</h3>
          <p className="mt-3 leading-7 text-charcoal/70">{body}</p>
        </article>
      ))}
    </div>
  </section>
);

const AboutAndrew = () => (
  <section className="section-wrap grid gap-10 py-16 md:grid-cols-[.95fr_1.05fr] md:items-center md:py-24">
    <div className="card relative aspect-[4/5] overflow-hidden">
      <Image src="/images/andrew-live-01.png" alt="Andrew Wilkie painting live at a wedding" fill className="object-cover" sizes="(min-width: 768px) 45vw, 100vw" />
    </div>
    <div>
      <p className="text-sm font-semibold uppercase tracking-[.24em] text-gold">About the artist</p>
      <h2 className="serif mt-4 text-4xl text-charcoal md:text-5xl">Meet Andrew Wilkie</h2>
      <div className="mt-6 space-y-5 text-lg leading-8 text-charcoal/75">
        <p>For more than two decades Andrew has entertained and inspired audiences through live art in New Orleans.</p>
        <p>As guests gather around his easel, they watch a wedding memory come to life brushstroke by brushstroke.</p>
        <p>His impressionistic style captures atmosphere, emotion, movement and light while preserving the feeling of the moment.</p>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="section-wrap py-16 md:py-24">
    <p className="text-sm font-semibold uppercase tracking-[.24em] text-gold">Social proof</p>
    <h2 className="serif mt-4 max-w-3xl text-4xl text-charcoal md:text-5xl">Couples remember the artwork and the experience.</h2>
    <div className="mt-10 grid gap-5 md:grid-cols-3">
      {testimonials.map((quote) => (
        <figure key={quote} className="card p-7">
          <blockquote className="serif text-2xl leading-snug text-charcoal">“{quote}”</blockquote>
          <figcaption className="mt-6 text-sm uppercase tracking-[.18em] text-gold">Client note</figcaption>
        </figure>
      ))}
    </div>
  </section>
);

const FeaturedVideo = () => (
  <section className="section-wrap py-16 md:py-24">
    <div className="grid gap-10 md:grid-cols-[.85fr_1.15fr] md:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[.24em] text-gold">Featured painting video</p>
        <h2 className="serif mt-4 text-4xl text-charcoal md:text-5xl">See the celebration become art.</h2>
        <p className="mt-5 leading-8 text-charcoal/72">Use this feature area for a film showing setup, guests watching, painting progression, the finished artwork, and the couple’s reaction.</p>
      </div>
      <div className="card relative aspect-video overflow-hidden bg-charcoal text-ivory">
        <Image src="/images/andrew-live-02.png" alt="Video preview of Andrew Wilkie painting live" fill className="object-cover opacity-70" sizes="(min-width: 768px) 55vw, 100vw" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-ivory/50 bg-ivory/15 text-3xl backdrop-blur">▶</span>
        </div>
      </div>
    </div>
  </section>
);

const QuestionGrid = ({ items }: { items: readonly (readonly [string, string])[] }) => (
  <section className="section-wrap py-16 md:py-24">
    <div className="grid gap-5 md:grid-cols-2">
      {items.map(([question, answer]) => (
        <article key={question} className="card p-7">
          <h2 className="serif text-2xl text-charcoal">{question}</h2>
          <p className="mt-4 leading-7 text-charcoal/72">{answer}</p>
        </article>
      ))}
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="section-wrap py-16 md:py-24">
    <div className="relative overflow-hidden rounded-[2rem] bg-charcoal p-8 text-ivory shadow-soft md:p-14">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
      <p className="text-sm font-semibold uppercase tracking-[.24em] text-gold">Reserve your wedding date</p>
      <h2 className="serif mt-4 max-w-3xl text-4xl md:text-6xl">Dates are limited each season.</h2>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-ivory/78">Begin the conversation today.</p>
      <Link href="/contact" className="mt-8 inline-flex rounded-full bg-gold px-7 py-3 font-semibold text-charcoal">Check Availability</Link>
    </div>
  </section>
);

const InquirySection = ({ planner = false }: { planner?: boolean }) => {
  const [form, setForm] = useState<InquiryForm>(initialForm);
  const [ok, setOk] = useState(false);

  const update = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const lines = [
      planner ? "Planner inquiry" : "Wedding painting inquiry",
      `Name: ${form.name}`,
      `Partner Name: ${form.partner || "Not provided"}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Wedding Date: ${form.date || "Not provided"}`,
      `Venue: ${form.venue || "Not provided"}`,
      `Planner: ${form.planner || "Not provided"}`,
      `Guest Count: ${form.guests || "Not provided"}`,
      "",
      "Tell Me About Your Vision:",
      form.vision
    ];
    const subject = encodeURIComponent(`${planner ? "Planner" : "Wedding"} inquiry from ${form.name}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${inquiryEmail}?subject=${subject}&body=${body}`;
    setOk(true);
  };

  return (
    <section className="section-wrap py-16 md:py-24">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[.24em] text-gold">{planner ? "Planner inquiry form" : "Luxury inquiry form"}</p>
        <h2 className="serif mt-4 text-4xl text-charcoal md:text-5xl">{planner ? "Let’s coordinate beautifully." : "Tell Andrew about your celebration."}</h2>
        <p className="mt-5 leading-8 text-charcoal/72">A prepared email draft will open with your inquiry details ready to send.</p>
      </div>
      <form onSubmit={submit} className="grid gap-5 md:grid-cols-2">
        <Input name="name" label="Name" value={form.name} onChange={update} required />
        <Input name="partner" label="Partner Name" value={form.partner} onChange={update} />
        <Input name="email" label="Email" value={form.email} onChange={update} type="email" required />
        <Input name="phone" label="Phone" value={form.phone} onChange={update} />
        <Input name="date" label="Wedding Date" value={form.date} onChange={update} />
        <Input name="venue" label="Venue" value={form.venue} onChange={update} />
        <Input name="planner" label="Planner" value={form.planner} onChange={update} />
        <Input name="guests" label="Guest Count" value={form.guests} onChange={update} />
        <label className="md:col-span-2">
          <span className="mb-2 block text-sm font-medium text-charcoal/80">Tell Me About Your Vision</span>
          <textarea name="vision" value={form.vision} onChange={update} required className="card min-h-40 w-full px-4 py-3 text-charcoal outline-none transition focus:border-gold" />
        </label>
        <button className="w-fit rounded-full bg-charcoal px-7 py-3 font-semibold text-ivory" type="submit">Submit</button>
      </form>
      {ok && <p className="mt-4 text-gold">Your email draft is ready. Send it from your mail app to complete the inquiry.</p>}
    </section>
  );
};

const Input = ({
  name,
  label,
  value,
  onChange,
  type = "text",
  required = false
}: {
  name: keyof InquiryForm;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) => (
  <label>
    <span className="mb-2 block text-sm font-medium text-charcoal/80">{label}</span>
    <input name={name} value={value} onChange={onChange} type={type} required={required} className="card w-full px-4 py-3 text-charcoal outline-none transition focus:border-gold" />
  </label>
);

const Lightbox = ({ modal, setModal }: LightboxProps) => (
  <AnimatePresence>
    {modal !== null && (
      <motion.button
        className="fixed inset-0 z-[90] bg-charcoal/95 p-5 md:p-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setModal(null)}
        aria-label="Close gallery image"
        type="button"
      >
        <span className="relative block h-full w-full">
          <Image src={gallery[modal].src} alt={gallery[modal].alt} fill className="object-contain" sizes="100vw" />
        </span>
      </motion.button>
    )}
  </AnimatePresence>
);

const Footer = () => (
  <footer className="border-t border-charcoal/10 py-10">
    <div className="section-wrap flex flex-col gap-3 text-sm text-charcoal/70 md:flex-row md:items-center md:justify-between">
      <p>NOLAWeddingPainter.com · Andrew Wilkie · New Orleans, Louisiana</p>
      <p>Wedding Painter New Orleans · Live Event Painter New Orleans · {inquiryEmail}</p>
    </div>
  </footer>
);
