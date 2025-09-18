export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'githubLink',
      title: 'GitHub Link',
      type: 'url',
      description: 'Optional — leave blank if private'
    },
    {
      name: 'liveLink',
      title: 'Live Link',
      type: 'url',
      description: 'Optional — leave blank if no live version'
    }
  ]
}
