import { Moment } from '../types';

const STORAGE_KEY = 'moments_app_data_v1';
const SETTINGS_KEY = 'moments_app_settings_v1';

export const getMoments = (): Moment[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading storage', error);
    return [];
  }
};

export const saveMoments = (moments: Moment[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(moments));
  } catch (error) {
    console.error('Error saving storage', error);
  }
};

export const getSettings = () => {
  try {
    const data = localStorage.getItem(SETTINGS_KEY);
    return data ? JSON.parse(data) : { theme: 'light', lang: 'ar' };
  } catch (error) {
    return { theme: 'light', lang: 'ar' };
  }
};

export const saveSettings = (settings: { theme: 'light' | 'dark', lang: 'en' | 'ar' }) => {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
};