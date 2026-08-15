import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X } from 'lucide-react';
import defaultProfilePhoto from '../assets/images/neha-profile-photo.jpg';

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  allowZoom?: boolean;
  src?: string;
}

export function ProfileAvatar({
  size = 'md',
  className = '',
  allowZoom = true,
  src,
}: ProfileAvatarProps) {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const photoSrc = src || defaultProfilePhoto;

  const sizeClasses = {
    sm: 'w-10 h-12 rounded-xl',
    md: 'w-16 h-20 rounded-2xl',
    lg: 'w-32 h-44 sm:w-40 sm:h-56 rounded-3xl',
    xl: 'w-40 h-56 sm:w-48 sm:h-68 rounded-3xl',
    hero: 'w-48 h-68 sm:w-64 sm:h-88 rounded-3xl',
  };

  return (
    <>
      {/* ================= PROFILE AVATAR ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`relative group inline-block ${className}`}
      >
        {/* Outer Glow Ring */}
        <div
          className="
            absolute -inset-1.5
            bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-400
            rounded-[28px]
            blur-md
            opacity-60
            group-hover:opacity-100
            transition duration-500
            group-hover:scale-105
            orb-float-slow
          "
        />

        {/* Image Frame */}
        <motion.div
          onClick={() => allowZoom && setIsZoomed(true)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className={`
            relative
            overflow-hidden
            bg-slate-950
            border-2
            border-white/20
            shadow-2xl
            transition-shadow
            duration-300
            ${allowZoom ? 'cursor-pointer' : ''}
            ${sizeClasses[size]}
          `}
        >
          <img
            src={photoSrc}
            alt="Neha Fartiyal - Web Developer"
            className="
              w-full
              h-full
              object-cover
              object-center
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />

          {/* Hover Overlay */}
          {allowZoom && (
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-slate-950/80
                via-slate-950/20
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-300
                flex
                flex-col
                justify-end
                p-2.5
                text-center
              "
            >
              <span
                className="
                  text-[10px]
                  font-mono
                  text-white
                  flex
                  items-center
                  justify-center
                  gap-1
                  font-bold
                  bg-slate-900/90
                  py-1
                  px-2
                  rounded-lg
                  border
                  border-white/20
                  mb-1
                "
              >
                <ZoomIn className="w-3 h-3 text-emerald-400" />
                Click to Zoom
              </span>
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* ================= ZOOM LIGHTBOX ================= */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsZoomed(false)}
            className="
              fixed
              inset-0
              z-[9999]
              bg-slate-950/95
              backdrop-blur-md
              flex
              items-center
              justify-center
              p-4
              sm:p-6
              overflow-y-auto
            "
          >
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                w-full
                max-w-lg
                max-h-[95vh]
                rounded-3xl
                glass-panel
                p-4
                sm:p-6
                border
                border-white/20
                shadow-2xl
                flex
                flex-col
              "
            >
              {/* Close Button - Top Right */}
              <button
                onClick={() => setIsZoomed(false)}
                aria-label="Close"
                className="
                  absolute
                  top-3
                  right-3
                  z-20
                  w-10
                  h-10
                  rounded-full
                  bg-slate-900/90
                  hover:bg-slate-800
                  border
                  border-white/20
                  text-white
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-200
                  hover:scale-105
                  cursor-pointer
                "
              >
                <X className="w-5 h-5" />
              </button>

              {/* ================= CENTERED IMAGE ================= */}
              <div
                className="
                  relative
                  w-full
                  flex-1
                  min-h-0
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  bg-slate-950
                  border
                  border-white/10
                  shadow-2xl
                "
              >
                <img
                  src={photoSrc}
                  alt="Neha Fartiyal - Professional Photo"
                  className="
                    block
                    max-w-full
                    max-h-[65vh]
                    w-auto
                    h-auto
                    object-contain
                    object-center
                    mx-auto
                  "
                />
              </div>

              {/* ================= PROFILE INFO ================= */}
              <div className="text-center space-y-1 pt-4">
                <h3 className="text-xl font-extrabold text-white">
                  Neha Fartiyal
                </h3>

                <p className="text-lg sm:text-xl font-mono text-emerald-400 font-semibold">
                  Web Developer
                </p>

                <p className="text-sm text-slate-400">
                  at ENIGOAL Startup Advisory Private Limited, Noida
                </p>
              </div>

              {/* ================= CLOSE BUTTON ================= */}
              <div className="pt-4 mt-3 flex items-center justify-center border-t border-white/10">
                <motion.button
                  onClick={() => setIsZoomed(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.94 }}
                  className="
                    py-2.5
                    px-5
                    rounded-xl
                    text-xs
                    font-bold
                    text-slate-300
                    bg-slate-800
                    hover:bg-slate-700
                    transition-colors
                    cursor-pointer
                    flex
                    items-center
                    gap-1.5
                  "
                >
                  <X className="w-4 h-4" />
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}