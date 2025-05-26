import { Metadata } from "next"
import { SettingsManager } from "@/components/admin/settings-manager"

export const Metadata = {
  title: "Settings | Admin Dashboard",
  description: "Manage settings for Next-Gen IT Solutions website",
}

export default function SettingsPage() {
  return <SettingsManager />
}
