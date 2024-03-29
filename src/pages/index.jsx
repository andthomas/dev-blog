import React from 'react';
import { Link, graphql } from 'gatsby';
import { object } from 'prop-types';
import { mediaMax } from '@divyanshu013/media';

import ThemeProvider from '../components/ThemeProvider';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import BlogInfo from '../components/BlogInfo';
import { rhythm } from '../utils/typography';

const BlogIndex = ({ data, location }) => {
	const posts = data.allMarkdownRemark.edges;
	return (
		<ThemeProvider>
			<section
				css={{
					gridTemplateColumns: 'auto 1fr',
					alignContent: 'start',
					height: '100%',
					minHeight: '100vh',
					maxWidth: 1200,
					margin: '0 auto',
					display: 'block',
					[mediaMax.large]: {
						display: 'grid',
						gridTemplateColumns: 'auto',
						justifyItems: 'center',
					},
				}}
			>
				<Sidebar />
				<Layout location={location}>
					<Seo />
					{posts.map(({ node }) => {
						const title = node.frontmatter.title || node.fields.slug;
						return (
							<div key={node.fields.slug}>
								<h3
									css={{
										marginTop: rhythm(1 / 4),
										marginBottom: rhythm(0.2),
									}}
								>
									<Link
										style={{ boxShadow: `none` }}
										to={node.fields.slug}
										dangerouslySetInnerHTML={{
											__html: title || '',
										}}
									/>
								</h3>
								<BlogInfo timeToRead={node.timeToRead} date={node.frontmatter.date} />
								<p
									css={{ marginBottom: rhythm(1.5) }}
									dangerouslySetInnerHTML={{
										__html: node.frontmatter.description || node.excerpt,
									}}
								/>
							</div>
						);
					})}
				</Layout>
			</section>
		</ThemeProvider>
	);
};

BlogIndex.propTypes = {
	data: object.isRequired,
	location: object.isRequired,
};

export const pageQuery = graphql`
	query {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
					}
					timeToRead
				}
			}
		}
	}
`;

export default BlogIndex;
