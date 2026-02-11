'use client'
import { Hero as HeroProps } from '../../../../types/components'
import { Image, Link, Video } from '../common'
import { resolveCta } from '../../../../lib/utils/url'



const Hero: React.FC<HeroProps> = (props: HeroProps) => {
    const { heading, content, cta, image, video, styles, id, title } = props
    const defaultLocale = 'en'
    const bannerHeading = heading
    const bannerContent = content
    const bannerImage = [{
        image: image?.[0]?.image,
        image_alt_text: title
    }]
    const bannerVideo = video
    const bannerCta = [{
        text: content,
        external_url: cta?.[0]?.external_url
    }]

    const ctaLink = resolveCta(bannerCta)
    let position_css

    if (styles && styles?.text_align === 'Right') {
        position_css = 'ml-auto text-right items-center justify-end'
    }
    else{ // Default to Left
        position_css = 'items-center justify-start'
    }

    return (
        <div
            id={id}
            className={`banner-container relative bg-cover bg-no-repeat my-25 h-[100vh] mt-0 `}
        >
            <div className='absolute inset-0 overflow-hidden'>
                {!bannerImage?.[0]?.image?.url && bannerVideo?.video?.url 
                    ? <Video
                        {...bannerVideo}
                        className='h-full w-full object-cover object-center opacity-100'    
                    />
                    // eslint-disable-next-line jsx-a11y/alt-text
                    : <Image
                        {...bannerImage?.[0]}
                        className='h-full w-full object-cover object-center opacity-100'
                    />}
                
            </div>
            <div className={`dark h-full flex flex-row ${position_css}`}>
                <div className='lg:max-w-[45.635%] mx-[2.25rem] md:mx-[5.25rem]'>
                    {bannerHeading && <h2 data-id='h2-text'
                        className={`text-3xl md:text-4xl font-semibold tracking-[0.125rem] p-0 text-white lg:text-6xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-[2.055rem] ${(position_css?.includes('text-right') ? 'text-right' : '')}`}>
                        {bannerHeading}</h2>}
                    {bannerContent && <p data-id='paragraph-text'
                        className={'font-light text-md md:text-xl tracking-[0.063rem] p-0 text-white mt-[1.748rem] drop-shadow-[0_2.5px_2.5px_rgba(0,0,0,0.8)] whitespace-break-spaces line-clamp-5'}>
                        {bannerContent}
                    </p>}
                    {bannerCta?.[0]?.text && ctaLink && <span><Link
                        url={ctaLink}
                        className={`relative mt-[1.748rem] max-w-full w-max btn-primary ${(position_css?.includes('justify-end') ? 'justify-self-end' : '')}`}
                    >
                        <span>{bannerCta?.[0]?.text} </span>
                    </Link></span>}
                </div>
            </div>
        </div>
    )
}

export { Hero }
