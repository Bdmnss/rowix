function Rights() {
  return (
    <div className="flex items-center justify-between gap-8 rounded-2xl bg-secondary p-[50px]">
      <p className="text-lg text-gray">© 2024 NextGen. All rights reserved.</p>
      <div className="flex items-center font-mono">
        <a
          href="#"
          className="border-r border-[#232329] pr-3 text-lg text-gray"
        >
          Terms & Conditions
        </a>
        <a href="#" className="pl-3 text-lg text-gray">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

export default Rights;
