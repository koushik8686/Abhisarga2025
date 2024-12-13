import { Tabs } from "../ui/tabs";
import { TimelineDemo } from "./Timeline";

export function TabsDemo() {
  const tabs = [
    {
      title: "Day 1",
      value: "day 1",
      content: (
        <div className="w-full rounded-2xl p-6 md:p-10 text-lg md:text-2xl font-semibold text-white bg-gradient-to-br from-neutral-900 to-black">
          <TimelineDemo day="Day 1" />
        </div>
      ),
    },
    {
      title: "Day 2",
      value: "day 2",
      content: (
        <div className="w-full rounded-2xl p-6 md:p-10 text-lg md:text-2xl font-semibold text-white bg-gradient-to-br from-neutral-900 to-black">
          <TimelineDemo day="Day 2" />
        </div>
      ),
    },
    {
      title: "Day 3",
      value: "day 3",
      content: (
        <div className="w-full rounded-2xl p-6 md:p-10 text-lg md:text-2xl font-semibold text-white bg-gradient-to-br from-neutral-900 to-black">
          <TimelineDemo day="Day 3" />
        </div>
      ),
    },
    {
      title: "Day 4",
      value: "day 4",
      content: (
        <div className="w-full rounded-2xl p-6 md:p-10 text-lg md:text-2xl font-semibold text-white bg-gradient-to-br from-neutral-900 to-black">
          <TimelineDemo day="Day 4" />
        </div>
      ),
    },
    {
      title: "Day 5",
      value: "day 5",
      content: (
        <div className="w-full rounded-2xl p-6 md:p-10 text-lg md:text-2xl font-semibold text-white bg-gradient-to-br from-neutral-900 to-black">
          <TimelineDemo day="Day 5" />
        </div>
      ),
    },
  ];

  return (
    <div className="relative bg-black h-screen">
      {" "}
      {/* Ensure a proper background */}
      <Tabs tabs={tabs} />
    </div>
  );
}
