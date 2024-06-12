import { useAuthUser } from "@/contexts/LoginUser";

export const ProfilePreview = () => {
    const photoFilePreview = useAuthUser();
    return <>
        {!photoFilePreview?.photo || photoFilePreview.photo !== null &&
            <section className='bg-gray-50 w-full md:w-3/6 p-7 flex flex-col items-start gap-8 h-4/5 shadow-md' style={{ width: "30rem" }}>
                <h1 className='text-center font-bold text-3xl'>Preview</h1>
                <img
                    src={photoFilePreview?.photo}
                    alt=""
                    className='w-full h-full md:w-2/3 md:h-80 object-cover rounded'

                />
                <h2 className='text-gray-600 font-4xl font-semibold'>{photoFilePreview.name}</h2>
            </section>
        }
    </>
}