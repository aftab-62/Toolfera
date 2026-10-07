'use client';
import {useEffect,useState} from 'react';
const phrases=['merge PDFs','compress PDFs','PDF to DOCX','Word to PDF','resize images','compress images','convert images','format JSON','calculate instantly'];
export function HeroPhrases(){
 const [index,setIndex]=useState(0);
 useEffect(()=>{
  // Text stays useful with reduced motion: change it more slowly without movement.
  // One timeout runs while visible; browser/background recovery always rearms it.
  const motion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let timer:ReturnType<typeof setTimeout>|undefined;
  const stop=()=>{clearTimeout(timer);timer=undefined};
  const resume=()=>{
   stop();if(document.hidden)return;
   timer=setTimeout(()=>{
    timer=undefined;if(document.hidden)return;
    setIndex(i=>(i+1)%phrases.length);resume();
   },motion.matches?5200:2600);
  };
  resume();
  motion.addEventListener('change',resume);
  document.addEventListener('visibilitychange',resume);
  window.addEventListener('pageshow',resume);window.addEventListener('pagehide',stop);window.addEventListener('focus',resume);
  return()=>{stop();motion.removeEventListener('change',resume);document.removeEventListener('visibilitychange',resume);window.removeEventListener('pageshow',resume);window.removeEventListener('pagehide',stop);window.removeEventListener('focus',resume)};
 },[]);
 return <div className="hero-verbs" aria-hidden="true"><span>Your next task</span><span className="verb-window"><b key={index} className="hero-phrase">{phrases[index]}.</b></span></div>
}
