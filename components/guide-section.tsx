import { GuideCard } from "@/components/guide-card";

const guideSteps = [
  {
    step: "01",
    title: "Download and store the ICO file",
    desc: "Save your chosen .ico file in a permanent folder (such as C:\\Icons). Windows relies on this file path to render the folder icon.",
  },
  {
    step: "02",
    title: "Open folder Properties",
    desc: "Right-click the folder you want to customize on your desktop or in File Explorer, then select Properties from the context menu.",
  },
  {
    step: "03",
    title: "Navigate to Customize",
    desc: "In the Properties dialog, select the Customize tab at the top. Under Folder icons, click the Change Icon button.",
  },
  {
    step: "04",
    title: "Select your ICO and apply",
    desc: "Click Browse, navigate to your saved .ico file, select it, and click OK. Then click Apply and OK in the main Properties window.",
  },
] as const;

export function GuideSection() {
  return (
    <section
      id="guide"
      aria-labelledby="guide-title"
      className="mt-28 rounded-3xl bg-white p-8 sm:p-12 lg:p-16"
    >
      <div className="max-w-2xl">
        <span className="text-sm font-medium text-[#6b7280]">
          Installation guide
        </span>
        <h2
          id="guide-title"
          className="mt-2 text-3xl font-semibold tracking-tight text-[#0c0d0e] sm:text-4xl"
        >
          How to change a folder icon in Windows.
        </h2>
        <p className="mt-3 text-base text-[#4b5563]">
          Follow these four steps to apply any downloaded ICO file to a Windows folder.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {guideSteps.map((step) => (
          <GuideCard
            key={step.step}
            step={step.step}
            title={step.title}
            desc={step.desc}
          />
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-[#f4f6f8] p-6 text-xs text-[#4b5563]">
        <strong className="text-[#0c0d0e]">Note:</strong> Windows references the exact path of the .ico file in a hidden desktop.ini file inside the customized folder. Keep your downloaded icons in a stable directory so the path stays valid.
      </div>
    </section>
  );
}
