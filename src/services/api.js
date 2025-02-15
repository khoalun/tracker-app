import axios from "axios";

const BASE_URL =
  "https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/todo";

export const api = {
  getTodos: async () => {
    try {
      const response = await axios.get(BASE_URL);
      console.log("API Response:", response); 
      return response.data;
    } catch (error) {
      console.error("Error fetching todos:", error);
      throw error;
    }
  },

  createTodo: async (todoData) => {
    try {
      const response = await axios.post(BASE_URL, todoData);
      return response.data;
    } catch (error) {
      console.error("Error creating todo:", error);
      throw error;
    }
  }
};
