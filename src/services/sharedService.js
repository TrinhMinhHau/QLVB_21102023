import { sendRequest } from 'utils/apiUtils';
import { axiosClient } from './axiosClient';
import { store } from '../store/index';
import { setLoading } from 'store/actions';

export async function getLoaiDonVi() {
  try {
    const response = await sendRequest(`Shared/GetLoaiDonVi`, 'GET');
    return response;
  } catch (error) {
    console.error('Error creating role:', error);
    throw error;
  }
}

export async function getAllTruong(username) {
  try {
    const response = await sendRequest(`Shared/GetAllTruong/?username=${username}`, 'GET');
    return response;
  } catch (error) {
    console.error('Error creating Donvi:', error);
    throw error;
  }
}

export async function getAllLoaiDonVi() {
  try {
    const response = await sendRequest(`Shared/GetLoaiDonVi`, 'GET');
    return response;
  } catch (error) {
    console.error('Error creating LDV:', error);
    throw error;
  }
}
export async function getAllDonViCha() {
  try {
    const response = await sendRequest(`Shared/GetAllDonViCha`, 'GET');
    return response;
  } catch (error) {
    console.error('Error creating DVC:', error);
    throw error;
  }
}
export async function GetCauHinhByIdDonVi(username) {
  try {
    store.dispatch(setLoading(true));
    const response = await axiosClient(`Shared/GetCauHinhByIdDonVi?username=${username}`, 'GET', null);
    store.dispatch(setLoading(false));
    return response;
  } catch (error) {
    console.error('Error creating User:', error);
    throw error;
  }
}
