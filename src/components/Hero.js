import React from 'react';
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import SmoothList from 'react-smooth-list';

// Material UI
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Comps
import CircleAnimate from './CircleAnimate';

const ButtonWrapper = styled(Button)`
	color: white;
	font-size: 16px!important;
	font-weight: 600!important;
	max-width: 194px;
	max-height: 44px;
	padding: 8px 25px!important;
	border-radius: 8px!important;
	text-transform: capitalize!important;
	box-shadow: none!important;
	& p {
		margin-top: 0rem!important;
		margin-bottom: 0rem!important;
	}
	`;

const Wrapper = styled(SmoothList)`
	min-height: 100vh;
	padding-top: 2rem;
	display: flex;
	justify-content: center;
	margin: auto;
	flex-direction: column;
	& button {
		position: relative;
		z-index: 5;
	}
	@media (max-width: 900px) {
		min-height: auto;
		margin-top: 10rem;
		& h2 {
			font-size: 2.5rem;
		}
	}
	@media (min-width: 2000px) {
		.heroHeader {
			display: none;
		}
	}
`;

const HeroText = styled(Typography)`
	color: white;
	padding: 2rem 0;
	@media (max-width: 900px) {
		max-width: 100%;
	}
`;

export default function Hero() {

	return (
		<Grid container className="bg-han container">
			<Grid item xs={12} md={5} lg={6}>
				<Wrapper transitionDuration={1000} className='heroText'>
					<Typography style={{color:'white'}} variant='h2' className='fontBold'>Cross-chain<br className='heroHeader' /> Investment</Typography>
					<Typography style={{color:'#5234F9',filter:'drop-shadow(0 0 15px #674dfa)'}} variant='h2' className='fontBold'>Made Easy</Typography>
					<HeroText variant='body1'>Connecting the blockchain networks, Aperture is your gateway to DeFi 2.0</HeroText>
					<HashLink className='button-link' to='/#how'>
	{/*					<a className='button-link' href='https://aperture-wallet.netlify.app/' target='_blank'>
							<ButtonWrapper
								style={{ backgroundColor: '#5234F9' }}
								variant="contained"
							>
								<p>Launch App</p>
							</ButtonWrapper>
						</a>*/}
					</HashLink>
				</Wrapper>
			</Grid>
			<Grid item xs={12} md={7} lg={6}>
				<CircleAnimate />
			</Grid>
		</Grid>
	);
}
