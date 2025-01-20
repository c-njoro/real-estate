import {
  ArrayField,
  FunctionField,
  NumberField,
  Show,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
} from "react-admin";

const PropertyShow = () => (
  <Show>
    <SimpleShowLayout>
      {/* Property Name */}
      <TextField source="name" label="Property Name" />

      {/* Description */}
      <TextField source="description" label="Description" />

      {/* Exact Address */}
      <TextField source="exactAddress" label="Exact Address" />

      {/* City */}
      <TextField source="city" label="City" />

      {/* Size */}
      <NumberField source="size" label="Size (sq. ft.)" />

      {/* Bedrooms */}
      <NumberField source="bedrooms" label="Bedrooms" />

      {/* Bathrooms */}
      <NumberField source="bathrooms" label="Bathrooms" />

      {/* Image Paths */}
      {/* Image Paths */}
      <ArrayField source="imagePaths" label="Property Images">
        <SingleFieldList>
          <FunctionField
            render={(record) => (
              <img
                src={record}
                alt="Property"
                style={{
                  maxWidth: "200px",
                  maxHeight: "200px",
                  margin: "10px",
                  borderRadius: "8px",
                }}
              />
            )}
          />
        </SingleFieldList>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);

export default PropertyShow;
