import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps {
  isLoading: boolean;
}

const PageLoader = ({ isLoading }: PageLoaderProps) => {

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm"
        >
          {/* Logo container with effects */}
          <div className="relative flex items-center justify-center">
            {/* Outer pulsing sphere — large electric blue */}
            <motion.div
              className="absolute w-[36rem] h-[36rem] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(0,136,255,0.15) 0%, rgba(0,102,255,0.05) 50%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Spinning ring — primary */}
            <motion.div
              className="absolute w-[28rem] h-[28rem] rounded-full border-2 border-transparent"
              style={{
                borderTopColor: '#0088FF',
                borderRightColor: 'rgba(0,136,255,0.3)',
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Second spinning ring (slower, opposite direction) */}
            <motion.div
              className="absolute w-[32rem] h-[32rem] rounded-full border border-transparent"
              style={{
                borderBottomColor: 'rgba(0,102,255,0.4)',
                borderLeftColor: 'rgba(0,136,255,0.2)',
              }}
              animate={{ rotate: -360 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Third ring — outermost, subtle */}
            <motion.div
              className="absolute w-[36rem] h-[36rem] rounded-full border border-transparent"
              style={{
                borderTopColor: 'rgba(0,136,255,0.15)',
                borderLeftColor: 'rgba(0,102,255,0.1)',
              }}
              animate={{ rotate: 180 }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* Glow halo — electric blue */}
            <motion.div
              className="absolute w-[24rem] h-[24rem] rounded-full"
              style={{
                boxShadow: '0 0 120px rgba(0,136,255,0.7), 0 0 200px rgba(0,102,255,0.4), 0 0 300px rgba(0,136,255,0.2)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Logo image */}
            <motion.img
              src="/images/LOGO BYOMARCA1 (1).png"
              alt="BYOMARCA"
              className="relative z-10 w-64 h-auto"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(0,136,255,0.6))',
              }}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />

            {/* Logo pulse/breathing */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
            >
              <motion.div
                className="w-64 h-64 rounded-full"
                style={{
                  boxShadow: '0 0 80px rgba(0,136,255,0.4)',
                }}
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </div>

          {/* Progress bar at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900">
            <motion.div
              className="h-full"
              style={{
                background: 'linear-gradient(90deg, #0066FF, #0088FF, #00BFFF)',
              }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
