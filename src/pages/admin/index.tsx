import Link from "next/link";

const Admin = () => {
  return (
    <div>
      <Link href="/admin/manage" target="_blank">
        Manage Properties
      </Link>
    </div>
  );
};

export default Admin;
