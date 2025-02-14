import { useBooleanState } from "@/components/GlobalContext";
import Head from "next/head";
import { Suspense, lazy, useEffect, useState } from "react";

const ManagerPanel = lazy(
  () => import("../../components/AdminComponents/ManagerPanel")
);

const Management = () => {
  const { setValue } = useBooleanState();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true on client side
    setIsClient(true);
  }, [isClient]);

  useEffect(() => {
    setValue(true);
    return () => {
      setValue(false);
    };
  }, [setValue]);

  return (
    <>
      <Head>
        <title>Admin - Manage Properties</title>
      </Head>
      <div>
        {isClient && (
          <Suspense fallback={<div>Loading...</div>}>
            <ManagerPanel />
          </Suspense>
        )}
      </div>
    </>
  );
};

export default Management;
