
const CookieIcon = () => (
  <img src="https://www.svgrepo.com/show/401340/cookie.svg" alt="Cookie Icon" className="w-16 h-16" />
);

const Header = () => {
  return (
    <header className="w-full py-6 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <CookieIcon />
          <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">Cookie Policy</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;