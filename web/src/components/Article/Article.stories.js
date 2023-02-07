/*

import Article from './Article'

export const generated = () => {
  return (
    <Article
      article={{
        id: 1,
        title: 'Animal Diversity',
        body: `The world of animals is vast and diverse, with over 1 million known species and countless more waiting to be discovered. From the smallest insects to the largest mammals, animals come in all shapes, sizes, and colors. They play a vital role in maintaining the balance of nature and enrich our lives with their unique behavior and beauty.`,
        createdAt: '2023-02-02T12:34:45Z'
      }}
    />
  )
}



import Article from './Article'

const ARTICLE = {
  id: 1,
  title: 'Animal Diversity:',
  body: `The world of animals is vast and diverse, with over 1 million known species and countless more waiting to be discovered. From the smallest insects to the largest mammals, animals come in all shapes, sizes, and colors. They play a vital role in maintaining the balance of nature and enrich our lives with their unique behavior and beauty.`,
}

export const full = () => {
  return <Article article={ARTICLE} />
}

export const summary = () => {
  return <Article article={ARTICLE} summary={true} />
}

export default { title: 'Components/Article' }
*/
import { Success } from './ArticlesCell'
import { standard } from './ArticlesCell.mock'

export const success = () => {
  return Success ? <Success articles={standard().articles} /> : null
}

export default { title: 'Cells/ArticlesCell' }
