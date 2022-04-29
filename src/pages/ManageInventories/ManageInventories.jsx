import { useLiquors } from '../../hooks/useLiquors'

const ManageInventories = () => {
  const { liquors } = useLiquors()

  return (
    <div className='grid grid-cols-3'>
      {liquors.map((liquor) => (
        <img
          key={liquor._id}
          className='bg-blue-100'
          src={liquor?.thumbnail}
          alt=''
        />
      ))}
    </div>
  )
}

export default ManageInventories
