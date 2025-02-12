
import { MetadataRoute } from "next";

export default function sitemap() {
    return [
        {
            url: "https://anaclaudiazan.com.br/",
            lastModified: new Date().toISOString(),
        },
        {
            url: "https://www.anaclaudiazan.com.br/#sobre-mim",
            lastModified: new Date().toISOString(),
        },
        {
            url: "https://www.anaclaudiazan.com.br/#clientes",
            lastModified: new Date().toISOString(),
        },
        {
            url: "https://www.anaclaudiazan.com.br/#area-de-atuacao",
            lastModified: new Date().toISOString(),
        },
        {
            url: "https://www.anaclaudiazan.com.br/#artigos",
            lastModified: new Date().toISOString(),
        },
    ];
}