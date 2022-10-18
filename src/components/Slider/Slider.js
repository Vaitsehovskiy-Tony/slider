import { useState, useEffect, useRef } from "react";

export default function Slider({ slides }) {
  const direction = useRef("normal");
  const [secondSlideIndex, setSecondSlideIndex] = useState(0);
  const [firstSlideIndex, setFirstSlideIndex] = useState(slides.length - 1);

  const currentSlides = [slides[firstSlideIndex], slides[secondSlideIndex]];

  function nextSlide() {
    direction.current = "normal";
    const nextSlideIndex =
      secondSlideIndex === slides.length - 1 ? 0 : secondSlideIndex + 1;
    setFirstSlideIndex(secondSlideIndex);
    setSecondSlideIndex(nextSlideIndex);
  }

  const previousSlide = () => {
    direction.current = "reverse";
    const nextSlideIndex =
      secondSlideIndex === 0 ? slides.length - 1 : secondSlideIndex - 1;
    setFirstSlideIndex(secondSlideIndex);
    setSecondSlideIndex(nextSlideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      direction.current = "normal";
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="slider">
      {!!currentSlides.length &&
        currentSlides.map((slide) => (
          <div className={`slider_slide ${direction.current}`} key={slide.id}>
            <picture>
              <source media="(min-width:900px)" srcSet={slide.url} />
              <img
                className="slider__img"
                src={slide.mobileUrl}
                alt="slide img"
              />
            </picture>
            <div className="slider__text-block">
              <h1 className="slider__title">{slide.title}</h1>
              <h4 className="slider__subtitle">{slide.subtitle}</h4>
              <a className="slider__button" href={slide.buttonLink}>
                {slide.buttonText}
              </a>
            </div>
            <span
              className="slide__arrow slide__arrow_left"
              onClick={previousSlide}
            >
              {"<"}
            </span>
            <span
              className="slide__arrow slide__arrow_right"
              onClick={nextSlide}
            >
              {">"}
            </span>
          </div>
        ))}
    </div>
  );
}