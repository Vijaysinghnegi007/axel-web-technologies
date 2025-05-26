import { Metadata } from "next"
import { UserManager } from "@/components/admin/user-manager"

export const Metadata = {
  title: "User Management | Admin Dashboard",
  description: "Manage users for Next-Gen IT Solutions website",
}

export default function UserManagementPage() {
  return <UserManager />
}
