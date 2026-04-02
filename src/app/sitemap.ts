import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://morska-mila.pl',
            lastModified: new Date(),
        },
        {
            url: 'https://morska-mila.pl/o-nas',
            lastModified: new Date(),
        },
        {
            url: 'https://morska-mila.pl/oferta',
            lastModified: new Date(),
        },
        {
            url: 'https://morska-mila.pl/cennik',
            lastModified: new Date(),
        },
        {
            url: 'https://morska-mila.pl/galeria',
            lastModified: new Date(),
        },
        {
            url: 'https://morska-mila.pl/kopan',
            lastModified: new Date(),
        },
        {
            url: 'https://morska-mila.pl/kontakt',
            lastModified: new Date(),
        },
    ]
}