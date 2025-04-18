type TabProps = {
  tabs: { label: string; value: string }[];
  activeTab: string;
  onTabChange: (value: string) => void;
};

export const Tabs = ({ tabs, activeTab, onTabChange }: TabProps) => {
  return (
    <div className="sm:hidden flex overflow-x-auto gap-2 pb-2 border-b">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onTabChange(tab.value)}
          className={`px-4 py-2 whitespace-nowrap rounded-full text-sm font-medium ${
            activeTab === tab.value
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};
