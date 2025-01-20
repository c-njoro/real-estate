import React from "react";
import {
  ArrayInput,
  Create,
  NumberInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  required,
} from "react-admin";

const PropertyCreate = () => (
  <Create>
    <SimpleForm>
      {/* Property Name */}
      <TextInput
        source="name"
        label="Property Name"
        validate={required()}
        fullWidth
      />

      {/* Description */}
      <TextInput
        source="description"
        label="Description"
        validate={required()}
        multiline
        fullWidth
      />

      {/* Exact Address */}
      <TextInput
        source="exactAddress"
        label="Exact Address"
        validate={required()}
        fullWidth
      />

      {/* City */}
      <TextInput source="city" label="City" validate={required()} fullWidth />

      {/* Size */}
      <TextInput
        source="size"
        label="Size (sq. ft.)"
        validate={required()}
        fullWidth
      />

      {/* Bedrooms */}
      <NumberInput source="bedrooms" label="Bedrooms" validate={required()} />

      {/* Bathrooms */}
      <NumberInput source="bathrooms" label="Bathrooms" validate={required()} />

      {/* Image Paths */}
      <ArrayInput source="imagePaths" label="Image Paths" validate={required()}>
        <SimpleFormIterator>
          <TextInput label="Image Path" validate={required()} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

export default PropertyCreate;
