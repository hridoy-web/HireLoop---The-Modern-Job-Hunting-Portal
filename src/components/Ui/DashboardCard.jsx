
const DashboardCard = ({title, value, icon: Icon}) => {
    return (
       <div className="bg-[#111214] border border-zinc-800/80 rounded-xl p-6 flex flex-col justify-between min-h-40 transition-all duration-300 hover:border-zinc-700/50">
            {/* icon container */}
            <div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center text-zinc-400">
                {Icon && <Icon className="text-xl" />}
            </div>

            {/* text and number section */}
            <div className="mt-4 space-y-1">
                <p className="text-xs font-medium text-zinc-500 tracking-wide uppercase">
                    {title}
                </p>
                <h3 className="text-3xl font-bold text-white tracking-tight">
                    {value}
                </h3>
            </div>
        </div>
    );
};

export default DashboardCard;