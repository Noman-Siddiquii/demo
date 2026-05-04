"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menu, MenuItem } from "@/lib/content";

const categories = Object.keys(menu);

export function MenuTabs() {
  const [active, setActive] = useState(categories[0]);
  const items: MenuItem[] = menu[active];

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 border-b border-line pb-4">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`relative px-5 py-2.5 text-[0.78rem] uppercase tracking-[0.22em] transition-colors ${
              active === c ? "text-espresso" : "text-ash hover:text-taupe"
            }`}
          >
            {c}
            {active === c && (
              <motion.span
                layoutId="menu-tab"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-3 -bottom-[17px] h-px bg-gold"
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.ul
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 divide-y divide-line"
        >
          {items.map((item) => (
            <li
              key={item.name}
              className="py-7 flex items-start gap-6"
            >
              <div className="flex-1">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3 className="font-display text-xl md:text-2xl">
                    {item.name}
                  </h3>
                  {item.origin && (
                    <span className="font-serif-italic text-ash text-sm">
                      {item.origin}
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="text-taupe mt-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
              <div className="font-display text-xl md:text-2xl text-oak shrink-0">
                {item.price}
              </div>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}
