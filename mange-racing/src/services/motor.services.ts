import { MotorOptions } from '@/models/Motor';
import { getAxios } from './services.config';

export const getMotorOptions = (): Promise<MotorOptions> => {
    return getAxios().get('/motor-options');
};
