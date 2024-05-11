import { Card } from '../Card'
import './list.scss'

/* eslint-disable react/prop-types */
export const List = ({ posts }) => {
  return (
    <div className='list'>
      {posts.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}
