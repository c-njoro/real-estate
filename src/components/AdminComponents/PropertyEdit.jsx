import React from "react";
import {
  ArrayInput,
  Edit,
  NumberInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

const PropertyEdit = () => (
  <Edit>
    <SimpleForm>
      {/* Name */}
      <TextInput source="name" label="Property Name" fullWidth />

      {/* Description */}
      <TextInput source="description" label="Description" multiline fullWidth />

      {/* Exact Address */}
      <TextInput source="exactAddress" label="Exact Address" fullWidth />

      {/* City */}
      <TextInput source="city" label="City" fullWidth />

      {/* Size */}
      <TextInput source="size" label="Size (sq. ft.)" fullWidth />

      {/* Bedrooms */}
      <NumberInput source="bedrooms" label="Bedrooms" />

      {/* Bathrooms */}
      <NumberInput source="bathrooms" label="Bathrooms" />

      {/* Image Paths */}
      <ArrayInput source="imagePaths" label="Image Paths">
        <SimpleFormIterator>
          <TextInput label="Image Path" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export default PropertyEdit;
