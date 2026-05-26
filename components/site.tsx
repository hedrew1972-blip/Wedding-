"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";

const gallery=[
["/images/wedding-painting-01.jpg","First dance, painted in glowing movement."],
["/images/wedding-painting-02.jpg","Reception energy and live color harmonies."],
["/images/wedding-painting-03.jpg","Crowd movement with expressive wedding gestures."],
["/images/wedding-painting-04.jpg","New Orleans atmosphere with painterly soul."],
["/images/andrew-live-01.jpg","Live event painter New Orleans, in action."],
["/images/andrew-live-02.jpg","Live wedding painting New Orleans, unfolding in real time."]
] as const;

export default function Site(){
const [modal,setModal]=useState<number|null>(null);const [ok,setOk]=useState(false);
return <>
<Header/><Hero/><Experience/>
<Gallery modal={modal} setModal={setModal}/><About/><HowItWorks/><Packages/><AddOns/><Testimonials/><FAQ/><ContactForm ok={ok} setOk={setOk}/><Footer/>
<AnimatePresence>{modal!==null&&<motion.div className='fixed inset-0 z-[90] bg-black/85 p-5 md:p-12' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setModal(null)}><div className='relative h-full w-full'><Image src={gallery[modal][0]} alt={gallery[modal][1]} fill className='object-contain'/></div></motion.div>}</AnimatePresence>
<a href='#inquiry' className='md:hidden fixed bottom-4 right-4 z-50 bg-gold text-bg font-semibold px-5 py-3 rounded-full'>Inquire About Your Date</a>
</>;}

const Header=()=> <header className='fixed top-0 w-full z-50 bg-bg/85 backdrop-blur border-b border-white/10'><div className='section-wrap py-4 flex justify-between items-center'><a href='#top' className='serif'>NOLA Wedding Painter</a><a href='#inquiry' className='bg-gold text-bg px-4 py-2 rounded-full text-sm font-semibold'>Inquire</a></div></header>;
const Hero=()=> <section id='top' className='min-h-screen flex items-end pt-24 relative'><div className="absolute inset-0 -z-10 bg-[url('/images/wedding-painting-01.jpg')] bg-cover bg-center"/><div className='absolute inset-0 -z-10 bg-gradient-to-t from-bg via-bg/80 to-bg/25'/><div className='section-wrap pb-24'><h1 className='serif text-5xl max-w-4xl'>Your wedding, painted live as the night unfolds.</h1><p className='mt-5 max-w-3xl text-ivory/85'>Andrew Wilkie creates atmospheric live wedding paintings that become part of the celebration — giving your guests something unforgettable to watch and your family a piece of the night to keep forever.</p></div></section>;
const Experience=()=> <section id='experience' className='section-wrap py-24'><h2 className='serif text-4xl'>A painting your guests get to experience.</h2><p className='max-w-4xl mt-5 text-ivory/85'>Some wedding art is made after the day is over. Andrew’s work happens in the room — in the music, the movement, the laughter, and the glow of the reception.</p></section>;
const Gallery=({modal,setModal}:{modal:number|null;setModal:(n:number)=>void})=><section id='gallery' className='section-wrap py-20'><h2 className='serif text-4xl mb-8'>Gallery</h2><div className='grid md:grid-cols-3 gap-5'>{gallery.map((g,i)=><button key={i} onClick={()=>setModal(i)}><div className='relative h-64 overflow-hidden card'><Image src={g[0]} alt={g[1]} fill className='object-cover' loading='lazy'/></div><p className='text-left mt-2 text-sm text-ivory/80'>{g[1]}</p></button>)}</div></section>;
const About=()=> <section id='about' className='section-wrap py-20'><h2 className='serif text-4xl'>Meet Andrew Wilkie</h2><p className='mt-5 max-w-4xl text-ivory/85'>Andrew Wilkie is a New Orleans artist and live performer with more than two decades of experience drawing and painting in front of people...</p></section>;
const HowItWorks=()=> <section id='how-it-works' className='section-wrap py-20'><h2 className='serif text-4xl mb-8'>How It Works</h2></section>;
const Packages=()=> <section id='investment' className='section-wrap py-20'><h2 className='serif text-4xl'>Investment</h2><p className='mt-4'>Live wedding painting begins at $2,500 for New Orleans-area celebrations.</p></section>;
const AddOns=()=> <section id='add-ons' className='section-wrap py-20'><h2 className='serif text-4xl'>Add-ons</h2></section>;
const Testimonials=()=> <section id='testimonials' className='section-wrap py-20'><h2 className='serif text-4xl'>Testimonials</h2></section>;
const FAQ=()=> <section id='faq' className='section-wrap py-20'><h2 className='serif text-4xl'>FAQ</h2></section>;
const ContactForm=({ok,setOk}:{ok:boolean;setOk:(v:boolean)=>void})=><section id='inquiry' className='section-wrap py-20'><h2 className='serif text-4xl mb-8'>Ask About Your Date</h2><form onSubmit={(e:FormEvent)=>{e.preventDefault();setOk(true);}} className='grid gap-4 md:grid-cols-2'>{['Name','Partner’s name','Email','Phone','Wedding/event date','Venue','City/state','Estimated guest count','Planner name, if any','What moment do you want painted?','Do you want the mood to feel romantic, lively, formal, or party-focused?','Any meaningful people, pets, or details?','Budget range'].map(f=><input key={f} placeholder={f} className='card px-4 py-3'/>)}<textarea placeholder='Message' className='md:col-span-2 card min-h-28 px-4 py-3'/><button className='bg-gold text-bg font-semibold px-6 py-3 rounded-full w-fit'>Ask About Your Date</button></form>{ok&&<p className='mt-4 text-gold'>Thank you — your inquiry has been sent. Andrew will follow up personally.</p>}</section>;
const Footer=()=> <footer className='border-t border-white/10 py-10'><div className='section-wrap text-sm text-ivory/80'>NOLAWeddingPainter.com · Andrew Wilkie · New Orleans, Louisiana · @andrewwilkielive · @frenchquarterwilkie · hello@nolaweddingpainter.com · (504) 000-0000</div></footer>;
