// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AppRoutes from '../routes';
import {AppBar} from '@mui/material';
import styles from './app.module.scss';
import { DataCenterProvider } from '@providers';

export function App() {
  return (
    <DataCenterProvider>
      <AppBar position="static" sx={{ padding: '5px 10px' }}>
        <h1 className={styles.title}>Starwars Data Center</h1>
      </AppBar>
        <AppRoutes />
    </DataCenterProvider>
  );
}

export default App;
