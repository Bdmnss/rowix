const headerProps = [
  "HOME",
  "ABOUT",
  "SERVICES",
  "CAREERS",
  "BLOGS",
  "CONTACT US",
];

const Header = () => {
  return (
    <header className="flex items-center justify-between rounded-2xl bg-secondary p-6">
      <img src="/logo.svg" alt="logo" />
      <div className="flex items-center gap-4">
        {headerProps.map((prop) => (
          <button
            key={prop}
            className={`rounded-xl px-6 py-4 text-gray ${prop === "CONTACT US" ? "bg-orange font-medium text-primary" : "bg-primary hover:text-orangeLight"}`}
          >
            {prop}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
