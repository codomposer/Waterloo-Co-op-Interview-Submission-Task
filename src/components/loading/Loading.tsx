import { Icon } from "@iconify/react/dist/iconify.js";

export default function Loading({ show }: { show: boolean }) {
  return (
    <div
      className={`loading-wrapper absolute left-0 top-0 z-10 h-full min-h-screen w-full items-center justify-center overflow-hidden ${
        show ? "flex" : "hidden"
      }`}
    >
      <Icon icon={"eos-icons:loading"} className="text-[48px]" />
    </div>
  );
}
