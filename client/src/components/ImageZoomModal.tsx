import { useEffect, useRef, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const ZOOM_STEP = 0.3;

const ImageZoomModal = ({ isOpen, onClose, src, alt }: ImageZoomModalProps) => {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const translateStart = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTouchDistance = useRef<number | null>(null);

  // Reset when opening/closing or changing image
  useEffect(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, [isOpen, src]);

  // Lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // Keyboard: Escape to close, +/- to zoom
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === '+' || e.key === '=') {
        setScale((s) => Math.min(MAX_SCALE, s + ZOOM_STEP));
      }
      if (e.key === '-') {
        setScale((s) => {
          const next = Math.max(MIN_SCALE, s - ZOOM_STEP);
          if (next <= 1) setTranslate({ x: 0, y: 0 });
          return next;
        });
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Wheel zoom (on the image container only)
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
    setScale((prev) => {
      const next = Math.max(MIN_SCALE, Math.min(MAX_SCALE, prev + delta));
      if (next <= 1) setTranslate({ x: 0, y: 0 });
      return next;
    });
  }, []);

  // Touch pinch zoom
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastTouchDistance.current = Math.hypot(dx, dy);
    } else if (e.touches.length === 1 && scale > 1) {
      isDragging.current = true;
      dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      translateStart.current = { ...translate };
    }
  }, [scale, translate]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2 && lastTouchDistance.current !== null) {
      e.preventDefault();
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const diff = dist - lastTouchDistance.current;
      lastTouchDistance.current = dist;
      setScale((prev) => {
        const next = Math.max(MIN_SCALE, Math.min(MAX_SCALE, prev + diff * 0.008));
        if (next <= 1) setTranslate({ x: 0, y: 0 });
        return next;
      });
    } else if (e.touches.length === 1 && isDragging.current) {
      const dx = e.touches[0].clientX - dragStart.current.x;
      const dy = e.touches[0].clientY - dragStart.current.y;
      setTranslate({
        x: translateStart.current.x + dx,
        y: translateStart.current.y + dy,
      });
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    lastTouchDistance.current = null;
    isDragging.current = false;
  }, []);

  // Mouse drag (pan)
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (scale <= 1) return;
    e.preventDefault();
    isDragging.current = true;
    dragStart.current = { x: e.clientX, y: e.clientY };
    translateStart.current = { ...translate };
  }, [scale, translate]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setTranslate({
      x: translateStart.current.x + dx,
      y: translateStart.current.y + dy,
    });
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  // Double-click to toggle zoom
  const handleDoubleClick = useCallback(() => {
    if (scale > 1) {
      setScale(1);
      setTranslate({ x: 0, y: 0 });
    } else {
      setScale(2.5);
    }
  }, [scale]);

  const handleZoomIn = () => {
    setScale((s) => Math.min(MAX_SCALE, s + ZOOM_STEP));
  };

  const handleZoomOut = () => {
    setScale((s) => {
      const next = Math.max(MIN_SCALE, s - ZOOM_STEP);
      if (next <= 1) setTranslate({ x: 0, y: 0 });
      return next;
    });
  };

  const handleReset = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center"
          onClick={onClose}
        >
          {/* Top controls bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-6 py-3 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Zoom controls */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-3 py-1.5">
              <button
                onClick={handleZoomOut}
                disabled={scale <= MIN_SCALE}
                className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white/15 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-lg font-bold"
                aria-label="Reducir zoom"
              >
                −
              </button>
              <span className="text-white/80 text-xs font-semibold min-w-[3rem] text-center select-none">
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                disabled={scale >= MAX_SCALE}
                className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white/15 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-lg font-bold"
                aria-label="Aumentar zoom"
              >
                +
              </button>
              {scale > 1 && (
                <button
                  onClick={handleReset}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-white/15 transition-colors text-sm"
                  aria-label="Restablecer zoom"
                  title="Restablecer"
                >
                  ↺
                </button>
              )}
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white hover:bg-white/20 transition-colors text-xl"
              aria-label="Cerrar"
            >
              ✕
            </button>
          </motion.div>

          {/* Image container */}
          <motion.div
            ref={containerRef}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full h-full flex items-center justify-center overflow-hidden"
            style={{ cursor: scale > 1 ? (isDragging.current ? 'grabbing' : 'grab') : 'zoom-in' }}
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onDoubleClick={handleDoubleClick}
          >
            <img
              src={src}
              alt={alt}
              draggable={false}
              className="max-h-[85vh] max-w-[90vw] object-contain select-none transition-transform duration-100 ease-out"
              style={{
                transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
              }}
            />
          </motion.div>

          {/* Bottom hint */}
          {scale <= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-6 left-0 right-0 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-white/40 text-xs font-medium px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                Scroll o pellizcar para zoom · Doble clic para ampliar · Esc para cerrar
              </span>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageZoomModal;
