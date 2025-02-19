// import { useCreateMyUser } from "@/api/MyUserApi";
import { Auth0Provider } from "@auth0/auth0-react";

import { AppState, User } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
    children: React.ReactNode;

}

const AuthProvider = ({children}: Props)=>{
    // const {createUser} = useCreateMyUser();
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
    const navigate = useNavigate();
    if(!domain || !clientId || !redirectUri){
        throw new Error("can not use auth");
    }

    const onRedirectCallback = (appState?:AppState,user?:User)=>{
        console.log("USER",user);
        // const token = await getAccessTokenSilently()
        // console.log(token)
    navigate("/auth-callback")
  
    }



    return(
        <Auth0Provider 
        domain={domain}
        clientId= {clientId}
        authorizationParams={{ 
            redirect_uri: redirectUri,
         }}
        onRedirectCallback={onRedirectCallback}
        > {children} </Auth0Provider>
    )
}

export default AuthProvider;

