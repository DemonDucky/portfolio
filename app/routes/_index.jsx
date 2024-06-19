import { Typography } from '../components/ui/typography'
import Wrapper from '../components/wrapper'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Link } from '@remix-run/react'
import ContactForm from '../components/contactForm'

export default function Index() {
  // const services = [
  //   {
  //     title: 'Shopify Services',
  //     description: 'Everything you need to have a success Shopify store',
  //     content: [
  //       'Design a Shopify theme that match with your brand image',
  //       'Develop a fully function Shopify store from scratch',
  //       'Optimize your current Shopify store'
  //     ]
  //   },
  //   {
  //     title: 'Website Develop Services',
  //     description: 'Having a website will make your brand more professional & increase attractive',
  //     content: [
  //       'Develop a landing page',
  //       'Build a custom website with all required function',
  //       'Develop a react web using CRA or framework based on react (Remix & Next)',
  //       'Optimize your current website'
  //     ]
  //   },
  //   {
  //     title: 'Minecraft Server Services',
  //     description: 'Your one-stop Minecraft services',
  //     content: [
  //       'Build a minecraft server base on your given idea',
  //       'Develop a custom Spigot/Paper plugin',
  //       'Optimize your current server',
  //       'Bug fix for your current server'
  //     ]
  //   }
  // ]

  const services = [
    {
      title: 'Social Media Marketing',
      description: "Elevate your brand's online presence and engage with your audience",
      content: [
        'Create and manage social media accounts (Facebook, Instagram, Tiktok, etc.)',
        'Develop and implement social media content strategies',
        'Plan and execute social media advertising campaigns',
        'Monitor and analyze social media metrics and performance'
      ]
    },
    {
      title: 'Content Creation',
      description: 'Craft compelling content to attract and retain customers',
      content: [
        'Write blog posts, articles, and website copy',
        'Create visual content (infographics, graphics, videos)',
        'Develop content calendars and editorial plans',
        'Optimize content for search engines (SEO)'
      ]
    },
    {
      title: 'Email Marketing',
      description: 'Nurture leads and maintain customer relationships through email campaigns',
      content: [
        'Design and develop email templates and newsletters',
        'Segment email lists and create targeted campaigns',
        'Implement email automation workflows',
        'Analyze email marketing metrics and performance'
      ]
    }
  ]

  const projects = [
    {
      img: '/images/luminx_logo.jpg',
      name: 'LuminX.net',
      goal: 'Increase brand awareness by 100% and engagement rate by 15% within a month through targeted Reels content on Facebook',
      deliverables: ['Upload 3 videos in a month and reach 3 millions view total', 'Increase brand followers by 1000']
    }
  ]

  return (
    <>
      <main>
        <Wrapper className={'md:grid md:grid-cols-2 md:place-items-center md:mb-56'}>
          <div>
            <img
              src="/images/name.svg"
              alt="Tuan Anh Luong"
              className={'max-w-lg w-full block mx-auto object-contain'}
            />
            <Wrapper>
              <Typography variant={'h3'} as={'h1'} className={'text-center md:text-5xl'}>
                A marketer who strives to craft compelling stories and campaigns that captivate audiences and drive
                demand for phenomenal products and services.
              </Typography>
            </Wrapper>
          </div>
          <img src="/images/cherry.svg" alt="logo" className={'max-w-lg w-full block mx-auto object-contain'} />
        </Wrapper>
        <Wrapper>
          <Typography variant={'h2'} className={'text-center mb-6 md:text-6xl md:mb-12'}>
            What I offer
          </Typography>
          <div className={'grid grid-cols-1 gap-6 lg:grid-cols-3'}>
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className={'text-baseText font-newyork'}>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                {service.content.map((content, index) => (
                  <CardContent key={index}>
                    <p>{content}</p>
                  </CardContent>
                ))}
              </Card>
            ))}
          </div>
        </Wrapper>
        <img
          loading={'lazy'}
          src="/images/feature.svg"
          alt="Featured Project"
          className={'w-10/12 block my-12 lg:my-48 lg:w-2/3 mx-auto'}
        />
        <Wrapper>
          {projects.map((project, index) => (
            <div className={'text-center mb-48'} key={index}>
              <img
                src={project.img}
                alt={project.name}
                className={'max-w-lg w-full block mx-auto object-contain rounded-3xl'}
              />
              <Typography variant={'h2'} className={'lg:text-7xl max-w-4xl mx-auto mt-12 mb-16 tracking-widest'}>
                {project.name}
              </Typography>
              <Typography
                variant={'h3'}
                className={
                  'text-xl lg:text-2xl font-normal-text font-normal w-full max-w-6xl lg:text-left mx-auto text-baseBlackText'
                }
              >
                <span className="font-bold text-baseText">Project Goal:</span> {project.goal}
              </Typography>
              <Typography
                variant={'p'}
                className={
                  'text-xl lg:text-2xl font-normal-text font-normal w-full max-w-6xl lg:text-left mx-auto text-baseBlackText'
                }
              >
                <span className="font-bold text-baseText">Project Deliverables:</span>
                <br />
                <ul>
                  {project.deliverables.map((deliverable, index) => (
                    <li key={index}>- {deliverable}</li>
                  ))}
                </ul>
              </Typography>
            </div>
          ))}
        </Wrapper>
        <Wrapper className={'text-center lg:mb-8'}>
          <Typography variant={'h1'} as={'h2'} className={'mb-6 lg:mb-12 font-normal lg:text-6xl text-3xl'}>
            Let's Contact
          </Typography>
          <Typography variant={'h1'} as={'h2'} className={'lg:text-8xl mb-6 text-5xl'}>
            Tuan Anh Luong
          </Typography>
          <div className={'grid grid-cols-1 gap-y-6 md:grid-cols-3 [&>h3]:py-4'}>
            <Typography variant={'h3'} className={'lg:text-xl text-lg'}>
              luong.tuananh.biz@gmail.com
            </Typography>
            <Typography variant={'h3'} className={'lg:text-xl text-lg'}>
              <Link className={'hover:underline'} target={'_blank'} to={'https://discordapp.com/users/.demonducky'}>
                Discord
              </Link>
            </Typography>
            <Typography variant={'h3'} className={'lg:text-xl text-lg'}>
              <Link className={'hover:underline'} target={'_blank'} to={'https://www.instagram.com/tuan.anhlg/'}>
                Instagram
              </Link>
            </Typography>
            <div className={'flex gap-x-4 items-center md:col-span-3 mx-auto'}>
              <Typography variant={'h4'}>or</Typography>
              <ContactForm />
            </div>
          </div>
        </Wrapper>
      </main>
    </>
  )
}
