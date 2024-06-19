import { Typography } from '../components/ui/typography'
import Wrapper from '../components/wrapper'

export default function About() {
  return (
    <div>
      <Typography variant={'h1'} className={'text-center mt-16 mb-32'}>
        About Me
      </Typography>
      <Wrapper className={'lg:w-full max-w-7xl lg:mx-auto text-baseBlackText'}>
        <Typography variant={'p'}>
          Hey there! I'm a dynamic marketer crafting compelling narratives that captivate audiences and propel brands.
          With a deep grasp of consumer behavior, I specialize in creating strategic campaigns that resonate and drive
          real results.
        </Typography>

        <Typography variant={'p'}>
          My expertise lies in blending creativity and data to develop impactful strategies across channels. From
          captivating content and visuals to targeted social media campaigns and effective SEO, I leverage diverse tools
          to ensure maximum brand visibility and engagement.
        </Typography>

        <Typography variant={'p'}>
          I meticulously analyze performance, continually optimizing strategies for maximum ROI. My collaborative
          approach aligns marketing efforts with business objectives, fostering strong cross-functional partnerships.
        </Typography>

        <Typography variant={'p'}>
          Whether launching a new product, revitalizing a brand, or driving lead generation and conversion, I thrive on
          delivering innovative, tailored marketing solutions. With a proven track record across industries, I bring a
          fresh perspective and wealth of experience to every project.
        </Typography>

        <Typography variant={'p'}>
          Guided by a passion for storytelling and persuasion, I'm committed to crafting unforgettable brand experiences
          that resonate with audiences and drive tangible business growth. Ready to elevate your marketing game? Let's
          connect!
        </Typography>
      </Wrapper>
    </div>
  )
}
