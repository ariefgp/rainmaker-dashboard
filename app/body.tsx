import TopBar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

interface RootLayoutProps {
    children: React.ReactNode;
    showNav?: boolean;
  }

const Body = ({
    children,
    showNav = true
  }: RootLayoutProps) => {
    return (
        <>
        {showNav ? (
            <div className="flex h-screen bg-gray-100">
              <Sidebar />
              <div className="flex flex-col flex-grow">
                <TopBar />
                <main className="flex-grow p-4">
                  {children}
                </main>
              </div>
            </div>
          ) : (
            <div>
              {children}
            </div>
          )}
        </>
    );
};

export default Body;