import { Admin, Resource } from "react-admin";
import dataProvider from "./customDataProvider"; // Changed the import name
import CustomLayout from "./CustomLayout";
import PropertiesList from "./PropertiesList";
import PropertyCreate from "./PropertyCreate";
import PropertyEdit from "./PropertyEdit";
import PropertyShow from "./PropertyShow";

const ManagerPanel = () => {
  return (
    <Admin dataProvider={dataProvider} layout={CustomLayout}>
      <Resource
        name="properties"
        list={PropertiesList}
        create={PropertyCreate}
        edit={PropertyEdit}
        show={PropertyShow}
      />
    </Admin>
  );
};

export default ManagerPanel;
