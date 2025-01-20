import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_BASE_FRONTEND_URL;

const dataProvider = {
  getList: async (resource, params) => {
    const { name, availabilityStatus, city, bedrooms } = params.filter || {};
    let query = `${apiUrl}/api/plainProperties?`;

    if (city) query += `city=${city}&`;
    if (availabilityStatus)
      query += `availabilityStatus=${availabilityStatus}&`;
    if (name) query += `name=${name}&`;
    if (bedrooms) query += `bedrooms=${bedrooms}&`;

    const { data } = await axios.get(query.slice(0, -1));
    return {
      data: data.map((item) => ({ ...item, id: item._id })),
      total: data.length,
    };
  },

  getOne: async (resource, params) => {
    try {
      // Changed to match updateProperty URL structure
      const { data } = await axios.get(
        `${apiUrl}/api/oneProperty?id=${params.id}`
      );
      if (!data) {
        throw new Error("Property not found");
      }
      return {
        data: { ...data, id: data._id },
      };
    } catch (error) {
      console.error("Error in getOne:", error);
      throw error;
    }
  },

  create: async (resource, params) => {
    const { data } = await axios.post(
      `${apiUrl}/api/createProperty`,
      params.data
    );
    return {
      data: { ...data, id: data._id },
    };
  },

  update: async (resource, params) => {
    const { data } = await axios.put(
      `${apiUrl}/api/updateProperty?id=${params.id}`,
      params.data
    );
    return {
      data: { ...data, id: data._id },
    };
  },

  delete: async (resource, params) => {
    await axios.delete(`${apiUrl}/api/deleteProperty?id=${params.id}`);
    return { data: params };
  },

  // Required stubs for React Admin
  getMany: async () => ({ data: [] }),
  getManyReference: async () => ({ data: [], total: 0 }),
  updateMany: async () => ({ data: [] }),
  deleteMany: async () => ({ data: [] }),
};

export default dataProvider;
