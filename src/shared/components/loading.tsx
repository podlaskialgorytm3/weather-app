import { TailSpin } from 'react-loader-spinner'

export const Loading = ({size}:{size: number}) => {
    return (
        <div className="flex justify-center items-center w-full mt-10">
            <TailSpin
                visible={true}
                height={size}
                width={size}
                color="white"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
}