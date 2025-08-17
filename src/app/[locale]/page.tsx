import React from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx, Arrow, SmartImage } from '@/once-ui/components';
// import { Projects } from '@/components/work/Projects';

import { baseURL, routes, renderContent } from '@/app/resources'; 
// import { Mailchimp } from '@/components';
// import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import styles from './home.module.scss';

export async function generateMetadata(
	{params: {locale}}: { params: { locale: string }}
) {
	const t = await getTranslations();
    const { home } = renderContent(t);
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Home(
	{ params: {locale}}: { params: { locale: string }}
) {
	unstable_setRequestLocale(locale);
	const t = useTranslations();
	const { home, about, person, newsletter } = renderContent(t);
	return (
		<Flex
			maxWidth="m" fillWidth gap="xl"
			direction="column" alignItems="center">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			<Flex
				fillWidth
				direction="column"
				paddingY="l" gap="m">
					<Flex
						direction="column"
						fillWidth maxWidth="s">
						<RevealFx
							translateY="4" fillWidth justifyContent="flex-start" paddingBottom="m">
							<Heading
								wrap="balance"
								variant="display-strong-l">
								{home.headline}
							</Heading>
						</RevealFx>
						<RevealFx
							translateY="8" delay={0.2} fillWidth justifyContent="flex-start" paddingBottom="m">
							<Text
								wrap="balance"
								onBackground="neutral-weak"
								variant="heading-default-xl">
								{home.subline}
							</Text>
						</RevealFx>
						<RevealFx translateY="12" delay={0.4}>
							<Flex fillWidth>
								<Button
									id="about"
									data-border="rounded"
									href={`/${locale}/about`}
									variant="tertiary"
									size="m">
									<Flex
										gap="8"
										alignItems="center">
										{about.avatar.display && (
											<Avatar
												style={{marginLeft: '-0.75rem', marginRight: '0.25rem'}}
												src={person.avatar}
												size="m"/>
											)}
											{t("about.title")}
											<Arrow trigger="#about"/>
									</Flex>
								</Button>
							</Flex>
						</RevealFx>
						
						{/* Cover Images Gallery */}
						<RevealFx translateY="16" delay={0.6}>
							<Flex 
								fillWidth 
								paddingTop="xl">
								<Flex 
									className={styles.coverGallery}
									fillWidth>
									<Flex 
										className={styles.coverImage}>
										<SmartImage
											src="/images/gallery/Cover1.jpg"
											alt="Cover 1"
											sizes="(max-width: 768px) 33vw, 25vw"
											radius="m"
											aspectRatio="4 / 3"
											style={{objectFit: 'cover'}}
										/>
									</Flex>
									<Flex 
										className={styles.coverImage}>
										<SmartImage
											src="/images/gallery/Cover2.jpg"
											alt="Cover 2"
											sizes="(max-width: 768px) 33vw, 25vw"
											radius="m"
											aspectRatio="4 / 3"
											style={{objectFit: 'cover'}}
										/>
									</Flex>
									<Flex 
										className={styles.coverImage}>
										<SmartImage
											src="/images/gallery/Cover3.jpg"
											alt="Cover 3"
											sizes="(max-width: 768px) 33vw, 25vw"
											radius="m"
											aspectRatio="4 / 3"
											style={{objectFit: 'cover'}}
										/>
									</Flex>
								</Flex>
							</Flex>
						</RevealFx>
					</Flex>
				
			</Flex>
		</Flex>
	);
}
