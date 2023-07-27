import { Rings } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='Loader'>
            <Rings
                height="250"
                width="250"
                color="#a12fbe"
                radius="6"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="rings-loading"
            />
        </div>
    )
}

export default Loader