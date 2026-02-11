
import dynamic from 'next/dynamic'

const PGPCardCollection = dynamic(() => import('../PGPCardCollection').then(mod => mod.PGPCardCollection))
const CardCollection = dynamic(() => import('../CardCollection').then(mod => mod.CardCollection))
const Hero = dynamic(() => import('../Hero').then(mod => mod.Hero))
const Teaser = dynamic(() => import('../Teaser').then(mod => mod.Teaser))
const GuidedFilters = dynamic(() => import('../GuidedFilters').then(mod => mod.GuidedFilters))
const FacetOptions = dynamic(() => import('../FacetOptions').then(mod => mod.FacetOptions))
const QuickLinks = dynamic(() => import('../QuickLinks').then(mod => mod.QuickLinks))
const Text = dynamic(() => import('../Text').then(mod => mod.Text))
import {Page} from '../../../../types'
import {pageBlocks} from '../../../../types/pages'

/**
 * Renders different components based on the provided page data
 * @param {Object} props - Component properties
 * @param {Array} props.components - Array of page components to render
 * @param {Object} props.$ - Optional object containing data-cslp attributes
 * @param {boolean} [props.isABEnabled=false] - Flag to enable A/B testing
 * @returns {JSX.Element} Rendered components
 */

function RenderComponents({
                              hero,
                              components,
                              isABEnabled = false,
                              searchParams,
                              webConfig,
                          }: Page.pageRenderProps) {

    const apiComponentMapper = (apiComponent: pageBlocks['api_component'], key: number) => {
        const category = searchParams?.slug?.[0]
        const subCategory = searchParams?.slug?.[1]
        if (!apiComponent) return null

        if (apiComponent.component_name === 'guided_filter') {
            return (
                <GuidedFilters
                    id={`guided-filters-${key}`}
                    {...apiComponent}
                    category={category}
                    subCategory={subCategory}
                />
            )
        }
        if (apiComponent.component_name === 'filters') {
            return (
                <FacetOptions
                    id={`filters-${key}`}
                    {...apiComponent}
                    {...searchParams}
                />
            )
        }

        return null
    }

    const componentMapper = (component: pageBlocks, key: number) => {

        switch (true) {

            case (!!component.teaser):
                return (

                    <Teaser
                        id={`teaser-${key}`}
                        isABEnabled={isABEnabled}
                        {...component.teaser}
                    />

                )

            case (!!component.api_component):
                return apiComponentMapper(component.api_component, key)

            

                case (!!component.quick_links):
                    return (
    
                            <QuickLinks
                            id={`quick-links-${key}`}
                            {...component.quick_links}
                            {...searchParams}
                            webConfig={webConfig}
                        />
                    )
            
                case (!!component.pgp_collection):
                return (

                    <PGPCardCollection
                        id={`pgpcard-collection-${key}`}
                        {...component.pgp_collection}
                        className='mx-[2.25rem] md:mx-[5.25rem] mb-25'
                    />

                )

                

            case (!!component.card_collection):
                return (

                    <CardCollection
                        id={`card-collection-${key}`}
                        {...component.card_collection}
                        className='mx-[2.25rem] md:mx-[5.25rem] mb-25'
                    />

                )    

            case (!!component.text):
                return (

                    <Text
                        id={`text-${key}`}
                        {...component.text}
                    />

                )

            default:
                return null
        }

    }

    return (
        <>
            {hero && <Hero id='hero-banner' {...hero}/>}
            <div
                className={components?.length ? undefined : `max-height mt-32`}
            >
                {components?.map((component, key: number) => <div
                    key={`component-${key}`} id={`component-${key}`}
                >
                    {
                        componentMapper(component, key)
                    }
                </div>)}
            
            </div>
        </>
    )
}

export {RenderComponents}