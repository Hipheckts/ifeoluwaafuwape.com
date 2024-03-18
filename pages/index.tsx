import {
  Box,
  Circle,
  Flex,
  Heading,
  HeadingProps,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import ChakraLogo from 'components/chakra-logo';
import CodeMagicIcon from 'components/code-magic';
import Container from 'components/container';
import Emoji from 'components/emoji';
import FlutterIcon from 'components/flutter';
import GithubIcon from 'components/github';
import { SpanGradient, StartSideGradient } from 'components/gradients';
import KotlinIcon from 'components/kotlin';
import LinkItem from 'components/link-item';
import ProjectCard from 'components/project-card';
import ReactNativeIcon from 'components/react-native';
import { EmailIcon, FileIcon, LinkedInIcon, TwitterIcon } from 'components/social-icons';
import SubscribeForm from 'components/subscribe-form';
import SwiftIcon from 'components/swift';
import TalkCard from 'components/talk-card';
import TestimonialCard from 'components/testimonial.card';
import ViewMore from 'components/view-more';
import chunk from 'lib/chunk';
import {
  allFeaturedProjects,
  allFeaturedTalks,
  allFeaturedTestimonials,
} from 'lib/contentlayer-utils';
import sortByPublishedDate from 'lib/sort';
import tools from 'lib/tools';
import Image from 'next/image';
import Link from 'next/link';
import siteConfig from 'site.config';

function AchievementItem({ icon, children }) {
  return (
    <HStack spacing="3">
      <Icon as={icon} fontSize="4xl" />
      <Text fontFamily="heading" fontSize="xl">
        {children}
      </Text>
    </HStack>
  );
}

function MainHeading(props: HeadingProps) {
  return (
    <Heading
      as="h1"
      width="full"
      maxWidth={{ md: '70vw' }}
      fontFamily="heading"
      fontSize={{ base: '3.5rem', md: 'max(8vw, 4rem)' }}
      letterSpacing="tight"
      lineHeight="1"
      marginBottom="14"
      userSelect="none"
      alignContent={'center'}
      {...props}
    />
  );
}

export default function HomePage() {
  return (
    <Container gradient={<SpanGradient />}>
      <Flex
        direction="column"
        align="center"
        position="relative"
        paddingBottom="24"
        paddingTop="12"
      >
      <MainHeading>
        <Box
            display="block"
            textAlign={'center'}>
        Ifeoluwa Afuwape
        </Box>
      </MainHeading>
          <Box
            as="span"
            color="sage.base"
            display="block"
            textAlign={'center'}
            _before={{ content: `"— "` }}
            as="h1"
            width="full"
            maxWidth={{ md: '70vw' }}
            fontFamily="heading"
            fontSize={{ base: '2.5rem', md: 'max(6vw, 3rem)' }}
            letterSpacing="tight"
            lineHeight="1"
            marginBottom="14"
            userSelect="none"
            // fontSize={60}
          >
            senior software engineer
          </Box>


        <Text
          align={{ base: 'start', md: 'center' }}
          fontFamily="body"
          maxWidth="40rem"
          fontSize={{ base: 'lg', md: '2xl' }}
        >
          I enjoy building <Emoji label="mobile">📱</Emoji> mobile applications and web{' '}
          <Emoji label="solutions">⚙️</Emoji> solutions, with{' '}
          <Emoji label="love">😍 </Emoji> great passion for learning new technologies <Emoji label="technologies">🚀</Emoji>
        </Text>

        <Box marginTop={{ base: '8', md: '14' }} width="full">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify={{ base: 'flex-start', md: 'center' }}
            gap={{ base: '5', md: '10' }}
          >
            <AchievementItem icon={ReactNativeIcon}>React Native</AchievementItem>
            <AchievementItem icon={FlutterIcon}>Flutter</AchievementItem>
            <AchievementItem icon={KotlinIcon}>Kotlin</AchievementItem>
            <AchievementItem icon={SwiftIcon}>Swift</AchievementItem>
            <AchievementItem icon={GithubIcon}>GIT</AchievementItem>
            <AchievementItem icon={CodeMagicIcon}>Codemagic</AchievementItem>
          </Flex>
        </Box>
      </Flex>

      {/* I design component systems... */}
      <Flex
        paddingY="vGutter"
        gap={{ base: '5', lg: '20' }}
        justify="space-between"
        direction={{ base: 'column', lg: 'row' }}
      >
        <Box maxWidth={{ lg: '36rem' }}>
          {/* Circular Headshot */}
          <Circle
            display={{ base: 'none', lg: 'flex' }}
            position={'relative'}
            size="6.25rem"
            float="left"
            marginRight="6"
            overflow="hidden"
          >
            <Image
              alt="Ifeoluwa Afuwape"
              src="/static/images/ife-head-shot.jpg"
              layout="fill"
              objectFit="cover"
            />
          </Circle>

          <Heading
            lineHeight="1"
            fontSize={{ base: '3.125rem', md: '5rem', lg: '5.85rem' }}
            letterSpacing="tight"
          >
            I build{' '}
            <Box as="span" color="sage.base">
              web & mobile applications
            </Box>
          </Heading>
        </Box>

        <Box maxWidth={{ lg: '27.5rem' }} marginTop="4">
          <Text fontSize={{ base: 'lg', md: '2xl' }}>
          A talented mobile software engineer with a strong academic background and vast commercial experience of web and mobile softwares.  developing high-quality, efficient and scalable mobile applications.
          </Text>

          {/* Profile links */}
          <SimpleGrid columns={2} marginTop="10" spacing="10" maxWidth="16rem">
            <LinkItem icon={LinkedInIcon} href={siteConfig.profiles.linkedin}>
              LinkedIn
            </LinkItem>
            <LinkItem icon={TwitterIcon} href={siteConfig.profiles.twitter}>
              Twitter
            </LinkItem>
            <LinkItem icon={EmailIcon} href={siteConfig.profiles.email}>
              Email
            </LinkItem>
            <LinkItem icon={FileIcon} href={siteConfig.profiles.resume}>
              Resume
            </LinkItem>
          </SimpleGrid>
        </Box>
      </Flex>

      {/* Featured projects */}
      <Box as="section" py="vGutter">
        <Heading size="3xl" letterSpacing="tight">
          Featured Projects
        </Heading>
        <Box marginTop="vGutter">
          <Stack spacing="20">
            {allFeaturedProjects.map((project) => (
              <ProjectCard key={project.title} data={project} />
            ))}
          </Stack>
        </Box>
      </Box>



      {/* Testimonials */}
      <Box as="section" aria-labelledby="heading" py="vGutter">
        <VisuallyHidden>Recommendations</VisuallyHidden>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6">
          {chunk(allFeaturedTestimonials, 2).map((testimonials, index) => (
            <Stack key={index} spacing="6">
              {testimonials.map((data) => (
                <TestimonialCard key={data.name} data={data} />
              ))}
            </Stack>
          ))}
        </SimpleGrid>
      </Box>

      {/* Featured Talks */}
      {/* <Box as="section" py="vGutter" position="relative">
        <StartSideGradient />
        <Heading size="3xl" letterSpacing="tight" position="relative">
          Featured Talks
        </Heading>
        <Box marginY="10">
          <Flex direction="column" gap="6">
            {allFeaturedTalks.sort(sortByPublishedDate).map((talk) => (
              <TalkCard key={talk.title} data={talk} />
            ))}
          </Flex>
        </Box>

        <Link href="/talks" passHref>
          <ViewMore>View all Talks</ViewMore>
        </Link>
      </Box> */}

      <Box as="hr" borderColor="whiteAlpha.300" />
      
      {/* Tools & Softwares */}
      <Box as="section" py="vGutter">
        <Box marginBottom="16">
          <Heading size="3xl" letterSpacing="tight">
            Tools &amp; Softwares
          </Heading>
          <Text marginTop="5" fontSize="lg" maxWidth={{ md: '45rem' }}>
            Being a lover of technology from childhood, I have learnt, tried and made use of several languages and frameworks, Here are a few:
          </Text>
        </Box>

        {/* ToolList */}
        <Wrap spacing="10">
          {tools.map((tool) => (
            <WrapItem fontFamily="heading" fontSize="3xl" color="sage.base" key={tool}>
              {tool}
            </WrapItem>
          ))}
        </Wrap>
      </Box>

      {/* Subscribe callout */}
      {/* <SubscribeForm /> */}
      <Box as="hr" borderColor="whiteAlpha.300" />
    </Container>
  );
}
