"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChangeEvent, FormEvent, useState } from "react";

const inquiryEmail = "hello@nolaweddingpainter.com";

const gallery = [
  ["/images/wedding-painting-01.png", "First dance, painted in glowing movement."],
  ["/images/wedding-painting-02.png", "Reception energy and live color harmonies."],
  ["/images/wedding-painting-03.png", "Second line joy with expressive wedding gestures."],
  ["/images/wedding-painting-04.png", "New Orleans atmosphere with painterly soul."],
  ["/images/andrew-live-01.png", "Live event painter New Orleans, in action."],
  ["/images/andrew-live-02.png", "Live wedding painting New Orleans, unfolding in real time."]
] as const;

const processSteps = [
  ["1", "Share the date", "Send the venue, timing, guest count, and the moment you most want remembered."],
  ["2", "Shape the scene", "Andrew confirms the canvas, composition, setup needs, and arrival plan with your team."],
  ["3", "Watch it unfold", "Guests see the painting come alive during the celebration, with finishing details completed after the event."]
];

const addOns = [
  "Larger custom canvas sizes",
  "Additional painting hours",
  "Travel beyond the New Orleans area",
  "Welcome party or rehearsal dinner coverage",
  "Priority studio finishing timeline",
  "Custom compositional studies before the event"
];

const testimonials = [
  "Our guests kept walking back to the easel all night. The painting became part of the reception.",
  "It captured the feeling of the room in a way photos never could. Warm, alive, and completely personal.",
  "The process was calm and professional from the first email through the finished piece."
];

const faqs = [
  ["How early should we book?", "As soon as you have a date and venue. Popular spring and fall weekends in New Orleans can book well in advance."],
  ["What moment is usually painted?", "Most couples choose the first dance, ceremony exit, reception entrance, or a composed scene that brings meaningful people and details together."],
  ["How much space is needed?", "A small, visible area for an easel, paints, and light is usually enough. Andrew coordinates setup details with the planner or venue."],
  ["Is the painting finished that night?", "The main composition is created live during the celebration. Final refinements are completed in studio so the finished artwork feels polished."],
  ["Do you travel?", "Yes. New Orleans-area celebrations are the starting point, with travel available for destination events and surrounding regions."]
];

const initialForm = {
  name: "",
  partner: "",
  email: "",
  phone: "",
  date: "",
  venue: "",
  city: "",
  guests: "",
  planner: "",
  moment: "",
  mood: "",
  details: "",
  budget: "",
  message: ""
};

type InquiryForm = typeof initialForm;

export default function Site() {
  const [modal, setModal] = useState<number | null>(null);

  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <Gallery setModal={setModal} />
      <About />
      <HowItWorks />
      <Packages />
      <AddOns />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <AnimatePresence>
        {modal !== null && (
          <motion.button
            className="fixed inset-0 z-[90] bg-black/85 p-5 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
            aria-label="Close gallery image"
          >
            <span className="relative block h-full w-full">
              <Image src={gallery[modal][0]} alt={gallery[modal][1]} fill className="object-contain" sizes="100vw" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>
      <a href="#inquiry" className="fixed bottom-4 right-4 z-50 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-bg shadow-soft md:hidden">
        Inquire About Your Date
      </a>
    </>
  );
}

const Header = () => (
  <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-bg/85 backdrop-blur">
    <div className="section-wrap flex items-center justify-between py-4">
      <a href="#top" className="serif text-lg">NOLA Wedding Painter</a>
      <nav className="hidden items-center gap-6 text-sm text-ivory/75 md:flex">
        <a href="#gallery">Gallery</a>
        <a href="#how-it-works">Process</a>
        <a href="#investment">Investment</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a href="#inquiry" className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-bg">Inquire</a>
    </div>
  </header>
);

const Hero = () => (
  <section id="top" className="relative flex min-h-[92vh] items-end pt-24">
    <div className="absolute inset-0 -z-10 bg-[url('/images/wedding-painting-01.png')] bg-cover bg-center" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-bg/80 to-bg/20" />
    <div className="section-wrap pb-20 md:pb-24">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[.22em] text-gold">Live wedding painting in New Orleans</p>
      <h1 className="serif max-w-4xl text-4xl leading-tight md:text-6xl">Your wedding, painted live as the night unfolds.</h1>
      <p className="mt-5 max-w-3xl text-base leading-8 text-ivory/85 md:text-lg">
        Andrew Wilkie creates atmospheric live wedding paintings that become part of the celebration, giving your guests something unforgettable to watch and your family a piece of the night to keep forever.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#inquiry" className="rounded-full bg-gold px-6 py-3 font-semibold text-bg">Ask About Your Date</a>
        <a href="#gallery" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-ivory">View Gallery</a>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="section-wrap py-20 md:py-24">
    <div className="max-w-4xl">
      <h2 className="serif text-3xl md:text-4xl">A painting your guests get to experience.</h2>
      <p className="mt-5 text-lg leading-8 text-ivory/85">
        Some wedding art is made after the day is over. Andrew's work happens in the room, in the music, the movement, the laughter, and the glow of the reception. The finished piece holds the atmosphere of the night because it was created inside it.
      </p>
    </div>
  </section>
);

const Gallery = ({ setModal }: { setModal: (n: number) => void }) => (
  <section id="gallery" className="section-wrap py-20">
    <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="serif text-3xl md:text-4xl">Gallery</h2>
        <p className="mt-3 max-w-2xl text-ivory/75">A visual direction for the site while real portfolio selections are added.</p>
      </div>
    </div>
    <div className="grid gap-5 md:grid-cols-3">
      {gallery.map((g, i) => (
        <button key={g[0]} onClick={() => setModal(i)} className="group text-left" type="button">
          <span className="card relative block aspect-[16/10] overflow-hidden">
            <Image src={g[0]} alt={g[1]} fill className="object-cover transition duration-500 group-hover:scale-105" loading="lazy" sizes="(min-width: 768px) 33vw, 100vw" />
          </span>
          <span className="mt-3 block text-sm text-ivory/80">{g[1]}</span>
        </button>
      ))}
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section-wrap grid gap-10 py-20 md:grid-cols-[1.1fr_.9fr] md:items-center">
    <div>
      <h2 className="serif text-3xl md:text-4xl">Meet Andrew Wilkie</h2>
      <p className="mt-5 text-lg leading-8 text-ivory/85">
        Andrew Wilkie is a New Orleans artist and live performer with more than two decades of experience drawing and painting in front of people. His wedding paintings are built for atmosphere: the gesture of a first dance, the glow of the room, the guests gathered close, and the unmistakable feeling of New Orleans after dark.
      </p>
    </div>
    <div className="card relative aspect-[4/3] overflow-hidden">
      <Image src="/images/andrew-live-01.png" alt="Live painter working at a New Orleans wedding reception" fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="section-wrap py-20">
    <h2 className="serif text-3xl md:text-4xl">How It Works</h2>
    <div className="mt-8 grid gap-5 md:grid-cols-3">
      {processSteps.map(([number, title, body]) => (
        <article key={title} className="card p-6">
          <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-bold text-bg">{number}</div>
          <h3 className="serif text-2xl">{title}</h3>
          <p className="mt-3 leading-7 text-ivory/75">{body}</p>
        </article>
      ))}
    </div>
  </section>
);

const Packages = () => (
  <section id="investment" className="section-wrap py-20">
    <div className="max-w-3xl">
      <h2 className="serif text-3xl md:text-4xl">Investment</h2>
      <p className="mt-5 text-lg leading-8 text-ivory/85">
        Live wedding painting begins at $2,500 for New Orleans-area celebrations. Final pricing depends on canvas size, hours on site, location, timeline, and any custom finishing requests.
      </p>
      <a href="#inquiry" className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 font-semibold text-bg">Request Availability</a>
    </div>
  </section>
);

const AddOns = () => (
  <section id="add-ons" className="section-wrap py-20">
    <h2 className="serif text-3xl md:text-4xl">Add-ons</h2>
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {addOns.map((item) => (
        <div key={item} className="card px-5 py-4 text-ivory/85">{item}</div>
      ))}
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="section-wrap py-20">
    <h2 className="serif text-3xl md:text-4xl">What couples notice</h2>
    <div className="mt-8 grid gap-5 md:grid-cols-3">
      {testimonials.map((quote) => (
        <figure key={quote} className="card p-6">
          <blockquote className="serif text-2xl leading-snug text-ivory">"{quote}"</blockquote>
          <figcaption className="mt-5 text-sm uppercase tracking-[.18em] text-gold">Sample client note</figcaption>
        </figure>
      ))}
    </div>
  </section>
);

const FAQ = () => (
  <section id="faq" className="section-wrap py-20">
    <h2 className="serif text-3xl md:text-4xl">FAQ</h2>
    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {faqs.map(([question, answer]) => (
        <article key={question} className="card p-6">
          <h3 className="text-lg font-semibold text-ivory">{question}</h3>
          <p className="mt-3 leading-7 text-ivory/75">{answer}</p>
        </article>
      ))}
    </div>
  </section>
);

const ContactForm = () => {
  const [form, setForm] = useState<InquiryForm>(initialForm);
  const [ok, setOk] = useState(false);

  const update = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const lines = [
      `Name: ${form.name}`,
      `Partner's name: ${form.partner || "Not provided"}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Wedding/event date: ${form.date}`,
      `Venue: ${form.venue}`,
      `City/state: ${form.city}`,
      `Estimated guest count: ${form.guests || "Not provided"}`,
      `Planner name: ${form.planner || "Not provided"}`,
      `Moment to paint: ${form.moment || "Not provided"}`,
      `Mood: ${form.mood || "Not provided"}`,
      `Meaningful details: ${form.details || "Not provided"}`,
      `Budget range: ${form.budget || "Not provided"}`,
      "",
      "Message:",
      form.message
    ];
    const subject = encodeURIComponent(`Wedding painting inquiry from ${form.name}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${inquiryEmail}?subject=${subject}&body=${body}`;
    setOk(true);
  };

  return (
    <section id="inquiry" className="section-wrap py-20">
      <div className="mb-8 max-w-3xl">
        <h2 className="serif text-3xl md:text-4xl">Ask About Your Date</h2>
        <p className="mt-4 leading-7 text-ivory/75">Share the details you have. A mail draft will open with your inquiry ready to send.</p>
      </div>
      <form onSubmit={submit} className="grid gap-4 md:grid-cols-2">
        <Input name="name" label="Name" value={form.name} onChange={update} required />
        <Input name="partner" label="Partner's name" value={form.partner} onChange={update} />
        <Input name="email" label="Email" value={form.email} onChange={update} type="email" required />
        <Input name="phone" label="Phone" value={form.phone} onChange={update} />
        <Input name="date" label="Wedding/event date" value={form.date} onChange={update} required />
        <Input name="venue" label="Venue" value={form.venue} onChange={update} required />
        <Input name="city" label="City/state" value={form.city} onChange={update} required />
        <Input name="guests" label="Estimated guest count" value={form.guests} onChange={update} />
        <Input name="planner" label="Planner name, if any" value={form.planner} onChange={update} />
        <Input name="budget" label="Budget range" value={form.budget} onChange={update} />
        <Input name="moment" label="What moment do you want painted?" value={form.moment} onChange={update} className="md:col-span-2" />
        <Input name="mood" label="Romantic, lively, formal, or party-focused?" value={form.mood} onChange={update} className="md:col-span-2" />
        <Input name="details" label="Meaningful people, pets, or details?" value={form.details} onChange={update} className="md:col-span-2" />
        <label className="md:col-span-2">
          <span className="mb-2 block text-sm font-medium text-ivory/80">Message</span>
          <textarea name="message" value={form.message} onChange={update} required className="card min-h-32 w-full px-4 py-3 outline-none transition focus:border-gold" />
        </label>
        <button className="w-fit rounded-full bg-gold px-6 py-3 font-semibold text-bg" type="submit">Open Email Draft</button>
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
  required = false,
  className = ""
}: {
  name: keyof InquiryForm;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  className?: string;
}) => (
  <label className={className}>
    <span className="mb-2 block text-sm font-medium text-ivory/80">{label}</span>
    <input name={name} value={value} onChange={onChange} type={type} required={required} className="card w-full px-4 py-3 outline-none transition focus:border-gold" />
  </label>
);

const Footer = () => (
  <footer className="border-t border-white/10 py-10">
    <div className="section-wrap flex flex-col gap-3 text-sm text-ivory/80 md:flex-row md:items-center md:justify-between">
      <p>NOLAWeddingPainter.com · Andrew Wilkie · New Orleans, Louisiana</p>
      <p>@andrewwilkielive · @frenchquarterwilkie · {inquiryEmail}</p>
    </div>
  </footer>
);
