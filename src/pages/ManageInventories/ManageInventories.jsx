import { useLiquors } from '../../hooks/useLiquors'

const ManageInventories = () => {
  const { liquors } = useLiquors()

  return (
    <div className='flex'>
      {liquors.map((liquor) => (
        <img
          key={liquor._id}
          className='bg-blue-100'
          src={liquor?.banner}
          alt=''
        />
      
      ))}
    </div>
  )
}

export default ManageInventories
