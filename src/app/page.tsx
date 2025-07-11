"use client";

import { Strong, Text, TextLink } from "@/components/ui/text";
import { Link } from "@/components/ui/link";
import LiveDate from "@/components/LiveDate";
import { Divider } from "@/components/ui/divider";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import clsx from "clsx";
import { SocialIcon } from "react-social-icons";
import { Memloop } from "@/components/ui/memloop";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={clsx(isDarkMode ? "dark" : "", "bg-stone-100 dark:bg-stone-900 flex flex-col items-center min-h-screen px-6 py-6 font-serif font-[family-name:var(--font-garamond)]")}>
      <main className="flex flex-col gap-8 grow sm:py-12 max-w-lg">
        <div className="flex flex-row gap-4 items-center">
          <LiveDate />
          <Divider />
          <div>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="">
              {isDarkMode ? <SunIcon className="w-6 h-6 text-stone-400 hover:text-stone-500" /> : <MoonIcon className="w-6 h-6 text-stone-400 hover:text-stone-500" />}
            </button>
          </div>
        </div>

        <div>
          <Text className="">
            hey! i&apos;m <Strong>Marshal Kalynchuk</Strong>&mdash;founder of <TextLink className="" href="https://www.memloop.ai">memloop</TextLink>.
            i&apos;m building tools that help people think clearer, remember more, and move faster.
            <br />
            <br />
            i&apos;d love to meet <Strong>you</Strong>. so, <TextLink href="https://cal.com/marshal-kalynchuk">let&apos;s chat &rarr;</TextLink>
          </Text>
        </div>

        <div>
          <Text className="mb-1">
            my time:
          </Text>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-stone-950 dark:text-stone-50">
              <Text className="inline-block">
                 building <TextLink href="https://www.memloop.ai">memloop</TextLink> features
              </Text>
            </li>
            <li className="text-stone-950 dark:text-stone-50">
              <Text className="inline-block">
                 designing product & ux flows
              </Text>
            </li>
            <li className="text-stone-950 dark:text-stone-50">
              <Text className="inline-block">
                 reading & learning
              </Text>
            </li>
            <li className="text-stone-950 dark:text-stone-50">
              <Text className="inline-block">
                gym & running
              </Text>
            </li>
          </ul>
        </div>

        <div>
          <Text>i also love to gym, run, play tennis, water ski, snowboard, read, and travel.</Text>
        </div>

        <div className="flex justify-center">
          <Text variant="secondary"><i>make it work, make it right, make it fast.</i></Text>
        </div>

        <div className="flex gap-4 justify-center">
          <SocialIcon url="https://www.linkedin.com/in/marshal-kalynchuk-328398236" className="text-stone-400 hover:text-stone-500 dark:text-stone-400 dark:hover:text-stone-500" fgColor="currentColor" bgColor="transparent" />
          <SocialIcon url="https://www.instagram.com/marshal_kalynchuk/" className="text-stone-400 hover:text-stone-500 dark:text-stone-400 dark:hover:text-stone-500" fgColor="currentColor" bgColor="transparent" />
          <SocialIcon url="https://github.com/marshal-kalynchuk" className="text-stone-400 hover:text-stone-500 dark:text-stone-400 dark:hover:text-stone-500" fgColor="currentColor" bgColor="transparent" />
          <Link href="https://www.memloop.ai" className="ml-2 flex items-center justify-center">
            <Memloop className="w-7 h-7 text-stone-400 hover:text-stone-500 dark:text-stone-400 dark:hover:text-stone-500" />
          </Link>
        </div>


      </main>
      <footer className="flex items-center justify-center">
        <Text variant="secondary">&copy; {new Date().getFullYear()} Marshal Kalynchuk</Text>
      </footer>
    </div>
  );
}
