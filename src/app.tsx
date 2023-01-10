import { ThemeProvider as MaterialUiThemeProvider } from '@mui/system';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { useRoutes } from 'react-router';
import { materialUiTheme, styledComponentsTheme } from './styles/theme';
import { Provider as ReduxProcider } from 'react-redux';
import store from './store';
import routes from './routes';

const App = (): JSX.Element => {
	const content = useRoutes(routes);
	return (
		<ReduxProcider store={store}>
			<StyledComponentsThemeProvider theme={styledComponentsTheme}>
				<MaterialUiThemeProvider theme={materialUiTheme}>
					{content}
				</MaterialUiThemeProvider>
			</StyledComponentsThemeProvider>
		</ReduxProcider>
	);
};

export default App;
