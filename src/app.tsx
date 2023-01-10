import { ThemeProvider as MaterialUiThemeProvider } from '@mui/system';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { materialUiTheme, styledComponentsTheme } from './styles/theme';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';
import DashboardLayout from './layout/DashboardLayout';
import { BrowserRouter as RouterProvider } from 'react-router-dom';

const App = (): JSX.Element => {
	return (
		<RouterProvider>
			<ReduxProvider store={store}>
				<StyledComponentsThemeProvider theme={styledComponentsTheme}>
					<MaterialUiThemeProvider theme={materialUiTheme}>
						<DashboardLayout />
					</MaterialUiThemeProvider>
				</StyledComponentsThemeProvider>
			</ReduxProvider>
		</RouterProvider>
	);
};

export default App;
