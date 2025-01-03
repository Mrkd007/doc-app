import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { getAuthHeader, getLS } from '../utils/helperFunctions';

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async ({userData, type='user'}) => {
      let url = BASE_URL
      url += (type === 'doctor') ? '/auth/login-doctor' : '/auth/login'
      const response = await axios.post(url, userData);
      return response.data;
    },
    refetchOnMount: false,
  });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: async ({userData}) => {
      const response = await axios.post(`${BASE_URL}/auth/register`, userData);
      return response.data;
    },
    refetchOnMount: false,
  });
};

export const useAddDocMutation = () => {
  return useMutation({
    mutationFn: async ({userData}) => {
      const response = await axios.post(`${BASE_URL}/user/add-doctor`, userData,  getAuthHeader());
      return response.data;
    },
    refetchOnMount: false,
  });
};

export const useUpdateMutation = () => {
  return useMutation({
    mutationFn: async ({userData, type = 'user'}) => {
      const response = await axios.put(`${BASE_URL}/user/updateUser`, {data: userData, type},  getAuthHeader());
      return response.data;
    },
    refetchOnMount: false,
  });
};

export const useDeleteMutation = () => {
  return useMutation({
    mutationFn: async ({id, type = 'user'}) => {
      const response = await axios.delete(`${BASE_URL}/user/deleteUser/${id}/${type}`,  getAuthHeader());
      return response.data;
    },
    refetchOnMount: false,
  });
};

export const useGetDoctorListMutation = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await axios.get(`${BASE_URL}/user/doc-list`,  getAuthHeader());
      return response.data;
    },
    refetchOnMount: false,
  });
}

export const useAddAptMutation = () => {
  return useMutation({
    mutationFn: async ({userData}) => {
      const response = await axios.post(`${BASE_URL}/apt/add-appointment`, userData,  getAuthHeader());
      return response.data;
    },
    refetchOnMount: false,
  });
};

export const useUpdateAptMutation = () => {
  return useMutation({
    mutationFn: async ({userData}) => {
      const response = await axios.put(`${BASE_URL}/apt/update-appointment`, {...userData},  getAuthHeader());
      return response.data;
    },
    refetchOnMount: false,
  });
};

export const useDeleteAptMutation = () => {
  return useMutation({
    mutationFn: async ({id}) => {
      const response = await axios.delete(`${BASE_URL}/apt/delete-appointment/${id}`,  getAuthHeader());
      return response.data;
    },
    refetchOnMount: false,
  });
};

export const useGeAptListMutation = () => {
  return useMutation({
    mutationFn: async () => {
      const userId = JSON.parse(getLS('user'))?._id;
      const response = await axios.get(`${BASE_URL}/apt/appointment-list/${userId}`,  getAuthHeader());
      return response.data;
    },
    refetchOnMount: false,
  });
}