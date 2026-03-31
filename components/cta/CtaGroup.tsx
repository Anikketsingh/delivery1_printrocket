import AdminPanelButton from "./AdminPanelButton";
import VendorDashboardButton from "./VendorDashboardButton";
import DownloadApkButton from "./DownloadApkButton";

export default function CtaGroup() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <VendorDashboardButton />
      <AdminPanelButton />
      <DownloadApkButton />
    </div>
  );
}

