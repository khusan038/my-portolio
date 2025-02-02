import clsx from "clsx";

type Tab = {
  id: string;
  label: string;
};

type TabProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const Tab = ({ label, isActive, onClick }: TabProps) => {
  return (
    <div
      className={clsx(
        isActive
          ? "border-b-[3px] border-b-purple-500 pb-2"
          : "cursor-pointer hover:bg-white/10 text-white/50",
        "transition-all flex items-center h-full px-5 py-3 text-sm font-medium"
      )}
      onClick={onClick}
    >
      <h3>{label}</h3>
    </div>
  );
};

type TabsProps = {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (tabId: string) => void;
  center?: boolean;
};

export const Tabs = ({ tabs, activeTab, onTabClick }: TabsProps) => {
  return (
    <div className="flex w-full divide-x border-r">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          label={tab.label}
          isActive={activeTab === tab.id}
          onClick={() => onTabClick(tab.id)}
        />
      ))}
    </div>
  );
};
