import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll'

// Images
import logo from '../assets/logo.png';

// Material UI
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const ButtonWrapper = styled(Button)`
	font-size: 16px!important;
	font-weight: 600!important;
	max-width: 194px;
	max-height: 44px;
	color: white;
	padding: 8px 25px!important;
	border-radius: 8px!important;
	text-transform: capitalize!important;
	box-shadow: none!important;
	& p {
		margin-top: 0rem!important;
		margin-bottom: 0rem!important;
	}
`

const NavItems = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-transform: capitalize;
	& a {
		margin: 1rem;
	}
`;


// Reusable nav links component
const NavLinks = (props) => {
	return (
		<div className='button-link'>
			<Typography style={{cursor:'pointer'}} variant='h6'>
				<Link to={props.link} spy={true} smooth={true}>{props.text}</Link>
			</Typography>
		</div>
	)
}

export default function Navbar() {

	return (
		<nav>
			<div className='container'>
				<Link to='/'>
					<img src={logo} width='48' alt='aperture finance' />
				</Link>
				<div className='navContent'>
		      <NavItems>
		      	<NavLinks link='how' text='How It Works' />
		      	<NavLinks link='products' text='Products' />
		      	<NavLinks link='roadmap' text='Roadmap' />
		      </NavItems>
				</div>
{/*				<a className='button-link' href='https://aperture-wallet.netlify.app/' target='_blank'>
					<ButtonWrapper
						style={{ backgroundColor: '#5234F9' }}
						variant="contained"
					>
						<p>Launch App</p>
					</ButtonWrapper>
				</a>*/}
			</div>
		</nav>
	);
};