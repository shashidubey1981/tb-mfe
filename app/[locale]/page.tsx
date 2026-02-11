import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from './components/LanguageSwitcher';
import { getServerData } from '../../context/ServerDataProvider';
import { App } from '../../types';
import { getLandingPageEntries } from '../../lib/contentstack/contentstack';
import { PageWrapper, NotFoundComponent, RenderComponents} from "./components/index";

export default async function HomePage() {
  const t = await getTranslations('common');
  const { webConfig } = getServerData() as { webConfig: App.WebConfig };
  const { navigationConfig } = getServerData() as { navigationConfig: App.NavigationConfig };
  const contentType = 'home_page';
    const res = await getLandingPageEntries(contentType, 'en', '')
    console.log('res', res);
    const homePageData = res;
    

  return (
    <main>
      <LanguageSwitcher />
      <h1>{t('welcome')}</h1>
      <p>TB discovery - Next.js 16 App with Internationalization HP</p>
      {homePageData
                ? <PageWrapper {...homePageData}>
                    {homePageData?.components
                        ? <RenderComponents webConfig={webConfig}
                                            hero={homePageData?.hero && Array.isArray(homePageData.hero) ? homePageData.hero[0] : homePageData.hero}
                                            components={[
                                                ...homePageData?.components
                                            ]}
                        /> : ''}
                </PageWrapper>
                : <>
                    {<NotFoundComponent/>}
                </>}
    </main>
  );
}
