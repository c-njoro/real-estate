import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from "react-admin";

const PropertiesList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="_id" />
        <TextField source="name" />
        <TextField source="city" />
        <TextField source="exactAddress" />
        <TextField source="bedrooms" />
        <TextField source="bathrooms" />
        <TextField source="description" />
        <TextField source="availabilityStatus" />
        <DateField source="createdAt" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

export default PropertiesList;
