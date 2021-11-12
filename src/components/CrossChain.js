import React from 'react'
import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import SmoothList from 'react-smooth-list';
import { useInView } from 'react-hook-inview';

// Material UI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SpeakerIcon from '@mui/icons-material/SpeakerTwoTone';
import StorefrontIcon from '@mui/icons-material/StorefrontTwoTone';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindowsTwoTone';


const Wrapper = styled('div')`
	padding-top: 5rem;
	padding-bottom: 2.5rem;
	text-align: center;
	@media (max-width: 900px) {
		& .fontBold {
			font-size: 24px;
		}
	}
`;

const IconsWrapper = styled(Grid)`
	margin-top: 5rem;
	text-align: left;
	& div {
		padding-bottom: 2.5rem;
	}
	& svg {
		font-size: 3.25rem!important;
		margin-bottom: 1rem;
	}
	@media (min-width: 900px) {
		& div {
			padding-right: 2rem;
		}
		& div:not(:last-child) {
			margin-right: 3rem;
		}
	}
`;

export default function CrossChain()  {

	const [view, setView] = React.useState(false);
  const el = React.useRef(null);
  const [ref, isVisible] = useInView({
    threshold: .5,
  })

  // Trigger setView on viewport enter
  React.useEffect(() => {
  	isVisible && setView(true)
  }, [isVisible])

	const icons = [
		{ icon: <DesktopWindowsIcon sx={{color:'#5234F9'}} />, text: 'One single protocol to access all opportunities, no more cross-chain hassles'},
		{ icon: <StorefrontIcon sx={{color:'#EAC435'}} />, text: 'A marketplace for endless possibilities of customizable strategies, driven and developed by community' },
		{ icon: <SpeakerIcon sx={{color:'#FB4D3D'}} />, text: 'One of the first applications built to unleash the power of cross-chain infrastructures, compatible with all major bridges' },
	]

	return (
		<Wrapper ref={ref} className='container'>
			<Typography sx={{fontSize:40}} className='fontBold'>Introducing the Aperture Ecosystem</Typography>
			<Typography variant='body1' sx={{paddingTop:'1.5rem'}}>Do more with your crypto assets, now with greater ease</Typography>
			<SmoothList transitionDuration={1000} delay={200} visible={view}>
				<IconsWrapper container justifyContent='center'>
					{icons.map((icon,i) => (
						<Grid item xs={12} md={3}>
							{icon.icon}
							<Typography variant='body1'>{icon.text}</Typography>
						</Grid>
					))}
				</IconsWrapper>
			</SmoothList>
		</Wrapper>
	)
}
