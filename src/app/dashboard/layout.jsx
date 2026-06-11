import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { VscLayoutSidebarRightDock } from "react-icons/vsc";

const DashboardLayout = ({ children }) => {
    return (
        <div className="drawer lg:drawer-open min-h-screen bg-[#0b0c0e]">

            <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col min-h-screen">

                <div className="lg:hidden p-4 flex items-center justify-start">
                    <label
                        htmlFor="my-drawer-1"
                        className="btn btn-square btn-sm bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700 flex items-center justify-center cursor-pointer shadow-md rounded"
                        title="Open Sidebar"
                    >
                        <VscLayoutSidebarRightDock size={20} />
                    </label>
                </div>

                <main className="flex-1 px-4 md:px-6 lg:p-8 text-white">
                    {children}
                </main>
            </div>

            <aside className="drawer-side z-100 lg:z-40">
                <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>

                <DashboardSidebar />
            </aside>
        </div>
    );
};

export default DashboardLayout;