import Tag from './Tag'

function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </div>
  )
}

export default Tags