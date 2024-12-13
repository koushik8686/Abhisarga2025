import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Inauguration Ceremony",
      content: (
        <div>
          <p className="text-neutral-500 dark:text-neutral-200 text-xl md:text-sm font-normal mb-8">
            Time: 10:00 AM
          </p>
          <div className="grid grid-cols-1 gap-4">
            <p className="text-neutral-600 dark:text-neutral-400">
              The official opening of the fest with a ribbon-cutting ceremony
              and a keynote speech.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Tech Talk",
      content: (
        <div>
          <p className="text-neutral-500 dark:text-neutral-200 text-xl md:text-sm font-normal mb-8">
            Time: 11:30 AM
          </p>
          <div className="grid grid-cols-1 gap-4">
            <p className="text-neutral-600 dark:text-neutral-400">
              An engaging session featuring industry leaders discussing the
              latest in technology.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Cultural Performance",
      content: (
        <div>
          <p className="text-neutral-500 dark:text-neutral-200 text-xl md:text-sm font-normal mb-8">
            Time: 02:00 PM
          </p>
          <div className="grid grid-cols-1 gap-4">
            <p className="text-neutral-600 dark:text-neutral-400">
              A showcase of vibrant performances representing diverse cultures.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Gaming Tournament",
      content: (
        <div>
          <p className="text-neutral-500 dark:text-neutral-200 text-xl md:text-sm font-normal mb-8">
            Time: 04:00 PM
          </p>
          <div className="grid grid-cols-1 gap-4">
            <p className="text-neutral-600 dark:text-neutral-400">
              A thrilling competition for gaming enthusiasts.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Music Night",
      content: (
        <div>
          <p className="text-neutral-500 dark:text-neutral-200 text-xl md:text-sm font-normal mb-8">
            Time: 06:00 PM
          </p>
          <div className="grid grid-cols-1 gap-4">
            <p className="text-neutral-600 dark:text-neutral-400">
              Enjoy live music performances by talented artists.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
}
