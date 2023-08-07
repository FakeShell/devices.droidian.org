import type { RootMainState } from '../store/types';
import type * as types from './types';

// eslint-disable-next-line import/prefer-default-export
export const devicesState = (state: RootMainState): types.IDevicesState => state.devices;
