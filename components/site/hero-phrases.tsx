'use client';
import {useEffect,useState} from 'react';
const phrases=['merge PDFs','compress PDFs','PDF to DOCX','Word to PDF','resize images','compress images','convert images','format JSON','calculate instantly'];
export function HeroPhrases(){
 const [index,setIndex]=useState(0);
 useEffect(()=>{
  // One inexpensive clock: viewport/keyboard changes must not disarm rotation.
  // Decorative rotation pauses for OS reduced motion; normal timing is unchanged.
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let nextAt=Date.now()+2600;
  const tick=()=>{if(!motion.matches&&!document.hidden&&Date.now()>=nextAt){nextAt=Date.now()+2600;setIndex(i=>(i+1)%phrases.length)}};
  const timer=setInterval(tick,2600),resume=()=>tick();
  document.addEventListener('visibilitychange',resume);window.addEventListener('pageshow',resume);
  return()=>{clearInterval(timer);document.removeEventListener('visibilitychange',resume);window.removeEventListener('pageshow',resume)};
 },[]);
 return <div className="hero-verbs" aria-hidden="true"><span>Your next task</span><span className="verb-window"><b key={index} className="hero-phrase">{phrases[index]}.</b></span></div>
}
