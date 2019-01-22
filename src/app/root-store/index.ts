import { isActionNameUnique } from '@app/root-store/action-unique';
import { State } from '@app/root-store/root-store-state.interface';
import * as RootStoreActions from '@app/root-store/root-store.actions';
import { RootStoreModule } from '@app/root-store/root-store.module';
import * as RouterStoreSelectors from '@app/root-store/router-store/router.selectors';

export { isActionNameUnique, State, RootStoreActions, RootStoreModule, RouterStoreSelectors };

