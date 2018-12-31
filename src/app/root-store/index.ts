import { isActionNameUnique } from './action-unique';
import { State } from './root-store-state.interface';
import * as RootStoreActions from './root-store.actions';
import { RootStoreModule } from './root-store.module';
import * as RouterStoreSelectors from './router-store/router.selectors';

export { isActionNameUnique, State, RootStoreActions, RootStoreModule, RouterStoreSelectors };

