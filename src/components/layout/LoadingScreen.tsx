import { motion } from 'framer-motion';

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="size-12 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary animate-pulse">
          Loading
        </p>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;

