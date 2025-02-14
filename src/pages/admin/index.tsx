import AdminPage from "@/components/AdminComponents/Login";
import Head from "next/head";

const Admin = () => {
  return (
    <>
      <Head>
        <title>Admin - Premier Estates</title>
      </Head>
      <div>
        <AdminPage />
      </div>
    </>
  );
};

export default Admin;
