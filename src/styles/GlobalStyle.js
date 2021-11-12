import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

/*----------------------------
	xs: 0px
	sm: 600px
	md: 900px
	lg: 1200px
	xl: 1536px
----------------------------*/

/*----------------------------
	Global styles
----------------------------*/

	.bg-white {
		background-color: white;
	}
	.bg-han {
		overflow: hidden;
		color: white;
		background-color: #16141F;
	}
	.container {
		padding-left: 6.5%;
		padding-right: 6.5%;
	}
	nav {
		background-color: transparent;
		padding: 1rem 0;
		position: absolute;
		width: 100%;
	}
	nav .container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.navContent {
		display: flex;
		margin: auto;
		@media (max-width: 900px) {
			display: none;
		}
	}
	.flexClass {
		display: flex;
		align-items: center;
	}
	.borderClass {
		border-radius: 40px;
	}
	.button-link {
		text-decoration: none;
		& h6 {
			font-size: 16px;
			font-weight: 400;
			margin: 0 2.5rem;
			color: white;
		}
	}
	.linkClass {
		color: #5234F9!important;
		text-decoration: none;
	}
	.hiddenClass {
		display: none!important;
	}

	/*-- Fonts --*/

	.MuiTypography-root {
		font-family: 'Poppins', sans-serif!important;
	}
	.fontBold {
		font-weight: 600!important;
	}
	.textColor {
		color: #6E6699;
	}

`;

export default GlobalStyle;