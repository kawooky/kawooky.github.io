import socialLiftImage from './social-lift-picture.png'
import ncNewsImage from './NC-news-longer-picture.png'
import personalWebsiteImage from './personalWebsiteImage.png'


// interface info {
//     image: string;
//     name: string;
//     description: string
//     languages: string;
//     github: string;
//     website: string
// }

// interface projectsInfoObject {
//     socialLift: info;
//     redditEmulation: info;
//     personalWebsite: info;
// }

export const projectsInfoObject = {
    socialLift :  {
        image: socialLiftImage,
        name: 'Social Lift',
        description: 'A social gym mobile app where users can add and compare fitness achievements',
        languages: 'JavaScript, React Native, Firebase',
        github: 'https://github.com/kawooky/fe-nc-socialift',
        website: 'N/A'
    },
    ncNews :  {
        image: ncNewsImage,
        name: 'NC News',
        description: 'A social news platform similar to reddit where users can filter, vote and comment on articles about given topics',
        languages: 'JavaScript, React, SQL, Express, Jest',
        github: 'https://github.com/kawooky/fe-nc-news',
        website: 'https://youssefkawook-nc-news.netlify.app/'
    },
    personalWebsite :  {
        image: personalWebsiteImage,
        name: 'Personal Website',
        description: 'A website created to advertise myself.',
        languages: 'TypeScript, React',
        github: 'https://github.com/kawooky/kawooky.github.io',
        website: 'N/A'
    }
}