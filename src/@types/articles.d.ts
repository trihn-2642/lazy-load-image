declare namespace Articles {
  type Source = {
    id: string
    name: string
  }

  type Article = {
    author: string
    content: string
    description: string
    publishedAt: string
    source: Source
    title: string
    url: string
    urlToImage: string
  }
}
