import styled from 'styled-components';
import { allContent } from '../../../database/db';
import BannerBackground from './BannerBackground';

const BannerStyles = styled.div`
	display: flex;
	flex-wrap: wrap;
	
	@media screen and (min-width: 1024px) {
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: space-between;
	}
`;

const TextBanner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 100%;
	height: 100vh;
	padding: 25vh 0 0 8%;

	p {
		font-size: 2.5rem;
		line-height: 2.25rem;
		padding-right: 10%;
	}

	.highlight {
		font-weight: 700;
	}
	.normal {
		font-weight: 300;
		letter-spacing: ${(props) =>
			props.content === allContent.pt ? '-0.05rem' : 'auto'};
	}

	@media screen and (min-width: 1024px) {
		width: 40%;
		padding: 2% 0 0 10%;
		margin-bottom: 0;
		justify-content: center;

		p {
			font-size: 3rem;
			line-height: 3rem;
			padding-right: 0;
		}
		.normal {
			font-size: ${(props) =>
				props.content === allContent.pt ? '2.7rem' : '3rem'};
		}
	}
`;

const Images = styled.div`
	width: 100%;
`;

export default function Banner({ content }) {
	return (
		<BannerStyles>
			<TextBanner>
				<p className='highlight'>{content.home.banner.first}</p>
				<p className='highlight'>{content.home.banner.second}</p>
				<p className='normal'>{content.home.banner.third}</p>
			</TextBanner>
			<Images>
				<BannerBackground />
			</Images>
		</BannerStyles>
	);
}
