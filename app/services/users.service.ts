import axios from "axios";

export interface UserFilters {
  org?: string;
  username?: string;
  email?: string;
  phone?: string;
  date?: string;
  status?: string;
}

export const fetchUser = async (id: string) => {
  const { data } = await axios.get(`/api/users/${id}`);
  return data;
};

export const fetchUsers = async (
  page: number,
  limit: number,
  search: string,
  filters: UserFilters = {},
) => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    search,
  });

  if (filters.org) params.append("org", filters.org);
  if (filters.username) params.append("username", filters.username);
  if (filters.email) params.append("email", filters.email);
  if (filters.phone) params.append("phone", filters.phone);
  if (filters.date) params.append("date", filters.date);
  if (filters.status) params.append("status", filters.status);

  const { data } = await axios.get(`/api/users?${params.toString()}`);
  return data;
};
