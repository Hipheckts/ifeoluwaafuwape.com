import { allProjects } from '.contentlayer/data';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import Container from 'components/container';
import Emoji from 'components/emoji';
import MDXComponents from 'components/mdx-components';
import ProjectCard from 'components/project-card';
import SEO from 'components/seo';

export default function ProjectPage() {
  return (
    <Container>
      <SEO title="Projects" />
      <Box py="vGutter">
        <Box>
          <Heading size="3xl" marginBottom="6">
            Projects
          </Heading>
          <Stack fontSize="lg" maxW="60ch" spacing="4">
            {/* <Text>
              My primary focus these days is{' '}
              <MDXComponents.a href="https://chakra-ui.com/" target="_blank" rel="noopener">
                P{' '}
              </MDXComponents.a>{' '}
              — a component libary that provides the building blocks needed to create an accessible
              app fast <Emoji label="fast">⚡️</Emoji>.
            </Text> */}
            <Text>
              I'm passionate about building <b>mobile applications</b> that are highly scalable, efficient and absolutely world-class and always ready to go extra miles to achieve a feat🏅 if need be, I can learn a whole lot just for a solution to be brought to reality.
            </Text>
            <Text>Here are some projects I've worked on some of which includes: Financial Applications, Utility Apps, Messaging, E-commerce, Health & Fitnes, Insurance, Logistics, Media & Streaming and a host of others!</Text>
          </Stack>
        </Box>

        <Box marginTop="vGutter">
          <Stack spacing="20">
            {allProjects.map((project) => (
              <ProjectCard key={project.title} data={project} />
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
