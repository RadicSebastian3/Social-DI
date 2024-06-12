import Swal from 'sweetalert2'

import React from 'react'
import { useAuthUser } from '@/contexts/LoginUser'

export const ResetPassword = () => {
    const passwordCtx = useAuthUser();

    const handleWithResetPassword = async () => {

        const { value: email } = await Swal.fire({
            title: "Reset your password",
            input: "email",
            inputLabel: "Enter your email address to validade your identity",
            inputPlaceholder: "Enter your email address"
        });
        if (email) {
            Swal.fire(`Entered email: ${email}`);
            Swal.fire(`Your Password is: ${passwordCtx?.PasswordKey}`)
        }
    }



    return (
        <button onClick={handleWithResetPassword} className='text-gray-700'>
            Did you forgot your password?
        </button>
    )
}
