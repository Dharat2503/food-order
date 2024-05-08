import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
    auth0Id: string;
    email:string;
}
//backend api call and return the new user to backend
export const useCreateMyUser = ()=>{

    const {getAccessTokenSilently} = useAuth0(); //auth0 mathi token destructure kari 


    const createMyUserRequest = async (user: CreateUserRequest)=>{
        //add access token to the request header for the user

        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/user`,{
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if(!response.ok){
            throw new Error('Failed to create user');
        }
    }

    const { 
        mutateAsync : createUser,
         isLoading,
          isError, 
          isSuccess
        } = useMutation (createMyUserRequest)

        return {
            createUser,isError,isLoading,isSuccess
        };
}