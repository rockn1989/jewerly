

export interface CatalogPageProps {
  catalogCards: {
    title: string,
    type: string,
    price: number,
    image: string,
    slug: string,
  }[]
}