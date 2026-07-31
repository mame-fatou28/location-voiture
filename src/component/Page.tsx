import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row bg-black min-h-screen w-full overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 p-2 sm:p-4 min-w-0">
        <Header />
      </main>
    </div>
  );
}