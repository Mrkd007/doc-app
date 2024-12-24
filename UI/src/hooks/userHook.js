import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

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
    mutationFn: async ({userData, type='user'}) => {
      let url = BASE_URL
      url += (type === 'doctor') ? '/auth/add-doctor' : '/auth/register'
      const response = await axios.post(url, userData);
      return response.data;
    },
    refetchOnMount: false,
  });
};