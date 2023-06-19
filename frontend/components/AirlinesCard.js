import { View, Text, TouchableOpacity, Image } from 'react-native'

const AirlinesCard = ({imgUrl}) => {
  return (
    <TouchableOpacity className='rounded-lg p-1 bg-white mr-3'>
        <Image
            source={imgUrl}
            className='object-cover h-28 w-28 rounded-lg'
        />
    </TouchableOpacity>
  )
}

export default AirlinesCard