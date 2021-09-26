import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { mediaMax } from '@divyanshu013/media';

import Button from './Button';
import { rhythm } from '../utils/typography';
import { getTheme } from '../utils/theme';
import ThemeContext from './ThemeContext';

const SIDEBAR_QUERY = graphql`
	{
		avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
			childImageSharp {
				fixed(width: 128, height: 128) {
					...GatsbyImageSharpFixed
				}
			}
		}
		site {
			siteMetadata {
				author
				bio
				social {
					github
					linkedin
				}
			}
		}
	}
`;

const Sidebar = () => {
	const data = useStaticQuery(SIDEBAR_QUERY);
	const { avatar } = data;
	const { author, bio, social } = data.site.siteMetadata;
	const { theme } = useContext(ThemeContext);
	const { muted } = getTheme(theme);
	return (
		<nav
			css={{
				margin: '24px 0',
				padding: '16px 64px',
				alignSelf: 'start',
				position: 'fixed',
				width: '30%',
				maxWidth: '500px',
				[mediaMax.large]: {
					position: 'relative',
					padding: `16px 0 0 0`,
					margin: '24px 32px',
					width: 'auto',
				},
			}}
		>
			<div
				css={{
					[mediaMax.small]: {
						display: 'grid',
						gridTemplateColumns: 'auto auto',
						gridGap: 16,
						alignItems: 'center',
						justifyContent: 'start',
					},
				}}
			>
				<Image
					alt={author}
					fixed={avatar.childImageSharp.fixed}
					imgStyle={{ borderRadius: '50%' }}
					css={{
						marginBottom: rhythm(0.8),
						opacity: 0.87,
						[mediaMax.small]: {
							width: '64px !important',
							height: '64px !important',
							order: 1,
						},
					}}
				/>
				<h3>> Andy's Blog</h3>
			</div>
			<p className="muted" css={{ color: muted }}>
				{bio}
			</p>
			<div
				css={{
					display: 'grid',
					gridGap: 16,
					gridTemplateColumns: 'repeat(4, auto)',
					justifyItems: 'center',
					justifyContent: 'start',
				}}
			>
				<Button
					aria-label="Link to my GitHub"
					as="a"
					circular
					href={social.github}
					target="_blank"
					rel="noopener noreferrer"
				>
					<FiGithub />
				</Button>
				<Button
					aria-label="Link to my LinkedIn"
					as="a"
					circular
					href={social.linkedin}
					target="_blank"
					rel="noopener noreferrer"
				>
					<FiLinkedin />
				</Button>
			</div>
		</nav>
	);
};

export default Sidebar;
