import { groq } from "next-sanity";

export const BLOG_POST_CARD_FRAGMENT = groq`{
    ...,
    title,
    excerpt,
    date,
    author-> {
        ...,
    },
}`;

export const BLOG_INDEX_QUERY = groq`{
    "entries": *[_type == "post"] | order(publishedAt desc) ${BLOG_POST_CARD_FRAGMENT},
}`;
