import { string } from "prop-types";

export interface IIntroduction {
    name: string;
    avatar: string;
    location: string;
    description: string;
    position: string;
}

export interface IWork {
    title: string;
    logo: string;
    company: string;
    location: string;
    duration: string;
    description: string[];
    stack: { name: string; icon: string; }[];
}

export interface ISchoolEntity {
    name: string;
    logo: string;
    title: string;
    duration: string;
    credentialLink?: string;
}

export interface ISkill {
    name: string;
    icon: string;
    current?: boolean;
}

// export interface IAward {
//     title: string;
//     issuer: string;
//     location: string;
//     logo: string;
//     description: string;
//     link: string;
//     date: string;
// }

export interface ILanguage {
    name: string;
    level: string;
}

export interface IContact {
    name: string;
    icon: string;
    link: string;
}

export interface IResume {
    introduction: IIntroduction;
    experience: IWork[];
    education: ISchoolEntity[];
    skills: ISkill[];
    // awards: IAward[];
    languages: ILanguage[];
    contact: IContact[];
}

const Resume: IResume = {
    introduction: {
        name: "Syamsul Huda",
        avatar: "./images/avatar.jpg",
        location: "Jakarta, Indonesia",
        description: "Backend Software Engineer with 3+ years of experience developing Golang applications. -- Microservice development and integrations. -- Translating from product requirement to reliable, scalable and robust backend system. -- High Ownership and Data geek person. -- Ease of learning.",
        position: "Backend Software Engineer @tokopedia"
    },
    experience: [
        {
            title: 'Senior Backend Software Engineer',
            company: 'Tokopedia',
            logo: 'https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/73c111d6.png',
            duration: 'July 2021 - Present',
            location: 'Jakarta, Indonesia',
            description: [
                'Develop and maintain Integrator microservice system that used for Product Display Page features',
                'Provide technical leadership in a fast-moving, data-driven environment',
                'Deeply engaged in the Full development lifecycle designing, developing, testing, deploying, maintaining, monitoring, and improving software',
                'Deploy code daily and use data to drive our decisions while delivering software and analytics to consumers and dealers',
                'Convert given high-level software design to low-level software design',
                'Implement unit tests,functional and integration tests',
            ],
            stack: [
                { name: 'Golang', icon: 'https://cdn.svgporn.com/logos/gopher.svg' },
                { name: 'Postgre', icon: 'https://cdn.svgporn.com/logos/postgresql.svg' },
                { name: 'Redis', icon: 'https://cdn.svgporn.com/logos/redis.svg' },
                { name: 'Consul', icon: 'https://cdn.svgporn.com/logos/consul.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
            ]
        },
        {
            title: 'Backend Software Engineer',
            company: 'Tokopedia',
            logo: 'https://assets.tokopedia.net/assets-tokopedia-lite/v2/arael/kratos/73c111d6.png',
            duration: 'October 2018 - June 2021',
            location: 'Jakarta, Indonesia',
            description: [
                'Develop and maintain homepage microservice features on Tokopedia Offcial Store',
                'Develop and maintain internal tools B2C features on Tokopedia Offcial Store',
                'Deeply engaged in the Full development lifecycle designing, developing, testing, deploying, maintaining, monitoring, and improving software',
                'Deploy code daily and use data to drive our decisions while delivering software and analytics to consumers and dealers',
                'Convert given high-level software design to low-level software design',
                'Implement unit tests and functional tests',
            ],
            stack: [
                { name: 'Golang', icon: 'https://cdn.svgporn.com/logos/gopher.svg' },
                { name: 'Postgre', icon: 'https://cdn.svgporn.com/logos/postgresql.svg' },
                { name: 'Redis', icon: 'https://cdn.svgporn.com/logos/redis.svg' },
                { name: 'ElasticSearch', icon: 'https://cdn.svgporn.com/logos/elasticsearch.svg' },
                { name: 'Consul', icon: 'https://cdn.svgporn.com/logos/consul.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
            ]
        },
        {
            title: 'Web Developer Assosiate',
            company: 'PT Epicentrum Mahadaya Komunika',
            logo: 'https://static.thenounproject.com/png/340719-200.png',
            duration: 'February 2018 - August 2018',
            location: 'Jakarta, Indonesia',
            description: [
                'Develop OTA Platform (online travel agent) back-end system with golang.',
                'Assist Full-stack development for an News platform system.',
            ],
            stack: [
                { name: 'Golang', icon: 'https://cdn.svgporn.com/logos/gopher.svg' },
                { name: 'Laravel', icon: 'https://cdn.svgporn.com/logos/laravel.svg' },
                { name: 'MySQL', icon: 'https://cdn.svgporn.com/logos/mysql.svg' },
                { name: 'Redis', icon: 'https://cdn.svgporn.com/logos/redis.svg' },
                { name: 'ElasticSearch', icon: 'https://cdn.svgporn.com/logos/elasticsearch.svg' },
                { name: 'Gitlab', icon: 'https://cdn.svgporn.com/logos/gitlab.svg' },
            ]
        },
    ],
    education: [
        { name: 'Telkom University', logo: 'https://tip.telkomuniversity.ac.id/wp-content/uploads/2022/05/3.-Telkom-University-e1652411289288.png', title: 'Computational Science, Bachelor', duration: '2014 - 2018' },
    ],
    skills: [
        { name: 'Golang', icon: 'https://cdn.svgporn.com/logos/gopher.svg', current: true },
        { name: 'Javascript', icon: 'https://cdn.svgporn.com/logos/javascript.svg', current: false },
        { name: 'Postgre', icon: 'https://cdn.svgporn.com/logos/postgresql.svg', current:true },
        { name: 'Redis', icon: 'https://cdn.svgporn.com/logos/redis.svg', current: true },
        { name: 'ElasticSearch', icon: 'https://cdn.svgporn.com/logos/elasticsearch.svg', current: false },
        { name: 'Reactjs', icon: 'https://cdn.svgporn.com/logos/react.svg', current: false },
        { name: 'GCP', icon: 'https://cdn.svgporn.com/logos/google-cloud.svg', current: true },
        { name: 'AWS', icon: 'https://cdn.svgporn.com/logos/aws.svg', current: false },
        { name: 'Nodejs', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg', current: false },
        { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg', current: true },
        { name: 'Jira', icon: 'https://cdn.svgporn.com/logos/jira.svg', current: true },
        { name: 'HTML5', icon: 'https://cdn.svgporn.com/logos/html-5.svg', current: false },
        { name: 'CSS3', icon: 'https://cdn.svgporn.com/logos/css-3.svg', current: false },
    ],
    // awards: [
        // {
        //     title: 'Prize of excellence Asian Supercomputing Challenge 2018',
        //     logo: 'http://www.asc-events.net/ASC18/img/logo.png',
        //     location: 'CDMX, Mexico',
        //     issuer: '',
        //     description: '',
        //     link: 'http://www.youtube.com/watch?feature=player_embedded&v=QQL9PpvNwRo',
        //     date: 'November 2012'
        // }
    // ],
    languages: [
        {
            name: 'English',
            level: 'Professional working proficiency'
        },
        {
            name: 'Bahasa Indonesia',
            level: 'Native or bilingual proficiency'
        }
    ],
    contact: [
        { name: 'Linkedin', icon: './images/linkedin.png', link: 'https://www.linkedin.com/in/syamsulhudauul/' },
        { name: 'Github', icon: 'https://cdn.svgporn.com/logos/github-icon.svg', link: 'https://github.com/syamsulhudauul' },
        { name: 'Twitter', icon: 'https://cdn.svgporn.com/logos/twitter.svg', link: 'https://twitter.com/syamsulhudauul' },
        { name: 'syamsulhuda.uul@gmail.com', icon: 'https://cdn.svgporn.com/logos/google-gmail.svg', link: 'mailto:syamsulhuda.uul@gmail.com' },
        { name: 'Instagram', icon: 'https://cdn.svgporn.com/logos/instagram-icon.svg', link: 'http://instagram.com/syamsulhudauul' },
    ]
};

export default Resume;