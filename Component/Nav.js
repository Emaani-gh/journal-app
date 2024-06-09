export default function Nav() {
  return (
    <nav className=" bg-red-500 p-4 flex justify-between items-center">
      <div className="logo text-white font-bold">LOGO</div>

      <div className="menus">
        {/* Desktop menu */}
        <ul className="flex space-x-4  p-2 rounded-md">
          <li className="hover:text-red-500 cursor-pointer">Home</li>
          <li className="hover:text-red-500 cursor-pointer">Profile</li>
          <li className="hover:text-red-500 cursor-pointer">Settings</li>
        </ul>
      </div>
    </nav>
  );
}
