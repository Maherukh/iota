import React from 'react';
import styles from '../Styles/footer.module.css';
import { Box, Center, Container, Flex, Heading, Icon, Spacer, StackDivider, Text, VStack } from '@chakra-ui/react'
import { BsYoutube, BsGithub, BsTwitter, BsReddit, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FaDiscord, FaFacebookSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box className={styles.cover} pt={22}>
      <Container maxW='6xl'>
        <VStack
          divider={<StackDivider borderColor='gray.500' />}
          align='strecth'
          pt={30}
        >
          <Box className={styles.alignTxt} mb={8} color='grey.200'>
            <Heading size='xl'>IOTA Provides Digital Trust,</Heading>
            <Heading size='xl'>Enabling Us To Build</Heading>
            <Heading size='xl'>A Better World</Heading>
          </Box>
          
          <Box mt={8}>
          <Flex color='gray.400' pb={16}>
            <Box >
              <Heading size='md'>Registered Address</Heading>
              <Text maxW='8rem'className={styles.alignTxt} >IOTA Foundation {'\n'}
                    Pappelallee 78/79 {'\n'}
                    10437 Berlin {'\n'}
                    Germany
              </Text>
            </Box>
            <Spacer />
            <Box >
              <Text>© 2022 IOTA Foundation - Privacy Policy</Text>
            </Box>
          </Flex>
          </Box>
        </VStack>
      </Container >
      <Flex>
        <Center flex='1' p={6} bg='#161F35' className={styles.ele}>
          <Icon as={BsYoutube} w={6} h={6} />
        </Center>
        <Center bg='#2E384E' p={6} flex='1' className={styles.ele}>
          <Icon as={BsGithub} w={6} h={6} />
        </Center>
        <Center flex='1' p={6} bg='#4D566D' className={styles.ele}>
          <Icon as={FaDiscord} w={6} h={6} />
        </Center>
        <Center flex='1' p={6} bg='#6C768C' className={styles.ele}>
          <Icon as={BsTwitter} w={6} h={6} />
        </Center>
        <Center flex='1' p={6} bg='#7F899F' className={styles.ele}>
          <Icon as={BsReddit} w={6} h={6} />
        </Center>
        <Center flex='1' p={6} bg='#8A95AA' className={styles.ele}>
          <Icon as={BsLinkedin} w={6} h={6} />
        </Center>
        <Center flex='1' p={6} bg='#9CA5BB' className={styles.ele}>
          <Icon as={BsInstagram} w={6} h={6} />
        </Center>
        <Center flex='1' p={6} bg='#BCC6DC' className={styles.ele}>
          <Icon as={FaFacebookSquare} w={6} h={6} />
        </Center>
      </Flex>
    </Box>
    );
}

export default Footer;