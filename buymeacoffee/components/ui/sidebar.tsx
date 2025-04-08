interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Sidebar({ activePage, setActivePage }: SidebarProps) {
  const items = [
    { label: "Home", key: "home" },
    { label: "Explore", key: "explore" },
    { label: "View Page", key: "view" },
    { label: "Account Settings", key: "settings" },
  ];

  return (
    <aside className="w-64 bg-white border-r p-4 space-y-2">
      {items.map((item) => (
        <button
          key={item.key}
          onClick={() => setActivePage(item.key)}
          className={`w-full text-left px-4 py-2 rounded hover:bg-gray-100 ${
            activePage === item.key ? "bg-gray-200 font-semibold" : ""
          }`}
        >
          {item.label}
        </button>
      ))}
    </aside>
  );
}
