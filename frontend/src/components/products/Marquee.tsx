import { useRef, useEffect } from "react";

interface MarqueeProps {
  images: string[];
  speed?: number;
  className?: string;
}

const Marquee = ({ images, speed = 50, className = "" }: MarqueeProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number | null>(null);

  // Ensure enough copies for a seamless loop
  const repeatCount = Math.ceil(12 / images.length) + 1;
  const setA = Array.from({ length: repeatCount }, () => images).flat();
  const allImages = [...setA, ...setA]; // Double for seamless wrapping

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = (timestamp: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      if (!pausedRef.current && track.scrollWidth > 0) {
        const halfWidth = track.scrollWidth / 2;
        offsetRef.current += (speed * delta) / 1000;
        
        if (offsetRef.current >= halfWidth) {
          offsetRef.current -= halfWidth;
        }
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [speed, images.length]);

  return (
    <div className={`w-full overflow-hidden bg-slate-50 py-12 ${className}`}>
      <div 
        ref={trackRef}
        className="flex items-center gap-8 will-change-transform"
        style={{ width: "max-content" }}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => {
          lastTimeRef.current = null;
          pausedRef.current = false;
        }}
      >
        {allImages.map((src, i) => (
          <div 
            key={i} 
            className="h-50 md:h-80 aspect-[4/5]  flex-shrink-0 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 grayscale hover:grayscale-0"
          >
            <img 
              src={src} 
              alt={`Product ${i}`} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
