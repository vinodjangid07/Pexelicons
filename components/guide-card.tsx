type GuideCardProps = {
  step: string;
  title: string;
  desc: string;
};

export function GuideCard({ step, title, desc }: GuideCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-2xl bg-[#f4f6f8] p-7">
      <div>
        <span className="text-3xl font-semibold text-[#0c0d0e]">{step}</span>
        <h3 className="mt-4 text-base font-semibold text-[#0c0d0e]">{title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-[#4b5563]">{desc}</p>
      </div>
    </div>
  );
}
