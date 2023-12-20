import { useRef, useState, useEffect } from "react";

export default function SpeakerImageToggleOnScroll({
  imageUrl,
  alt,
  thumbNail,
}) {
  const [inView, setInView] = useState(false);

  const grayScale = inView ? "grayscale(0%)" : "grayscale(100%)";

  const img = useRef(null);

  const [isLoading, setIsLoading] = useState(true); 

  function scrollHandler() {
    setInView(isInView);
  }

  function isInView() {
    const rect = img.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  useEffect(() => {
    setInView(isInView());
    setIsLoading(false);
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    }
  }, []);


  return (
    <img
      src={imageUrl}
      alt={alt}
      width={thumbNail ? 50 : 200}
      height={thumbNail ? 50 : 200}
      ref={img}
      className={
        thumbNail
          ? "img-fluid rounded-start "
          : "img-fluid rounded-start speaker-image"
      }
      style={{ filter: `${grayScale}` }}
    />
  );
}
