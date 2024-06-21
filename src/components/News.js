import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles =[
    {
      "source": { "id": "associated-press", "name": "Associated Press" },
      "author": "ALFREDO PEÑA, MARIANA MARTÍNEZ BARBA",
      "title": "Tropical Storm Alberto: 1st named storm of season forms in Gulf - The Associated Press",
      "description": "Tropical Storm Alberto has formed in the southwestern Gulf of Mexico, the first named storm of what is forecast to be a busy hurricane season. Authorities in Mexico reported three deaths from its rains. Alberto, which is bringing strong winds, heavy rainfall …",
      "url": "https://apnews.com/article/tropical-storm-alberto-gulf-hurricane-season-53b8efa54caf43e7bc746126d28bfa04",
      "urlToImage": "https://dims.apnews.com/dims4/default/8b65aef/2147483647/strip/true/crop/5000x2813+0+380/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc4%2Ff4%2F2ab341f5901c89ac9befb35b92ed%2F45bd86dfffaf4ab88807a6cb74aea411",
      "publishedAt": "2024-06-20T04:38:00Z",
      "content": "TAMPICO, Mexico (AP) Tropical Storm Alberto formed Wednesday in the southwestern Gulf of Mexico, the first named storm of what is forecast to be a busy hurricane season. Authorities in Mexico reporte… [+4866 chars]"
    },
    {
      "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
      "author": "Al Jazeera",
      "title": "Putin and Kim take each other for a spin in Aurus limousine - Al Jazeera English",
      "description": "The drive took place after the two leaders signed a deal that included a mutual defence pledge.",
      "url": "https://www.aljazeera.com/news/2024/6/20/putin-and-kim-take-each-other-for-a-spin-in-aurus-limousine",
      "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/06/2024-06-20T025828Z_1349399794_RC2QE8A6Q5ZL_RTRMADP_3_NORTHKOREA-RUSSIA-1718853703.jpg?resize=1920%2C1440",
      "publishedAt": "2024-06-20T04:03:25Z",
      "content": "Russian President Vladimir Putin and North Korean leader Kim Jong Un went for a spin in an Aurus limousine on Wednesday, taking turns at the wheel of the Russian-built car.\r\nThe carefully staged publ… [+1396 chars]"
    },
    {
      "source": { "id": null, "name": "NPR" },
      "author": "",
      "title": "U.S. home prices have far outpaced paychecks. See what it looks like where you live - NPR",
      "description": "In nearly half of metro areas, buyers must make more than $100,000 to afford a median-priced home, a Harvard University report finds. And home prices this year reached a new all-time high.",
      "url": "https://www.npr.org/2024/06/20/nx-s1-5005972/home-prices-wages-paychecks-rent-housing-harvard-report",
      "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/2138x1203+0+0/resize/1400/quality/100/format/png/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fb4%2F19%2F24f2b34d491a90f419b2f054c737%2Fscreenshot-2024-06-18-at-4-32-36-pm.png",
      "publishedAt": "2024-06-20T04:02:00Z",
      "content": "Loading... \r\nMillions of Americans are already shut out of buying a home, and the cost of buying one continues to rise.\r\nIn past decades, it was common to find a house that cost roughly three times a… [+3645 chars]"
    },
    {
      "source": { "id": null, "name": "CNBC" },
      "author": "Lim Hui Jie",
      "title": "Shares of Australian fast-food chain Guzman y Gomez soar 39% on trading debut - CNBC",
      "description": "The company's IPO at AU$335.1 million is Australia's largest IPO since chemical distributor Redox's offering in July 2023.",
      "url": "https://www.cnbc.com/2024/06/20/guzman-y-gomez-shares-soar-more-than-39percent-on-trading-debut.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107430930-1718852758593-gettyimages-2157403945-l1210871.jpeg?v=1718852777&w=1920&h=1080",
      "publishedAt": "2024-06-20T04:01:24Z",
      "content": "Mexican-themed fast-food chain Guzman y Gomez made a stellar debut on the Australian Stock Exchange on Thursday, with its shares soaring as much as 39.1%.\r\nThe company, which was valued at 2.23 billi… [+937 chars]"
    },
    {
      "source": { "id": null, "name": "BBC News" },
      "author": null,
      "title": "Putin in Vietnam: An old friendship that refuses to die - BBC.com",
      "description": "Putin's Vietnam trip is being interpreted as displaying the support Russia still enjoys in the region.",
      "url": "https://www.bbc.com/news/articles/cw44z3k997do",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0d1b/live/f0609e30-2eca-11ef-90be-b75b34b0bbb2.jpg",
      "publishedAt": "2024-06-20T03:57:41Z",
      "content": "By Jonathan Head, BBC News, South East Asia correspondent\r\nRussian President Vladimir Putin has arrived in the Vietnamese capital Hanoi on the second stop of an East Asian tour. \r\nThe trip, which com… [+4180 chars]"
    },
    {
      "source": { "id": null, "name": "Rolling Stone" },
      "author": "Mankaprr Conteh",
      "title": "Dr. Dre, Tyler the Creator, YG and More 'Pop Out' At Kendrick Lamar's Juneteenth Concert - Rolling Stone",
      "description": "“We done lost a lot of homies to this music shit,” Lamar said as he partied with dozens of Los Angeles entertainers on stage",
      "url": "http://www.rollingstone.com/music/music-news/kendrick-lamar-dr-dre-tyler-the-creator-yg-juneteenth-concert-1235042864/",
      "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2023/05/GettyImages-1410772001.jpg?w=1600&h=900&crop=1",
      "publishedAt": "2024-06-20T03:31:37Z",
      "content": "Kendrick Lamar’s hometown Juneteenth show at Los Angeles’ Kia Forum was a star-studded ode to West Coast rap that culminated with dozen of artists and entertainers joining Lamar for an unprecedented … [+2302 chars]"
    },
    {
      "source": { "id": null, "name": "Yahoo Entertainment" },
      "author": null,
      "title": "Men's College World Series Day 6: Tennessee to face Texas A&M in championship series - Yahoo Sports",
      "description": null,
      "url": "https://sports.yahoo.com/mens-college-world-series-day-6-tennessee-to-face-texas-am-in-championship-series-183335333.html",
      "urlToImage": null,
      "publishedAt": "2024-06-20T03:08:00Z",
      "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    },
    {
      "source": { "id": null, "name": "The Indianapolis Star" },
      "author": "Zion Brown",
      "title": "Indiana Fever sold-out crowds reason to cheer with 4 home wins in a row - IndyStar",
      "description": "The Indiana Fever pulled off something Wednesday night the team hasn't done since 2015.",
      "url": "https://www.indystar.com/story/sports/basketball/wnba/fever/2024/06/19/indiana-fever-sold-out-crowds-reason-to-cheer-with-4-home-wins-in-a-row-caitlin-clark-aliyah-boston/74146132007/",
      "urlToImage": "https://www.indystar.com/gcdn/authoring/authoring-images/2024/06/20/PIND/74153044007-2-jt-09331.jpg?crop=4173,2348,x0,y340&width=3200&height=1801&format=pjpg&auto=webp",
      "publishedAt": "2024-06-20T02:44:16Z",
      "content": "INDIANAPOLIS I was a freshman, I think.\r\nYeah, I was in eighth grade.\r\nThats what Aliyah Boston and Caitlin Clark, respectively, said softly to each other on opposite ends of the Indiana Fevers postg… [+3037 chars]"
    },
    {
      "source": { "id": null, "name": "NPR" },
      "author": "Joe Hernandez",
      "title": "2 climate activists were arrested after spraying orange paint on Stonehenge - NPR",
      "description": "The group Just Stop Oil took credit for the Wednesday afternoon action, which they said was a call on the United Kingdom to stop the use of fossil fuels by 2030.",
      "url": "https://www.npr.org/2024/06/19/nx-s1-5012595/climate-activists-arrested-stonehenge",
      "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3138x1765+0+294/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fc4%2Fbc%2F94f3d0f3427db8a4a415b28a8fd3%2Fap24171446206834.jpg",
      "publishedAt": "2024-06-20T02:43:55Z",
      "content": "Two climate activists have been arrested at Stonehenge in England after spraying orange paint on the well-known historic landmark.\r\nThe group Just Stop Oil took credit for the Wednesday action, which… [+1821 chars]"
    },
    {
      "source": { "id": "google-news", "name": "Google News" },
      "author": "USA TODAY",
      "title": "Extreme heat wave impacting Northeast, Midwest, mid-Atlantic - USA TODAY",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiVGh0dHBzOi8vd3d3LnVzYXRvZGF5LmNvbS9zdG9yeS9uZXdzL25hdGlvbi8yMDI0LzA2LzE5L2V4dHJlbWUtaGVhdC13YXZlLzc0MTUyMDU4MDA3L9IBAA?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-06-20T02:26:15Z",
      "content": null
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Abel Alvarado, Tara John, Ana María Cañizares",
      "title": "Ecuador hit by a nationwide blackout - CNN",
      "description": "Ecuador was hit with a nationwide blackout on Wednesday, leaving the South American nation’s 17 million people without power.",
      "url": "https://www.cnn.com/2024/06/19/americas/ecuador-nationwide-blackout-intl-latam/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2157781359.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-06-20T01:44:00Z",
      "content": "Ecuador was hit with an hours-long nationwide blackout on Wednesday that left the South American nations 17 million people without power.\r\nThe blackout which affected hospitals, homes, and a major su… [+2247 chars]"
    },
    {
      "source": { "id": "usa-today", "name": "USA Today" },
      "author": "Ayrton Ostly",
      "title": "2024 NBA mock draft roundup: Experts project lottery picks - USA TODAY",
      "description": "The 2024 NBA Draft is just a week away with plenty of intrigue at the top of the lottery. Here's what experts predict will happen in Brooklyn.",
      "url": "https://www.usatoday.com/story/sports/nba/2024/06/19/2024-nba-mock-draft-roundup-picks-top/74151708007/",
      "urlToImage": "https://www.usatoday.com/gcdn/authoring/images/smg/2024/06/19/USAT/74066747007-USATSI_23256306.jpeg?crop=4750,2672,x0,y247&width=3200&height=1801&format=pjpg&auto=webp",
      "publishedAt": "2024-06-20T01:41:48Z",
      "content": "With the Boston Celticswinning the 2024 NBA Finals, the season is over. Now all 30 teams can look forward to the offseason, including the 2024 NBA Draft. The two-night event in Brooklyn is just one w… [+17863 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Stephanie Gallman, Dianne Gallagher",
      "title": "Louisiana classrooms now required by law to display the Ten Commandments - CNN",
      "description": "Louisiana public schools are now required to display the Ten Commandments in all classrooms, after Republican Gov. Jeff Landry signed the requirement into law Wednesday.",
      "url": "https://www.cnn.com/2024/06/19/politics/louisiana-classrooms-ten-commandments/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/ap24078713961534.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-06-20T01:41:00Z",
      "content": "Louisiana public schools are now required to display the Ten Commandments in all classrooms, after Republican Gov. Jeff Landry signed the requirement into law Wednesday.\r\nHouse Bill 71, approved by s… [+2867 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Asa Fitch",
      "title": "Nvidia's Ascent to Most Valuable Company Has Echoes of Dot-Com Boom - The Wall Street Journal",
      "description": "Chip maker passes Microsoft for top spot, just as John Chambers-led Cisco Systems did two decades ago. He says the situation now is different.",
      "url": "https://www.wsj.com/tech/ai/nvidias-ascent-to-most-valuable-company-has-echoes-of-dot-com-boom-dd836c90",
      "urlToImage": "https://images.wsj.net/im-971417/social",
      "publishedAt": "2024-06-20T00:17:00Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "El Paso Times" },
      "author": "Aaron A. Bedoya",
      "title": "Ruidoso fire: South Fork Fire and Salt Fire continue to burn NM - El Paso Times",
      "description": "The South Fork Fire and Salt Fire are active wildfires discovered Monday, June 17, on the Mescalero Reservation west of the Village of Ruidoso.",
      "url": "https://www.elpasotimes.com/story/news/2024/06/19/ruidoso-fire-south-fork-fire-and-salt-fire-continue-to-burn-nm/74150784007/",
      "urlToImage": "https://www.elpasotimes.com/gcdn/authoring/authoring-images/2024/06/19/PTX1/74152001007-61924-fires-in-ruidoso-ep-times-ipa-7799.JPG?crop=2221,1249,x0,y116&width=2221&height=1249&format=pjpg&auto=webp",
      "publishedAt": "2024-06-20T00:11:15Z",
      "content": "The South Fork Fire and Salt Fire continue to burn in southern New Mexico.\r\nSince its start on Monday, June 17, the wildfires have burned over 20,000 acres with 0% containment, according to the Villa… [+7230 chars]"
    },
    {
      "source": { "id": null, "name": "YouTube" },
      "author": null,
      "title": "China Eyes Trade War Targets in EU for Counterstrikes - Bloomberg Television",
      "description": "China is said to be preparing a series of retaliatory actions against the European Union for its proposed tariffs on electric vehicles. The likely targets in...",
      "url": "https://www.youtube.com/watch?v=jXSNHz_4mxk",
      "urlToImage": "https://i.ytimg.com/vi/jXSNHz_4mxk/maxresdefault.jpg",
      "publishedAt": "2024-06-20T00:11:00Z",
      "content": null
    },
    {
      "source": { "id": "techcrunch", "name": "TechCrunch" },
      "author": "Ingrid Lunden",
      "title": "France leads the pack for Generative AI funding in Europe, London has 3X the number of GenAI startups - TechCrunch",
      "description": "Like it or hate it, artificial intelligence – especially generative AI – is the technology story of 2024. OpenAI, with its rollouts of viral services like",
      "url": "https://techcrunch.com/2024/06/19/france-leads-the-pack-for-generative-ai-funding-in-europe-london-has-3x-the-number-of-genai-startups/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2024/05/GettyImages-2080972792.jpg?resize=1200,800",
      "publishedAt": "2024-06-19T23:43:17Z",
      "content": "Like it or hate it, artificial intelligence especially generative AI is the technology story of 2024. \r\nOpenAI, with its rollouts of viral services like ChatGPT and billions in funding, may have gobb… [+5015 chars]"
    },
    {
      "source": { "id": null, "name": "Page Six" },
      "author": "Mara Siegler",
      "title": "Justin Timberlake brought back to NYC by driver after DWI - Page Six",
      "description": "Penalties for DWI offenses can include monetary fines and license suspensions in New York so the pop idol may need to get comfortable in the sexy back.",
      "url": "https://pagesix.com/2024/06/19/celebrity-news/justin-timberlake-brought-back-to-nyc-by-driver-after-dwi/",
      "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2024/06/84107264-1.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2024-06-19T23:35:00Z",
      "content": "Justin has let someone else Timberlake the wheel.\r\nThe pop star, who was arrested for DWI in the Hamptons early Tuesday morning, has headed back to NYC where his wife Jessica Biel is currently filmin… [+2753 chars]"
    },
    {
      "source": { "id": null, "name": "WCVB Boston" },
      "author": "Russ Reed",
      "title": "Celtics back in Mass. after night in Miami celebrating NBA title - WCVB Boston",
      "description": "The Boston Celtics flew to Miami the day after winning their 18th championship, but they have now returned home ahead of Friday's rolling rally.",
      "url": "https://www.wcvb.com/article/celtics-return-from-miami-trip-after-nba-finals-win/61178297",
      "urlToImage": "https://kubrick.htvapps.com/vidthumb/images/delta-plane-lands-bedford-66733d269c8d8.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
      "publishedAt": "2024-06-19T23:11:00Z",
      "content": "BEDFORD, Mass. —The Boston Celtics are back in Massachusetts after spending a night in Miami to celebrate their NBA-record 18th championship.\r\nThe Celtics flew to Miami at around noon Tuesday, just 1… [+1811 chars]"
    },
    {
      "source": { "id": null, "name": "Hollywood Reporter" },
      "author": "Brian Davids",
      "title": "Austin Butler on ‘The Bikeriders’ Prep During ‘Dune’ and the “Wild Adventure” of Ari Aster’s Next Film - Hollywood Reporter",
      "description": "The Oscar-nominated actor talks balancing his time on old motorcycles for his new '60s-set drama while immersing himself in knife training for 'Dune 2': \"that was the tricky part to figure out.\"",
      "url": "http://www.hollywoodreporter.com/movies/movie-features/how-austin-butler-bikeriders-dune-1235927265/",
      "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/06/GettyImages-2157180790-e1718833942167.jpg?w=1024",
      "publishedAt": "2024-06-19T22:19:11Z",
      "content": "Five years ago, Austin Butler’s memorable supporting role in Quentin Tarantino’s Once Upon a Time in Hollywood turned out to be his audition for leading man status, and he’s since become not only a l… [+13628 chars]"
    }
  ]
    constructor(){
        super();
        this.state={
            articles: this.articles,
            loading: false
        }
    }
  render() {
    return (
      <div className='container my-4'>
        <h3>NEWS MONKEY - HEADLINES</h3>
        <div className="row">
        {this.state.articles.map((element)=>{
             return <div className="col md-4" key={element.url}> {/*give a unique key to the thing you are returning*/}
             <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
             </div>
        })}
        </div>
      </div>
    )
  }
}

export default News
