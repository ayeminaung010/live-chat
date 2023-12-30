import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref } from 'vue';
import { auth } from '../firebase/config';

const error = ref(null);

const createAccount = async(email,password,displayName) =>{
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        if(!res){
         throw new Error("Could not create user");
        }
        await updateProfile(res.user,{displayName:displayName})
        return res;
     }catch(err){
         error.value = err.message;
     }
}

const useSignUp = () => {
    return {error,createAccount}
}

export default useSignUp;