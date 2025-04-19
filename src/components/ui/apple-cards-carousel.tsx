
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
          ></div>

          <div
            className="flex flex-row justify-start gap-4 pl-4 max-w-7xl mx-auto"
          >
            {items.map((item, index) => (
              <div
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl animate-fade-in"
                style={{
                  animationDelay: `${0.2 * index}s`,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center disabled:opacity-50 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-portfolioPrimary" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center disabled:opacity-50 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-portfolioPrimary" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 h-screen z-50 overflow-auto">
          <div
            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0 animate-fade-in"
          />
          <div
            ref={containerRef}
            className="max-w-5xl mx-auto bg-white dark:bg-slate-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative animate-scale-in"
          >
            <button
              className="sticky top-4 h-8 w-8 right-0 ml-auto bg-portfolioPrimary dark:bg-portfolioAccent rounded-full flex items-center justify-center"
              onClick={handleClose}
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <p
              className="text-base font-medium text-portfolioPrimary dark:text-portfolioAccent"
            >
              {card.category}
            </p>
            <p
              className="text-2xl md:text-5xl font-semibold text-portfolioText dark:text-white mt-4"
            >
              {card.title}
            </p>
            <div className="py-10">{card.content}</div>
          </div>
        </div>
      )}
      <button
        onClick={handleOpen}
        className="rounded-3xl glass-card dark:bg-slate-800 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10 hover:shadow-xl transition-all duration-300"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <p
            className="text-white text-sm md:text-base font-medium font-inter text-left"
          >
            {card.category}
          </p>
          <p
            className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left font-jakarta mt-2"
          >
            {card.title}
          </p>
        </div>
        <div 
          className="object-cover absolute z-10 inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${card.src})` }}
        />
      </button>
    </>
  );
};
