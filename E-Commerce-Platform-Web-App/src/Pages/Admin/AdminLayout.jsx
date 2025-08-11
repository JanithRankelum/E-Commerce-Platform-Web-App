import React from "react";
import AdminNavBar from "./AdminNavBar";
import AdminFooter from "./AdminFooter";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      <main>
        <section>
          <AdminNavBar />
        </section>

        <section>
          <Outlet />
        </section>

        {/* ------------- Admin Footer -------------------- */}
        <AdminFooter />
        {/* ------------- Admin Footer End -------------------- */}
      </main>
    </div>
  );
}

export default AdminLayout;
