import * as fromRoot from './../../root-store';

export interface LazyLoadState {
  message: string;
}

export interface State extends fromRoot.State {
  lazyLoad: LazyLoadState;
}

export const initialState: LazyLoadState = {
  message: ''
};
