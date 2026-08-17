export const site = {
  settings: {
    // Language mode: 'ar' = Arabic only, 'en' = English only, 'both' = bilingual.
    languageMode: 'both' as 'ar' | 'en' | 'both',
    // Used when languageMode is 'both'.
    defaultLanguage: 'ar' as 'ar' | 'en',
    // Change this when the website is published on another domain.
    siteUrl: 'https://about.cv'
  },

  profile: {
    name: { ar: 'الاسم الكامل', en: 'Full Name' },
    title: { ar: 'المسمى المهني', en: 'Professional Title' },
    image: '/avatar.png'
  },

  meta: {
    title: {
      ar: 'الاسم الكامل | نبذة عني',
      en: 'Full Name | about.cv'
    },
    description: {
      ar: 'صفحة مهنية شخصية تعرض نبذة مختصرة والخبرات ومعلومات التواصل في تصميم سريع ومتجاوب.',
      en: 'A personal professional profile presenting a concise bio, expertise, and contact information in a fast responsive design.'
    },
    keywords: {
      ar: ['نبذة عني', 'ملف مهني', 'سيرة ذاتية', 'خبرات', 'تواصل'],
      en: ['about me', 'professional profile', 'cv', 'expertise', 'contact']
    }
  },

  about: {
    title: { ar: 'نبذة وخبراتي', en: 'About & Expertise' },
    description: {
      ar: 'اكتب هنا نبذة مهنية مختصرة توضّح خبرتك، مجالك، والقيمة التي تقدمها.',
      en: 'Write a concise professional introduction here describing your experience, field, and the value you provide.'
    }
  },

  expertise: [
    {
      title: { ar: 'مجال الخبرة الأول', en: 'Expertise Area One' },
      description: {
        ar: 'وصف مختصر وواضح لهذا المجال أو التخصص.',
        en: 'A short and clear description of this area or specialty.'
      }
    },
    {
      title: { ar: 'مجال الخبرة الثاني', en: 'Expertise Area Two' },
      description: {
        ar: 'وصف مختصر وواضح لهذا المجال أو التخصص.',
        en: 'A short and clear description of this area or specialty.'
      }
    },
    {
      title: { ar: 'مجال الخبرة الثالث', en: 'Expertise Area Three' },
      description: {
        ar: 'وصف مختصر وواضح لهذا المجال أو التخصص.',
        en: 'A short and clear description of this area or specialty.'
      }
    }
  ],

  navigation: {
    home: { ar: 'الرئيسية', en: 'Home' },
    about: { ar: 'نبذة وخبراتي', en: 'About & Expertise' }
  },

  contactLinks: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/',
    external: 'https://example.com/',
    store: '',
    contact: '',
    email: '',
    facebook: '',
    location: '',
    link: '',
    phone: '',
    telegram: '',
    tiktok: '',
    whatsapp: ''
  }
} as const;

export type SiteLanguage = 'ar' | 'en';
