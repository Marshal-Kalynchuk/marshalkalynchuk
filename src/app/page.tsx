"use client";

import { Strong, Text, TextLink } from "@/components/ui/text";
import { motion, MotionProps } from "framer-motion";

const animationProps: MotionProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
  viewport: { once: true },
};

export default function Home() {
  return (
    <div className="space-y-8 max-w-lg mx-auto">

      <motion.div {...animationProps}>
        <Text className="text-pretty">
          Hey! I&apos;m <Strong>Marshal Kalynchuk</Strong>&mdash;founder of&nbsp;
          <TextLink href="https://www.memloop.ai">Memloop</TextLink>. I build AI
          tools so you move faster, remember more, and think clearer.
        </Text>

        <Text className="mt-2">
          <TextLink href="https://cal.com/marshal-kalynchuk">Let&apos;s chat &rarr;</TextLink>
        </Text>
      </motion.div>

      <motion.div {...animationProps}>
        <Text className="mb-2">
          What I&apos;m up to
        </Text>
        <div className="flex flex-wrap gap-2">
          <div className="text-sm text-stone-800 dark:text-stone-200 bg-stone-200 dark:bg-stone-800 rounded-full px-3 py-1">
            <Strong>Building:</Strong> An AI business assistant for <TextLink href="https://www.memloop.ai">Memloop</TextLink>.
          </div>
          <div className="text-sm text-stone-800 dark:text-stone-200 bg-stone-200 dark:bg-stone-800 rounded-full px-3 py-1">
            <Strong>Reading:</Strong> &quot;Can&apos;t Hurt Me&quot; by David Goggins.
          </div>
          <div className="text-sm text-stone-800 dark:text-stone-200 bg-stone-200 dark:bg-stone-800 rounded-full px-3 py-1">
            <Strong>Learning:</Strong> To build graph memories with neo4j.
          </div>
          <div className="text-sm text-stone-800 dark:text-stone-200 bg-stone-200 dark:bg-stone-800 rounded-full px-3 py-1">
            <Strong>Thinking about:</Strong> Organic A2A AI ecosystems.
          </div>
        </div>
      </motion.div>

      <motion.div {...animationProps}>
        <Text className="text-pretty">Outside of work, you&apos;ll find me running, gymming, snowboarding, water skiing, or lost in a book.</Text>
      </motion.div>

      <motion.div {...animationProps} className="flex justify-center">
        <Text variant="secondary" className="text-pretty"><i>make it work, make it right, make it fast.</i></Text>
      </motion.div>

    </div>
  );
}
