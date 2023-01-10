import createTheme from '@mui/material/styles/createTheme';

export const styledComponentsTheme = {
	main: '#F65261',
	mainDark: '#232323',
	lightGrey: '#555555',
	darkGrey: '#424242',
	mainLight: '#FFFFFF',
};

export const materialUiTheme = createTheme({
	typography: {
		fontFamily: 'Montserrat, sans-serif !important',
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
		  @font-face {
			font-family: 'Montserrat', sans-serif !important;
		  }
		`,
		},
		MuiInput: {
			styleOverrides: {
				root: ({ theme }) => ({
					...{
						backgroundColor: 'rgba(50, 50, 50, 0.8)',
						color: theme.palette.primary.light,
						padding: '1rem',
						borderRadius: '4px',
						border: 'none',
						flex: 1,
						minWidth: '320px',
					},
				}),
			},
		},

		MuiSvgIcon: {
			styleOverrides: {
				root: ({ theme }) => ({
					...{
						color: `${theme.palette.primary.main}`,
					},
				}),
			},
		},
		MuiTab: {
			styleOverrides: {
				root: ({ theme }) => ({
					...{
						color: theme.palette.primary.light,
						fontSize: '1rem',
						padding: '1rem',
					},
				}),
			},
		},
		MuiButton: {
			styleOverrides: {
				root: ({ ownerState, theme }) => ({
					...{
						backgroundColor: theme.palette.primary.main,
						color: theme.palette.primary.light,
						minWidth: '177px',
						height: '45px',
						borderRadius: '4px',
						fontSize: '14px',
					},
					...(ownerState.variant === 'outlined'
						? {
								color: theme.palette.primary.main,
								backgroundColor: 'transparent',
								fontSize: '14px',
								borderColor: theme.palette.primary.main,
						  }
						: {
								'&:hover': {
									backgroundColor: theme.palette.primary.light,
									color: theme.palette.primary.main,
								},
						  }),
				}),
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: ({ theme }) => ({
					...{
						color: theme.palette.primary.light,
						fontWeight: 400,
						fontSize: '16px',
						lineHeight: '20px',

						'&:hover': {
							backgroundColor: theme.palette.primary.main,
						},
						'&:active': {
							backgroundColor: theme.palette.primary.main,
						},
					},
				}),
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: ({ theme }) => ({
					...{
						background: 'rgba(50, 50, 50, 0.948044)',
						'& .MuiOutlinedInput-root': {
							color: theme.palette.primary.light,
							fontSize: '14px',
						},
					},
				}),
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: ({ theme }) => ({
					...{
						background: 'rgba(50, 50, 50, 0.948044)',
						color: theme.palette.primary.light,
					},
				}),
			},
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: ({ theme }) => ({
					...{
						color: theme.palette.primary.main,
					},
				}),
			},
		},
		MuiList: {
			styleOverrides: {
				root: ({ theme }) => ({
					...{
						background: 'rgba(50, 50, 50, 0.948044)',
					},
				}),
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: ({ theme }) => ({
					...{
						color: theme.palette.primary.main,
						backgroundColor: theme.palette.primary.dark,
						vopacity: '0.8',
						letterSpacing: '0.888889px',
						textTransform: 'uppercase',
						fontWeight: '500',
						fontSize: '14px',
						lineHeight: '20px',
						position: 'relative',
						margin: 0,
						transform: 'none',
						paddingBottom: '0.5rem',
					},
				}),
			},
		},
	},
	palette: {
		primary: {
			main: '#F65261',
			light: '#ffffff',
			dark: '#232323',
		},
	},
});
