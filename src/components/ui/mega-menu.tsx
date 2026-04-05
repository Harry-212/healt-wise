"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export type MegaMenuItem = {
  id: number;
  label: string;
  highlight?: boolean;
  subMenus?: {
    title: string;
    items: {
      label: string;
      description: string;
      icon: React.ElementType;
      href: string;
    }[];
  }[];
  link?: string;
};

export interface MegaMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  items: MegaMenuItem[];
  className?: string;
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
  ({ items, className, ...props }, ref) => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const [isHover, setIsHover] = React.useState<number | null>(null);

    const handleHover = (menuLabel: string | null) => {
      setOpenMenu(menuLabel);
    };

    return (
      <ul
        ref={ref}
        className={`relative flex items-center space-x-2 ${className || ""}`}
        {...props}
      >
        {items.map((navItem) => {
          const isHighlighted = navItem.highlight;
          const baseClasses =
            "relative flex cursor-pointer items-center justify-center gap-1.5 py-2 px-4 text-sm font-bold transition-colors duration-300 group z-10";
          const colorClasses = isHighlighted
            ? "bg-emerald-50 text-emerald-800 rounded-full hover:bg-emerald-100"
            : "text-slate-600 hover:text-emerald-700";

          return (
            <li
              key={navItem.label}
              className="relative"
              onMouseEnter={() => handleHover(navItem.label)}
              onMouseLeave={() => handleHover(null)}
            >
              {navItem.link && !navItem.subMenus ? (
                <Link
                  href={navItem.link}
                  className={`${baseClasses} ${colorClasses}`}
                  onMouseEnter={() => setIsHover(navItem.id)}
                  onMouseLeave={() => setIsHover(null)}
                >
                  <span>{navItem.label}</span>
                  {isHover === navItem.id && !isHighlighted && (
                    <motion.div
                      layoutId="hover-bg"
                      className="absolute inset-0 size-full bg-emerald-50 -z-10"
                      style={{ borderRadius: 99 }}
                    />
                  )}
                </Link>
              ) : (
                <button
                  className={`${baseClasses} ${colorClasses}`}
                  onMouseEnter={() => setIsHover(navItem.id)}
                  onMouseLeave={() => setIsHover(null)}
                >
                  <span>{navItem.label}</span>
                  {navItem.subMenus && !isHighlighted && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${
                        openMenu === navItem.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  {(isHover === navItem.id || openMenu === navItem.label) &&
                    !isHighlighted && (
                      <motion.div
                        layoutId="hover-bg"
                        className="absolute inset-0 size-full bg-emerald-50 -z-10"
                        style={{ borderRadius: 99 }}
                      />
                    )}
                </button>
              )}

              <AnimatePresence>
                {openMenu === navItem.label && navItem.subMenus && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-auto pt-4 z-50">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="w-max border border-slate-200 bg-white p-6 shadow-2xl"
                      style={{ borderRadius: 24 }}
                      layoutId="menu"
                    >
                      <div className="flex w-fit shrink-0 space-x-10 overflow-hidden">
                        {navItem.subMenus.map((sub) => (
                          <motion.div
                            layout
                            className="w-full min-w-[280px]"
                            key={sub.title}
                          >
                            <h3 className="mb-5 text-sm font-bold capitalize text-emerald-800 tracking-wide border-b border-slate-100 pb-2">
                              {sub.title}
                            </h3>
                            <ul className="space-y-5">
                              {sub.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <li key={item.label}>
                                    <Link
                                      href={item.href}
                                      className="flex items-start space-x-4 group p-2 rounded-xl border border-transparent transition-colors"
                                    >
                                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-emerald-600 shadow-sm transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                                        <Icon className="h-5 w-5 flex-none" />
                                      </div>
                                      <div className="w-max leading-5">
                                        <p className="shrink-0 text-sm font-bold text-slate-900 transition-colors group-hover:text-emerald-700">
                                          {item.label}
                                        </p>
                                        <p className="shrink-0 text-xs text-slate-500 mt-1 max-w-[240px] whitespace-normal leading-relaxed transition-colors duration-300 group-hover:text-slate-700">
                                          {item.description}
                                        </p>
                                      </div>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    );
  },
);

MegaMenu.displayName = "MegaMenu";

export default MegaMenu;
