// ClientMarquee.tsx
import { useRef, useEffect, useState } from "react";

interface Client {
  name: string;
  logo: string;
}

interface ClientMarqueeProps {
  clients: Client[];
  speed?: number;
}

const ClientMarquee = ({ clients, speed = 80 }: ClientMarqueeProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number | null>(null);
  const [singleWidth, setSingleWidth] = useState(0);

  // Duplicate so there's always 2 full sets for seamless loop
  const repeatCount = Math.ceil(8 / clients.length) + 1;
  const setA = Array.from({ length: repeatCount }, () => clients).flat();
  const all = [...setA, ...setA]; // double for seamless wrap

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Measure one full set width after render
    const halfWidth = track.scrollWidth / 2;
    setSingleWidth(halfWidth);

    const animate = (timestamp: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!pausedRef.current && halfWidth > 0) {
        offsetRef.current += (speed * delta) / 1000;
        // Seamlessly reset when one full set has passed
        if (offsetRef.current >= halfWidth) {
          offsetRef.current -= halfWidth;
        }
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, clients.length, singleWidth]);

  return (
    <div className="w-full bg-[#1a1a1a] py-14 overflow-hidden cursor-pointer">
      <div className="relative flex justify-center items-center">
        <div
          ref={trackRef}
          className="flex items-center will-change-transform"
          style={{ width: "max-content", gap: "96px" }}
        >
          {all.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center flex-shrink-0 h-14 opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{ minWidth: "140px" }}
              onMouseEnter={() => {
                pausedRef.current = true;
              }}
              onMouseLeave={() => {
                lastTimeRef.current = null; // reset delta so no jump on resume
                pausedRef.current = false;
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-full w-auto object-contain brightness-0 invert"
                draggable={false}
                style={{ maxWidth: "160px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientMarquee;
