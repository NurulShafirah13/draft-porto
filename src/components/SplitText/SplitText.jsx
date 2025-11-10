import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({
  text,
  className = "",
  delay = 0.05,
  duration = 0.8,
  ease = "power3.out",
  from = { y: 40, opacity: 0 },
  to = { y: 0, opacity: 1 },
  color = "#6cd46c",          // bisa kirim warna tunggal
  colors = [],                // atau array warna tiap huruf
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, { types: "chars" });

    // set warna tiap huruf
    split.chars.forEach((char, i) => {
      if (colors.length > 0) {
        char.style.color = colors[i % colors.length]; // ulang array kalau huruf lebih banyak
      } else {
        char.style.color = color;
      }
    });

    gsap.fromTo(
      split.chars,
      { ...from },
      {
        ...to,
        ease,
        stagger: delay,
        duration,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
          scrub: false,
        },
      }
    );

    return () => split.revert();
  }, [text, delay, duration, ease, color, colors]);

  return (
    <h2 ref={textRef} className={className}>
      {text}
    </h2>
  );
};

export default SplitText;
